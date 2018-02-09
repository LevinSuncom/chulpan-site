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
      <h1 className="product-header">Комбинированное страхование буровых работ</h1>
      <img src={image} className="product-image" alt="" />
      <p>Скважины и буровое оборудование подвержены воздействию таких опасных природных явлений, как землетрясения, вулканические извержения, обвалы, оползни, сели, катастрофические наводнения и прочее. Предприятие нефтедобычи может понести огромные финансовые потери и вследствие техногенных чрезвычайных ситуаций (аварии, взрыва, пожара, имплозии, потери контроля над скважиной), ошибок персонала, противоправных действий третьих лиц и т.д.</p>

      <p>Что является страховым риском?</p>
      <p><b>СЕКЦИЯ 1. «ПОТЕРЯ КОНТРОЛЯ НАД СКВАЖИНОЙ»</b></p>
      <p>При заключении договора страхования на данном условии страховым случаем является гибель или повреждение скважины, выразившиеся в выходе скважины из-под контроля по любой причине, не исключенной настоящими Правилами и договором страхования.</p>
      <p>При заключении договора страхования на данном условии возмещению подлежат расходы Страхователя (Выгодоприобретателя): </p>
      <ul>
        <li>в связи с восстановлением контроля или попытками восстановления контроля над скважинами, указанными в договоре страхования, контроль над которыми был потерян.</li>
        <li>в связи с тушением или попыткой тушения пожара на скважине, указанной в договоре страхования, протекающего над поверхностью суши или над водной поверхностью;</li>
        <li>в связи с тушением или попыткой тушения пожара на любых  других  скважинах, возникшего в результате выхода скважины, указанной в договоре страхования, из-под контроля, если это необходимо для восстановления контроля над этой скважиной;</li>
        <li>в связи с тушением или попыткой тушения иного пожара, возникшего на территории страхования и несущего угрозу выхода из-под контроля или возгорания скважины, указанной в договоре страхования;</li>
        <li>в связи с целенаправленным поджогом вышедшей из-под контроля скважины. </li>
      </ul>
      <p><b>СЕКЦИЯ 2. «ПОВТОРНОЕ БУРЕНИЕ СКВАЖИНЫ»</b></p>
      <p>Возмещению подлежат расходы, произведенные по восстановлению или повторному бурению скважины, указанной в договоре страхования, или любого ее участка, если гибель или повреждение этой скважины (ее участка) имело место вследствие выхода скважины из-под контроля или межпластового перетока пластовых флюидов.</p>

      <p><b>СЕКЦИЯ 3. «ГРАЖДАНСКАЯ ОТВЕТСТВЕННОСТЬ Страхователя (лица, риск ответственности которого застрахован) за причинение вреда жизни, здоровью, имуществу третьих лиц, а также за загрязнение окружающей среды в результате потери контроля над указанными в договоре страхования скважинами»</b></p>
      <p>Страховым случаем по Секции 3 является причинение вреда жизни, здоровью, имуществу третьих лиц, окружающей среде в результате загрязнения или заражения, вызванных потерей контроля над указанными в договоре страхования скважинами, признанной страховым случаем по Секции 1 настоящих Правил.</p>
      <p>Страховщик возмещает расходы:</p>
      <ul>
        <li>которые Страхователь (лицо, риск ответственности которого застрахован) обязан произвести для возмещения вреда, нанесенного жизни, здоровью, имуществу третьих лиц, окружающей среде непосредственно в результате загрязнения или заражения, источником которого явилась вышедшая из-под контроля скважина, указанная в договоре страхования, в том числе, на восстановительные работы в отношении имущества третьих лиц, окружающей среды;</li>
        <li>по удалению, уничтожению или очистке имущества третьих лиц, окружающей среды от загрязняющих или заражающих субстанций, источником которых является вышедшая из-под контроля скважина, указанная в договоре страхования, включая расходы по сдерживанию и/или отклонению таких субстанций и/или предотвращению попадания таких субстанций на берег, или попыток таких действий.</li>
      </ul>
      <p><b>СЕКЦИЯ 4. «ВНУТРИСКВАЖИННЫЕ РИСКИ»</b></p>
      <p>Страховым случаем по Секции 4 является гибель, утрата или повреждение скважины и/или Бурового оборудования.</p>

      <p>На какой срок заключается договор страхования?</p>
      <p>Договор страхования заключается на срок один год или по соглашению сторон на иной срок, который указывается в договоре страхования.</p>

    </div >
  );
};

export default EnterpriseAbout;