import React from 'react';

import rules from '../../../../documents/Правила добровольного страхования от несчастных случаев граждан и детей.doc';

const IndividualsTransportKASKORegulations = () => {
  window.open(rules, '_blank');
  window.history.back();
  window.location.reload();
};

export default IndividualsTransportKASKORegulations;
