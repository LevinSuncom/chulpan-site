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
  IndividualsHealthAccidentsManual,
  IndividualsHealthAccidentsRegulations,
  IndividualsHealthSport,
  IndividualsHealthKids,
  IndividualsHealthFamily,
  IndividualsHealthBorrowers,
  // Имущество
  IndividualsPropertyCombinedAbout,
  IndividualsPropertyCombinedFaq,
  IndividualsPropertyCombinedRegulations,
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
  IndividualsTransportKASKOFaq,
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
  IndividualsMortgageFaq,
  IndividualsMortgageRegulations,
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
  EnterprisePropertyEmergencyRegulations,

  EnterpriseLiability,
  EnterpriseLiabilityVoluntary,
  EnterpriseLiabilityVoluntaryAccidentAbout,
  EnterpriseLiabilityVoluntaryAccidentRegulations,
  EnterpriseLiabilityVoluntaryAirAbout,
  EnterpriseLiabilityVoluntaryAirRegulations,
  EnterpriseLiabilityVoluntaryCapitalAbout,
  EnterpriseLiabilityVoluntaryCapitalRegulations,
  EnterpriseLiabilityVoluntaryCarAbout,
  EnterpriseLiabilityVoluntaryCarRegulations,
  EnterpriseLiabilityVoluntaryCivilAbout,
  EnterpriseLiabilityVoluntaryCivilRegulations,
  EnterpriseLiabilityVoluntaryDefectAbout,
  EnterpriseLiabilityVoluntaryDefectRegulations,
  EnterpriseLiabilityVoluntaryDirectorsAbout,
  EnterpriseLiabilityVoluntaryDirectorsRegulations,
  EnterpriseLiabilityVoluntaryHydrotechnicsAbout,
  EnterpriseLiabilityVoluntaryHydrotechnicsRegulations,
  EnterpriseLiabilityVoluntaryInstallationAbout,
  EnterpriseLiabilityVoluntaryInstallationRegulations,
  EnterpriseLiabilityVoluntaryNuclearAbout,
  EnterpriseLiabilityVoluntaryNuclearRegulations,
  EnterpriseLiabilityVoluntaryOpoAbout,
  EnterpriseLiabilityVoluntaryOpoRegulations,
  EnterpriseLiabilityCompulsory,
  enterpriseLiabilityCompulsoryOsopoAbout,
  enterpriseLiabilityCompulsoryOsopoRegulations,
  enterpriseLiabilityCompulsoryOsagoAbout,
  enterpriseLiabilityCompulsoryOsagoRegulations,
  enterpriseLiabilityCompulsoryOsgopAbout,
  enterpriseLiabilityCompulsoryOsgopRegulations,
  enterpriseLiabilityCompulsoryDoctorsAbout,
  enterpriseLiabilityCompulsoryDoctorsRegulations,
  enterpriseLiabilityCompulsoryAppraisersAbout,
  enterpriseLiabilityCompulsoryAppraisersRegulations,
  enterpriseLiabilityCompulsoryAuditorsAbout,
  enterpriseLiabilityCompulsoryAuditorsRegulations,
  enterpriseLiabilityCompulsoryDetectivesAbout,
  enterpriseLiabilityCompulsoryDetectivesRegulations,
  enterpriseLiabilityCompulsorySellersAbout,
  enterpriseLiabilityCompulsorySellersRegulations,
  enterpriseLiabilityCompulsoryAnimatorsAbout,
  enterpriseLiabilityCompulsoryAnimatorsRegulations,
  enterpriseLiabilityCompulsorySanatoriumsAbout,
  enterpriseLiabilityCompulsorySanatoriumsRegulations,

  EnterpriseStaff,
  EnterpriseStaffDmsAbout,
  EnterpriseStaffDmsRegulations,
  EnterpriseStaffAccidentAbout,
  EnterpriseStaffAccidentRegulations,
  EnterpriseStaffAbroadAbout,
  EnterpriseStaffAbroadRegulations,

  EnterpriseCombined,
  EnterpriseCombinedAirAbout,
  EnterpriseCombinedAirRegulations,
  EnterpriseCombinedWaterAbout,
  EnterpriseCombinedWaterRegulations,
  EnterpriseCombinedGoodsAbout,
  EnterpriseCombinedGoodsRegulations,
  EnterpriseCombinedCompanyAbout,
  EnterpriseCombinedCompanyRegulations,
  EnterpriseCombinedDrillingAbout,
  EnterpriseCombinedDrillingRegulations,
  EnterpriseCombinedInstallationAbout,
  EnterpriseCombinedInstallationRegulations,
  EnterpriseCombinedMortgageAbout,
  EnterpriseCombinedMortgageRegulations

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
                path="/services/individuals/health/accidents/manual"
                component={IndividualsHealthAccidentsManual}
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
                path="/services/individuals/property/combined/regulations"
                component={IndividualsPropertyCombinedRegulations}
              />
              <Route
                path="/services/individuals/property/combined/faq"
                component={IndividualsPropertyCombinedFaq}
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
              <Route
                path="/services/individuals/mortgage/faq"
                component={IndividualsMortgageFaq}
              />
              <Route
                path="/services/individuals/mortgage/regulations"
                component={IndividualsMortgageRegulations}
              />

              <Redirect
                exact
                from="/services/individuals/travel"
                to="/services/individuals/travel/abroad"
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
                path="/services/individuals/transport/kasko/faq"
                component={IndividualsTransportKASKOFaq}
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

              <Route exact path="/services/enterprise" component={Enterprise} />
              <Route exact path="/services/enterprise/property" component={EnterpriseProperty} />
              <Redirect exact from="/services/enterprise/property/company" to="/services/enterprise/property/company/about" />
              <Route exact path="/services/enterprise/property/company/about" component={EnterprisePropertyCompanyAbout} />
              <Route exact path="/services/enterprise/property/company/regulations" component={EnterprisePropertyCompanyRegulations} />

              <Redirect exact from="/services/enterprise/property/transport" to="/services/enterprise/property/transport/about" />
              <Route exact path="/services/enterprise/property/transport/about" component={EnterprisePropertyTransportAbout} />
              <Route exact path="/services/enterprise/property/transport/regulations" component={EnterprisePropertyTransportRegulations} />

              <Redirect exact from="/services/enterprise/property/animals" to="/services/enterprise/property/animals/about" />
              <Route exact path="/services/enterprise/property/animals/about" component={EnterprisePropertyAnimalsAbout} />
              <Route exact path="/services/enterprise/property/animals/regulations" component={EnterprisePropertyAnimalsRegulations} />

              <Redirect exact from="/services/enterprise/property/goods" to="/services/enterprise/property/goods/about" />
              <Route exact path="/services/enterprise/property/goods/about" component={EnterprisePropertyGoodsAbout} />
              <Route exact path="/services/enterprise/property/goods/regulations" component={EnterprisePropertyGoodsRegulations} />

              <Redirect exact from="/services/enterprise/property/leasing" to="/services/enterprise/property/leasing/about" />
              <Route exact path="/services/enterprise/property/leasing/about" component={EnterprisePropertyLeasingAbout} />
              <Route exact path="/services/enterprise/property/leasing/regulations" component={EnterprisePropertyLeasingRegulations} />

              <Redirect exact from="/services/enterprise/property/drilling" to="/services/enterprise/property/drilling/about" />
              <Route exact path="/services/enterprise/property/drilling/about" component={EnterprisePropertyDrillingAbout} />
              <Route exact path="/services/enterprise/property/drilling/regulations" component={EnterprisePropertyDrillingRegulations} />

              <Redirect exact from="/services/enterprise/property/title" to="/services/enterprise/property/title/about" />
              <Route exact path="/services/enterprise/property/title/about" component={EnterprisePropertyTitleAbout} />
              <Route exact path="/services/enterprise/property/title/regulations" component={EnterprisePropertyTitleRegulations} />

              <Redirect exact from="/services/enterprise/property/emergency" to="/services/enterprise/property/emergency/about" />
              <Route exact path="/services/enterprise/property/emergency/about" component={EnterprisePropertyEmergencyAbout} />
              <Route exact path="/services/enterprise/property/emergency/regulations" component={EnterprisePropertyEmergencyRegulations} />

              <Route exact path="/services/enterprise/liability" component={EnterpriseLiability} />
              <Route exact path="/services/enterprise/liability/voluntary" component={EnterpriseLiabilityVoluntary} />
              <Route exact path="/services/enterprise/liability/compulsory" component={EnterpriseLiabilityCompulsory} />

              <Redirect exact from="/services/enterprise/liability/voluntary/accident" to="/services/enterprise/liability/voluntary/accident/about" />
              <Route exact path="/services/enterprise/liability/voluntary/accident/about" component={EnterpriseLiabilityVoluntaryAccidentAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/accident/regulations" component={EnterpriseLiabilityVoluntaryAccidentRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/directors" to="/services/enterprise/liability/voluntary/directors/about" />
              <Route exact path="/services/enterprise/liability/voluntary/directors/about" component={EnterpriseLiabilityVoluntaryDirectorsAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/directors/regulations" component={EnterpriseLiabilityVoluntaryDirectorsRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/capital" to="/services/enterprise/liability/voluntary/capital/about" />
              <Route exact path="/services/enterprise/liability/voluntary/capital/about" component={EnterpriseLiabilityVoluntaryCapitalAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/capital/regulations" component={EnterpriseLiabilityVoluntaryCapitalRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/civil" to="/services/enterprise/liability/voluntary/civil/about" />
              <Route exact path="/services/enterprise/liability/voluntary/civil/about" component={EnterpriseLiabilityVoluntaryCivilAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/civil/regulations" component={EnterpriseLiabilityVoluntaryCivilRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/defect" to="/services/enterprise/liability/voluntary/defect/about" />
              <Route exact path="/services/enterprise/liability/voluntary/defect/about" component={EnterpriseLiabilityVoluntaryDefectAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/defect/regulations" component={EnterpriseLiabilityVoluntaryDefectRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/installation" to="/services/enterprise/liability/voluntary/installation/about" />
              <Route exact path="/services/enterprise/liability/voluntary/installation/about" component={EnterpriseLiabilityVoluntaryInstallationAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/installation/regulations" component={EnterpriseLiabilityVoluntaryInstallationRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/nuclear" to="/services/enterprise/liability/voluntary/nuclear/about" />
              <Route exact path="/services/enterprise/liability/voluntary/nuclear/about" component={EnterpriseLiabilityVoluntaryNuclearAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/nuclear/regulations" component={EnterpriseLiabilityVoluntaryNuclearRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/hydrotechnics" to="/services/enterprise/liability/voluntary/hydrotechnics/about" />
              <Route exact path="/services/enterprise/liability/voluntary/hydrotechnics/about" component={EnterpriseLiabilityVoluntaryHydrotechnicsAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/hydrotechnics/regulations" component={EnterpriseLiabilityVoluntaryHydrotechnicsRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/opo" to="/services/enterprise/liability/voluntary/opo/about" />
              <Route exact path="/services/enterprise/liability/voluntary/opo/about" component={EnterpriseLiabilityVoluntaryOpoAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/opo/regulations" component={EnterpriseLiabilityVoluntaryOpoRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/air" to="/services/enterprise/liability/voluntary/air/about" />
              <Route exact path="/services/enterprise/liability/voluntary/air/about" component={EnterpriseLiabilityVoluntaryAirAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/air/regulations" component={EnterpriseLiabilityVoluntaryAirRegulations} />

              <Redirect exact from="/services/enterprise/liability/voluntary/car" to="/services/enterprise/liability/voluntary/car/about" />
              <Route exact path="/services/enterprise/liability/voluntary/car/about" component={EnterpriseLiabilityVoluntaryCarAbout} />
              <Route exact path="/services/enterprise/liability/voluntary/car/regulations" component={EnterpriseLiabilityVoluntaryCarRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/osopo" to="/services/enterprise/liability/compulsory/osopo/about" />
              <Route exact path="/services/enterprise/liability/compulsory/osopo/about" component={enterpriseLiabilityCompulsoryOsopoAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/osopo/regulations" component={enterpriseLiabilityCompulsoryOsopoRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/osago" to="/services/enterprise/liability/compulsory/osago/about" />
              <Route exact path="/services/enterprise/liability/compulsory/osago/about" component={enterpriseLiabilityCompulsoryOsagoAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/osago/regulations" component={enterpriseLiabilityCompulsoryOsagoRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/osgop" to="/services/enterprise/liability/compulsory/osgop/about" />
              <Route exact path="/services/enterprise/liability/compulsory/osgop/about" component={enterpriseLiabilityCompulsoryOsgopAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/osgop/regulations" component={enterpriseLiabilityCompulsoryOsgopRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/doctors" to="/services/enterprise/liability/compulsory/doctors/about" />
              <Route exact path="/services/enterprise/liability/compulsory/doctors/about" component={enterpriseLiabilityCompulsoryDoctorsAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/doctors/regulations" component={enterpriseLiabilityCompulsoryDoctorsRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/appraisers" to="/services/enterprise/liability/compulsory/appraisers/about" />
              <Route exact path="/services/enterprise/liability/compulsory/appraisers/about" component={enterpriseLiabilityCompulsoryAppraisersAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/appraisers/regulations" component={enterpriseLiabilityCompulsoryAppraisersRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/auditors" to="/services/enterprise/liability/compulsory/auditors/about" />
              <Route exact path="/services/enterprise/liability/compulsory/auditors/about" component={enterpriseLiabilityCompulsoryAuditorsAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/auditors/regulations" component={enterpriseLiabilityCompulsoryAuditorsRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/detectives" to="/services/enterprise/liability/compulsory/detectives/about" />
              <Route exact path="/services/enterprise/liability/compulsory/detectives/about" component={enterpriseLiabilityCompulsoryDetectivesAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/detectives/regulations" component={enterpriseLiabilityCompulsoryDetectivesRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/sellers" to="/services/enterprise/liability/compulsory/sellers/about" />
              <Route exact path="/services/enterprise/liability/compulsory/sellers/about" component={enterpriseLiabilityCompulsorySellersAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/sellers/regulations" component={enterpriseLiabilityCompulsorySellersRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/animators" to="/services/enterprise/liability/compulsory/animators/about" />
              <Route exact path="/services/enterprise/liability/compulsory/animators/about" component={enterpriseLiabilityCompulsoryAnimatorsAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/animators/regulation" component={enterpriseLiabilityCompulsoryAnimatorsRegulations} />

              <Redirect exact from="/services/enterprise/liability/compulsory/sanatoriums" to="/services/enterprise/liability/compulsory/sanatoriums/about" />
              <Route exact path="/services/enterprise/liability/compulsory/sanatoriums/about" component={enterpriseLiabilityCompulsorySanatoriumsAbout} />
              <Route exact path="/services/enterprise/liability/compulsory/sanatoriums/regulations" component={enterpriseLiabilityCompulsorySanatoriumsRegulations} />

              <Route exact path="/services/enterprise/staff" component={EnterpriseStaff} />

              <Route exact path="/services/enterprise/combined" component={EnterpriseCombined} />
              <Redirect exact path="/services/enterprise/combined/air" to="/services/enterprise/combined/air/about" />
              <Route exact path="/services/enterprise/combined/air/about" component={EnterpriseCombinedAirAbout} />
              <Route exact path="/services/enterprise/combined/air/regulations" component={EnterpriseCombinedAirRegulations} />
              <Redirect exact path="/services/enterprise/combined/water" to="/services/enterprise/combined/water/about" />
              <Route exact path="/services/enterprise/combined/water/about" component={EnterpriseCombinedWaterAbout} />
              <Route exact path="/services/enterprise/combined/water/regulations" component={EnterpriseCombinedWaterRegulations} />
              <Redirect exact path="/services/enterprise/combined/goods" to="/services/enterprise/combined/goods/about" />
              <Route exact path="/services/enterprise/combined/goods/about" component={EnterpriseCombinedGoodsAbout} />
              <Route exact path="/services/enterprise/combined/goods/regulations" component={EnterpriseCombinedGoodsRegulations} />
              <Redirect exact path="/services/enterprise/combined/company" to="/services/enterprise/combined/company/about" />
              <Route exact path="/services/enterprise/combined/company/about" component={EnterpriseCombinedCompanyAbout} />
              <Route exact path="/services/enterprise/combined/company/regulations" component={EnterpriseCombinedCompanyRegulations} />
              <Redirect exact path="/services/enterprise/combined/drilling" to="/services/enterprise/combined/drilling/about" />
              <Route exact path="/services/enterprise/combined/drilling/about" component={EnterpriseCombinedDrillingAbout} />
              <Route exact path="/services/enterprise/combined/drilling/regulations" component={EnterpriseCombinedDrillingRegulations} />
              <Redirect exact path="/services/enterprise/combined/installation" to="/services/enterprise/combined/installation/about" />
              <Route exact path="/services/enterprise/combined/installation/about" component={EnterpriseCombinedInstallationAbout} />
              <Route exact path="/services/enterprise/combined/installation/regulations" component={EnterpriseCombinedInstallationRegulations} />
              <Redirect exact path="/services/enterprise/combined/mortgage" to="/services/enterprise/combined/mortgage/about" />
              <Route exact path="/services/enterprise/combined/mortgage/about" component={EnterpriseCombinedMortgageAbout} />
              <Route exact path="/services/enterprise/combined/mortgage/regulations" component={EnterpriseCombinedMortgageRegulations} />
            </Switch>
          </div>
        </div>
      </div>
    );
  }
}
