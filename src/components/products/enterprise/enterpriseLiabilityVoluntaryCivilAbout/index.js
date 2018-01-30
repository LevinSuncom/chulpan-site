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
      <h1 className="product-header">Страхование общегражданской ответственности</h1>
      <img src={image} className="product-image" alt="" />
      <p>Страхование общегражданской ответственности – это вид страхования, при котором страхуется ответственность клиента в случае причинения им вреда третьим лицам. Этот вид страхования охватывает практически все сферы жизни человека, связанные с определенным риском. Индивидуальный подход АО СК «Чулпан» к интересам клиента позволяет разработать договор, максимально учитывающий интересы сферы деятельности, подлежащей страхованию.</p>
      <p>По данному страховому продукту может быть застрахован риск общегражданской ответственности как  за вред, причиненный жизни и здоровью потерпевших («физический ущерб»), так и за вред, причиненный имуществу потерпевших («имущественный ущерб»).</p>
      <p>Страховым случаем является совершившееся событие, с наступлением которого возникает обязанность клиента произвести страховую выплату.</p>
    </div >
  );
};

export default EnterpriseAbout;
