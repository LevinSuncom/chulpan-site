import React, { Component } from 'react';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

// import Common from '../../components/Enterprise/Common';
// import Danger from '../../components/Enterprise/Danger';
// import OSAGO from '../../components/Individuals/OSAGO';
// import Carrier from '../../components/Enterprise/Carrier';
// import VZR from '../../components/Enterprise/VZR';
// import DMS from '../../components/Enterprise/DMS';
// import NSG from '../../components/Enterprise/NSG';

import Breadcrumbs from '../../components/Breadcrumbs';

class EnterpriseContainer extends Component {
  componentDidMount() {
    const width = this.refs.container.offsetWidth * 0.25 - 30;
    this.refs.navbar.setAttribute('style', `width:${width}px`);
    this.refs.navbar.style.width = width;
  }
  render() {
    return (
      <div
        className="container"
        ref="container"
        style={{ minHeight: 'calc(100vh - 276px)' }}>
        <div className="row">
          <div className="col-3 ">
            <div className="navbar" ref="navbar">
              <div className="mb-28" />

              {/* <NavLink
                to="/enterprise/danger"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Опасные объекты
              </NavLink> */}
              {/* <NavLink
                to="/enterprise/osago"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ОСАГО
              </NavLink> */}
              {/* <NavLink
                to="/enterprise/carrier"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Перевозчик
              </NavLink> */}
              <NavLink
                to="/enterprise/common"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Общая информация
              </NavLink>
              <NavLink
                to="/enterprise/vzr"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ВЗР
              </NavLink>
              <NavLink
                to="/enterprise/dms"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ДМС
              </NavLink>
              <NavLink
                to="/enterprise/nsg"
                className="navbar__link"
                activeClassName="navbar__link_active">
                НСГ
              </NavLink>
            </div>
          </div>
          <div className="col-9 border">
            <div className="mb-20" />
            <Switch>
              {/* <Redirect exact from="/enterprise" to="/enterprise/common" />
              <Route exact path="/enterprise/common" component={Common} />
              <Route exact path="/enterprise/danger" component={Danger} />
              <Route exact path="/enterprise/osago" component={OSAGO} />
              <Route exact path="/enterprise/carrier" component={Carrier} />
              <Route exact path="/enterprise/vzr" component={VZR} />
              <Route exact path="/enterprise/dms" component={DMS} />
              <Route exact path="/enterprise/nsg" component={NSG} /> */}
            </Switch>
            <div className="mb-40" />
          </div>
        </div>
      </div>
    );
  }
}

export default EnterpriseContainer;
