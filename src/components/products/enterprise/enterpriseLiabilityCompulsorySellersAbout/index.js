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
      <h1 className="product-header">Страхование профессиональной ответственности продавцов</h1>
      <img src={image} className="product-image" alt="" />
      <p>Для производителей / продавцов АО СК «Чулпан» предлагает продукты страхования гражданской ответственности за качество производимой / реализуемой продукции, а также за причинение вреда жизни, здоровью третьих.</p>
      <p>Одним из таких продуктов является страхование ответственности продавца за качество продукции. По договору страхования АО СК «Чулпан» несет ответственность, если страховой случай, связанный с реализацией Страхователем продукции (товаров) с недостатками, а также ненадлежащим исполнением Страхователем иных обязанностей, предусмотренных действующим законодательством, повлек причинение вреда:</p>
      <p>а)	жизни и здоровью (смерть, травма, увечье, потеря трудоспособности, физические и нравственные страдания) потребителя (третьих лиц);</p>
      <p>б)	имуществу потребителя (третьих лиц);</p>
      <p>в)	природным объектам, находящимся во владении (пользовании) потребителя (третьих лиц).</p>
      <p>По договору страхования при наступлении страхового случая страховая компания производит страховое возмещение:</p>
      <ul>
        <li>имущественного    ущерба,    причиненного    потребителю (третьим лицам) в размере действительной стоимости имущества в месте его нахождения в день заключения договора страхования, но не свыше страховой суммы;</li>
        <li>вреда,     причиненного    жизни    и здоровью потребителя (третьих лиц) в размерах, предусмотренных Гражданским Кодексом РФ и Законом РФ «О защите прав потребителей», но не свыше страховой суммы;</li>
        <li>убытков, связанных   с   выявлением и   устранением причин опасных   свойств продукции,   представляющей опасность при соблюдении   правил ее безопасной эксплуатации, если застрахованное лицо принуждено к ним в судебном порядке и размер убытков определен в решении суда;</li>
        <li>убытков,     связанных     с     безвозмездным    устранением  недостатков  в  продукции, выявленных в течение гарантийного срока (срока годности) - в   размерах определенных судебными решениями;</li>
        <li>убытки,    связанных с заменой продукции с недостатками выявленными в течение гарантийного срока ( срока годности)    -    в размерах стоимости затрат на транспортировку продукции, подлежащей замене и продукции, заменяющей, но не свыше страховой суммы;</li>
        <li>убытки,      связанных   с   возвратом   денег   Потребителю   вследствие   соразмерного уменьшения цены на продукцию с недостатками.</li>
      </ul>
    </div >
  );
};

export default EnterpriseAbout;
