import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Modal from 'react-modal';
import axios from 'axios';
import MaskedInput from 'react-input-mask';

import FileInput from '../FileInput'

import './style.css';

let file = null;

const modalStyle = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    //height: heightPx,  // set height
    left: '35%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '10%', // start from center
    //transform: 'translate(-50%,-' + offsetPx + ')', // adjust top "up" based on height
    width: '450px'
    //maxWidth: '40rem'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(235, 235, 235, 0.75)',
    zIndex: '99' 
  },
};

const modalAnswerStyle = {
  content: {
    border: '0',
    borderRadius: '4px',
    bottom: 'auto',
    //height: heightPx,  // set height
    left: '35%',
    padding: '2rem',
    position: 'fixed',
    right: 'auto',
    top: '35%', // start from center
    //transform: 'translate(-50%,-' + offsetPx + ')', // adjust top "up" based on height
    width: '450px',
    //maxWidth: '40rem'
  },
  overlay: {
    position: 'fixed',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(235, 235, 235, 0.75)'
  },
};

const CloseButton = () => (<button>Close modal</button>);

class Footer extends Component {
  state = {
    modalIsOpen: false,
    feedbackModalIsOpen: false,
    answerIsOpen: false,
    phone: '',
    region: '',
    theme: '',
    hoursFrom: '',
    hoursTo: '',
    feedbackFio: '',
    feedbackPhone: '',
    feedbackEmail: '',
    feedbackTheme: '',
    feedbackContent: '',
    feedbackAttachment: null,
    feedbackAttachmentDisplayFileName: '',
    feedbackAttachmentVisible: false,
    feedbackContentVisible: true,
    regions: [
      {
        code: '',
        title: ''
      }],
    hours: [
      {
        id: '',
        value: ''
      }
    ],
    feedbackThemes: [
      {
        id: '',
        name: ''
      }
    ]
  };

  componentDidMount() {
    const url1 =
      'http://chulpan.ru/Portal/Address/GetCountryRegions';
    axios.get(url1).then(responce => {
      const value = responce.data;
      this.setState({ regions: value, region: '1600000000000' });
    });
    const url2 =
      'http://chulpan.ru/Portal/Feedback/GetHours';
    axios.get(url2).then(responce => {
      const value = responce.data;
      this.setState({ hours: value, hoursFrom: value[8].id, hoursTo: value[17].id });
    });
    const url3 =
      'http://chulpan.ru/Portal/Feedback/GetThemes';
    axios.get(url3).then(responce => {
      const value = responce.data;
      this.setState({ feedbackThemes: value, feedbackTheme: value[0].id });
    });

  }
  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    if (name === 'hoursFrom') {
      this.setState({
        [name]: value
      });  
    } else
    if (name === 'feedbackTheme') {
      this.setState({ feedbackAttachmentVisible: value == 2 })
      this.setState({ feedbackContentVisible: value != 2 })
      this.setState({
        [name]: value
      });  
    }
    else if (name === 'feedbackAttachment') {
      if (value.lastIndexOf('\\')){
        var i = value.lastIndexOf('\\')+1;
      }
      else{
        var i = value.lastIndexOf('/')+1;
      }						
      var filename = value.slice(i);
      this.setState({feedbackAttachmentDisplayFileName: filename});
      this.state.feedbackAttachment = new File([event.target.files[0]], event.target.files[0].name)
      file = new File([event.target.files[0]], event.target.files[0].name)
    }
    else {
      this.setState({
        [name]: value
      });  
    }

