import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
// import { Modal } from 'react-modal';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import MainPageContainer from '../MainPageContainer';
import IndividualsContainer from '../IndividualsContainer';
import EnterpriseContainer from '../EnterpriseContainer';
import AboutContainer from '../AboutContainer';
import NewsContainer from '../NewsContainer';

import Services from '../../components/Services';

export default class AppContainer extends Component {
  render() {
    const routes = [
      '/services',
      // Частным клиентам
      '/services/individuals',

      '/services/individuals/transport',

      '/services/individuals/transport/kasko',
      '/services/individuals/transport/kasko/about',
      '/services/individuals/transport/kasko/faq',
      '/services/individuals/transport/kasko/manual',
      '/services/individuals/transport/kasko/regulations',

      '/services/individuals/transport/kasko2',

      '/services/individuals/transport/kasko50',

      '/services/individuals/transport/osago',
      '/services/individuals/transport/osago/about',
      '/services/individuals/transport/osago/regulations',

      '/services/individuals/transport/eosago',
      '/services/individuals/transport/eosago/about',
      '/services/individuals/transport/eosago/regulations',
      '/services/individuals/transport/eosago/rates',
      '/services/individuals/transport/eosago/faq',
      '/services/individuals/transport/eosago/manual',

      '/services/individuals/transport/voluntary',
      '/services/individuals/transport/voluntary/about',
      '/services/individuals/transport/voluntary/faq',
      '/services/individuals/transport/voluntary/regulations',

      '/services/individuals/health',

      '/services/individuals/health/accidents',
      '/services/individuals/health/accidents/about',
      '/services/individuals/health/accidents/faq',
      '/services/individuals/health/accidents/manual',
      '/services/individuals/health/accidents/regulations',

      '/services/individuals/health/sport',

      '/services/individuals/health/kids',

      '/services/individuals/health/family',

      '/services/individuals/health/borrowers',

      '/services/individuals/property',

      '/services/individuals/property/combined',
      '/services/individuals/property/combined/about',
      '/services/individuals/property/combined/faq',
      '/services/individuals/property/combined/manual',
      '/services/individuals/property/combined/regulations',

      '/services/individuals/property/economy',
      '/services/individuals/property/economy/calculate',

      '/services/individuals/property/express',
      '/services/individuals/property/express/regulations',
      '/services/individuals/property/express/calculate',

      '/services/individuals/property/estate',
      '/services/individuals/property/estate/about',
      '/services/individuals/property/estate/faq',
      '/services/individuals/property/estate/manual',
      '/services/individuals/property/estate/regulations',

      '/services/individuals/mortgage',
      '/services/individuals/mortgage/about',
      '/services/individuals/mortgage/faq',
      '/services/individuals/mortgage/regulations',

      '/services/individuals/travel',
      '/services/individuals/travel/abroad',
      '/services/individuals/travel/abroad/about',
      '/services/individuals/travel/abroad/faq',
      '/services/individuals/travel/abroad/manual',
      '/services/individuals/travel/abroad/regulations',
      '/services/individuals/travel/abroad/calculate',
      // Корпоративным клиентам
      '/services/enterprice',

      '/services/enterprice/property',
      '/services/enterprice/property/company',
      '/services/enterprice/property/company/about',
      '/services/enterprice/property/company/regulations',

      '/services/enterprice/property/transport',
      '/services/enterprice/property/transport/about',
      '/services/enterprice/property/transport/regulations',

      '/services/enterprice/property/animals',
      '/services/enterprice/property/animals/about',
      '/services/enterprice/property/animals/regulations',

      '/services/enterprice/property/goods',
      '/services/enterprice/property/goods/about',
      '/services/enterprice/property/goods/regulations',

      '/services/enterprice/property/leasing',
      '/services/enterprice/property/leasing/about',
      '/services/enterprice/property/leasing/regulations',

      '/services/enterprice/property/drilling',
      '/services/enterprice/property/drilling/about',
      '/services/enterprice/property/drilling/regulations',

      '/services/enterprice/property/title',
      '/services/enterprice/property/title/about',
      '/services/enterprice/property/title/regulations',

      '/services/enterprice/property/emergency',
      '/services/enterprice/property/emergency/about',
      '/services/enterprice/property/emergency/regulations',

      '/services/enterprice/liability',

      '/services/enterprice/liability/voluntary',

      '/services/enterprice/liability/voluntary/accident',
      '/services/enterprice/liability/voluntary/accident/about',
      '/services/enterprice/liability/voluntary/accident/regulations',

      '/services/enterprice/liability/voluntary/directors',
      '/services/enterprice/liability/voluntary/directors/about',
      '/services/enterprice/liability/voluntary/directors/regulations',

      '/services/enterprice/liability/voluntary/capital',
      '/services/enterprice/liability/voluntary/capital/about',
      '/services/enterprice/liability/voluntary/capital/regulations',

      '/services/enterprice/liability/voluntary/civil',
      '/services/enterprice/liability/voluntary/civil/about',
      '/services/enterprice/liability/voluntary/civil/regulations',

      '/services/enterprice/liability/voluntary/defect',
      '/services/enterprice/liability/voluntary/defect/about',
      '/services/enterprice/liability/voluntary/defect/regulations',

      '/services/enterprice/liability/voluntary/installation',
      '/services/enterprice/liability/voluntary/installation/about',
      '/services/enterprice/liability/voluntary/installation/regulations',

      '/services/enterprice/liability/voluntary/nuclear',
      '/services/enterprice/liability/voluntary/nuclear/about',
      '/services/enterprice/liability/voluntary/nuclear/regulations',

      '/services/enterprice/liability/voluntary/hydrotechnics',
      '/services/enterprice/liability/voluntary/hydrotechnics/about',
      '/services/enterprice/liability/voluntary/hydrotechnics/regulations',

      '/services/enterprice/liability/voluntary/opo',
      '/services/enterprice/liability/voluntary/opo/about',
      '/services/enterprice/liability/voluntary/opo/regulations',

      '/services/enterprice/liability/voluntary/air',
      '/services/enterprice/liability/voluntary/air/about',
      '/services/enterprice/liability/voluntary/air/regulations',

      '/services/enterprice/liability/voluntary/car',
      '/services/enterprice/liability/voluntary/car/about',
      '/services/enterprice/liability/voluntary/car/regulations',

      '/services/enterprice/liability/compulsory',
      '/services/enterprice/liability/compulsory/osopo',
      '/services/enterprice/liability/compulsory/osopo/about',
      '/services/enterprice/liability/compulsory/osopo/faq',
      '/services/enterprice/liability/compulsory/osopo/regulations',
      '/services/enterprice/liability/compulsory/osopo/law',
      '/services/enterprice/liability/compulsory/osopo/rates',
      '/services/enterprice/liability/compulsory/osopo/calculate',

      '/services/enterprice/liability/compulsory/osago',
      '/services/enterprice/liability/compulsory/osago/about',
      '/services/enterprice/liability/compulsory/osago/regulations',

      '/services/enterprice/liability/compulsory/osgop',
      '/services/enterprice/liability/compulsory/osgop/about',
      '/services/enterprice/liability/compulsory/osgop/faq',
      '/services/enterprice/liability/compulsory/osgop/regulations',
      '/services/enterprice/liability/compulsory/osgop/law',
      '/services/enterprice/liability/compulsory/osgop/passengers',
      '/services/enterprice/liability/compulsory/osgop/rates',
      '/services/enterprice/liability/compulsory/osgop/calculate',

      '/services/enterprice/liability/compulsory/professional',

      '/services/enterprice/liability/compulsory/doctors',
      '/services/enterprice/liability/compulsory/doctors/about',
      '/services/enterprice/liability/compulsory/doctors/regulations',

      '/services/enterprice/liability/compulsory/appraisers',
      '/services/enterprice/liability/compulsory/appraisers/about',
      '/services/enterprice/liability/compulsory/appraisers/regulations',

      '/services/enterprice/liability/compulsory/auditors',
      '/services/enterprice/liability/compulsory/auditors/about',
      '/services/enterprice/liability/compulsory/auditors/regulations',

      '/services/enterprice/liability/compulsory/detectives',
      '/services/enterprice/liability/compulsory/detectives/about',
      '/services/enterprice/liability/compulsory/detectives/regulations',

      '/services/enterprice/liability/compulsory/sellers',
      '/services/enterprice/liability/compulsory/sellers/about',
      '/services/enterprice/liability/compulsory/sellers/regulations',

      '/services/enterprice/liability/compulsory/animators',
      '/services/enterprice/liability/compulsory/animators/about',
      '/services/enterprice/liability/compulsory/animators/regulations',

      '/services/enterprice/liability/compulsory/sanatoriums',
      '/services/enterprice/liability/compulsory/sanatoriums/about',
      '/services/enterprice/liability/compulsory/sanatoriums/regulations',

      '/services/enterprice/staff',

      '/services/enterprice/staff/dms',
      '/services/enterprice/staff/dms/about',
      '/services/enterprice/staff/dms/regulations',

      '/services/enterprice/staff/accident',
      '/services/enterprice/staff/accident/about',
      '/services/enterprice/staff/accident/regulations',

      '/services/enterprice/staff/abroad',
      '/services/enterprice/staff/abroad/about',
      '/services/enterprice/staff/abroad/regulations',

      '/services/enterprice/combined',

      '/services/enterprice/combined/air',
      '/services/enterprice/combined/air/about',
      '/services/enterprice/combined/air/regulations',

      '/services/enterprice/combined/water',
      '/services/enterprice/combined/water/about',
      '/services/enterprice/combined/water/regulations',

      '/services/enterprice/combined/goods',
      '/services/enterprice/combined/goods/about',
      '/services/enterprice/combined/goods/regulations',

      '/services/enterprice/combined/company',
      '/services/enterprice/combined/company/about',
      '/services/enterprice/combined/company/regulations',

      '/services/enterprice/combined/drilling',
      '/services/enterprice/combined/drilling/about',
      '/services/enterprice/combined/drilling/regulations',

      '/services/enterprice/combined/installation',
      '/services/enterprice/combined/installation/about',
      '/services/enterprice/combined/installation/regulations',

      '/services/enterprice/combined/mortgage',
      '/services/enterprice/combined/mortgage/about',
      '/services/enterprice/combined/mortgage/regulations',

      // Представители
      '/services/delegates',
      // Все правила
      '/services/allRules',

      '/services/all/culture',
      '/services/all/culture/about',
      '/services/all/culture/regulations',

      '/services/all/roads',
      '/services/all/roads/about',
      '/services/all/roads/regulations',

      '/services/all/cards',
      '/services/all/cards/about',
      '/services/all/cards/regulations',

      '/services/all/passengers',
      '/services/all/passengers/about',
      '/services/all/passengers/regulations',

      '/services/all/professionals',
      '/services/all/professionals/about',
      '/services/all/professionals/regulations',

      '/services/all/forwarders',
      '/services/all/forwarders/about',
      '/services/all/forwarders/regulations',

      '/services/all/carriers',
      '/services/all/carriers/about',
      '/services/all/carriers/regulations',

      '/services/all/travel',
      '/services/all/travel/about',
      '/services/all/travel/regulations',

      '/services/all/farm',
      '/services/all/farm/about',
      '/services/all/farm/regulations',

      '/services/all/agriculture',
      '/services/all/agriculture/about',
      '/services/all/agriculture/regulations'
    ];
    return (
      <React.Fragment>
        <div className="app-container">
          <Header />
          <div className="h-60" style={{ flexShrink: 0 }} />

          <Switch>
            <Redirect exact from="/" to="/main" />
            <Route exact path="/main" component={MainPageContainer} />
            <Route path="/individuals" component={IndividualsContainer} />
            <Route path="/enterprise" component={EnterpriseContainer} />
            <Route path="/about" component={AboutContainer} />
            <Route exact path="/news/:id" component={NewsContainer} />
            {routes.map(route => (
              <Route key={route} exact path={route} component={Services} />
            ))}
          </Switch>
          <Footer />
        </div>
      </React.Fragment>
    );
  }
}
