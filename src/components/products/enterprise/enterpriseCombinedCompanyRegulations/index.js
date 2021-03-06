import React from 'react';

import { Link } from 'react-router-dom';
// import Breadcrumbs from '../../App/Breadcrumbs';


// const imgStyle = {
//   width: '100%',
//   height: '260px',
//   backgroundImage: `url(${IndividualsImage})`,
//   borderRadius: '4px',
//   backgroundSize: 'cover',
//   backgroundPositionY: 'top',
//   marginBottom: '12px'
// };

/* import contractDraft from '../../../../documents/Страхование средств наземного транспорта.doc'; */
import statementDraft from '../../../../documents/Бланки договоров/Комбинированное/КСИП.doc';

import actualRules from '../../../../documents/Комплексное страхование имущества предприятий и организаций.doc';

const EnterpriseRegulations = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Комплексное страхование имущества предприятий и организаций</h1>
{/*       <p>
        <a href={contractDraft}>Скачать типовой договор</a>
      </p>
 */}      <p>
        <a href={statementDraft}>Скачать типовые бланки</a>
      </p>
      <br/>
      <p>
        <a href={actualRules} target="blank">Скачать актуальные правила</a>
      </p>

    </div >
  );
};

export default EnterpriseRegulations;
