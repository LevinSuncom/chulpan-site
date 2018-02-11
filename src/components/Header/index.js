import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import chulpanLogo from './logo.svg';

import './style.css';

const LocationIcon = () => {
  return (
    <svg
      className="carousel__left-arrow ml-auto"
      fill="#0095D6"
      height="12"
      viewBox="0 0 24 24"
      width="12"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0V0z" fill="none" />
      <path d="M21 3L3 10.53v.98l6.84 2.65L12.48 21h.98L21 3z" />
    </svg>
  );
};
const Header = () => {
  return (
    <header className="header">
      <div className="container">
        <div className="header__content">
          <Link to="/">
            <img src={chulpanLogo} className="w-90 mr-20" alt="Логотип" />
          </Link>
          {/* <div className="main-header__info">
              <i className="material-icons fs-12 mr-4">location_on</i>
              Казань<br />
              8 800 700 44 90
            </div> */}
          <div>
            <span
              style={{
                fontFamily: 'Segoe UI',
                textTransform: 'uppercase',
                fontSize: '16px',
                color: '#0095D6'
              }}>
              Страховая компания Чулпан
            </span>{' '}
            <br />
            <span
              style={{
                fontFamily: 'Mistral',
                paddingLeft: '20px',
                color: '#666666'
              }}>
              Рядом в трудную минуту
            </span>
          </div>
          {/* <nav className="mx-auto">
             
    
            </nav> */}
          <LocationIcon className="" />
          <span
            style={{ fontSize: '12px', color: '#666666', paddingLeft: '8px' }}>
            Альметьевск
          </span>
          <span
            style={{
              color: '#666666',
              paddingLeft: '40px',
              paddingRight: '40px'
            }}>
            8 800 700 44 90
          </span>
          <a href="http://chulpan.ru/Portal/Selfcare/LogIn" className="button ">
            Личный кабинет
          </a>
        </div>
      </div>
    </header>
  );
};

export default Header;
