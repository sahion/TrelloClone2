import React, { useEffect } from 'react';
import { Button } from '@material-ui/core';
import { Redirect } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Landing = () => {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  useEffect(() => {
    document.title = 'TrelloClone';
  }, []);

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <section className='landing'>
      <nav className='header'>
        <img src="logo.png" alt="logo" /><h1>MaxBonus</h1>
        <nav className=''>
        <ul className="header__navigation">
            <li><a href="#">Часто задаваемые вопросы</a></li>
            <li><a href="#">Контакты</a></li>
            <li className='text_orange'><a href="#">Проверить статус заявки</a></li>
            <li><a href="#" className="btn">Связаться</a></li>
          </ul>
 
        </nav>
      </nav>
      <div className='landing__section1 section '>
        <div className="section1__left">
          <h2 className= "section1__header headline">Платформа лояльности и управления потребительским опытом</h2>
          <a href="#" className="btn btn_inner section1__btn">Оставить заявку</a>
        </div>
        <div className="section1__right">
        <img src="phone_example.png" alt="phone example" />
      </div>
      </div>

      <div className='landing__section2 section '>
          <h2 className= "section2__header headline">Часто задаваемые вопросы</h2>
          <div className="questions">
            <div className="quest">
              <div className="quest__text">Вопрос</div>
              <div className="quest__icon"></div>
            </div>
            <div className="quest">
              <div className="quest__text">Вопрос</div>
              <div className="quest__icon"></div>
            </div>
            <div className="quest">
              <div className="quest__text">Вопрос</div>
              <div className="quest__icon"></div>
            </div>
            <div className="quest">
              <div className="quest__text">Вопрос</div>
              <div className="quest__icon quest__icon_active"></div>
            </div>
            <div className="quest">
              <div className="quest__text">Вопрос</div>
              <div className="quest__icon"></div>
            </div>
          </div>
      </div>
      
    </section>
  );
};

export default Landing;
