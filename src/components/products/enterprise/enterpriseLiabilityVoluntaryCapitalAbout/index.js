import React from 'react';

import { Link } from 'react-router-dom';
// import Breadcrumbs from '../../App/Breadcrumbs';


// const imgStyle = {
//   width: '100%',
//   height: '260px',
//   backgroundImage: `url(${IndividualsImage})`,
//   borderRadius: '4px',
//   backgroundSize: 'cover',
//   backgroundPositionY: 'top',
//   marginBottom: '12px'
// };

import image from '../enterpriseLiability/image.jpg';

const EnterpriseAbout = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Страхование капитального строительства</h1>
      <img src={image} className="product-image" alt="" />
      <p>В соответствии с требованиями законодательства РФ в области градостроения АО СК «Чулпан» предлагает как типовые продукты страхования, так и заключение договоров страхования на индивидуальных условий в соответствии с требованиями конкретного СРО.</p>
      <p>В этом страховому продукту АО СК «Чулпан» обязуется при наступлении предусмотренного в договоре события возместить потерпевшему третьему лицу убытки, возникшие в период действия свидетельства о допуске члена Саморегулируемой организации.</p>
      <p>В соответствии с настоящими Правилами договор страхования может быть заключен в отношении следующих страховых рисков:</p>
      <ul>
        <li>причинение вреда жизни или здоровью третьих лиц вследствие недостатков работ, которые оказывают влияние на безопасность объектов капитального строительства. </li>
        <li>причинение вреда имуществу юридических и/или физических лиц вследствие недостатков работ, которые оказывают влияние на безопасность объектов капитального строительства.</li>
        <li>причинение вреда окружающей среде вследствие недостатков работ, которые оказывают влияние на безопасность объектов капитального строительства.</li>
        <li>возмещение вреда в соответствии с требованиями ст. 60 Градостроительного кодекса РФ от 29.12.2004 г. № 190-ФЗ.</li>
      </ul>
      <p>Страхование ответственности лица, ответственность которого застрахована, осуществляется на «комплексной» основе, включающей  заключение договоров как на «годовой базе», так и договоров на «объектной базе.</p>
    </div >
  );
};

export default EnterpriseAbout;
