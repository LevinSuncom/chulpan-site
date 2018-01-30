import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { Modal } from 'react-modal';

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
      '/services/individuals/transport/osago/faq',
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
      '/services/enterprise',

      '/services/enterprise/property',
      '/services/enterprise/property/company',
      '/services/enterprise/property/company/about',
      '/services/enterprise/property/company/regulations',

      '/services/enterprise/property/transport',
      '/services/enterprise/property/transport/about',
      '/services/enterprise/property/transport/regulations',

      '/services/enterprise/property/animals',
      '/services/enterprise/property/animals/about',
      '/services/enterprise/property/animals/regulations',

      '/services/enterprise/property/goods',
      '/services/enterprise/property/goods/about',
      '/services/enterprise/property/goods/regulations',

      '/services/enterprise/property/leasing',
      '/services/enterprise/property/leasing/about',
      '/services/enterprise/property/leasing/regulations',

      '/services/enterprise/property/drilling',
      '/services/enterprise/property/drilling/about',
      '/services/enterprise/property/drilling/regulations',

      '/services/enterprise/property/title',
      '/services/enterprise/property/title/about',
      '/services/enterprise/property/title/regulations',

      '/services/enterprise/property/emergency',
      '/services/enterprise/property/emergency/about',
      '/services/enterprise/property/emergency/regulations',

      '/services/enterprise/liability',

      '/services/enterprise/liability/voluntary',

      '/services/enterprise/liability/voluntary/accident',
      '/services/enterprise/liability/voluntary/accident/about',
      '/services/enterprise/liability/voluntary/accident/regulations',

      '/services/enterprise/liability/voluntary/directors',
      '/services/enterprise/liability/voluntary/directors/about',
      '/services/enterprise/liability/voluntary/directors/regulations',

      '/services/enterprise/liability/voluntary/capital',
      '/services/enterprise/liability/voluntary/capital/about',
      '/services/enterprise/liability/voluntary/capital/regulations',

      '/services/enterprise/liability/voluntary/civil',
      '/services/enterprise/liability/voluntary/civil/about',
      '/services/enterprise/liability/voluntary/civil/regulations',

      '/services/enterprise/liability/voluntary/defect',
      '/services/enterprise/liability/voluntary/defect/about',
      '/services/enterprise/liability/voluntary/defect/regulations',

      '/services/enterprise/liability/voluntary/installation',
      '/services/enterprise/liability/voluntary/installation/about',
      '/services/enterprise/liability/voluntary/installation/regulations',

      '/services/enterprise/liability/voluntary/nuclear',
      '/services/enterprise/liability/voluntary/nuclear/about',
      '/services/enterprise/liability/voluntary/nuclear/regulations',

      '/services/enterprise/liability/voluntary/hydrotechnics',
      '/services/enterprise/liability/voluntary/hydrotechnics/about',
      '/services/enterprise/liability/voluntary/hydrotechnics/regulations',

      '/services/enterprise/liability/voluntary/opo',
      '/services/enterprise/liability/voluntary/opo/about',
      '/services/enterprise/liability/voluntary/opo/regulations',

      '/services/enterprise/liability/voluntary/air',
      '/services/enterprise/liability/voluntary/air/about',
      '/services/enterprise/liability/voluntary/air/regulations',

      '/services/enterprise/liability/voluntary/car',
      '/services/enterprise/liability/voluntary/car/about',
      '/services/enterprise/liability/voluntary/car/regulations',

      '/services/enterprise/liability/compulsory',
      '/services/enterprise/liability/compulsory/osopo',
      '/services/enterprise/liability/compulsory/osopo/about',
      '/services/enterprise/liability/compulsory/osopo/faq',
      '/services/enterprise/liability/compulsory/osopo/regulations',
      '/services/enterprise/liability/compulsory/osopo/law',
      '/services/enterprise/liability/compulsory/osopo/rates',
      '/services/enterprise/liability/compulsory/osopo/calculate',

      '/services/enterprise/liability/compulsory/osago',
      '/services/enterprise/liability/compulsory/osago/about',
      '/services/enterprise/liability/compulsory/osago/regulations',

      '/services/enterprise/liability/compulsory/osgop',
      '/services/enterprise/liability/compulsory/osgop/about',
      '/services/enterprise/liability/compulsory/osgop/faq',
      '/services/enterprise/liability/compulsory/osgop/regulations',
      '/services/enterprise/liability/compulsory/osgop/law',
      '/services/enterprise/liability/compulsory/osgop/passengers',
      '/services/enterprise/liability/compulsory/osgop/rates',
      '/services/enterprise/liability/compulsory/osgop/calculate',

      '/services/enterprise/liability/compulsory/professional',

      '/services/enterprise/liability/compulsory/doctors',
      '/services/enterprise/liability/compulsory/doctors/about',
      '/services/enterprise/liability/compulsory/doctors/regulations',

      '/services/enterprise/liability/compulsory/appraisers',
      '/services/enterprise/liability/compulsory/appraisers/about',
      '/services/enterprise/liability/compulsory/appraisers/regulations',

      '/services/enterprise/liability/compulsory/auditors',
      '/services/enterprise/liability/compulsory/auditors/about',
      '/services/enterprise/liability/compulsory/auditors/regulations',

      '/services/enterprise/liability/compulsory/detectives',
      '/services/enterprise/liability/compulsory/detectives/about',
      '/services/enterprise/liability/compulsory/detectives/regulations',

      '/services/enterprise/liability/compulsory/sellers',
      '/services/enterprise/liability/compulsory/sellers/about',
      '/services/enterprise/liability/compulsory/sellers/regulations',

      '/services/enterprise/liability/compulsory/animators',
      '/services/enterprise/liability/compulsory/animators/about',
      '/services/enterprise/liability/compulsory/animators/regulations',

      '/services/enterprise/liability/compulsory/sanatoriums',
      '/services/enterprise/liability/compulsory/sanatoriums/about',
      '/services/enterprise/liability/compulsory/sanatoriums/regulations',

      '/services/enterprise/staff',

      '/services/enterprise/staff/dms',
      '/services/enterprise/staff/dms/about',
      '/services/enterprise/staff/dms/regulations',

      '/services/enterprise/staff/accident',
      '/services/enterprise/staff/accident/about',
      '/services/enterprise/staff/accident/regulations',

      '/services/enterprise/staff/abroad',
      '/services/enterprise/staff/abroad/about',
      '/services/enterprise/staff/abroad/regulations',

      '/services/enterprise/combined',

      '/services/enterprise/combined/air',
      '/services/enterprise/combined/air/about',
      '/services/enterprise/combined/air/regulations',

      '/services/enterprise/combined/water',
      '/services/enterprise/combined/water/about',
      '/services/enterprise/combined/water/regulations',

      '/services/enterprise/combined/goods',
      '/services/enterprise/combined/goods/about',
      '/services/enterprise/combined/goods/regulations',

      '/services/enterprise/combined/company',
      '/services/enterprise/combined/company/about',
      '/services/enterprise/combined/company/regulations',

      '/services/enterprise/combined/drilling',
      '/services/enterprise/combined/drilling/about',
      '/services/enterprise/combined/drilling/regulations',

      '/services/enterprise/combined/installation',
      '/services/enterprise/combined/installation/about',
      '/services/enterprise/combined/installation/regulations',

      '/services/enterprise/combined/mortgage',
      '/services/enterprise/combined/mortgage/about',
      '/services/enterprise/combined/mortgage/regulations',

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
