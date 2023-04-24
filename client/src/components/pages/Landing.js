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
        <h2><img src="logo.png" alt="" /></h2>
        <nav className=''>
        <ul className="header__navigation">
            <li><a href="#">Часто задаваемые вопросы</a></li>
            <li><a href="#">Контакты</a></li>
            <li className='text_orange'><a href="#">Проверить статус заявки</a></li>
            <li><a href="#" className="btn_outline">Связаться</a></li>
          </ul>
 
        </nav>
      </nav>
      <div className='landing-inner'>
        <h1>TrelloClone</h1>
        <p>
          Just like <a href='https://trello.com/'>Trello</a>, but made by just one guy!
        </p>
        <div className='buttons'>
          <Button variant='outlined' color='inherit' href='/register'>
            Sign Up
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Landing;
