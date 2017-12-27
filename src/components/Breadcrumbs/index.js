import React from 'react';
import { withRouter, Link } from 'react-router-dom';

const mapPath = pathPart => {
  console.log(pathPart);
  if (pathPart !== 'services') {
    switch (pathPart) {
      case 'transport':
        return <Link to="/services/individuals">Частным / </Link>;
        break;
      case 'health':
        return <Link to="/services/individuals">Частным / </Link>;
        break;
      case 'property':
        return <Link to="/services/individuals">Частным / </Link>;
        break;
      case 'mortgage':
        return <Link to="/services/individuals">Частным / </Link>;
        break;
      case 'travel':
        return <Link to="/services/individuals">Частным / </Link>;
        break;
      case 'kasko':
        return <Link to="/services/individuals/transport">Транспорт / </Link>;
        break;
      case 'kasko2':
        return <Link to="/services/individuals/transport">Транспорт / </Link>;
        break;
      case 'kasko50':
        return <Link to="/services/individuals/transport">Транспорт / </Link>;
        break;
      case 'osago':
        return <Link to="/services/individuals/transport">Транспорт / </Link>;
        break;
      case 'eosago':
        return <Link to="/services/individuals/transport">Транспорт / </Link>;
        break;
      case 'voluntary':
        return <Link to="/services/individuals/transport">Транспорт / </Link>;
        break;
      case 'health':
        return <Link to="/services/individuals/transport">Частным / </Link>;
        break;
      case 'accidents':
        return <Link to="/services/individuals/health">Здоровье / </Link>;
        break;
      case 'sport':
        return <Link to="/services/individuals/health">Здоровье / </Link>;
        break;
      case 'kids':
        return <Link to="/services/individuals/health">Здоровье / </Link>;
        break;
      case 'family':
        return <Link to="/services/individuals/health">Здоровье / </Link>;
        break;
      case 'borrowers':
        return <Link to="/services/individuals/health">Здоровье / </Link>;
        break;
      case 'property':
        return <Link to="/services/individuals">Частным / </Link>;
        break;
      case 'combined':
        return <Link to="/services/individuals/property">Имущество / </Link>;
        break;
      case 'economy':
        return <Link to="/services/individuals/property">Имущество / </Link>;
        break;
      case 'express':
        return <Link to="/services/individuals/property">Имущество / </Link>;
        break;
      case 'estate':
        return <Link to="/services/individuals/property">Имущество / </Link>;
        break;
      case 'mortgage':
        return <Link to="/services/individuals">Частным / </Link>;
        break;
      case 'travel':
        return <Link to="/services/individuals">Частным / </Link>;
        break;
      case 'abroad':
        return <Link to="/services/individuals/travel">Путешествия / </Link>;
        break;
    }
  }
};

const Breadcrumbs = ({ location }) => {
  return (
    <div>
      <span style={{ fontSize: '14px', color: '#0095D6' }}>
        {location.pathname.split('/').map(mapPath)}
      </span>
    </div>
  );
};

export default withRouter(Breadcrumbs);
