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
          <a href="/individuals/accident">
            Страхование от несчастных случаев граждан и детей
          </a>
        </li>
        <li>
          <a href="/individuals/oms">Добровольное медицинское страхование</a>
          (<a href="http://www.chulpan.ru/img/prav_ur_lica/4.DOC">
            скачать правила
          </a>
          [175.5 Kb])
        </li>
        <li>
          <a href="/individuals/osago">
            Страхование средств наземного транспорта
          </a>
          (<a href="http://www.chulpan.ru/img/prav_ur_lica/6.doc">
            скачать правила
          </a>
          [306.5 Kb])
        </li>
        <li>
          Страхование страхование автогражданской ответственности (<a href="http://www.chulpan.ru/img/prav_ur_lica/24.doc">
            скачать правила
          </a>
          [160 Kb])
        </li>
        <li>
          <a href="/individuals/osago">
            Обязательное страхование автогражданской ответственности{' '}
          </a>
          ({' '}
          <a href="http://www.chulpan.ru/img/prav_ur_lica/25.doc">
            скачать правила
          </a>
          [628 Kb])
        </li>
        <li>
          Комбинированное страхование опасных грузов (<a href="http://www.chulpan.ru/img/prav_ur_lica/11.DOC">
            скачать правила
          </a>
          [349 Kb])
        </li>
        <li>
          Комбинированное страхование средств водного транспорта(<a href="http://www.chulpan.ru/img/prav_ur_lica/9.doc">
            скачать правила
          </a>
          [177.5 Kb])
        </li>
        <li>
          Страхование сельскохозяйственных животных (<a href="http://www.chulpan.ru/img/prav_ur_lica/12.DOC">
            скачать правила
          </a>
          [142 Kb])
        </li>
        <li>
          Страхование имущества граждан (<a href="http://www.chulpan.ru/img/prav_ur_lica/22.doc">
            скачать правила
          </a>
          [179 Kb])
        </li>
        <li>
          <a href="/individuals/ksig">
            Комбинированное страхование имущества граждан
          </a>
          (<a href="http://www.chulpan.ru/img/prav_ur_lica/23.doc">
            скачать правила
          </a>
          [621 Kb]) (<a href="http://www.chulpan.ru/img/prav_ur_lica/23pred.doc">
            предыдущая редакция правил страхования от 22.09.2015г.
          </a>
          )
        </li>
        <li>
          Страхование имущества фермерских и крестьянских хозяйств, колхозов и
          совхозов<a href="http://www.chulpan.ru/img/prav_ur_lica/7.DOC">
            (скачать правила)
          </a>
          [111.5 Kb]
        </li>
        <li>
          Страхование медицинских и иных связанных с ними расходов граждан,
          выезжающих за границу (<a href="http://www.chulpan.ru/img/prav_ur_lica/5.doc">
            скачать правила
          </a>
          [441 Kb](предыдущие редакции правил страхования:<a href="http://www.chulpan.ru/img/prav_ur_lica/5pred1.doc">
            редакция от 06.04.2016г
          </a>
          ,<a href="http://www.chulpan.ru/img/prav_ur_lica/5pred2.doc">
            редакция от 27.10.2014г.
          </a>
          )
        </li>
        <li>
          Ипотечное страхование (<a href="http://www.chulpan.ru/img/prav_ur_lica/55.doc">
            скачать
          </a>
          правила, тарифы)
        </li>
      </ul>
      <p>
        <strong>а также:</strong>
      </p>
      <ul>
        <li>
          Страхование грузов (<a href="http://www.chulpan.ru/img/prav_ur_lica/10.doc">
            скачать правила
          </a>
          [136 Kb])
        </li>
        <li>
          Комбинированное страхование опасных грузов (<a href="http://www.chulpan.ru/img/prav_ur_lica/11.DOC">
            скачать правила
          </a>
          [349 Kb])
        </li>
        <li>
          Страхование объектов лизинга (<a href="http://www.chulpan.ru/img/prav_ur_lica/15.DOC">
            скачать правила
          </a>
          [135 Kb])
        </li>
        <li>
          Страхование ответственности продавца за качество продукции (<a href="http://www.chulpan.ru/img/prav_ur_lica/37.doc">
            скачать правила
          </a>
          [174.5 Kb])
        </li>
        <li>
          Страхование непредвиденных расходов (<a href="http://www.chulpan.ru/img/prav_ur_lica/42.DOC">
            скачать правила
          </a>
          [89.5 Kb])
        </li>
        <li>
          Страхование гражданской ответственности автоперевозчиков (<a href="http://www.chulpan.ru/img/prav_ur_lica/45.doc">
            скачать правила
          </a>
          [106 Kb])
        </li>
        <li>
          Страхование общегражданской ответственности (<a href="http://www.chulpan.ru/img/prav_ur_lica/46.doc">
            скачать правила
          </a>
          [221 Kb])
        </li>
        <li>
          Страхование неисполнения договорных обязательств (<a href="http://www.chulpan.ru/img/prav_ur_lica/47.doc">
            скачать правила
          </a>
          [155 Kb])
        </li>
        <li>
          Комплексное страхование строительно-монтажных рисков<a href="http://www.chulpan.ru/img/prav_ur_lica/49.doc">
            Cкачать файл
          </a>
          [255 Kb]
        </li>
        <li>
          Добровольное страхование пассажиров от несчастных случаев(<a href="http://www.chulpan.ru/img/prav_ur_lica/3.doc">
            скачать правила
          </a>
          [117 Kb])
        </li>
        <li>
          Страхование пластиковых карт (<a href="http://www.chulpan.ru/img/prav_ur_lica/18.doc">
            скачать правила
          </a>
          [117 Kb])
        </li>
        <li>
          Страхование потери имущества в результате утраты права собственности (<a href="http://www.chulpan.ru/img/prav_ur_lica/20.doc">
            скачать правила
          </a>
          [128 Kb])
        </li>
        <li>
          Страхование профессиональной деятельности оценщиков (<a href="http://www.chulpan.ru/img/prav_ur_lica/35.doc">
            скачать правила
          </a>
          [122 Kb])
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
        Наши специалистыответят на Ваши вопросы, примут жалобы ипожелания,
        которыеВы можетенаправить по электронной почте, заполнив формы,
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