    this.setState({
      [name]: value
    });
  };

  onCallbackSubmit = event => {
    const { phone, region, theme, hoursFrom, hoursTo } = this.state;
    event.preventDefault();

    this.setState({
      error: ''
    });

    const url = 'http://chulpan.ru/Portal/Feedback/Callback';
    axios
      .post(url, {
        phone: phone,
        region: region,
        theme: theme,
        hoursFrom: hoursFrom,
        hoursTo: hoursTo
      })
      .then(responce => {
        console.log(responce);
        const data = responce.data;
        if (data.error !== '') {
          this.setState({ error: data.error, buttons: false });
        } else {
          this.setState({
            error: '',
            price: data.fee,
            buttons: true,
            guid: data.guid
          });
        }
      })
      .catch(() => { });
    this.setState({ answerIsOpen: true, modalIsOpen: false });
  };

  onFeedbackSubmit = event => {
    const { feedbackFio, feedbackPhone, feedbackEmail, feedbackTheme, feedbackContent, feedbackAttachment } = this.state;
    event.preventDefault();

    this.setState({
      error: ''
    });

    const url = 'http://chulpan.ru/Portal/Feedback/Feedback';
    var config = {};
    const formData = new FormData();
    formData.append('fio',feedbackFio);
    formData.append('phone',feedbackPhone);
    formData.append('email',feedbackEmail);
    formData.append('theme',feedbackTheme);
    formData.append('content',feedbackContent);
    if (this.state.feedbackTheme == 2)
    {
      config = {
        headers: {
            'Content-Type': 'multipart/form-data'
        }
      };
      formData.append('file', file);
    }
    axios
      .post(url, formData, config)
      .then(responce => {
        console.log(responce);
        const data = responce.data;
        if (data.error !== '') {
          this.setState({ error: data.error, buttons: false });
        } else {
          this.setState({
            error: ''
          });
        }
      })
      .catch(() => { });
    this.setState({ answerIsOpen: true, feedbackModalIsOpen: false });
  };


  render() {
    return (
      <div className="footer">
        {/* Обратная связь */}
        <Modal style={modalStyle} isOpen={this.state.modalIsOpen} contentLabel="Modal">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
              //marginTop: '40px'
            }}>
            <h1 className="mb-20">Заказать звонок</h1>
            <form action="" className="callback mb-40" ref="uploadForm" onSubmit={this.onCallbackSubmit}>
              <label htmlFor="">Номер телефона</label>

              <MaskedInput
                type="text"
                name="phone"
                onChange={this.onChange}
                placeholder="Номер телефона"
                className="mb-12"
                mask="+7 (999) 999-99-99"
                required
              />
              <label htmlFor="">Регион</label>
              <select
                name="region"
                onChange={this.onChange}
                id=""
                value={this.state.region}
                className="mb-12">
                {this.state.regions.map(item => {
                  return (
                    <option value={item.code}>{`${item.title}`}</option>
                  );
                })}
              </select>

              <label htmlFor="">Тема</label>
              <input
                type="text"
                className="mb-12"
                placeholder="Тема"
                name="theme"
                onChange={this.onChange} 
                required/>
              <label htmlFor="">Желательное время звонка</label>
              <div style={{ alignSelf: 'left' }}>
                C:&nbsp;
                <select
                  name="hoursFrom"
                  id=""
                  value={this.state.hoursFrom}
                  onChange={this.onChange}
                  className="mb-12">
                  {this.state.hours.map(item => {
                    return (
                      <option value={item.id}>{`${item.value}`}</option>
                    );
                  })}
                </select>
                &nbsp;до:&nbsp;
                <select
                  name="hoursTo"
                  id=""
                  value={this.state.hoursTo}
                  onChange={this.onChange}
                  className="mb-12">
                  {this.state.hours.map(item => {
                    return (
                      <option value={item.id}>{`${item.value}`}</option>
                    );
                  })}
                </select>
              </div>
              <div style={{ alignSelf: 'center' }}>
                <button type="submit" className="button" style={{ marginRight: '8px' }}>
                  Отправить
              </button>
                <button className="button" style={{ marginLeft: '8px' }} onClick={() => { this.setState({ modalIsOpen: !this.state.modalIsOpen }) }}>
                  Закрыть
              </button>
              </div>
            </form>
          </div>
        </Modal>

        <Modal style={modalStyle} isOpen={this.state.feedbackModalIsOpen} contentLabel="Modal">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
              //marginTop: '40px'
            }}>
            <h1 className="mb-20">Обратная связь</h1>
            <form action="" className="callback mb-40" onSubmit={this.onFeedbackSubmit}>
              <label htmlFor="">ФИО</label>
              <input
                type="text"
                name="feedbackFio"
                onChange={this.onChange}
                placeholder="ФИО"
                className="mb-12"
                required
              />
              <label htmlFor="">Номер телефона</label>
              {/* <InputMask */}
              <MaskedInput
                type="text"
                name="feedbackPhone"
                onChange={this.onChange}
                placeholder="Номер телефона"
                className="mb-12"
                mask="+7 (999) 999-99-99"
                required
              />
              <label htmlFor="">E-mail</label>
              <input
                type="email"
                placeholder="email@example.com"
                name="feedbackEmail"
                onChange={this.onChange}
                className="mb-12" 
                required/>
              <label htmlFor="">Тема</label>
              <select
                name="feedbackTheme"
                onChange={this.onChange}
                id=""
                value={this.state.feedbackTheme}
                className="mb-12">
                {/* this.state.feedbackThemes.map(item => {
                  return (
                    <option value={item.id}>{`${item.name}`}</option>
                  );
                }) */}
                <option value="1">Предложение</option>
                <option value="2">Заявление</option>
                <option value="3">Жалоба</option>
                <option value="4">Вопрос по страхованию</option>
              </select>
              {this.state.feedbackContentVisible && (<label htmlFor="">Содержание</label>)}
              {this.state.feedbackContentVisible && (<input
                type="text"
                name="feedbackContent"
                onChange={this.onChange}
                placeholder="Содержание"
                className="mb-12"
              />)}

              {this.state.feedbackAttachmentVisible && (<label htmlFor="">Вложения</label>)}
              {this.state.feedbackAttachmentVisible && (
/*                 <div className="attachment" >
                  <input
                    type="file"
                    name="feedbackAttachment"
                    onChange={this.onChange}
                    placeholder="Вложение"
                    className="mb-12"
                    style={{ opacity: 0, overflow: 'hidden' }}
                  />
                  Выбрать файл для загрузки
              </div> */
              <div class="fileform">
              <div id="fileformlabel">{this.state.feedbackAttachmentDisplayFileName}</div>
              <div class="selectbutton">Обзор</div>
              <input id="upload" name='feedbackAttachment' type="file" onChange={this.onChange}/>
              </div>
            )}

              <div style={{ alignSelf: 'center' }}>
                <button type="submit" className="button" style={{ marginRight: '8px' }}>
                  Отправить
              </button>
                <button className="button" style={{ marginLeft: '8px' }} onClick={() => { this.setState({ feedbackModalIsOpen: !this.state.feedbackModalIsOpen }) }}>
                  Закрыть
              </button>
              </div>
            </form>
          </div>
        </Modal>

        <Modal style={modalAnswerStyle} isOpen={this.state.answerIsOpen} contentLabel="Modal">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center'
              //marginTop: '40px'
            }}>
            <h1 className="mb-20">Обращение принято!</h1>
            Спасибо, Ваше обращене принято. По результатам рассмотрения мы свяжемся в Вами
              <div style={{ alignSelf: 'center' }}>
              <button className="button" onClick={() => { this.setState({ answerIsOpen: !this.state.answerIsOpen }) }}>
                Закрыть
              </button>
            </div>
          </div>
        </Modal>

        <div className="container">
          <div className="row">
            <div className="col-3 footer__navs">
              <span className="footer__headline">Навигация</span>
              <a href="http://чулпан-мед.рф" className="footer__link">
                OOО Страховая Медицинская Организация «Чулпан&#8209;Мед»
              </a>
              <a href="http://чулпан-медицина.рф" className="footer__link">
                Лечебно-профилактический центр «Чулпан&#8209;Медицина»
              </a>
              <a href="http://чулпан-жизнь.рф" className="footer__link">
                ООО Страховая компания «Чулпан&#8209;Жизнь»
              </a>
            </div>
            <div className="col-3 footer__navs">
              <span className="footer__headline">Информация</span>
              <Link to="/about/personalDataProtection" className="footer__link">
                Политика о защите персональных данных
              </Link>

              <Link to="/about/consolidatedReport" className="footer__link">
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
                  this.setState({ feedbackModalIsOpen: !this.state.feedbackModalIsOpen });
                }}
                style={{ cursor: 'pointer' }}>
                Обратная связь
              </span>
              <a href="tel:+78007004490" className="footer__link">
                8 800 700 44 90
              </a>
              <a href="mailto:mail@chulpan.ru" className="footer__link">
                mail@chulpan.ru
              </a>
            </div>
            <div className="col-3 footer__navs">
              <span className="footer__headline">О компании</span>
              <Link to="/about/contacts" className="footer__link">
                Контакты
              </Link>
              <Link to="/about/heads" className="footer__link">
                Руководство
              </Link>
              <Link to="/about/aboutCompany" className="footer__link">
                Информация о компании
              </Link>

              {/* <Link to="" className="footer__link">
                История
              </Link> */}
            </div>
          </div>
          <hr className="mb-12 footer__hr" />
          <p className="footer__caption">
            © 2018 Страхования компания «Чулпан». <br />
            Все права защищены.
          </p>
        </div>
      </div>
    );
  }
}

export default Footer;
