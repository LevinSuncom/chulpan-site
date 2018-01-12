import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Heads from '../../components/about/Heads';
// import Common from '../../components/Individuals/Common';
// import Accident from '../../components/Individuals/Accident';
// import OMS from '../../components/Individuals/OMS';

class AboutContainer extends Component {
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-3 ">
            <div>
              <div className="mb-28" />
              <NavLink
                to="/about/1"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Учредители и акционеры
              </NavLink>
              <NavLink
                to="/about/heads"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Руководство компании
              </NavLink>
              {/* <NavLink
                to="/about/3"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Лицензии и документы
              </NavLink>
              <NavLink
                to="/about/4"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Контактная информация
              </NavLink>
              <NavLink
                to="/about/5"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Статус и рейтинги
              </NavLink>
              <NavLink
                to="/about/6"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Карточка предприятия
              </NavLink>
              <NavLink
                to="/about/7"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Уставный капитал
              </NavLink>
              <NavLink
                to="/about/8"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ООО СМО Чулпан-Мед
              </NavLink>
              <NavLink
                to="/about/9"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ООО СК Чулпан-Жизнь
              </NavLink>
              <NavLink
                to="/about/10"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ООО СМО Чулпан-Мед
              </NavLink>
              <NavLink
                to="/about/11"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ООО "ЛПЦ "Чулпан-Медицина"
              </NavLink>
              <NavLink
                to="/about/12"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Отчетность
              </NavLink>
              <NavLink
                to="/about/13"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Акционерам компании
              </NavLink>
              <NavLink
                to="/about/14"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Защита персональных данных
              </NavLink>
              <NavLink
                to="/about/15"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Информация о компании
              </NavLink>
              <NavLink
                to="/about/17"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ПОМНИМ ГОРДИМСЯ
              </NavLink>
              <NavLink
                to="/about/18"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Клубная карта Чулпан
              </NavLink>
              <NavLink
                to="/about/19"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Реестр страховых агентов
              </NavLink> */}
            </div>
          </div>
          <div className="col-9">
            <div className="mb-20" />
            {/* <Switch>
              <Redirect exact from="/individuals" to="/individuals/common" />
              <Route path="/individuals/common" component={Common} />
              <Route path="/individuals/accident" component={Accident} />
              <Route path="/individuals/oms" component={OMS} />
            </Switch> */}
            <Switch>
              <Redirect exact from="/about" to="/about/heads" />
              <Route path="/about/heads" component={Heads} />
            </Switch>
            <div className="mb-40" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
