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
      <h1 className="product-header">Страхования гражданской ответственности за причинение вреда жизни, здоровью, имуществу третьих лиц, окружающей природной среде в результате ядерно-радиационной аварии на объектах использования атомной энергии</h1>
      <img src={image} className="product-image" alt="" />
      <p>
        Текст отсутствует
      </p>
    </div >
  );
};

export default EnterpriseAbout;
