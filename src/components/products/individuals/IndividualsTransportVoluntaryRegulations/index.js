import React, { Component } from 'react';

import actualRules from '../../../../documents/страхование автогражданской ответственности.doc';

const Regulations = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Добровольная автогражданка</h1>
      <p>
        <a href={actualRules} target="blank" download="страхование автогражданской ответственности">Скачать актуальные правила</a>
      </p>
    </div >
  );
};

export default Regulations;
