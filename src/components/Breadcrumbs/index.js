import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const mapPath = pathPart => {
  if (pathPart !== 'services') {
    switch (pathPart) {
      case 'transport':
      case 'health':
      case 'property':
      case 'mortgage':
      case 'travel':
        return <Link to="/services/individuals">Частным / </Link>;
      case 'kasko':
      case 'kasko2':
      case 'kasko50':
      case 'osago':
      case 'eosago':
      case 'voluntary':
        return <Link to="/services/individuals/transport">Транспорт / </Link>;
      case 'accidents':
      case 'sport':
      case 'kids':
      case 'family':
      case 'borrowers':
        return <Link to="/services/individuals/health">Здоровье / </Link>;
      case 'combined':
      case 'economy':
      case 'express':
      case 'estate':
        return <Link to="/services/individuals/property">Имущество / </Link>;
      case 'abroad':
        return <Link to="/services/individuals/travel">Путешествия / </Link>;
    }
  }
};

const Breadcrumbs = ({ location }) => {
  return (
    <span style={{ fontSize: '14px', color: '#0095D6' }}>
      {location.pathname.split('/').map(mapPath)}
    </span>
  );
};

export default withRouter(Breadcrumbs);
