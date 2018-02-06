import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import carIcon from './car.svg'

import './style.css';

const CarIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const HomeIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const TravelIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const HealthIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M12 2c1.1 0 2 .9 2 2s-.9 2-2 2-2-.9-2-2 .9-2 2-2zm9 7h-6v13h-2v-6h-2v6H9V9H3V7h18v2z" />
    </svg>
  );
};

const MortgageIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M21 18v1c0 1.1-.9 2-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14c1.1 0 2 .9 2 2v1h-9a2 2 0 0 0-2 2v8a2 2 0 0 0 2 2h9zm-9-2h10V8H12v8zm4-2.5c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5z" />
    </svg>
  );
};

const EnterpriseIcon = () => {
  return (
    <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
    </svg>
  );
};

class Options extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          <div className="option">
            <div className="option__badge">
              <CarIcon />
              <p>Автомобиль</p>
            </div>
            <div className="option__dropdown">
              <Link
                to="/services/individuals/transport/kasko"
                className="option__link">
                КАСКО
              </Link>
              <Link
                to="/services/individuals/transport/kasko2"
                className="option__link">
                КАСКО до 1-го случая
              </Link>
              <Link
                to="/services/individuals/transport/kasko50"
                className="option__link">
                КАСКО 50
              </Link>
              <Link
                to="/services/individuals/transport/osago"
                className="option__link">
                ОСАГО
              </Link>
              <Link
                to="/services/individuals/transport/eosago"
                className="option__link">
                е-ОСАГО
              </Link>
              <Link
                to="/services/individuals/transport/voluntary"
                className="option__link">
                Добровольная автогражданка
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="option">
            <div className="option__badge">
              <HomeIcon />
              <p>Жильё</p>
            </div>
            <div className="option__dropdown">
              <Link
                to="/services/individuals/property/estate/about"
                className="option__link">
                Имущество
              </Link>
              <Link
                to="/services/individuals/property/combined/about"
                className="option__link">
                Комбинированное
              </Link>
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="option">
            <Link
              to="/services/individuals/travel/abroad"
              className="option__badge">
              <TravelIcon />
              <p>Путешествия</p>
            </Link>
          </div>
        </div>
        <div className="col-2">
          <div className="option">
            <Link
              to="/services/individuals/health/accidents/about"
              className="option__badge">
              <HealthIcon />
              <p>Здоровье</p>
            </Link>
          </div>
        </div>
        <div className="col-2">
          <div className="option">
            <Link to="/services/individuals/mortgage" className="option__badge">
              <MortgageIcon />
              <p>Ипотека</p>
            </Link>
          </div>
        </div>
        <div className="col-2">
          <div className="option">
            <Link to="/services/enterprise" className="option__badge">
              <EnterpriseIcon />
              <p>Корпоративным клиентам</p>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Options;
