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

import image from '../enterpriseCombined/image.jpg';

const EnterpriseAbout = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">КОМБИНИРОВАННОЕ СТРАХОВАНИЯ СРЕДСТВ ВОДНОГО ТРАНСПОРТА</h1>
      <img src={image} className="product-image" alt="" />
      <p>Эксплуатация водного транспорта сопряжена с серьезными рисками, ведь стоимость судна очень велика и при его гибели может привести к серьезным убыткам. Надежную защиту от возможного повреждения  или гибели судна обеспечивает комбинированное страхование средств водного транспорта. </p>

      <p><b>Что может быть застраховано по договору страхования?</b></p>
      <p>По договору страхования могут быть застрахованы морские (речные) суда, в зависимости от их назначения, района плавания, материала постройки, рода движителя и двигателя.</p>
      <p>На страхование принимаются, также, машины, оборудование, судовые устройства, снаряжение, установленное на морских (речных) судах.</p>
      <p>Дополнительное специальное оборудование (снаряжение), установленное и/или перевозимое на судне, а также запасные части могут быть застрахованы по соглашению сторон.</p>
      <p>Принимаются на страхование также гидроциклы – водное транспортное средство с механической установкой. </p>

      <p>При страховании морского (речного) судна договор страхования заключается по одному из следующих условий:</p>
      <ul>
        <li>«С ответственностью за гибель судна и аварийные повреждения»:</li>
        <li>«С ответственностью за аварийные повреждения»:</li>
        <li>«С ответственностью только за полную гибель судна»</li>
      </ul>
      <p>При страховании гидроциклов договор страхования заключается по одному из следующих условий:</p>
      <ul>
        <li>«С ответственностью за гибель – уничтожение»</li>
        <li>«С ответственностью за аварийные повреждения»</li>
        <li>«С ответственностью за кражу – угон с места парковки»</li>
        <li>«С ответственностью за все риски»  </li>
      </ul>
      <p>При страховании грузов договор страхования заключается по одному из следующих условий:</p>
      <ul>
        <li>«С ответственностью за все риски»</li>
        <li>«С ответственностью за частную аварию»</li>
        <li>«Без ответственности за повреждения, кроме случаев крушения». </li>
      </ul>
      <p>При страховании ответственности перед третьими лицами или пассажирами обязательства Страховщика наступают, если несчастный случай, связанный с эксплуатацией морского (речного) судна, повлек за собой:</p>
      <ul>
        <li>увечье, утрату потерпевшим трудоспособности или его смерть (вред жизни и здоровью);</li>
        <li>уничтожение или повреждение имущества (груза, багажа и т.д.), принадлежащего третьим лицам (реальный ущерб).</li>
      </ul>
      <p>При страховании от несчастных случаев:</p>
      <ul>
        <li>временная утрата трудоспособности в результате несчастного случая;</li>
        <li>инвалидность, наступившая в результате несчастного случая;</li>
        <li>смерть в результате несчастного случая.</li>
      </ul>
      Страховое покрытие распространяется на все несчастные случаи, которые могут произойти со Страхователем (Застрахованным) во время эксплуатации средства водного транспорта.

      <p><b>На какой срок заключается договора страхования?</b></p>
      <p>Договор страхования заключается на любой срок.</p>
    </div >
  );
};

export default EnterpriseAbout;
