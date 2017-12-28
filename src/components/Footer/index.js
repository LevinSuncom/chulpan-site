import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import Modal from 'react-modal';

import './style.css';

class Footer extends Component {
  state = {
    modalIsOpen: false,
    sModalIsOpen: false
  };
  render() {
    return (
      <div className="footer">
        {/* Обратная связь */}
        {/* <Modal isOpen={this.state.modalIsOpen} contentLabel="Modal">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '40px'
            }}>
            <h1 className="mb-20">Заказать звонок</h1>
            <span
              className="bottom-close"
              onClick={() => {
                this.setState({ modalIsOpen: !this.state.modalIsOpen });
              }}>
              x Закрыть
            </span>
            <form action="" className="callback mb-40">
              <label htmlFor="">Номер телефона</label>
              <input
                type="text"
                placeholder="Номер телефона"
                className="mb-12"
              />
              <label htmlFor="">Тема</label>
              <textarea className="mb-12" placeholder="Тема обращения" />
              <label htmlFor="">Желательное время звонка</label>
              <input
                type="text"
                className="mb-32"
                placeholder="Желательно время звонка"
              />
              <button type="submit" className="button">
                Отправить
              </button>
            </form>
          </div>
        </Modal> */}

        <div className="container">
          <div className="row">
            <div className="col-3 footer__navs">
              <span className="footer__headline">Навигация</span>
              <Link to="" className="footer__link">
                OOО Страховая Медицинская Организация «Чулпан&#8209;Мед»
              </Link>
              <Link to="" className="footer__link">
                Лечебно-профилактический центр «Чулпан&#8209;Медицина»
              </Link>
              <Link to="" className="footer__link">
                ООО Страховая компания «Чулпан&#8209;Жизнь»
              </Link>
            </div>
            <div className="col-3 footer__navs">
              <span className="footer__headline">Информация</span>
              <Link to="" className="footer__link">
                Политика о защите персональных данных
              </Link>

              <Link to="" className="footer__link">
                Отчётность
              </Link>
            </div>
            <div className="col-3 footer__navs">
              <span className="footer__headline">Оставайтесь на связи</span>
              <span
                className="footer__link"
                onClick={() => {
                  this.setState({ modalIsOpen: !this.state.modalIsOpen });
                }}
                style={{ cursor: 'pointer' }}>
                Заказать звонок
              </span>
              <span
                className="footer__link"
                onClick={() => {
                  this.setState({ sModalIsOpen: !this.state.sModalIsOpen });
                }}
                style={{ cursor: 'pointer' }}>
                Обратная связь
              </span>
              <Link to="" className="footer__link">
                +8 800 000 00 00
              </Link>
              <Link to="" className="footer__link">
                mail@chulpan.ru
              </Link>
            </div>
            <div className="col-3 footer__navs">
              <span className="footer__headline">О компании</span>
              <Link to="/about/heads" className="footer__link">
                Руководство
              </Link>

              {/* <Link to="" className="footer__link">
                История
              </Link> */}
            </div>
          </div>
          <hr className="mb-12 footer__hr" />
          <p className="footer__caption">
            © 2017 Страхования компания «Чулпан». <br />
            Все права защищены.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
