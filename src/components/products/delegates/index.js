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
      <h1 className="product-header">Наши представители</h1>

      <img src={image} className="product-image" alt="" />
      <p>
        <strong>
          Татарстан
        </strong>
      </p>
      <p>
        <b>
        АО СУ "Чулпан", 423450, г. Альметьевск, ул. Пушкина, 66, (8553) 304-490, chulpan@tatais.ru 
        </b>
      </p>
      <p>
        <b>
        АО СК "Чулпан", 423450, г.Альметьевск, ул.Чернышевского, 1, (8553) 304-450, dop@chulpan.ru
        </b>
      </p>
      <p>Дата и время последнего изменения на странице: 29.03.2017г., 16:10</p>
    </div>
  );
};

export default Delegates;
