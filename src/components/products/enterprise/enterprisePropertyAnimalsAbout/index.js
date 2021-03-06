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

import image from '../enterpriseProperty/image.jpg';

const EnterpriseAbout = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Страхование сельскохозяйственных животных</h1>
      <img src={image} className="product-image" alt="" />

      <p>Страхование сельскохозяйственных животных является одной из форм защиты сельскохозяйственных предприятий от убытков, произошедших из-за гибели, хищения или уничтожения животных по распоряжению ветеринарных служб. На основании Правил добровольного страхования сельскохозяйственных животных АО СК «Чулпан»   заключает с юридическими лицами и крестьянско-фермерскими хозяйствами договоры добровольного страхования сельскохозяйственных животных.</p>
      <p>На страхование принимаются:</p>
      <ul>
        <li>сельскохозяйственные животные: свиньи, овцы, козы, ослы и мулы, крупный рогатый скот, лошади, верблюды, кроли и птица.</li>
        <li>собаки, кошки и прочие домашние животные любых пород, в возрасте от 3 месяцев до 8 лет, состоящие на учете в клубах любителей животных, обществах, ветеринарных станциях, и имеющие документы о соответствующих прививках.</li>
      </ul>
      <p>Страхование может осуществляться по всем перечисленным рискам или по отдельно выбранным рискам страхователя:</p>
      <p>- Гибель животных в результате:</p>
      <ul>
        <li>болезни;</li>
        <li>пожара (случайного возникновения и распространения огня), взрыва, удара молнии, действия электрического тока;</li>
        <li>солнечного или теплового удара;</li>
        <li>землетрясения, селя, наводнения, обвала, оползня, бури, урагана, бурана, града;</li>
        <li>замерзания;</li>
        <li>утопления, падения в ущелье;</li>
        <li>попадания под средство транспорта и других травматических повреждений;</li>
        <li>падения летательных объектов или их обломков и иных предметов;</li>
        <li>нападения зверей;</li>
        <li>удушения;</li>
        <li>внезапного отравления ядовитыми травами или веществами;</li>
        <li>укуса змей или ядовитых насекомых;</li>
      </ul>
      <p>- Вынужденный убой (уничтожение) животных в результате:</p>
      <ul>
        <li>несчастного случая с угрозой неминуемой гибели;</li>
        <li>письменного распоряжения специалиста ветеринарной службы и в связи с проведением мероприятий по борьбе с эпизоотией или в связи с неизлечимой болезнью, исключающей возможность дальнейшего использования животного.</li>
      </ul>
      <p>По дополнительному соглашению сторон могут обеспечиваться страхованием возникающие в связи с наступлением страховых событий убытки от: похищения; злоумышленных действий третьих лиц, повлекших гибель животных</p>

      Страховая сумма устанавливается в размере, не превышающем действительную стоимость животных данного вида, породы и возраста, в месте их нахождения на момент (в день) заключения договора страхования.
    </div >
  );
};

export default EnterpriseAbout;
