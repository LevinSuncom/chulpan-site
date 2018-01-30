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

const EnterpriseStaff = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Страхование персонала</h1>
      <img src={image} className="product-image" alt="" />
      <p>Добровольное страхование работников – это вопрос заботы о здоровье персонала, который является очень важным для каждого руководителя предприятия. Это стремление к стабильности, успеху и прогрессивному развитию.</p>
      <p>Все программы страхования медицинских расходов разрабатываются на основании индивидуальных пожеланий граждан, в них учитывается бюджет предприятия и потребности в самих услугах.</p>
      <p>При заключении договора страхования можно согласовать как комбинацию программ страхования, так и отдельных услуг. Страховая сумма (лимиты ответственности) определяется по соглашению страхователя и страховой компании. Стоимость страхования или страховой платеж зависит от выбранных условий страхования, медицинских учреждений, количества застрахованных лиц и т.д.</p>
      <p>Страхование от несчастных случаев позволяет работодателю защитить сотрудника и членов его семьи от значительных финансовых расходов при травме, заболевании или гибели, возникших в результате несчастного случая, в том числе и во время исполнения служебных обязанностей. Так же данный вид страхования необходим при проведении спортивных мероприятий, организации летних лагерей и т.п.</p>
      <p>При организации командировок, как по странам СНГ, так и за рубеж, работодатель может обеспечить сотрудника полисом страхования, который должен покрывать:</p>
      <ul>
        <li>Медицинские расходы</li>
        <li>Транспортные расходы</li>
        <li>Расходы по получению юридической помощи</li>
      </ul>
      <p>Дата и время последнего изменения на странице: 18.01.2017г., 16:10</p>
    </div >
  );
};

export default EnterpriseStaff;
