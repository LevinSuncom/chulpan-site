import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MultiLevelNavigation from '../MultiLevelNavigation';
import CalculatorEconomy from '../CalculatorEconomy';
import CalculatorExpress from '../CalculatorExpress';

import {
  Individuals,
  // Здоровье
  IndividualsHealthAccidentsAbout,
  IndividualsHealthAccidentsFaq,
  IndividualsHealthAccidentsRegulations,
  IndividualsHealthSport,
  IndividualsHealthKids,
  IndividualsHealthFamily,
  IndividualsHealthBorrowers,
  // Имущество
  IndividualsPropertyCombinedAbout,
  IndividualsPropertyCombinedManual,
  IndividualsPropertyEconomy,
  IndividualsPropertyExpress,
  IndividualsPropertyEstateAbout,
  IndividualsPropertyEstateFaq,
  IndividualsPropertyEstateManual,
  // Транспорт
  IndividualsTransportEOSAGOAbout,
  IndividualsTransportKASKO2,
  IndividualsTransportKASKO50,
  IndividualsTransportKASKOAbout,
  IndividualsTransportKASKOManual,
  IndividualsTransportKASKORegulations,
  IndividualsTransportOSAGOAbout,
  IndividualsTransportEOSAGOManual,
  IndividualsTransportOSAGORegulations,
  IndividualsTransportEOSAGOFaq,
  IndividualsTransportVoluntaryAbout,
  // Ипотека
  IndividualsMortgageAbout,
  // Путешествия
  IndividualsTravelAbroadAbout,
  IndividualsTravelAbroadFaq,
  IndividualsTravelAbroadManual
} from '../products';

import Breadcrumbs from '../Breadcrumbs';

export default class Services extends Component {
  render() {
    return (
      <div className="container" style={{ marginTop: '20px' }}>
        <div className="row">
          <div className="col-3">
            <MultiLevelNavigation path={this.props.location.pathname} />
          </div>
          <div className="col-9">
            <Breadcrumbs />
            <Switch>
              <Route
                exact
                path="/services/individuals"
                component={Individuals}
              />
              <Redirect
                exact
                from="/services/individuals/health/accidents"
                to="/services/individuals/health/accidents/about"
              />
              <Route
                path="/services/individuals/health/accidents/about"
                component={IndividualsHealthAccidentsAbout}
              />
              <Route
                path="/services/individuals/health/accidents/faq"
                component={IndividualsHealthAccidentsFaq}
              />
              <Route
                path="/services/individuals/health/accidents/regulations"
                component={IndividualsHealthAccidentsRegulations}
              />
              <Route
                path="/services/individuals/health/sport"
                component={IndividualsHealthSport}
              />
              <Route
                path="/services/individuals/health/kids"
                component={IndividualsHealthKids}
              />
              <Route
                path="/services/individuals/health/family"
                component={IndividualsHealthFamily}
              />
              <Route
                path="/services/individuals/health/borrowers"
                component={IndividualsHealthBorrowers}
              />
              <Redirect
                exact
                from="/services/individuals/property/combined"
                to="/services/individuals/property/combined/about"
              />
              <Route
                path="/services/individuals/property/combined/about"
                component={IndividualsPropertyCombinedAbout}
              />
              <Route
                path="/services/individuals/property/combined/manual"
                component={IndividualsPropertyCombinedManual}
              />
              <Route
                exact
                path="/services/individuals/property/economy"
                component={IndividualsPropertyEconomy}
              />
              <Route
                path="/services/individuals/property/economy/calculate"
                component={CalculatorEconomy}
              />
              <Route
                exact
                path="/services/individuals/property/express"
                component={IndividualsPropertyExpress}
              />
              <Route
                path="/services/individuals/property/express/calculate"
                component={CalculatorExpress}
              />
              <Redirect
                exact
                from="/services/individuals/property/estate"
                to="/services/individuals/property/estate/about"
              />
              <Route
                path="/services/individuals/property/estate/about"
                component={IndividualsPropertyEstateAbout}
              />
              <Route
                path="/services/individuals/property/estate/faq"
                component={IndividualsPropertyEstateFaq}
              />
              <Route
                path="/services/individuals/property/estate/manual"
                component={IndividualsPropertyEstateManual}
              />

              <Redirect
                exact
                from="/services/individuals/mortgage"
                to="/services/individuals/mortgage/about"
              />
              <Route
                path="/services/individuals/mortgage/about"
                component={IndividualsMortgageAbout}
              />
              <Redirect
                exact
                from="/services/individuals/travel/abroad"
                to="/services/individuals/travel/abroad/about"
              />
              <Route
                path="/services/individuals/travel/abroad/about"
                component={IndividualsTravelAbroadAbout}
              />
              <Route
                path="/services/individuals/travel/abroad/faq"
                component={IndividualsTravelAbroadFaq}
              />
              <Route
                path="/services/individuals/travel/abroad/manual"
                component={IndividualsTravelAbroadManual}
              />
              <Route
                path="/services/individuals/transport/eosago/about"
                component={IndividualsTransportEOSAGOAbout}
              />
              <Route
                path="/services/individuals/transport/kasko2"
                component={IndividualsTransportKASKO2}
              />
              <Route
                path="/services/individuals/transport/kasko50"
                component={IndividualsTransportKASKO50}
              />
              <Redirect
                exact
                from="/services/individuals/transport/kasko"
                to="/services/individuals/transport/kasko/about"
              />
              <Route
                path="/services/individuals/transport/kasko/about"
                component={IndividualsTransportKASKOAbout}
              />
              <Route
                path="/services/individuals/transport/kasko/manual"
                component={IndividualsTransportKASKOManual}
              />
              <Route
                path="/services/individuals/transport/kasko/regulations"
                component={IndividualsTransportKASKORegulations}
              />
              <Redirect
                exact
                from="/services/individuals/transport/osago"
                to="/services/individuals/transport/osago/about"
              />
              <Route
                path="/services/individuals/transport/osago/about"
                component={IndividualsTransportOSAGOAbout}
              />
              <Route
                path="/services/individuals/transport/osago/regulations"
                component={IndividualsTransportOSAGORegulations}
              />
              <Redirect
                exact
                from="/services/individuals/transport/eosago"
                to="/services/individuals/transport/eosago/about"
              />
              <Route
                path="/services/individuals/transport/eosago/faq"
                component={IndividualsTransportEOSAGOFaq}
              />
              <Route
                path="/services/individuals/transport/eosago/manual"
                component={IndividualsTransportEOSAGOManual}
              />
              <Redirect
                exact
                from="/services/individuals/transport/voluntary"
                to="/services/individuals/transport/voluntary/about"
              />
              <Route
                path="/services/individuals/transport/voluntary/about"
                component={IndividualsTransportVoluntaryAbout}
              />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
