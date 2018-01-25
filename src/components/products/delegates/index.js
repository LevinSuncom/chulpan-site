import React from 'react';

import { Link } from 'react-router-dom';
// import Breadcrumbs from '../../App/Breadcrumbs';

import image from './image.jpg';

// const imgStyle = {
//   width: '100%',
//   height: '260px',
//   backgroundImage: `url(${IndividualsImage})`,
//   borderRadius: '4px',
//   backgroundSize: 'cover',
//   backgroundPositionY: 'top',
//   marginBottom: '12px'
// };

const Delegates = () => {
  return (
    <div>
      {/*<div className="quick-icons mb-20">
        <Link to="osago" className="quick-icon">
          <i className="material-icons">directions_car</i>
          <p className="quick-icon__text">Автомобиль</p>
        </Link>
        <Link to="mortgage" className="quick-icon">
          <i className="material-icons">home</i>
          <p className="quick-icon__text">Жилье</p>
        </Link>
        <Link to="travel" className="quick-icon">
          <i className="material-icons">airplanemode_active</i>
          <p className="quick-icon__text">Путешествия</p>
        </Link>
        <Link to="property" className="quick-icon">
          <i className="material-icons">account_balance_wallet</i>
          <p className="quick-icon__text">Имущество</p>
        </Link>

        <Link to="accident" className="quick-icon">
          <i className="material-icons">accessibility</i>
          <p className="quick-icon__text">Здоровье</p>
        </Link>
      </div>*/}
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Филиалы и представительства</h1>

      <img src={image} className="product-image" alt="" />
      <p>
        <b>Головной офис</b>
      </p>
      <p>
        423450 г. Альметьевск, ул. Пушкина, д.66, пом.1, тел.(8553) 30-44-90, факс 30-44-97
      </p>
      <br />
      <p>
        <b>Дополнительный офис</b>
      </p>
      <p>
        423450 г.Альметьевск, ул.Чернышевского, д.1, (8553) 30-44-50
      </p>
      <br />
      <p>
        <b>Филиалы</b>
      </p>
      <p>
        423300 г. Азнакаево, ул. Ленина, 2-а, (85592) 7-37-62; 7-39-29; 7-41-17
      </p>
      <p>
        423930 г. Бавлы, ул. Пушкина, 27  (85569) 4-60-26; 4-60-25; 5-23-82
        </p>
      <p>
        423230 г. Бугульма, ул. Джалиля, 22, (85594) 7-12-15; 7-18-44, 7-18-43
        </p>
      <p>
        423368 Сармановский р-н, п.Джалиль, ул.Ахмадиева,12, (85559) 30-875, 30-399
        </p>
      <p>
        423630 г. Елабуга, пр. Нефтяников 60А, (85557)  7-21-87, 7-18-61,
        </p>
      <p>
        423520 г. Заинск, пр. Нефтяников, 37, (85558) 5-01-21, 5-01-22, факс 5-00-13
        </p>
      <p>
        420015 г. Казань, ул. К.Маркса, 49/13, (843) 291-53-91
        </p>
      <p>
        423250 г. Лениногорск, ул. Ленина, 7, (85595) 5-35-36; 5-03-97
        </p>
      <p>
        123104, г. Москва, Тверской бульвар д.17 стр.1, офис 17, (495) 933-73-30
        </p>
      <p>
        423800 г. Набережные Челны, пр. Мира 40(6/05), (8552)306-086
        </p>
      <p>
        423570 г. Нижнекамск, ул. Кайманова, 1, (8555) 430-130
        </p>
      <p>
        423040 г. Нурлат, ул. Советская, д.193, (84345) 2-72-10, 2-72-22
        </p>
      <p>
        194156 г. Санкт-Петербург, пр.Пархоменко, д.12, (812) 550-01-49
        </p>
      <p>
        428000 г. Чебоксары, ул.К.Маркса, д.52 корп.1, офис 206, (8352) 620-128, 620-789
        </p>
      <p>
        422980 г. Чистополь, ул. К.Маркса, 47-а, (84342) 5-16-35, 5-20-96
        </p>
      <br />
      <p>
        <b>представительства</b>
      </p>
      <p>423740 РТ Актанышский р-н с. Актаныш, проспект Мира, д.7.кв. 10, (85552) 3-12-82</p>
      <p>422110 РТ Кукморский р-он р.п. Кукмор, ул. Ворошилова, д.2., (84364) 2-66-06</p>
      <p>422190 РТ, г.Мамадыш, ул.К.Маркса, д.25, (85563) 3-35-79</p>
      <p>423350 РТ, Сармановский р-н,  с.Сарманово, ул. Куйбышева, д.31а. (85559) 2-42-83</p>
      <p>443022 г. Самара, Ленинский район, улица Арцыбушевская, д. 175, (846) 337-73-73</p>
      <p>423071, г.Ульяновск, пр.Нариманова, д.1, стр.3, офис 306 (8422) 460-430</p>
      <br />
      <p>Дата и время последнего изменения на странице: 29.03.2017г., 16:10</p>
    </div>
  );
};

export default Delegates;
