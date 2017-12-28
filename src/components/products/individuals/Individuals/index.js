import React from 'react';

import { Link } from 'react-router-dom';
// import Breadcrumbs from '../../App/Breadcrumbs';

import image from './image.jpg';

// const imgStyle = {
//   width: '100%',
//   height: '260px',
//   backgroundImage: `url(${IndividualsImage})`,
//   borderRadius: '4px',
//   backgroundSize: 'cover',
//   backgroundPositionY: 'top',
//   marginBottom: '12px'
// };

const Individuals = () => {
  return (
    <div>
      {/*<div className="quick-icons mb-20">
        <Link to="osago" className="quick-icon">
          <i className="material-icons">directions_car</i>
          <p className="quick-icon__text">Автомобиль</p>
        </Link>
        <Link to="mortgage" className="quick-icon">
          <i className="material-icons">home</i>
          <p className="quick-icon__text">Жилье</p>
        </Link>
        <Link to="travel" className="quick-icon">
          <i className="material-icons">airplanemode_active</i>
          <p className="quick-icon__text">Путешествия</p>
        </Link>
        <Link to="property" className="quick-icon">
          <i className="material-icons">account_balance_wallet</i>
          <p className="quick-icon__text">Имущество</p>
        </Link>

        <Link to="accident" className="quick-icon">
          <i className="material-icons">accessibility</i>
          <p className="quick-icon__text">Здоровье</p>
        </Link>
      </div>*/}
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Частным клиентам</h1>

      <img src={image} className="product-image" alt="" />
      <p>
        Из года в год страхование набирает обороты в нашей стране, но самое
        главное - люди стали осознавать необходимость в страховании, суть
        страховой защиты и её полезность в сохранении того, что дорого.
      </p>
      <p>
        Специалисты страховой компании «Чулпан» помогут Вам подобрать страховые
        продукты, благодаря которым:
      </p>
      <ul>
        <li>
          Вы сможете застраховать свое здоровье, а также здоровье Ваших близких;
        </li>
        <li>приобрести уверенность на дорогах;</li>
        <li>
          компенсировать затраты при утрате или гибели Вашего имущества, сможете
          возложить ответственность на страховую компанию в случае нанесения
          Вами ущерба третьим лицам;
        </li>
      </ul>

      <p>
        <b>Основые страховые продукты для населения (правила страхования):</b>
      </p>
      <ul>
        <li>
          <a href="/services/individuals/health/accidents/about">
            Страхование от несчастных случаев граждан и детей
          </a>
        </li>
        <li>
          Добровольное медицинское страхование
        </li>
        <li>
            Страхование средств наземного транспорта
        </li>
        <li>
          <a href="/services/individuals/health/accidents/about">
            Страхование автогражданской ответственности
          </a>
        </li>
        <li>
          <a href="/services/individuals/transport/osago/about">
            Обязательное страхование автогражданской ответственности{' '}
          </a>
        </li>
        <li>
          Комбинированное страхование опасных грузов
        </li>
        <li>
          Комбинированное страхование средств водного транспорта
        </li>
        <li>
          Страхование сельскохозяйственных животных
        </li>
        <li>
          <a href="/services/individuals/property/estate/about">
            Страхование имущества граждан
          </a>
        </li>
        <li>
          <a href="/services/individuals/property/combined/about">
            Комбинированное страхование имущества граждан
          </a>
        </li>
        <li>
          Страхование имущества фермерских и крестьянских хозяйств, колхозов и
          совхозов
        </li>
        <li>
          <a href="/services/individuals/travel/abroad/about">
            Страхование медицинских и иных связанных с ними расходов граждан, выезжающих за границу
          </a>
        </li>
        <li>
          <a href="/services/individuals/mortgage/about">
            Ипотечное страхование
          </a>
        </li>
      </ul>
      <p>
        <strong>а также:</strong>
      </p>
      <ul>
        <li>
          Страхование грузов
        </li>
        <li>
          Комбинированное страхование опасных грузов
        </li>
        <li>
          Страхование объектов лизинга
        </li>
        <li>
          Страхование ответственности продавца за качество продукции
        </li>
        <li>
          Страхование непредвиденных расходов
        </li>
        <li>
          Страхование гражданской ответственности автоперевозчиков
        </li>
        <li>
          Страхование общегражданской ответственности
        </li>
        <li>
          Страхование неисполнения договорных обязательств
        </li>
        <li>
          Комплексное страхование строительно-монтажных рисков
        </li>
        <li>
          Добровольное страхование пассажиров от несчастных случаев
        </li>
        <li>
          Страхование пластиковых карт
        </li>
        <li>
          Страхование потери имущества в результате утраты права собственности
        </li>
        <li>
          Страхование профессиональной деятельности оценщиков
        </li>
      </ul>
      <p>
        Наша Компания известна не только как лидер на страховом рынке Поволжья
        по объемам собранных страховых взносов, но и как одна из самых
        оперативных компаний при осуществлении{' '}
        <a href="http://www.chulpan.ru/insured_accident/">страховых выплат</a>
      </p>

      <hr />
      <p>
        Наши специалисты ответят на Ваши вопросы, примут жалобы ипожелания,
        которые Вы можетенаправить по электронной почте, заполнив формы,
        расположенные ниже.
      </p>
      <p>
        Для оперативного удовлетворения Вашего запроса рекомендуется указать всю
        необходимую для этого информацию (к примеру: номер полиса, вид
        страхования, контактные данные и т.п.).
      </p>
      <p>Дата и время последнего изменения на странице: 29.03.2017г., 16:10</p>
    </div>
  );
};

export default Individuals;
