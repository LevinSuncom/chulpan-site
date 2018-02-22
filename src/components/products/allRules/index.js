import React from 'react';

import { Link } from 'react-router-dom';
// import Breadcrumbs from '../../App/Breadcrumbs';

// import image from './image.jpg';

// const imgStyle = {
//   width: '100%',
//   height: '260px',
//   backgroundImage: `url(${IndividualsImage})`,
//   borderRadius: '4px',
//   backgroundSize: 'cover',
//   backgroundPositionY: 'top',
//   marginBottom: '12px'
// };
import file1 from '../../../documents/Добровольное ипотечное страхование.doc';
import file2 from '../../../documents/Добровольное медицинское страхование.DOC';
import file3 from '../../../documents/Добровольное страхование ответственности экспедиторов.doc';
import file4 from '../../../documents/Добровольное страхование пассажиров от несчастных случаев.doc';
import file5 from '../../../documents/Коллективное страхование от несчастных случаев работников за счет средств предприятий и организаций.doc';
import file6 from '../../../documents/Комбинирование страхование средств воздушного транспорта.doc';
import file7 from '../../../documents/Комбинированное страхование буровых работ.doc';
import file8 from '../../../documents/Комбинированное страхование имущества граждан.doc';
import file9 from '../../../documents/Комбинированное страхование опасных грузов.doc';
import file10 from '../../../documents/Комбинированное страхование средств водного транспорта.doc';
import file11 from '../../../documents/Комплексное страхование имущества предприятий и организаций.doc';
import file12 from '../../../documents/Комплексное страхование строительно-монтажных рисков.doc';
import file13 from '../../../documents/Обязательное страхование автогражданской ответственности.doc';
import file14 from '../../../documents/Правила добровольного страхования от несчастных случаев граждан и детей.doc';
import file15 from '../../../documents/Правила страхования гражданской ответственности капитального строительства.doc';
import file16 from '../../../documents/страхование автогражданской ответственности.doc';
import file17 from '../../../documents/Страхование автомобильных дорог.doc';
import file18 from '../../../documents/Страхование буровых работ.DOC';
import file19 from '../../../documents/Страхование гражданской ответственности автоперевозчиков.doc';
import file20 from '../../../documents/Страхование гражданской ответственности владельцев автотранспортных средств.doc';
import file21 from '../../../documents/Страхование гражданской ответственности владельцев воздушных судов и авиаперевозчиков.DOC';
import file22 from '../../../documents/Страхование гражданской ответственности за неисполнение туристского продукта.doc';
import file23 from '../../../documents/Страхование гражданской ответственности за причинение вреда вследствие недостатков товаров, работ и услуг.doc';
import file24 from '../../../documents/Страхование гражданской ответственности за причинение вреда жизни, здоровью, имуществу третьих лиц, -1.doc';
import file25 from '../../../documents/Страхование гражданской ответственности организаторов общественных мероприятий.DOC';
import file26 from '../../../documents/Страхование гражданской ответственности организаций, эксплуатирующих опасные производственные объекты.doc';
import file27 from '../../../documents/Страхование гражданской ответственности учреждений отдыха и оздоровления детей.DOC';
import file28 from '../../../documents/Страхование гражданской ответственности собственников гидротехнических сооружений.doc';
import file29 from '../../../documents/Страхование гражданской ответственности, связанной с осуществлением аудиторской деятельности.doc';
import file30 from '../../../documents/Страхование гражданской ответственности, связанной с осуществлением детективной (охранной) деятельности.doc';
import file31 from '../../../documents/Страхование грузов.doc';
import file32 from '../../../documents/Страхование имущества граждан.doc';
import file33 from '../../../documents/Страхование имущества предприятий и организаций.doc';
import file34 from '../../../documents/Страхование имущества фермерских и крестьянских хозяйств, колхозов, совхозов.doc';
import file35 from '../../../documents/Страхование медицинских и иных связанных с ними расходов граждан, выезжающих за границу.doc';
import file36 from '../../../documents/Страхование неисполнения договорных обязательств.doc';
import file37 from '../../../documents/Страхование непредвиденных расходов.DOC';
import file38 from '../../../documents/Страхование общегражданской ответственности.doc';
import file39 from '../../../documents/Страхование объектов лизинга.DOC';
import file40 from '../../../documents/Страхование ответственности за действия органов управления юридических лиц.doc';
import file41 from '../../../documents/Страхование ответственности перед третьими лицами при строительно-монтажных работах.doc';
import file42 from '../../../documents/Страхование ответственности продавца за качество продукции.doc';
import file43 from '../../../documents/Страхование памятников истории и культуры.DOC';
import file44 from '../../../documents/Страхование пластиковых карт.doc';
import file45 from '../../../documents/Страхование потери имущества в результате утраты права собственности.doc';
import file46 from '../../../documents/Страхование предпринимательских рисков на случай неисполнения (ненадлежащего исполнения) договорных обязательств.doc';
import file47 from '../../../documents/Страхование профессиональной деятельности оценщиков.doc';
import file48 from '../../../documents/Страхование профессиональной ответственности строителей, архитекторов.doc';
import file49 from '../../../documents/Страхование профессиональной ответственности врачей.doc';
import file50 from '../../../documents/Страхование профессиональной ответственности нотариусов.doc';
import file51 from '../../../documents/Страхование профессиональной ответственности оценщиков.doc';
import file52 from '../../../documents/Страхование расходов по локализации и ликвидации последствий чрезвычайных ситуаций и ответственности от воздействия пожара.doc';
import file53 from '../../../documents/Страхование сельскохозяйственных животных.doc';
import file54 from '../../../documents/Страхование средств наземного транспорта.doc';
import file55 from '../../../documents/Страхование урожая сельскохозяйственных культур и многолетних насаждений.doc';

