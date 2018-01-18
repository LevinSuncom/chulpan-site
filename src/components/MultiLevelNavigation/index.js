import React from 'react';
import { NavLink, Link } from 'react-router-dom';

import './style.css';

const Icon = () => {
  return (
    <svg
      fill="#5c5c5c"
      height="20"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const BackIcon = () => {
  return (
    <svg
      fill="#5c5c5c"
      height="20"
      viewBox="0 0 24 24"
      width="20"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M0 0h24v24H0z" fill="none" />
      <path d="M20 11H7.83l5.59-5.59L12 4l-8 8 8 8 1.41-1.41L7.83 13H20v-2z" />
    </svg>
  );
};

const MultiLevelNavigation = props => {
  switch (props.path) {
    case '/services':
      return (
        <React.Fragment>
          <Link to="/services/individuals" className="navbar__link">
            Частным клиентам <Icon />
          </Link>
          <Link to="/services/enterprice" className="navbar__link">
            Корпоративным клиентам <Icon />
          </Link>
          <Link to="/services/delegates" className="navbar__link">
            Филиалы и представительства <Icon />
          </Link>
          <Link to="/services/allRules" className="navbar__link">
            Все правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/individuals':
      return (
        <React.Fragment>
          <Link to="/services" className="navbar__link">
            <BackIcon /> Частным клиентам
          </Link>
          <Link to="/services/individuals/transport" className="navbar__link">
            Транспорт <Icon />
          </Link>
          <Link to="/services/individuals/health" className="navbar__link">
            Здоровье <Icon />
          </Link>
          <Link to="/services/individuals/property" className="navbar__link">
            Имущество <Icon />
          </Link>
          <Link to="/services/individuals/mortgage" className="navbar__link">
            Ипотека <Icon />
          </Link>
          <Link to="/services/individuals/travel" className="navbar__link">
            Путешествия <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/transport':
    case '/services/individuals/transport/kasko2':
    case '/services/individuals/transport/kasko50':
      return (
        <React.Fragment>
          <Link to="/services/individuals" className="navbar__link">
            <BackIcon /> Транспорт
          </Link>
          <Link
            to="/services/individuals/transport/kasko"
            className="navbar__link">
            КАСКО <Icon />
          </Link>
          <Link
            to="/services/individuals/transport/kasko2"
            className="navbar__link">
            КАСКО до первого случая
          </Link>
          <Link
            to="/services/individuals/transport/kasko50"
            className="navbar__link">
            КАСКО 50
          </Link>
          <Link
            to="/services/individuals/transport/osago"
            className="navbar__link">
            ОСАГО <Icon />
          </Link>
          <Link
            to="/services/individuals/transport/eosago"
            className="navbar__link">
            е-ОСАГО <Icon />
          </Link>
          <Link
            to="/services/individuals/transport/voluntary"
            className="navbar__link">
            Добровольная автогражданка <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/transport/kasko':
    case '/services/individuals/transport/kasko/about':
    case '/services/individuals/transport/kasko/faq':
    case '/services/individuals/transport/kasko/manual':
    case '/services/individuals/transport/kasko/regulations':
      return (
        <React.Fragment>
          <Link to="/services/individuals/transport" className="navbar__link">
            <BackIcon /> КАСКО
          </Link>
          <NavLink
            to="/services/individuals/transport/kasko/about"
            className="navbar__link"
            activeClassName="navbar__link_active">
            Описание
          </NavLink>
          <NavLink
            to="/services/individuals/transport/kasko/faq"
            className="navbar__link"
            activeClassName="navbar__link_active">
            Вопрос-ответ
          </NavLink>
          <NavLink
            to="/services/individuals/transport/kasko/manual"
            className="navbar__link"
            activeClassName="navbar__link_active">
            Что делать при наступлении страхового события
          </NavLink>
          <NavLink
            to="/services/individuals/transport/kasko/regulations"
            className="navbar__link"
            activeClassName="navbar__link_active">
            Правила
          </NavLink>
        </React.Fragment>
      );
    case '/services/individuals/transport/osago':
    case '/services/individuals/transport/osago/about':
    case '/services/individuals/transport/osago/regulations':
      return (
        <React.Fragment>
          <Link to="/services/individuals/transport" className="navbar__link">
            <BackIcon /> ОСАГО
          </Link>
          <Link
            to="/services/individuals/transport/osago/about"
            className="navbar__link">
            Описание
          </Link>
          <Link
            to="/services/individuals/transport/osago/regulations"
            className="navbar__link">
            Правила
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/transport/eosago':
    case '/services/individuals/transport/eosago/about':
    case '/services/individuals/transport/eosago/regulations':
    case '/services/individuals/transport/eosago/rates':
    case '/services/individuals/transport/eosago/faq':
    case '/services/individuals/transport/eosago/manual':
      return (
        <React.Fragment>
          <Link to="/services/individuals/transport" className="navbar__link">
            <BackIcon /> е-ОСАГО
          </Link>
          <Link
            to="/services/individuals/transport/eosago/about"
            className="navbar__link">
            Описание
          </Link>
          {/* <Link
            to="/services/individuals/transport/eosago/regulations"
            className="navbar__link">
            Правила по е-ОСАГО
          </Link> */}
          <Link
            to="/services/individuals/transport/eosago/rates"
            className="navbar__link">
            Тарифы
          </Link>
          <Link
            to="/services/individuals/transport/eosago/faq"
            className="navbar__link">
            Вопрос-ответ
          </Link>
          <Link
            to="/services/individuals/transport/eosago/manual"
            className="navbar__link">
            Что делать при наступлении страхового события
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/transport/voluntary':
    case '/services/individuals/transport/voluntary/about':
    case '/services/individuals/transport/voluntary/faq':
    case '/services/individuals/transport/voluntary/regulations':
      return (
        <React.Fragment>
          <Link to="/services/individuals/transport" className="navbar__link">
            <BackIcon /> Добровольная автогражданка
          </Link>
          <Link
            to="/services/individuals/transport/voluntary/about"
            className="navbar__link">
            Описание
          </Link>

          <Link
            to="/services/individuals/transport/voluntary/faq"
            className="navbar__link">
            Вопрос-ответ
          </Link>
          <Link
            to="/services/individuals/transport/voluntary/regulations"
            className="navbar__link">
            Правила
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/health':
    case '/services/individuals/health/sport':
    case '/services/individuals/health/kids':
    case '/services/individuals/health/family':
    case '/services/individuals/health/borrowers':
      return (
        <React.Fragment>
          <Link to="/services/individuals" className="navbar__link">
            <BackIcon /> Здоровье
          </Link>
          <Link
            to="/services/individuals/health/accidents"
            className="navbar__link">
            Несчастные случаи <Icon />
          </Link>
          <Link
            to="/services/individuals/health/sport"
            className="navbar__link">
            Спорт
          </Link>
          <Link to="/services/individuals/health/kids" className="navbar__link">
            Дети
          </Link>
          <Link
            to="/services/individuals/health/family"
            className="navbar__link">
            Семейный полис
          </Link>
          <Link
            to="/services/individuals/health/borrowers"
            className="navbar__link">
            Заемщики
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/health/accidents':
    case '/services/individuals/health/accidents/about':
    case '/services/individuals/health/accidents/faq':
    case '/services/individuals/health/accidents/manual':
    case '/services/individuals/health/accidents/regulations':
      return (
        <React.Fragment>
          <Link to="/services/individuals/health" className="navbar__link">
            <BackIcon /> Несчастные случаи
          </Link>
          <Link
            to="/services/individuals/health/accidents/about"
            className="navbar__link">
            Описание
          </Link>
          <Link
            to="/services/individuals/health/accidents/faq"
            className="navbar__link">
            Вопрос-ответ
          </Link>
          <Link
            to="/services/individuals/health/accidents/manual"
            className="navbar__link">
            Что делать при наступлении несчастного случая
          </Link>
          <Link
            to="/services/individuals/health/accidents/regulations"
            className="navbar__link">
            Правила
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/property':
      return (
        <React.Fragment>
          <Link to="/services/individuals" className="navbar__link">
            <BackIcon /> Имущество
          </Link>
          <Link
            to="/services/individuals/property/combined"
            className="navbar__link">
            Комбинированное <Icon />
          </Link>
          <Link
            to="/services/individuals/property/economy"
            className="navbar__link">
            Эконом-страхование <Icon />
          </Link>
          <Link
            to="/services/individuals/property/express"
            className="navbar__link">
            Экспресс-страхование <Icon />
          </Link>
          <Link
            to="/services/individuals/property/estate"
            className="navbar__link">
            Имущество <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/property/combined':
    case '/services/individuals/property/combined/about':
    case '/services/individuals/property/combined/faq':
    case '/services/individuals/property/combined/manual':
    case '/services/individuals/property/combined/regulations':
      return (
        <React.Fragment>
          <Link to="/services/individuals/property" className="navbar__link">
            <BackIcon /> Комбинированное
          </Link>
          <Link
            to="/services/individuals/property/combined/about"
            className="navbar__link">
            Описание
          </Link>
          <Link
            to="/services/individuals/property/combined/faq"
            className="navbar__link">
            Вопрос-ответ
          </Link>
          <Link
            to="/services/individuals/property/combined/manual"
            className="navbar__link">
            Что делать при наступлении страхового события
          </Link>
          <Link
            to="/services/individuals/property/combined/regulations"
            className="navbar__link">
            Правила
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/property/economy':
    case '/services/individuals/property/economy/calculate':
      return (
        <React.Fragment>
          <Link to="/services/individuals/property" className="navbar__link">
            <BackIcon /> Эконом-страхование
          </Link>
          <NavLink
            to="/services/individuals/property/economy/calculate"
            className="navbar__link">
            Расчитать
          </NavLink>
        </React.Fragment>
      );
    case '/services/individuals/property/express':
    case '/services/individuals/property/express/calculate':
    case '/services/individuals/property/express/regulations':
      return (
        <React.Fragment>
          <Link to="/services/individuals/property" className="navbar__link">
            <BackIcon /> Экспресс-страхование
          </Link>
          <NavLink
            to="/services/individuals/property/express/calculate"
            className="navbar__link">
            Расчитать
          </NavLink>
          <NavLink
            to="/services/individuals/property/express/regulations"
            className="navbar__link">
            Правила
          </NavLink>
        </React.Fragment>
      );
    case '/services/individuals/property/estate':
    case '/services/individuals/property/estate/about':
    case '/services/individuals/property/estate/faq':
    case '/services/individuals/property/estate/manual':
    case '/services/individuals/property/estate/regulations':
      return (
        <React.Fragment>
          <Link to="/services/individuals/property" className="navbar__link">
            <BackIcon /> Имущество
          </Link>
          <Link
            to="/services/individuals/property/estate/about"
            className="navbar__link">
            Описание
          </Link>
          <Link
            to="/services/individuals/property/estate/faq"
            className="navbar__link">
            Вопрос-ответ
          </Link>
          <Link
            to="/services/individuals/property/estate/manual"
            className="navbar__link">
            Что делать при наступлении страхового события
          </Link>
          <Link
            to="/services/individuals/property/estate/regulations"
            className="navbar__link">
            Правила
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/mortgage':
    case '/services/individuals/mortgage/about':
    case '/services/individuals/mortgage/faq':
    case '/services/individuals/mortgage/regulations':
      return (
        <React.Fragment>
          <Link to="/services/individuals" className="navbar__link">
            <BackIcon /> Ипотека
          </Link>
          <Link
            to="/services/individuals/mortgage/about"
            className="navbar__link">
            Описание
          </Link>
          <Link
            to="/services/individuals/mortgage/faq"
            className="navbar__link">
            Вопрос-ответ
          </Link>
          <Link
            to="/services/individuals/mortgage/regulations"
            className="navbar__link">
            Правила
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/travel':
      return (
        <React.Fragment>
          <Link to="/services/individuals" className="navbar__link">
            <BackIcon /> Путешествия
          </Link>
          <Link
            to="/services/individuals/travel/abroad"
            className="navbar__link">
            Выезжающие за границу <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/individuals/travel/abroad':
    case '/services/individuals/travel/abroad/about':
    case '/services/individuals/travel/abroad/faq':
    case '/services/individuals/travel/abroad/manual':
    case '/services/individuals/travel/abroad/regulations':
    case '/services/individuals/travel/abroad/calculate':
      return (
        <React.Fragment>
          <Link to="/services/individuals/travel" className="navbar__link">
            <BackIcon /> Выезжающие за границу
          </Link>
          <Link
            to="/services/individuals/travel/abroad/about"
            className="navbar__link">
            Описание
          </Link>
          <Link
            to="/services/individuals/travel/abroad/faq"
            className="navbar__link">
            Вопрос-ответ
          </Link>
          <Link
            to="/services/individuals/travel/abroad/manual"
            className="navbar__link">
            Что делать при наступлении страхового события
          </Link>
          <Link
            to="/services/individuals/travel/abroad/regulations"
            className="navbar__link">
            Правила
          </Link>
          <Link
            to="/services/individuals/travel/abroad/calculate"
            className="navbar__link">
            Расчитать
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice':
      return (
        <React.Fragment>
          <Link to="/services" className="navbar__link">
            <BackIcon /> Корпоративным клиентам
          </Link>
          <Link to="/services/enterprice/property" className="navbar__link">
            Имущество <Icon />
          </Link>
          <Link to="/services/enterprice/liability" className="navbar__link">
            Ответственность <Icon />
          </Link>
          <Link to="/services/enterprice/staff" className="navbar__link">
            Персонал <Icon />
          </Link>
          <Link to="/services/enterprice/combined" className="navbar__link">
            Комбинированное <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property':
      return (
        <React.Fragment>
          <Link to="/services/enterprice" className="navbar__link">
            <BackIcon /> Имущество
          </Link>
          <Link
            to="/services/enterprice/property/company"
            className="navbar__link">
            Имущество предприятий <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/transport"
            className="navbar__link">
            Транспорт <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/animals"
            className="navbar__link">
            С/х животные <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/goods"
            className="navbar__link">
            Грузы <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/leasing"
            className="navbar__link">
            Лизинг <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/drilling"
            className="navbar__link">
            Буровые работы <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/title"
            className="navbar__link">
            Титул <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/emergency"
            className="navbar__link">
            Локализация и ликвидация ЧП <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property/company':
    case '/services/enterprice/property/company/about':
    case '/services/enterprice/property/company/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/property" className="navbar__link">
            <BackIcon /> Имущество предприятий
          </Link>
          <Link
            to="/services/enterprice/property/company/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/company/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property/transport':
    case '/services/enterprice/property/transport/about':
    case '/services/enterprice/property/transport/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/property" className="navbar__link">
            <BackIcon /> Транспорт
          </Link>
          <Link
            to="/services/enterprice/property/transport/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/transport/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property/animals':
    case '/services/enterprice/property/animals/about':
    case '/services/enterprice/property/animals/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/property" className="navbar__link">
            <BackIcon /> С/х животные
          </Link>
          <Link
            to="/services/enterprice/property/animals/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/animals/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property/goods':
    case '/services/enterprice/property/goods/about':
    case '/services/enterprice/property/goods/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/property" className="navbar__link">
            <BackIcon /> Грузы
          </Link>
          <Link
            to="/services/enterprice/property/goods/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/goods/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property/leasing':
    case '/services/enterprice/property/leasing/about':
    case '/services/enterprice/property/leasing/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/property" className="navbar__link">
            <BackIcon /> Лизинг
          </Link>
          <Link
            to="/services/enterprice/property/leasing/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/leasing/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property/drilling':
    case '/services/enterprice/property/drilling/about':
    case '/services/enterprice/property/drilling/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/property" className="navbar__link">
            <BackIcon /> Буровые работы
          </Link>
          <Link
            to="/services/enterprice/property/drilling/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/drilling/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property/title':
    case '/services/enterprice/property/title/about':
    case '/services/enterprice/property/title/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/property" className="navbar__link">
            <BackIcon /> Титул
          </Link>
          <Link
            to="/services/enterprice/property/title/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/title/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/property/emergency':
    case '/services/enterprice/property/emergency/about':
    case '/services/enterprice/property/emergency/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/property" className="navbar__link">
            <BackIcon /> Локализация и ликвидация ЧП
          </Link>
          <Link
            to="/services/enterprice/property/emergency/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/property/emergency/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability':
      return (
        <React.Fragment>
          <Link to="/services/enterprice" className="navbar__link">
            <BackIcon /> Ответственность
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            Добровольное страхование <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            Обязательное страхование <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/liability" className="navbar__link">
            <BackIcon /> Добровольное страхование
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/accident"
            className="navbar__link">
            Аварии и инциденты на опасном произвдстенном объекте <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/directors"
            className="navbar__link">
            Ответственность директоров (D&O) <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/capital"
            className="navbar__link">
            Капитальное строительство <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/civil"
            className="navbar__link">
            Общегражданская ответственность <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/defect"
            className="navbar__link">
            Причинение вреда вследствие недостатков товаров, работ и услуг{' '}
            <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/installation"
            className="navbar__link">
            Строительно-монтажные работы <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/nuclear"
            className="navbar__link">
            Причинение вреда вследствие ядерно-радиационной аварии <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/hydrotechnics"
            className="navbar__link">
            Эксплуатация гидротехнических сооружений <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/opo"
            className="navbar__link">
            Добровольная ответственность при эксллуатации ОПО <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/air"
            className="navbar__link">
            Владельцы воздушных судов и авиаперевозчики <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/car"
            className="navbar__link">
            Добровольная автогражданка <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/accident':
    case '/services/enterprice/liability/voluntary/accident/about':
    case '/services/enterprice/liability/voluntary/accident/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Аварии и инциденты на опасном произвдстенном объекте
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/accident/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/accident/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/directors':
    case '/services/enterprice/liability/voluntary/directors/about':
    case '/services/enterprice/liability/voluntary/directors/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Ответственность директоров (D&O)
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/directors/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/directors/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/capital':
    case '/services/enterprice/liability/voluntary/capital/about':
    case '/services/enterprice/liability/voluntary/capital/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Капитальное строительство
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/capital/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/capital/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/civil':
    case '/services/enterprice/liability/voluntary/civil/about':
    case '/services/enterprice/liability/voluntary/civil/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Общегражданская ответственность
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/civil/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/civil/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/defect':
    case '/services/enterprice/liability/voluntary/defect/about':
    case '/services/enterprice/liability/voluntary/defect/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Причинение вреда вследствие недостатков товаров, работ
            и услуг
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/defect/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/defect/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/installation':
    case '/services/enterprice/liability/voluntary/installation/about':
    case '/services/enterprice/liability/voluntary/installation/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Строительно-монтажные работы
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/installation/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/installation/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/nuclear':
    case '/services/enterprice/liability/voluntary/nuclear/about':
    case '/services/enterprice/liability/voluntary/nuclear/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Причинение вреда вследствие ядерно-радиационной аварии
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/nuclear/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/nuclear/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/hydrotechnics':
    case '/services/enterprice/liability/voluntary/hydrotechnics/about':
    case '/services/enterprice/liability/voluntary/hydrotechnics/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Эксплуатация гидротехнических сооружений
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/hydrotechnics/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/hydrotechnics/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/opo':
    case '/services/enterprice/liability/voluntary/opo/about':
    case '/services/enterprice/liability/voluntary/opo/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Добровольная ответственность при эксллуатации ОПО
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/opo/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/opo/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/air':
    case '/services/enterprice/liability/voluntary/air/about':
    case '/services/enterprice/liability/voluntary/air/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Владельцы воздушных судов и авиаперевозчики
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/air/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/air/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/voluntary/car':
    case '/services/enterprice/liability/voluntary/car/about':
    case '/services/enterprice/liability/voluntary/car/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/voluntary"
            className="navbar__link">
            <BackIcon /> Добровольная автогражданка
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/car/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/voluntary/car/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/compulsory':
    case '/services/enterprice/liability/compulsory/professional':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/liability" className="navbar__link">
            <BackIcon /> Обязательное страхование
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osopo"
            className="navbar__link">
            ОСОПО <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osago"
            className="navbar__link">
            ОСАГО <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osgop"
            className="navbar__link">
            ОСГОП <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/professional"
            className="navbar__link">
            Профессиональная ответственность
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/doctors"
            className="navbar__link">
            Врачи <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/appraisers"
            className="navbar__link">
            Оценищики <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/auditors"
            className="navbar__link">
            Аудиторы <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/detectives"
            className="navbar__link">
            Детективы и охранники <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/sellers"
            className="navbar__link">
            Продавцы <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/animators"
            className="navbar__link">
            Органиаторы общественных мероприятий <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/sanatoriums"
            className="navbar__link">
            Учреждения отдыха и оздоровления детей <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/liability/compulsory/osopo':
    case '/services/enterprice/liability/compulsory/osopo/about':
    case '/services/enterprice/liability/compulsory/osopo/faq':
    case '/services/enterprice/liability/compulsory/osopo/regulations':
    case '/services/enterprice/liability/compulsory/osopo/law':
    case '/services/enterprice/liability/compulsory/osopo/rates':
    case '/services/enterprice/liability/compulsory/osopo/calculate':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> ОСОПО
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osopo/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osopo/faq"
            className="navbar__link">
            Вопрос-ответ (сайт НССО) <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osopo/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osopo/law"
            className="navbar__link">
            №225-ФЗ (Закон ОСОПО) <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osopo/rates"
            className="navbar__link">
            Тарифы (Положение ЦБ) <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osopo/calculate"
            className="navbar__link">
            Расчет суммы возмещения (Постановление правительства) <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/compulsory/osago':
    case '/services/enterprice/liability/compulsory/osago/about':
    case '/services/enterprice/liability/compulsory/osago/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> ОСАГО
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osago/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osago/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/compulsory/osgop':
    case '/services/enterprice/liability/compulsory/osgop/about':
    case '/services/enterprice/liability/compulsory/osgop/faq':
    case '/services/enterprice/liability/compulsory/osgop/regulations':
    case '/services/enterprice/liability/compulsory/osgop/law':
    case '/services/enterprice/liability/compulsory/osgop/passengers':
    case '/services/enterprice/liability/compulsory/osgop/rates':
    case '/services/enterprice/liability/compulsory/osgop/calculate':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> ОСГОП
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osgop/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osgop/faq"
            className="navbar__link">
            Вопрос-ответ (сайт НССО) <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osgop/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osgop/law"
            className="navbar__link">
            №67-ФЗ (Закон ОСГОП) <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osgop/passengers"
            className="navbar__link">
            Правила расчета количества пассажиров (Постановление правительства){' '}
            <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osgop/rates"
            className="navbar__link">
            Тарифы (Указание ЦБ) <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/osgop/calculate"
            className="navbar__link">
            Расчет суммы возмещения (Постановление правительства) <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/liability/compulsory/doctors':
    case '/services/enterprice/liability/compulsory/doctors/about':
    case '/services/enterprice/liability/compulsory/doctors/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> Врачи
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/doctors/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/doctors/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );
    case '/services/enterprice/liability/compulsory/appraisers':
    case '/services/enterprice/liability/compulsory/appraisers/about':
    case '/services/enterprice/liability/compulsory/appraisers/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> Оценщики
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/appraisers/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/appraisers/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/liability/compulsory/auditors':
    case '/services/enterprice/liability/compulsory/auditors/about':
    case '/services/enterprice/liability/compulsory/auditors/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> Аудиторы
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/auditors/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/auditors/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/liability/compulsory/detectives':
    case '/services/enterprice/liability/compulsory/detectives/about':
    case '/services/enterprice/liability/compulsory/detectives/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> Детективы и охранники
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/detectives/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/detectives/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/liability/compulsory/sellers':
    case '/services/enterprice/liability/compulsory/sellers/about':
    case '/services/enterprice/liability/compulsory/sellers/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> Продавцы
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/sellers/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/sellers/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/liability/compulsory/animators':
    case '/services/enterprice/liability/compulsory/animators/about':
    case '/services/enterprice/liability/compulsory/animators/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> Органиаторы общественных мероприятий
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/animators/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/animators/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/liability/compulsory/sanatoriums':
    case '/services/enterprice/liability/compulsory/sanatoriums/about':
    case '/services/enterprice/liability/compulsory/sanatoriums/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> Учреждения отдыха и оздоровления детей
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/sanatoriums/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/sanatoriums/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/liability/compulsory/sanatoriums':
    case '/services/enterprice/liability/compulsory/sanatoriums/about':
    case '/services/enterprice/liability/compulsory/sanatoriums/regulations':
      return (
        <React.Fragment>
          <Link
            to="/services/enterprice/liability/compulsory"
            className="navbar__link">
            <BackIcon /> Учреждения отдыха и оздоровления детей
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/sanatoriums/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/liability/compulsory/sanatoriums/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/staff':
      return (
        <React.Fragment>
          <Link to="/services/enterprice" className="navbar__link">
            <BackIcon /> Персонал
          </Link>
          <Link to="/services/enterprice/staff/dms" className="navbar__link">
            ДМС <Icon />
          </Link>
          <Link
            to="/services/enterprice/staff/accident"
            className="navbar__link">
            Несчастные случаи на производстве <Icon />
          </Link>
          <Link to="/services/enterprice/staff/abroad" className="navbar__link">
            Выезд за границу <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/staff/dms':
    case '/services/enterprice/staff/dms/about':
    case '/services/enterprice/staff/dms/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/staff" className="navbar__link">
            <BackIcon /> ДМС
          </Link>
          <Link
            to="/services/enterprice/staff/dms/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/staff/dms/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/staff/accident':
    case '/services/enterprice/staff/accident/about':
    case '/services/enterprice/staff/accident/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/staff" className="navbar__link">
            <BackIcon /> Несчастные случаи на производстве
          </Link>
          <Link
            to="/services/enterprice/staff/accident/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/staff/accident/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/staff/abroad':
    case '/services/enterprice/staff/abroad/about':
    case '/services/enterprice/staff/abroad/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/staff" className="navbar__link">
            <BackIcon /> Выезд за границу
          </Link>
          <Link
            to="/services/enterprice/staff/abroad/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/staff/abroad/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/combined':
      return (
        <React.Fragment>
          <Link to="/services/enterprice" className="navbar__link">
            <BackIcon /> Комбинированное
          </Link>
          <Link to="/services/enterprice/combined/air" className="navbar__link">
            Комбинирование страхование средств воздушного транспорта <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/water"
            className="navbar__link">
            Комбинированное страхование средств водного транспорта <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/goods"
            className="navbar__link">
            Комбинированное страхование опасных грузов <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/company"
            className="navbar__link">
            Комплексное страхование имущества предприятий и организаций <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/drilling"
            className="navbar__link">
            Комбинированное страхование буровых работ <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/installation"
            className="navbar__link">
            Комплексное страхование строительно-монтажных рисков <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/mortgage"
            className="navbar__link">
            Добровольное ипотечное страхование <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/combined/air':
    case '/services/enterprice/combined/air/about':
    case '/services/enterprice/combined/air/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/combined" className="navbar__link">
            <BackIcon /> Комбинирование страхование средств воздушного
            транспорта
          </Link>
          <Link
            to="/services/enterprice/combined/air/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/air/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/combined/water':
    case '/services/enterprice/combined/water/about':
    case '/services/enterprice/combined/water/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/combined" className="navbar__link">
            <BackIcon /> Комбинированное страхование средств водного транспорта
          </Link>
          <Link
            to="/services/enterprice/combined/water/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/water/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/combined/goods':
    case '/services/enterprice/combined/goods/about':
    case '/services/enterprice/combined/goods/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/combined" className="navbar__link">
            <BackIcon /> Комбинированное страхование опасных грузов
          </Link>
          <Link
            to="/services/enterprice/combined/goods/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/goods/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/combined/company':
    case '/services/enterprice/combined/company/about':
    case '/services/enterprice/combined/company/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/combined" className="navbar__link">
            <BackIcon /> Комплексное страхование имущества предприятий и
            организаций
          </Link>
          <Link
            to="/services/enterprice/combined/company/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/company/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/combined/drilling':
    case '/services/enterprice/combined/drilling/about':
    case '/services/enterprice/combined/drilling/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/combined" className="navbar__link">
            <BackIcon /> Комбинированное страхование буровых работ
          </Link>
          <Link
            to="/services/enterprice/combined/drilling/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/drilling/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/combined/installation':
    case '/services/enterprice/combined/installation/about':
    case '/services/enterprice/combined/installation/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/combined" className="navbar__link">
            <BackIcon /> Комплексное страхование строительно-монтажных рисков
          </Link>
          <Link
            to="/services/enterprice/combined/installation/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/installation/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/enterprice/combined/mortgage':
    case '/services/enterprice/combined/mortgage/about':
    case '/services/enterprice/combined/mortgage/regulations':
      return (
        <React.Fragment>
          <Link to="/services/enterprice/combined" className="navbar__link">
            <BackIcon /> Добровольное ипотечное страхование
          </Link>
          <Link
            to="/services/enterprice/combined/mortgage/about"
            className="navbar__link">
            Описание <Icon />
          </Link>
          <Link
            to="/services/enterprice/combined/mortgage/regulations"
            className="navbar__link">
            Правила <Icon />
          </Link>
        </React.Fragment>
      );

    case '/services/delegates':
      return (
        <React.Fragment>
          <Link to="/services" className="navbar__link">
            <BackIcon /> Представители
          </Link>
        </React.Fragment>
      );
    case '/services/allRules':
      return (
        <React.Fragment>
          <Link to="/services" className="navbar__link">
            <BackIcon /> Все правила
          </Link>
        </React.Fragment>
      );
    case '/services/all':
      return (
        <React.Fragment>
          <Link to="/services" className="navbar__link">
            <BackIcon /> Все правила
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Памятники истории и культуры >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Автомобильные дороги >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Пластиковые карты >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Добровольное страхование пассажиров от несчастных случаев >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Профессиональная ответственность (строители, архитекторы,
            проектировщики, специалисты по инженерным изысканиям для
            строительства) >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Добровольное страхование ответственности экспедиторов >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Гражданская ответственность автоперевозчиков >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Гражданская ответственность за неисполнение или ненадлежащее
            исполнение обязательств по договору о реализации туристского
            продукта >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Фермерские хозяйства >
          </Link>
          <Link to="/services/individuals" className="navbar__link">
            Сельхозкультуры >
          </Link>
        </React.Fragment>
      );
  }
};

export default MultiLevelNavigation;
