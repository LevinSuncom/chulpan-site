import React from 'react';

import rules from '../../../../documents/Страхование медицинских и иных связанных с ними расходов граждан, выезжающих за границу.doc';

const IndividualsTravelAbroadRules = () => {
  window.open(rules, '_blank');
  window.history.back();
  window.location.reload();
};

export default IndividualsTravelAbroadRules;
