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
      <h1 className="product-header">Страхование ответственности директоров</h1>
      <img src={image} className="product-image" alt="" />
      <p>Деятельность любого предприятия потенциально связана с риском причинения вреда жизни, здоровью или имуществу третьих лиц. Страхование ответственности позволит Вам переложить на страховую компанию финансовые затраты, связанные с урегулированием обоснованных претензий, а наш договор страхования ответственности за действие органов управления юридических лиц защитит Вас от убытков по претензиям и искам третьих лиц по фактам ошибок, допущенных в ходе управленческой деятельности.</p>
      <p>В рамках представленного страхового продукта договор страхования может быть заключен на следующих условиях:</p>
      <p>1. Покрытие А. "Страхование имущественных интересов директоров и должностных лиц"</p>
      <p>2. Покрытие В. "Страхование имущественных интересов Компании в отношении требований к директорам и должностным лицам"</p>
      <p>3. Покрытие С. "Страхование имущественных интересов Компании в отношении требований по ценным бумагам".</p>
    </div >
  );
};

export default EnterpriseAbout;
