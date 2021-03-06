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
      <h1 className="product-header">Страхование гражданской ответственности перевозчика</h1>
      <img src={image} className="product-image" alt="" />
      <p>Обязательное страхование гражданской ответственности перевозчика за причинение вреда жизни, здоровью, имуществу пассажиров (ОСГОП)</p>
      <p>В соответствии с Федеральным законом № 67-ФЗ от 14.06.2012г. с 1 января 2013 года все юридические лица и физические лица в статусе индивидуального предпринимателя, осуществляющие перевозки пассажиров любым видом транспорта, обязаны страховать свою гражданскую ответственность за причинение вреда жизни, здоровью, имуществу пассажиров. </p>
      <p>Обязательное страхование введено в целях обеспечения гарантированного возмещения вреда, причиненного при перевозках, независимо от вида транспорта и характера перевозок, создания единых условий и принципов расчета возмещения ущерба, а также установления порядка и процедуры получения возмещения. </p>
      <p>Объектом страхования по договору обязательного страхования являются имущественные интересы перевозчика, связанные с риском его гражданской ответственности по обязательствам, возникающим вследствие причинения при перевозках вреда жизни, здоровью, имуществу пассажиров.</p>
      <p>Расчет страховой премии по договору ОСГОП осуществляется на основании оценки данных, указанных в заявлении на страхование, в рамках тарифов, утвержденных постановлением правительства № 1344 от 20.12.2012.</p>
      <p>Исключение составляют перевозки пассажиров метрополитеном и легковым такси, а также перевозки для собственных нужд (например, перевозка работников страхователя), таким перевозчикам договор ОСГОП заключать не требуется.</p>
      <p>Страховые суммы по рискам установлены Законом на 1 пассажира и составляют: </p>
      <ul>
        <li>Не менее 2 025 000 рублей – за причинение вреда жизни; </li>
        <li>Не менее 2 000 000 рублей – за причинение вреда здоровью; </li>
        <li>Не менее 23 000 рублей – за причинение вреда имуществу.</li>
      </ul>
      <p>За отсутствие договора ОСГОП законодательством предусмотрены санкции, в частности: </p>
      <ul>
        <li>Наложение штрафа от 500 тыс.руб. до 1 млн.руб.;</li>
        <li>Взыскание в бюджет необоснованно сбереженной суммы страховой премии.</li>
        <li>При этом возмещение причиненного вреда в размере, предусмотренном законодательством, выплачиваются перевозчиком самостоятельно.</li>
      </ul>
    </div >
  );
};

export default EnterpriseAbout;
