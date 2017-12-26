import React from 'react';
import { Switch, NavLink, Link } from 'react-router-dom';

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
          {/* <div> */}
          <Link to="/services/individuals" className="navbar__link">
            Частным клиентам <Icon />
          </Link>
          {/* </div> */}
          {/* <div> */}
          <Link to="/services" className="navbar__link">
            Корпоративным клиентам <Icon />
          </Link>
          {/* </div> */}
          {/* <div> */}
          <Link to="/services" className="navbar__link">
            Представители <Icon />
          </Link>
          {/* </div> */}
          {/* <div> */}
          <Link to="/services" className="navbar__link">
            Все правила <Icon />
          </Link>
          {/* </div> */}
        </React.Fragment>
      );
      break;
    case '/services/individuals':
      return (
        <React.Fragment>
          <div>
            <Link to="/services" className="navbar__link">
              <BackIcon /> Частным клиентам
            </Link>
          </div>
          <div>
            <Link to="/services/individuals/transport" className="navbar__link">
              Транспорт <Icon />
            </Link>
          </div>
          <div>
            <Link to="/services/individuals/health" className="navbar__link">
              Здоровье <Icon />
            </Link>
          </div>
          <div>
            <Link to="/services/individuals/property" className="navbar__link">
              Имущество <Icon />
            </Link>
          </div>
          <div>
            <Link to="/services/individuals/mortgage" className="navbar__link">
              Ипотека <Icon />
            </Link>
          </div>
          <div>
            <Link to="/services/individuals/travel" className="navbar__link">
              Путешествия <Icon />
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/transport':
    case '/services/individuals/transport/kasko2':
    case '/services/individuals/transport/kasko50':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              <BackIcon /> Транспорт
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/kasko"
              className="navbar__link">
              КАСКО <Icon />
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/kasko2"
              className="navbar__link">
              КАСКО до первого случая
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/kasko50"
              className="navbar__link">
              КАСКО 50
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/osago"
              className="navbar__link">
              ОСАГО <Icon />
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/eosago"
              className="navbar__link">
              е-ОСАГО <Icon />
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/voluntary"
              className="navbar__link">
              Добровольная автогражданка <Icon />
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/transport/kasko':
    case '/services/individuals/transport/kasko/about':
    case '/services/individuals/transport/kasko/faq':
    case '/services/individuals/transport/kasko/manual':
    case '/services/individuals/transport/kasko/regulations':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/transport" className="navbar__link">
              <BackIcon /> КАСКО
            </Link>
          </div>
          <div>
            <NavLink
              to="/services/individuals/transport/kasko/about"
              className="navbar__link"
              activeClassName="navbar__link_active">
              Описание
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/services/individuals/transport/kasko/faq"
              className="navbar__link"
              activeClassName="navbar__link_active">
              Вопрос-ответ
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/services/individuals/transport/kasko/manual"
              className="navbar__link"
              activeClassName="navbar__link_active">
              Что делать при наступлении страхового события
            </NavLink>
          </div>
          <div>
            <NavLink
              to="/services/individuals/transport/kasko/regulations"
              className="navbar__link"
              activeClassName="navbar__link_active">
              Правила
            </NavLink>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/transport/osago':
    case '/services/individuals/transport/osago/about':
    case '/services/individuals/transport/osago/regulations':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/transport" className="navbar__link">
              <BackIcon /> ОСАГО
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/osago/about"
              className="navbar__link">
              Описание
            </Link>
          </div>

          <div>
            <Link
              to="/services/individuals/transport/osago/regulations"
              className="navbar__link">
              Правила
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/transport/eosago':
    case '/services/individuals/transport/eosago/about':
    case '/services/individuals/transport/eosago/regulations':
    case '/services/individuals/transport/eosago/rates':
    case '/services/individuals/transport/eosago/faq':
    case '/services/individuals/transport/eosago/manual':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/transport" className="navbar__link">
              <BackIcon /> е-ОСАГО
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/eosago/about"
              className="navbar__link">
              Описание
            </Link>
          </div>

          <div>
            <Link
              to="/services/individuals/transport/eosago/regulations"
              className="navbar__link">
              Правила по е-ОСАГО
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/eosago/rates"
              className="navbar__link">
              Тарифы
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/eosago/faq"
              className="navbar__link">
              Вопрос-ответ
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/eosago/manual"
              className="navbar__link">
              Что делать при наступлении страхового события
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/transport/voluntary':
    case '/services/individuals/transport/voluntary/about':
    case '/services/individuals/transport/voluntary/faq':
    case '/services/individuals/transport/voluntary/regulations':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/transport" className="navbar__link">
              <BackIcon /> Добровольная автогражданка
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/voluntary/about"
              className="navbar__link">
              Описание
            </Link>
          </div>

          <div>
            <Link
              to="/services/individuals/transport/voluntary/faq"
              className="navbar__link">
              Вопрос-ответ
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/transport/voluntary/regulations"
              className="navbar__link">
              Правила
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/health':
    case '/services/individuals/health/sport':
    case '/services/individuals/health/kids':
    case '/services/individuals/health/family':
    case '/services/individuals/health/borrowers':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              <BackIcon /> Здоровье
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/accidents"
              className="navbar__link">
              Несчастные случаи <Icon />
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/sport"
              className="navbar__link">
              Спорт
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/kids"
              className="navbar__link">
              Дети
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/family"
              className="navbar__link">
              Семейный полис
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/borrowers"
              className="navbar__link">
              Заемщики
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/health/accidents':
    case '/services/individuals/health/accidents/about':
    case '/services/individuals/health/accidents/faq':
    case '/services/individuals/health/accidents/manual':
    case '/services/individuals/health/accidents/regulations':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/health" className="navbar__link">
              <BackIcon /> Несчастные случаи
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/accidents/about"
              className="navbar__link">
              Описание
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/accidents/faq"
              className="navbar__link">
              Вопрос-ответ
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/accidents/manual"
              className="navbar__link">
              Что делать при наступлении несчастного случая
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/health/accidents/regulations"
              className="navbar__link">
              Правила
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/property':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              <BackIcon /> Имущество
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/combined"
              className="navbar__link">
              Комбинированное <Icon />
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/economy"
              className="navbar__link">
              Эконом-страхование <Icon />
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/express"
              className="navbar__link">
              Экспресс-страхование <Icon />
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/estate"
              className="navbar__link">
              Имущество <Icon />
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/property/combined':
    case '/services/individuals/property/combined/about':
    case '/services/individuals/property/combined/faq':
    case '/services/individuals/property/combined/manual':
    case '/services/individuals/property/combined/regulations':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/property" className="navbar__link">
              <BackIcon /> Комбинированное
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/combined/about"
              className="navbar__link">
              Описание
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/combined/faq"
              className="navbar__link">
              Вопрос-ответ
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/combined/manual"
              className="navbar__link">
              Что делать при наступлении страхового события
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/combined/regulations"
              className="navbar__link">
              Правила
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/property/economy':
    case '/services/individuals/property/economy/calculate':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/property" className="navbar__link">
              <BackIcon /> Эконом-страхование
            </Link>
          </div>
          <div>
            <NavLink
              to="/services/individuals/property/economy/calculate"
              className="navbar__link">
              Рассчитать
            </NavLink>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/property/express':
    case '/services/individuals/property/express/calculate':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/property" className="navbar__link">
              <BackIcon /> Экспресс-страхование
            </Link>
          </div>
          <div>
            <NavLink
              to="/services/individuals/property/express/calculate"
              className="navbar__link">
              Рассчитать
            </NavLink>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/property/estate':
    case '/services/individuals/property/estate/about':
    case '/services/individuals/property/estate/faq':
    case '/services/individuals/property/estate/manual':
    case '/services/individuals/property/estate/regulations':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/property" className="navbar__link">
              <BackIcon /> Имущество
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/estate/about"
              className="navbar__link">
              Описание
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/estate/faq"
              className="navbar__link">
              Вопрос-ответ
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/estate/manual"
              className="navbar__link">
              Что делать при наступлении страхового события
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/property/estate/regulations"
              className="navbar__link">
              Правила
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/mortgage':
    case '/services/individuals/mortgage/about':
    case '/services/individuals/mortgage/faq':
    case '/services/individuals/mortgage/regulations':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              <BackIcon /> Ипотека
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/mortgage/about"
              className="navbar__link">
              Описание
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/mortgage/faq"
              className="navbar__link">
              Вопрос-ответ
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/mortgage/regulations"
              className="navbar__link">
              Правила
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/travel':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              <BackIcon /> Путешествия
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/travel/abroad"
              className="navbar__link">
              Выезжающим за рубеж <Icon />
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/individuals/travel/abroad':
    case '/services/individuals/travel/abroad/about':
    case '/services/individuals/travel/abroad/faq':
    case '/services/individuals/travel/abroad/manual':
    case '/services/individuals/travel/abroad/regulations':
    case '/services/individuals/travel/abroad/calculate':
      return (
        <React.Fragment>
          <div>
            <Link to="/services/individuals/travel" className="navbar__link">
              <BackIcon /> Выезжающим за рубеж
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/travel/abroad/about"
              className="navbar__link">
              Описание
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/travel/abroad/faq"
              className="navbar__link">
              Вопрос-ответ
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/travel/abroad/manual"
              className="navbar__link">
              Что делать при наступлении страхового события
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/travel/abroad/regulations"
              className="navbar__link">
              Правила
            </Link>
          </div>
          <div>
            <Link
              to="/services/individuals/travel/abroad/calculate"
              className="navbar__link">
              Рассчитать
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/enterprice':
      return (
        <React.Fragment>
          <div>
            <Link to="/services" className="navbar__link">
              <BackIcon /> Корпоративным клиентам
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Имущество <Icon />
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Ответственность <Icon />
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Персонал <Icon />
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Комбинированное <Icon />
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Путешествия <Icon />
            </Link>
          </div>
        </React.Fragment>
      );
      break;
    case '/services/all':
      return (
        <React.Fragment>
          <div>
            <Link to="/services" className="navbar__link">
              <BackIcon /> Все правила
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Памятники истории и культуры >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Автомобильные дороги >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Пластиковые карты >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Добровольное страхование пассажиров от несчастных случаев >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Профессиональная ответственность (строители, архитекторы,
              проектировщики, специалисты по инженерным изысканиям для
              строительства) >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Добровольное страхование ответственности экспедиторов >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Гражданская ответственность автоперевозчиков >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Гражданская ответственность за неисполнение или ненадлежащее
              исполнение обязательств по договору о реализации туристского
              продукта >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Фермерские хозяйства >
            </Link>
          </div>
          <div>
            <Link to="/services/individuals" className="navbar__link">
              Сельхозкультуры >
            </Link>
          </div>
        </React.Fragment>
      );
      break;
  }
};

export default MultiLevelNavigation;
