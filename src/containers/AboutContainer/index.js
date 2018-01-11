import React, { Component } from 'react';
import { Switch, Route, Redirect, NavLink } from 'react-router-dom';

import Heads from '../../components/about/Heads';
import Founders from '../../components/about/Founders';
import Licenses from '../../components/about/Licenses';
import Contacts from '../../components/about/Contacts';
import Ratings from '../../components/about/Ratings';
import Card from '../../components/about/Card';
import Capital from '../../components/about/Capital';
import ReportsMSFO from '../../components/about/ReportsMSFO';
import ReportsAccountAnnual from '../../components/about/ReportsAccountAnnual';
import ForShareHolders from '../../components/about/ForShareHolders';

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
                to="/about/founders"
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
              <NavLink
                to="/about/licenses"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Лицензии и документы
              </NavLink>
              
              <NavLink
                to="/about/contacts"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Контактная информация
              </NavLink>
              
              <NavLink
                to="/about/ratings"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Статус и рейтинги
              </NavLink>
              
              <NavLink
                to="/about/card"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Карточка предприятия
              </NavLink>
              <NavLink
                to="/about/capital"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Уставный капитал
              </NavLink>
              <NavLink
                to="/about/reportsMSFO"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Отчётность по МСФО
              </NavLink>
              <NavLink
                to="/about/reportsAccountAnnual"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Бухгалтерская отчетность
              </NavLink>
              <NavLink
                to="/about/forShareHolders"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Акционерам
              </NavLink>

{/*
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
              <Redirect exact from="/about" to="/about/founders" />
              <Route path="/about/founders" component={Founders} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/heads" />
              <Route path="/about/heads" component={Heads} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/licenses" />
              <Route path="/about/licenses" component={Licenses} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/contacts" />
              <Route path="/about/contacts" component={Contacts} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/ratings" />
              <Route path="/about/ratings" component={Ratings} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/card" />
              <Route path="/about/card" component={Card} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/capital" />
              <Route path="/about/capital" component={Capital} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/reportsMSFO" />
              <Route path="/about/reportsMSFO" component={ReportsMSFO} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/reportsAccountAnnual" />
              <Route path="/about/reportsAccountAnnual" component={ReportsAccountAnnual} />
            </Switch>
            <Switch>
              <Redirect exact from="/about" to="/about/forShareHolders" />
              <Route path="/about/forShareHolders" component={ForShareHolders} />
            </Switch>

            <div className="mb-40" />
          </div>
        </div>
      </div>
    );
  }
}

export default AboutContainer;
