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

import image from './image.jpg';

const EnterpriseProperty = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Страхование имущества</h1>
      <img src={image} className="product-image" alt="" />
      <p>
        Страхование имущества предприятия  позволяет произвести дополнительную защиту собственника от полной или частичной утраты  имущества. Заключая договор страхования, можно предусмотреть полное или частичное покрытие рисков.
      </p>
      <p>
        На страхование принимаются:
      <ul>
          <li>Недвижимость (здания, помещения)</li>
          <li>Товарно-материальные ценности в обороте (ТМЦ)</li>
          <li>Производственное оборудование</li>
          <li>Спецтехника и механизмы</li>
          <li>Средства железнодорожного транспорта</li>
          <li>Другие виды имущества</li>
        </ul>
      </p>
      <p>
        Страхование указанного выше имущества возможно как в целом, так и по отдельности. Существенное значение для определения тарифа по страхованию  имущества имеет его назначение, срок эксплуатации, тип, обеспечение превентивных мер по охране и противопожарной безопасности.
      </p>
      <p>
        Мы  заключим  договор страхования с Вами  максимально быстро и на выгодных условиях.
      </p>
      <p>Дата и время последнего изменения на странице: 18.01.2017г., 16:10</p>
    </div >
  );
};

export default EnterpriseProperty;
