import React, { Component } from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import MultiLevelNavigation from '../MultiLevelNavigation';
import CalculatorEconomy from '../CalculatorEconomy';
import CalculatorExpress from '../CalculatorExpress';
import CalculatorTravel from '../CalculatorTravel';

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
  IndividualsPropertyExpressRegulations,
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
  IndividualsTransportOSAGOFaq,
  IndividualsTransportEOSAGOManual,
  IndividualsTransportOSAGORegulations,
  IndividualsTransportEOSAGOFaq,
  IndividualsTransportVoluntaryAbout,
  // Ипотека
  IndividualsMortgageAbout,
  // Путешествия
  IndividualsTravelAbroadAbout,
  IndividualsTravelAbroadFaq,
  IndividualsTravelAbroadManual,
  IndividualsTravelAbroadRules,

  // Представители
  Delegates,
  AllRules,

  Enterprise,
  EnterpriseProperty,
  EnterprisePropertyCompanyAbout,
  EnterprisePropertyCompanyRegulations,
  EnterprisePropertyTransportAbout,
  EnterprisePropertyTransportRegulations,
  EnterprisePropertyAnimalsAbout,
  EnterprisePropertyAnimalsRegulations,
  EnterprisePropertyGoodsAbout,
  EnterprisePropertyGoodsRegulations,
  EnterprisePropertyLeasingAbout,
  EnterprisePropertyLeasingRegulations,
  EnterprisePropertyDrillingAbout,
  EnterprisePropertyDrillingRegulations,
  EnterprisePropertyTitleAbout,
  EnterprisePropertyTitleRegulations,
  EnterprisePropertyEmergencyAbout,
  EnterprisePropertyEmergencyRegulations


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
                exact
                path="/services/individuals/property/express/regulations"
                component={IndividualsPropertyExpressRegulations}
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
                path="/services/individuals/travel/abroad/regulations"
                component={IndividualsTravelAbroadRules}
              />
              <Route
                path="/services/individuals/travel/abroad/calculate"
                component={CalculatorTravel}
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
                path="/services/individuals/transport/osago/faq"
                component={IndividualsTransportOSAGOFaq}
              />
              <Route
                path="/services/individuals/transport/osago/faq"
                component={IndividualsTransportOSAGOFaq}
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
              <Route path="/services/delegates" component={Delegates} />
              <Route path="/services/allRules" component={AllRules} />

              <Route exact path="/services/enterprise" component={Enterprise}/>
              <Route exact path="/services/enterprise/property" component={EnterpriseProperty}/>
              <Redirect exact from="/services/enterprise/property/company" to="/services/enterprise/property/company/about"/>
              <Route exact path="/services/enterprise/property/company/about" component={EnterprisePropertyCompanyAbout}/>
              <Route exact path="/services/enterprise/property/company/regulations" component={EnterprisePropertyCompanyRegulations}/>

              <Redirect exact from="/services/enterprise/property/transport" to="/services/enterprise/property/transport/about"/>
              <Route exact path="/services/enterprise/property/transport/about" component={EnterprisePropertyTransportAbout}/>
              <Route exact path="/services/enterprise/property/transport/regulations" component={EnterprisePropertyTransportRegulations}/>

              <Redirect exact from="/services/enterprise/property/animals" to="/services/enterprise/property/animals/about"/>
              <Route exact path="/services/enterprise/property/animals/about" component={EnterprisePropertyAnimalsAbout}/>
              <Route exact path="/services/enterprise/property/animals/regulations" component={EnterprisePropertyAnimalsRegulations}/>

              <Redirect exact from="/services/enterprise/property/goods" to="/services/enterprise/property/goods/about"/>
              <Route exact path="/services/enterprise/property/goods/about" component={EnterprisePropertyGoodsAbout}/>
              <Route exact path="/services/enterprise/property/goods/regulations" component={EnterprisePropertyGoodsRegulations}/>

              <Redirect exact from="/services/enterprise/property/leasing" to="/services/enterprise/property/leasing/about"/>
              <Route exact path="/services/enterprise/property/leasing/about" component={EnterprisePropertyLeasingAbout}/>
              <Route exact path="/services/enterprise/property/leasing/regulations" component={EnterprisePropertyLeasingRegulations}/>

              <Redirect exact from="/services/enterprise/property/drilling" to="/services/enterprise/property/drilling/about"/>
              <Route exact path="/services/enterprise/property/drilling/about" component={EnterprisePropertyDrillingAbout}/>
              <Route exact path="/services/enterprise/property/drilling/regulations" component={EnterprisePropertyDrillingRegulations}/>

              <Redirect exact from="/services/enterprise/property/title" to="/services/enterprise/property/title/about"/>
              <Route exact path="/services/enterprise/property/title/about" component={EnterprisePropertyTitleAbout}/>
              <Route exact path="/services/enterprise/property/title/regulations" component={EnterprisePropertyTitleRegulations}/>

              <Redirect exact from="/services/enterprise/property/emergency" to="/services/enterprise/property/emergency/about"/>
              <Route exact path="/services/enterprise/property/emergency/about" component={EnterprisePropertyEmergencyAbout}/>
              <Route exact path="/services/enterprise/property/emergency/regulations" component={EnterprisePropertyEmergencyRegulations}/>

            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
