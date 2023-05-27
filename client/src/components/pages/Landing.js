import React, { useEffect, useState } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';
import NewRequestModal from '../landing/NewRequestModal';
import CheckStatusModal from '../landing/CheckStatusModal';
import Questions from '../landing/Questions';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const [openNewRequestModal, setOpenRequestModal] = useState(false);
  const [openCheckStatusModal, setCheckStatusModal] = useState(false);
  useEffect(() => {
    document.title = 'MaxBonus';
  }, []);

  const [question1,setQuestion1] = useState(false);

  return (
    <div>
    <section className='landing'>
      <nav className='header'>
        <img src="logo.png" alt="logo" /><h1>MaxBonus</h1>
        <nav className=''>
        <ul className="header__navigation">
            <li><a href="#freq_questions">Часто задаваемые вопросы</a></li>
            <li><a href="#contacts">Контакты</a></li>
            <li className='text_orange'><a href='#' className='pointer' onClick={() => setCheckStatusModal(true)}>Проверить статус заявки</a></li>
            <li><a href="#contacts" className="btn">Связаться</a></li>
          </ul>
 
        </nav>
      </nav>
      <div className='landing__section1 section '>
        <div className="section1__left">
          <h2 className= "section1__header headline">Платформа лояльности и управления потребительским опытом</h2>
          <button onClick={() => setOpenRequestModal(true)} className="btn btn_inner section1__btn pointer">Оставить заявку</button>
        </div>
        
        <div className="section1__right">
        <img src="phone_example.png" alt="phone example" />
      </div>
      </div>

      <div className='landing__section2 section '>
          <h2 className= "section2__header headline" id="freq_questions">Часто задаваемые вопросы</h2>
          <Questions questions={[['Вопрос1','Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis eget consectetur augue. Donec suscipit ex a est fermentum, eget aliquam tortor ullamcorper. Nulla tempor nibh vel commodo lobortis. Duis commodo neque quis tortor porta, ut dictum lorem faucibus. Quisque euismod lacus vitae odio malesuada interdum. Sed interdum, mi fringilla varius mollis, neque dui commodo purus, ac volutpat eros est ut lacus. Aliquam aliquet massa quis ex auctor, in finibus sem pellentesque. Donec posuere metus et metus viverra eleifend. Aliquam erat volutpat. Sed finibus lorem a nisl ullamcorper molestie.'],
          ['Вопрос2','Ответ2'],
          ['Вопрос3','Ответ3'],
          ['Вопрос4','Ответ4'],
          ['Вопрос5','Ответ5']]}/>
      </div>

      <div className='landing__section3 section' id="contacts">
          <h2 className= "section3__header headline email">igorигорь@gmail.com</h2>
          <div className="employee">
          <img src="./assets/igor.png" alt="avatar" className="employee__avatar" />
            <div className="employee__info">
            
              <div className="employee__important">Игорь Игорь</div>
              <div className="employee__status">старший отдел помощи</div>
            </div>
            <div className="employee__important">+7 (999) 999-99-99</div>
            <div className="employee__important">telegram Игоря</div>
          </div>
      </div>
      
    </section>
    <footer className='footer'>
      <div className="footer__info">
      <img src="logo.png" alt="logo" />
      <div className="footer__copyright">
      © Все права защищены
      </div>
      </div>
    </footer>
    <NewRequestModal open={openNewRequestModal} onClose={(e)=>  {if (e.target.className === 'overlay' || e.target.className =='closeRequest'){setOpenRequestModal(false); document.body.style.overflow='visible';}}}/>
    <CheckStatusModal open={openCheckStatusModal} onClose={(e)=> {if (e.target.className === 'overlay' || e.target.className =='closeRequest'){setCheckStatusModal(false); document.body.style.overflow='visible';}}}/>
    </div>
    
  );
};

export default Landing;
