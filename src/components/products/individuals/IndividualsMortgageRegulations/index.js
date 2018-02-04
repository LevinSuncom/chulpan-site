import React from 'react';

import actualRules from '../../../../documents/Добровольное ипотечное страхование.doc';

const IndividualsMortgageRegulations = () => {
  return (
    <div>
      <h1 className="product-header">Ипотечное страхование</h1>
      <p>
        Актуальная версия правил. <a href={actualRules}>Скачать</a>
      </p>
     
    </div>
  );
};

export default IndividualsMortgageRegulations;
