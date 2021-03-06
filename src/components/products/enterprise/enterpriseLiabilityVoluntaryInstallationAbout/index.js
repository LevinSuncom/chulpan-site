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
      <h1 className="product-header">Страхование ответственности при строительно-монтажных работах</h1>
      <img src={image} className="product-image" alt="" />
      <p>Страховая защита деятельности, объектов и оборудования гарантирует застройщикам, заказчикам и потребителям благополучное завершение строительно-монтажных работ.  Страхование гражданской ответственности отдельно от строительно-монтажных работ является одним из востребованных страховых продуктов АО СК «Чулпан».</p>
      <p>По  настоящему страховому продукту страховым случаем признается  наступление  ответственности клиента за причинение вреда Третьим лицам в результате непреднамеренных ошибок и упущений Страхователя при строительно- монтажных работах:</p>
      <p>- вред жизни и здоровью Третьих лиц (физический  вред):</p>
      <ul>
        <li>расходы, необходимые для восстановления здоровья (на усиленное питание, санаторно- курортное лечение, посторонний уход, протезирование, транспортные расходы, расходы на платное медицинское обслуживание и т.д.);</li>
        <li>заработок, которого потерпевший лишился вследствие потери трудоспособности;</li>
        <li>часть заработка, которого в случае смерти потерпевшего лишились нетрудоспособные лица, состоявшие на его иждивении или имевшие право на получение от него содержания;</li>
        <li>расходы на погребение.</li>
      </ul>
      <p>- вред имуществу Третьих лиц (имущественный вред) - величина расходов на ремонт (восстановление) поврежденного или стоимости утраченного имущества, исходя из действительной стоимости на момент заключения договора страхования.</p>

      <p>Факт причинения вреда и его размер должны быть подтверждены решением суда или имущественной претензией потерпевших лиц в адрес Страхователя с документальным подтверждением компетентных органов о причиненном ущербе.</p>

    </div >
  );
};

export default EnterpriseAbout;
