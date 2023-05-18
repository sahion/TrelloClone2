import React from 'react';
import { useState } from 'react';

const checkStatusModal = ({open, onClose}) => {


if (!open) return null;
  return (
    <div className='overlay' onClick={onClose}>
      <div className="checkStatusModal">
        <div className="headerRequestModal">
        <h3 className="requestHeader">Проверка статуса заявки</h3>
        <div className="closeRequest" onClick={onClose}></div>
        </div>
        <div className="requestInputs">
          <input className='requestInput' placeholder='Номер Заявки'></input>
          <button className='btn btn_inner requestBtn'>Проверить статус</button>
        </div>
      </div>
      </div>
  )
}

export default checkStatusModal