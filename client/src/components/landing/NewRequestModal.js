import React from 'react';
import { useState } from 'react';

const NewRequestModal = ({open, onClose}) => {

  const [reasons, setReasons] = useState([]);

  const fetchReasonsData = () => {
    fetch("https://help-maxbonus.ru/api/reason")
      .then(response => {
        
        return response.json();
       
      })
      .then(data => {
        setReasons(data.reason);
      })
  }
 (reasons.length === 0) ? fetchReasonsData() : 0;

if (!open) return null;
  return (
    <div className='overlay' onClick={onClose} >
      <div className="newRequestModal">
        <div className="headerRequestModal">
        <h3 className="requestHeader">Оформить заявку</h3>
        <div className="closeRequest" onClick={onClose}></div>
        </div>
        <div className="requestInputs">
          <input className='requestInput' placeholder='Имя'></input>
          <input className='requestInput' placeholder='+7 (999) 999-99-99'></input>
          <input className='requestInput' placeholder='Электронная почта'></input>
          <input className='requestInput' placeholder='Название компании'></input>
          <select name="select" className='requestInput' placeholder='Причина обращения'>
            <option selected="true" disabled="disabled">Причина обращения:</option>
            {reasons.map(r =>  <option>{r.nameReason}</option>)}
          </select>
          <textarea className='requestInput requestInput_description' placeholder='Описание проблемы'></textarea>
          <button className='btn btn_inner requestBtn'>Оставить заявку</button>
        </div>
      </div>
      </div>
  )
}

export default NewRequestModal