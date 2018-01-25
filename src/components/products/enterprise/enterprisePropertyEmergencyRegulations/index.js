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

import contractDraft from '../../../../documents/Страхование расходов по локализации и ликвидации последствий чрезвычайных ситуаций и ответственности от воздействия пожара.doc';
import statementDraft from '../../../../documents/Страхование расходов по локализации и ликвидации последствий чрезвычайных ситуаций и ответственности от воздействия пожара.doc';
import actualRules from '../../../../documents/Страхование расходов по локализации и ликвидации последствий чрезвычайных ситуаций и ответственности от воздействия пожара.doc';

const EnterpriseRegulations = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Страхование расходов по локализации и ликвидации последствий чрезвычайных ситуаций и ответственности от воздействия пожара</h1>
      <p>
        <a href={contractDraft}>Скачать типовой договор</a>
      </p>
      <p>
        <a href={statementDraft}>Скачать типовое заявление</a>
      </p>
      <br/>
      <p>
        <a href={actualRules} target="blank">Скачать актуальные правила</a>
      </p>

    </div >
  );
};

export default EnterpriseRegulations;