const AllRules = () => {
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
      <h1 className="product-header">Все правила</h1>

      <p>
        <a href={file1}>Добровольное ипотечное страхование</a>
      </p>
      <p>
        <a href={file2}>Добровольное медицинское страхование</a>
      </p>
      <p>
        <a href={file3}>
          Добровольное страхование ответственности экспедиторов
        </a>
      </p>
      <p>
        <a href={file4}>
          Добровольное страхование пассажиров от несчастных случаев
        </a>
      </p>
      <p>
        <a href={file5}>
          Коллективное страхование от несчастных случаев работников за счет
          средств предприятий и организаций
        </a>
      </p>
      <p>
        <a href={file6}>
          Комбинирование страхование средств воздушного транспорта
        </a>
      </p>
      <p>
        <a href={file7}>Комбинированное страхование буровых работ</a>
      </p>
      <p>
        <a href={file8}>Комбинированное страхование имущества граждан</a>
      </p>
      <p>
        <a href={file9}>Комбинированное страхование опасных грузов</a>
      </p>
      <p>
        <a href={file10}>
          Комбинированное страхование средств водного транспорта
        </a>
      </p>
      <p>
        <a href={file11}>
          Комплексное страхование имущества предприятий и организаций
        </a>
      </p>
      <p>
        <a href={file12}>
          Комплексное страхование строительно-монтажных рисков
        </a>
      </p>
      <p>
        <a href={file13}>
          Обязательное страхование автогражданской ответственности
        </a>
      </p>
      <p>
        <a href={file14}>
          Правила добровольного страхования от несчастных случаев граждан и
          детей
        </a>
      </p>
      <p>
        <a href={file15}>
          Правила страхования гражданской ответственности за причинение вреда
          вследствие недостатков работ, которые оказывают влияние на
          безопасность объектов капитального строительства
        </a>
      </p>
      <p>
        <a href={file16}>страхование автогражданской ответственности</a>
      </p>
      <p>
        <a href={file17}>Страхование автомобильных дорог</a>
      </p>
      <p>
        <a href={file18}>Страхование буровых работ</a>
      </p>
      <p>
        <a href={file19}>
          Страхование гражданской ответственности автоперевозчиков
        </a>
      </p>
      <p>
        <a href={file20}>
          Страхование гражданской ответственности владельцев автотранспортных
          средств
        </a>
      </p>
      <p>
        <a href={file21}>
          Страхование гражданской ответственности владельцев воздушных судов и
          авиаперевозчиков
        </a>
      </p>
      <p>
        <a href={file22}>
          Страхование гражданской ответственности за неисполнение или
          ненадлежащее исполнение обязательств по договору о реализации
          туристского продукта
        </a>
      </p>
      <p>
        <a href={file23}>
          Страхование гражданской ответственности за причинение вреда вследствие
          недостатков товаров, работ и услуг
        </a>
      </p>
      <p>
        <a href={file24}>
          Страхование гражданской ответственности за причинение вреда жизни,
          здоровью, имуществу третьих лиц, окружающей природной среде в
          результате ядерно-радиационной аварии на объектах использования
          атомной энергии
        </a>
      </p>
      <p>
        <a href={file25}>
          Страхование гражданской ответственности организаторов (устроителей)
          зрелищных, спортивно-оздоровительных, культурных и общественных
          мероприятий
        </a>
      </p>
      <p>
        <a href={file26}>
          Страхование гражданской ответственности организаций, эксплуатирующих
          опасные производственные объекты, за причинение вреда жизни, здоровью
          или имуществу третьих лиц и окружающей природной среде в результате
          аварии на опасном производственном объекте
        </a>
      </p>
      <p>
        <a href={file27}>
          Страхование гражданской ответственности учреждений отдыха и
          оздоровления детей
        </a>
      </p>
      <p>
        <a href={file28}>
          Страхование гражданской ответственности эксплуатирующих организаций и
          собственников гидротехнических сооружений за причинение вредажизни,
          здоровью или имуществу третьих лиц
        </a>
      </p>
      <p>
        <a href={file29}>
          Страхование гражданской ответственности, связанной с осуществлением
          аудиторской деятельности
        </a>
      </p>
      <p>
        <a href={file30}>
          Страхование гражданской ответственности, связанной с осуществлением
          детективной (охранной) деятельности
        </a>
      </p>
      <p>
        <a href={file31}>Страхование грузов</a>
      </p>
      <p>
        <a href={file32}>Страхование имущества граждан</a>
      </p>
      <p>
        <a href={file33}>Страхование имущества предприятий и организаций</a>
      </p>
      <p>
        <a href={file34}>
          Страхование имущества фермерских и крестьянских хозяйств, колхозов,
          совхозов
        </a>
      </p>
      <p>
        <a href={file35}>
          Страхование медицинских и иных связанных с ними расходов граждан,
          выезжающих за границу
        </a>
      </p>
      <p>
        <a href={file36}>Страхование неисполнения договорных обязательств</a>
      </p>
      <p>
        <a href={file37}>Страхование непредвиденных расходов</a>
      </p>
      <p>
        <a href={file38}>Страхование общегражданской ответственности</a>
      </p>
      <p>
        <a href={file39}>Страхование объектов лизинга</a>
      </p>
      <p>
        <a href={file40}>
          Страхование ответственности за действия органов управления юридических
          лиц
        </a>
      </p>
      <p>
        <a href={file41}>
          Страхование ответственности перед третьими лицами при
          строительно-монтажных работах
        </a>
      </p>
      <p>
        <a href={file42}>
          Страхование ответственности продавца за качество продукции
        </a>
      </p>
      <p>
        <a href={file43}>Страхование памятников истории и культуры</a>
      </p>
      <p>
        <a href={file44}>Страхование пластиковых карт</a>
      </p>
      <p>
        <a href={file45}>
          Страхование потери имущества в результате утраты права собственности
        </a>
      </p>
      <p>
        <a href={file46}>
          Страхование предпринимательских рисков на случай неисполнения
          (ненадлежащего исполнения) договорных обязательств
        </a>
      </p>
      <p>
        <a href={file47}>Страхование профессиональной деятельности оценщиков</a>
      </p>
      <p>
        <a href={file48}>
          Страхование профессиональной ответственности (строителей,
          архитекторов, проектировщиков, специалистов по инженерным изысканиям
          для строительства)
        </a>
      </p>
      <p>
        <a href={file49}>Страхование профессиональной ответственности врачей</a>
      </p>
      <p>
        <a href={file50}>
          Страхование профессиональной ответственности нотариусов
        </a>
      </p>
      <p>
        <a href={file51}>
          Страхование профессиональной ответственности оценщиков
        </a>
      </p>
      <p>
        <a href={file52}>
          Страхование расходов по локализации и ликвидации последствий
          чрезвычайных ситуаций и ответственности от воздействия пожара
        </a>
      </p>
      <p>
        <a href={file53}>Страхование сельскохозяйственных животных</a>
      </p>
      <p>
        <a href={file54}>Страхование средств наземного транспорта</a>
      </p>
      <p>
        <a href={file55}>
          Страхование урожая сельскохозяйственных культур и многолетних
          насаждений
        </a>
      </p>

      <p>Дата и время последнего изменения на странице: 29.03.2017г., 16:10</p>
    </div>
  );
};

export default AllRules;
