import React, { Component } from 'react';
import { Link, NavLink } from 'react-router-dom';
import locationIcon from './location.svg';
import chulpanLogo from './logo.svg';

class Header extends Component {
  state = {};
  render() {
    return (
      <header className="main-header">
        <div className="container">
          <div className="main-header__content">
            <Link to="/">
              <img src={chulpanLogo} className="w-90 mr-20" alt="Логотип" />
            </Link>
            {/* <div className="main-header__info">
              <i className="material-icons fs-12 mr-4">location_on</i>
              Казань<br />
              +8 800 000 00 00
            </div> */}
            {/* <div>
            <span>Страховая компания</span>
            <span>Чулпан</span>
            </div> */}
            {/* <nav className="mx-auto">
              <NavLink
                to="/main"
                className="main-header__link mr-20"
                activeClassName="main-header__link_active">
                Главная
              </NavLink>
              <NavLink
                to="/individuals"
                className="main-header__link mr-20"
                activeClassName="main-header__link_active">
                Частным клиентам
              </NavLink>
              <NavLink
                to="/enterprise"
                className="main-header__link mr-20"
                activeClassName="main-header__link_active">
                Корпоративным клиентам
              </NavLink>
              <NavLink
                to="/about"
                className="main-header__link mr-20"
                activeClassName="main-header__link_active">
                О компании
              </NavLink>
            </nav> */}
            <NavLink to="/" className="button ml-auto">
              Личный кабинет
            </NavLink>
          </div>
        </div>
      </header>
    );
  }
}

export default Header;
