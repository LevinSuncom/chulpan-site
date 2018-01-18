import React from 'react';

import actualRules from '../../../../documents/Экспресс и эконом страхование имущества/Программы Экспресс-эконом 20180101.docx';

const IndividualsPropertyExpressRegulations = () => {
  return (
    <div>
      <h1 className="product-header">Правила экспресс-страхования</h1>
      <p>
      Актуальная версия правил. <a href={actualRules}>Скачать</a>
      </p>
    </div>
  );
};

export default IndividualsPropertyExpressRegulations;
