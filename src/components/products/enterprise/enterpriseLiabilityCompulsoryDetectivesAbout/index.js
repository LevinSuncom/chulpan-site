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
      <h1 className="product-header">Страхование профессиональной ответственности детективов и охранников</h1>
      <img src={image} className="product-image" alt="" />
      <p>АО СК «Чулпан» предлагает продукты страхования гражданской ответственности за причинение вреда жизни, здоровью, имуществу и/или имущественным интересам третьих лиц в результате ошибок, допущенных Страхователем и/или его работником при осуществления застрахованной профессиональной деятельности.</p>
      <p>Одним из таких продуктов является и страхование гражданской ответственности, связанной с осуществлением детективной (охранной) деятельности.</p>
      <p>В рамках представленного страхового продукта страховым случаем является вступление в силу решения  суда,  устанавливающего имущественную ответственность Страхователя за причиненный им третьим лицам материальный ущерб</p>
      <p>Договор страхования может быть заключен как по всем, так по отдельным рискам и может включать в себя:</p>
      <p>а)	ответственность за вред,  причиненный жизни и здоровью Третьих лиц (утрата тру¬доспособности или смерть вследствие телесного или иного повреждения их здоровья) в связи с:</p>
      <ul>
        <li>действиями по обезвреживанию лиц, совершивших преднамеренные противозаконные акты,  в том числе после совершения преступных действий при попытке проникновения или проникновении на охраняемую территорию;</li>
        <li>случайными ранениями в результате неосторожного обращения с оружием и специальными средствами;</li>
      </ul>
      <p>б)	ответственность за вред, причиненный имущественным интересам Третьих лиц, в связи с:</p>
      <ul>
        <li>повреждением (гибелью, уничтожением) их имущества в результате действий Страхователя по    предупреждению    проникновения    на   охраняемую    территорию    или    обезвреживанию преступников;</li>
        <li>непреднамеренной   порчей   имущества   при   осуществлении   детективной   (охранной) деятельности;</li>
      </ul>
      <p>в)	ответственность  за   непреднамеренное   разглашение   конфиденциальной   информации Клиента, составляющей коммерческую тайну, ставшей доступной Страхователю в рамках работ по обеспечению защиты от несанкционированного доступа в  результате  проникновения  на охраняемую площадь или использования технических средств.      </p>
    </div >
  );
};

export default EnterpriseAbout;
