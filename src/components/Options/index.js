import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import carIcon from './car.svg'

import './style.css';

class Options extends Component {
  render() {
    return (
      <div className="row">
        <div className="col-2">
          {/* <Link to=""> */}
          <div className="option">
            <Link to="/services/individuals/transport" style={{ zIndex: 1 }}>
              <i className="material-icons option__icon">directions_car</i>
              <div className="option__name">Автомобиль</div>
            </Link>
            {/* <span className="option__caption">КАСКО, ОСАГО</span> */}
            <div className="option__dropdown">
              <Link
                to="/services/individuals/transport/kasko"
                className="option__link">
                КАСКО
              </Link>
              <Link
                to="/services/individuals/transport/osago"
                className="option__link">
                ОСАГО
              </Link>
              <Link
                to="/services/individuals/transport/eosago"
                className="option__link">
                еОСАГО
              </Link>
              {/* <Link to="/individuals/dago" className="option__link">
                ДАГО
              </Link> */}
            </div>
          </div>
        </div>
        <div className="col-2">
          <div className="option">
            <Link to="/services/individuals/property" style={{ zIndex: 1 }}>
              <i className="material-icons option__icon">home</i>
              <div className="option__name">Жильё</div>
            </Link>
            {/* <span className="option__caption">Ипотека, дом, квартира</span> */}
            <div className="option__dropdown">
              <Link to="/services/individuals/property/estate/about" className="option__link">
                Имущество
              </Link>
              <Link to="/services/individuals/property/combined/about" className="option__link">
                Комплексное
              </Link>
              {/* <Link to="/individuals/osago" className="option__link">
                Эконом-страхование
              </Link>
              <Link to="/individuals/osago" className="option__link">
                Экспресс-страхование
              </Link> */}
            </div>
          </div>
        </div>
        <div className="col-2">
          <Link
            to="/services/individuals/travel"
            className="option option_no-dropdown">
            <i className="material-icons option__icon">airplanemode_active</i>
            <div className="option__name">Путешествия</div>
            {/* <span className="option__caption">ВЗР, Зелёная карта</span> */}
            {/* <div className="option__dropdown">
              <Link to="/individuals/osago" className="option__link">КАСКО</Link>
              <Link to="/individuals/osago" className="option__link">ОСАГО</Link>
              <Link to="/individuals/osago" className="option__link">ДАГО</Link>
            </div> */}
          </Link>
        </div>
        <div className="col-2">
          <Link
            to="/services/individuals/health"
            className="option option_no-dropdown">
            <i className="material-icons option__icon">accessibility</i>
            <div className="option__name">Здоровье</div>
            {/* <span className="option__caption">Личное, защита здоровья</span> */}
            {/* <div className="option__dropdown">
              <Link to="/individuals/osago" className="option__link">
                КАСКО
              </Link>
              <Link to="/individuals/osago" className="option__link">
                ОСАГО
              </Link>
              <Link to="/individuals/osago" className="option__link">
                ДАГО
              </Link>
            </div> */}
          </Link>
        </div>
        <div className="col-2">
          <Link to="/services/individuals/mortgage" className="option">
            <i className="material-icons option__icon">
              account_balance_wallet
            </i>
            <div className="option__name">Ипотека</div>
            {/* <span className="option__caption"></span> */}
            {/* <div className="option__dropdown">
              <Link to="/individuals/osago" className="option__link">
                Страхование жизни
              </Link>
              <Link to="/individuals/osago" className="option__link">
                Страхование имущества
              </Link>
              <Link to="/individuals/osago" className="option__link">
                Полный пакет рисков
              </Link>
            </div> */}
          </Link>
        </div>
        <div className="col-2">
          <div className="option">
            {/* <Link to="/services/individuals/enterprice" style={ {zIndex: 1}}> */}
            <i className="material-icons option__icon">account_balance</i>
            <div className="option__name">Корпоративным клиентам</div>
            {/* </Link> */}

            {/* <div className="option__dropdown">
   
              <Link to="/enterprise/vzr" className="option__link">
                ВЗР
              </Link>
              <Link to="/enterprise/dms" className="option__link">
                ДМС
              </Link>
              <Link to="/enterprise/nsg" className="option__link">
                НСГ
              </Link>
            </div> */}
          </div>
        </div>
      </div>
    );
  }
}

export default Options;
