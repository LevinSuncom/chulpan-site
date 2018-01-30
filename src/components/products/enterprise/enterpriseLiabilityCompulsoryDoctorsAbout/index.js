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
      <h1 className="product-header">Страхование профессиональной ответственности врачей</h1>
      <img src={image} className="product-image" alt="" />
      <p>АО СК «Чулпан» предлагает продукты страхования гражданской ответственности за причинение вреда жизни, здоровью, имуществу и/или имущественным интересам третьих лиц в результате ошибок, допущенных Страхователем и/или его работником при осуществления застрахованной профессиональной деятельности.</p>
      <p>Одним из таких продуктов является и страхование профессиональной ответственности врачей. Объектом страхования в части страхования судебных и внесудебных расходов  являются имущественные интересы Страхователя, связанные  с риском возникновения непредвиденных судебных и внесудебных расходов в связи с его обязанностью возместить вред, причиненный жизни и здоровью третьим лицам при осуществлении им профессиональной медицинской деятельности.</p>
    </div >
  );
};

export default EnterpriseAbout;
