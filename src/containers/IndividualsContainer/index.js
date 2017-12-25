import React, { Component } from 'react';
import ReactDom from 'react-dom';
import { Switch, Route, NavLink, Redirect } from 'react-router-dom';

// import Common from '../../components/Individuals/Common';
// import Accident from '../../components/Individuals/Accident';
// import OMS from '../../components/Individuals/OMS';
// import DMS from '../../components/Individuals/DMS';
// import KSIG from '../../components/Individuals/KSIG';
// import SIG from '../../components/Individuals/SIG';
// import NSG from '../../components/Individuals/NSG';
// import OSAGO from '../../components/Individuals/OSAGO';
// import EOSAGO from '../../components/Individuals/EOSAGO';
// import DAGO from '../../components/Individuals/DAGO';
// import KASKO from '../../components/Individuals/KASKO';
// import Mortgage from '../../components/Individuals/Mortgage';

class IndividualsContainer extends Component {
  componentDidMount() {
    const width = this.refs.container.offsetWidth * 0.25 - 30;
    this.refs.navbar.setAttribute('style', `width:${width}px`);
    this.refs.navbar.style.width = width;
  }

  // style={{ minHeight: 'calc(100vh)' }}
  render() {
    return (
      <div
        className="container"
        ref="container"
        style={{ minHeight: 'calc(100vh - 276px)' }}>
        <div className="row">
          <div className="col-3">
            <div className="navbar" ref="navbar">
              <div className="mb-16" />

              <NavLink
                to="/individuals/common"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Общая информация
              </NavLink>

              {/* <NavLink
                to="/individuals/accident"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Несчастные случаи
              </NavLink> */}

              <NavLink
                to="/individuals/ksig"
                className="navbar__link"
                activeClassName="navbar__link_active">
                КСИГ
              </NavLink>

              <NavLink
                to="/individuals/sig"
                className="navbar__link"
                activeClassName="navbar__link_active">
                СИГ
              </NavLink>

              <NavLink
                to="/individuals/nsg"
                className="navbar__link"
                activeClassName="navbar__link_active">
                НСГ
              </NavLink>

              {/* <NavLink
                to="/individuals/oms"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ОМС
              </NavLink> */}
              {/* 
              <NavLink
                to="/individuals/dms"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ДМС
              </NavLink> */}

              <NavLink
                to="/individuals/dago"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ДАГО
              </NavLink>

              <NavLink
                to="/individuals/osago"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ОСАГО
              </NavLink>

              <NavLink
                to="/individuals/eosago"
                className="navbar__link"
                activeClassName="navbar__link_active">
                ЕОСАГО
              </NavLink>

              <NavLink
                to="/individuals/kasko"
                className="navbar__link"
                activeClassName="navbar__link_active">
                КАСКО
              </NavLink>
              {/* 
              <NavLink
                to="/individuals/water"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Водный транспорт
              </NavLink> */}

              {/* <NavLink
                to="/individuals/property"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Имущество
              </NavLink> */}

              <NavLink
                to="/individuals/travel"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Путешествия
              </NavLink>

              <NavLink
                to="/individuals/mortgage"
                className="navbar__link"
                activeClassName="navbar__link_active">
                Ипотека
              </NavLink>
            </div>
          </div>
          <div className="col-9 border">
            <div className="mb-20" />
            <Switch>
              {/* <Redirect exact from="/individuals" to="/individuals/common" />
              <Route path="/individuals/common" component={Common} />
              <Route path="/individuals/accident" component={Accident} />
              <Route path="/individuals/oms" component={OMS} />
              <Route path="/individuals/dms" component={DMS} />
              <Route path="/individuals/ksig" component={KSIG} />
              <Route path="/individuals/sig" component={SIG} />
              <Route path="/individuals/nsg" component={NSG} />
              <Route path="/individuals/osago" component={OSAGO} />
              <Route path="/individuals/eosago" component={EOSAGO} />
              <Route path="/individuals/dago" component={DAGO} />
              <Route path="/individuals/kasko" component={KASKO} />
              <Route path="/individuals/water" component={Accident} />
              <Route path="/individuals/property" component={Accident} />
              <Route path="/individuals/travel" component={Accident} />
              <Route path="/individuals/mortgage" component={Mortgage} /> */}
            </Switch>
            <div className="mb-40" />
          </div>
        </div>
      </div>
    );
  }
}

export default IndividualsContainer;
