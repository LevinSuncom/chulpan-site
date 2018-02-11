import React, { Component } from 'react';

import actualRules from '../../../../documents/Страхование медицинских и иных связанных с ними расходов граждан, выезжающих за границу.doc';

const IndividualsTravelAbroadRules = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Страхование выезжающих за границу</h1>
      <p>
        <a href={actualRules} target="blank" download="Страхование медицинских и иных связанных с ними расходов граждан, выезжающих за границу">Скачать актуальные правила</a>
      </p>
    </div >
  );
};

export default IndividualsTravelAbroadRules;

