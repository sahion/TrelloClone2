import React, { Fragment, useRef, useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import PropTypes from 'prop-types';
import { Draggable } from 'react-beautiful-dnd';
import { getCard, editCard } from '../../actions/board';

import CardMUI from '@material-ui/core/Card';
import EditIcon from '@material-ui/icons/Edit';
import CloseIcon from '@material-ui/icons/Close';
import SubjectIcon from '@material-ui/icons/Subject';
import { TextField, CardContent, Button, Avatar, Tooltip } from '@material-ui/core';
import CardModal from './CardModal';

const Card = ({ cardId, list, index }) => {
  const [editing, setEditing] = useState(false);
  const [openModal, setOpenModal] = useState(false);
  const [mouseOver, setMouseOver] = useState(false);
  const [title, setTitle] = useState('');
  const [height, setHeight] = useState(0);
  const cardRef = useRef(null);
  const card = useSelector((state) =>
    state.board.board.cardObjects.find((object) => object._id === cardId)
  );
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCard(cardId));
  }, [cardId, dispatch]);

  useEffect(() => {
    card && setTitle(card.title);
  }, [card]);

  useEffect(() => {
    cardRef && cardRef.current && setHeight(cardRef.current.clientHeight);
  }, [list, card, cardRef]);

  const onSubmitEdit = async (e) => {
    e.preventDefault();
    dispatch(editCard(cardId, { title }));
    setEditing(false);
    setMouseOver(false);
  };

  return !card || (card && card.archived) ? (
    ''
  ) : (
    <Fragment>
      <CardModal
        cardId={cardId}
        open={openModal}
        setOpen={setOpenModal}
        card={card}
        list={list}
      />
      <Draggable draggableId={cardId} index={index}>
        {(provided) => (
          <CardMUI
            className={`card ${mouseOver && !editing ? 'mouse-over' : ''}`}
            onMouseOver={() => setMouseOver(true)}
            onMouseLeave={() => setMouseOver(false)}
            ref={provided.innerRef}
            {...provided.draggableProps}
            {...provided.dragHandleProps}
          >
            {mouseOver && !editing && (
              <Button
                style={{
                  position: 'absolute',
                  bottom: height - 40,
                  left: '180px',
                  zIndex: 1,
                }}
                onClick={() => setEditing(true)}
              >
                <EditIcon fontSize='small' />
              </Button>
            )}
            {!editing ? (
              <CardContent
                onClick={() => {
                  setOpenModal(true);
                  setMouseOver(false);
                }}
                ref={cardRef}
              >
                {card.label && card.label !== 'none' && (
                  <div className='card-label' style={{ backgroundColor: card.label }} />
                )}
                <p>{card.title}</p>
                <div className='card-bottom'>
                  <div>
                    {card.description && (
                      <SubjectIcon className='description-indicator' fontSize='small' />
                    )}
                  </div>
                  <div className='card-member-avatars'>
                    {card.members.map((member) => {
                      let initials = member.name.match(/\b\w/g) || [];
                      initials = (
                        (initials.shift() || '') + (initials.pop() || '')
                      ).toUpperCase();
                      return (
                        <Tooltip title={member.name} key={member.user}>
                          <Avatar className='avatar'>{initials}</Avatar>
                        </Tooltip>
                      );
                    })}
                  </div>
                </div>
              </CardContent>
            ) : (
              <CardContent className='create-card-form'>
                <form onSubmit={(e) => onSubmitEdit(e)}>
                  <TextField
                    margin='normal'
                    fullWidth
                    multiline
                    required
                    label="Edit this card's title"
                    autoFocus
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                  />
                  <div>
                    <Button type='submit' variant='contained' color='primary'>
                      Save
                    </Button>
                    <Button
                      onClick={() => {
                        setEditing(false);
                        setMouseOver(false);
                        setTitle(card.title);
                      }}
                    >
                      <CloseIcon />
                    </Button>
                  </div>
                </form>
              </CardContent>
            )}
          </CardMUI>
        )}
      </Draggable>
    </Fragment>
  );
};

Card.propTypes = {
  cardId: PropTypes.string.isRequired,
  list: PropTypes.object.isRequired,
  index: PropTypes.number.isRequired,
};

export default Card;
