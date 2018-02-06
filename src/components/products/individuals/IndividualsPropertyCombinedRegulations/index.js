import React from 'react';

import actualRules from '../../../../documents/Экспресс и эконом страхование имущества/Программы Экспресс-эконом 20180101.docx';

const IndividualsPropertyCombinedRegulations = () => {
  return (
    <div>
      <h1 className="product-header">Комбинированное страхование имущества</h1>
      <p>
        Актуальная версия правил. <a href={actualRules}>Скачать</a>
      </p>
    </div>
  );
};

export default IndividualsPropertyCombinedRegulations;
