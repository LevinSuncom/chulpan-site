import React from 'react';

import actualRules from '../../../../documents/Правила добровольного страхования от несчастных случаев граждан и детей.doc';

const IndividualsHealthAccidentsRegulations = () => {
  return (
    <div>
      <h1 className="product-header">Страхование от несчастных случаев</h1>
      <p>
        Актуальная версия правил. <a href={actualRules}>Скачать</a>
      </p>
     
    </div>
  );
};

export default IndividualsHealthAccidentsRegulations;
