import React from 'react';
import { withRouter, Link } from 'react-router-dom';
import { createKey } from '../../helpers';

function mapPathToName(path) {
  const map = [{}];
}

function getBreadcrumbs(path) {
  const example = '/services/individuals/travel/abroad/calculate';
  const arr = example.split('/');

  // let breadcrumbs;
}

/* const mapPath = pathPart => {
  if (pathPart !== 'services') {
    switch (pathPart) {
      case 'transport':
      case 'health':
      case 'property':
      case 'mortgage':
      case 'travel':
        return (
          <Link key={createKey()} to="/services/individuals">
            Частным /{' '}
          </Link>
        );
      case 'kasko':
      case 'kasko2':
      case 'kasko50':
      case 'osago':
      case 'eosago':
      case 'voluntary':
        return (
          <Link key={createKey()} to="/services/individuals/transport">
            Транспорт /{' '}
          </Link>
        );
      case 'accidents':
      case 'sport':
      case 'kids':
      case 'family':
      case 'borrowers':
        return (
          <Link key={createKey()} to="/services/individuals/health">
            Здоровье /{' '}
          </Link>
        );
      case 'combined':
      case 'economy':
      case 'express':
      case 'estate':
        return (
          <Link key={createKey()} to="/services/individuals/property">
            Имущество /{' '}
          </Link>
        );
      case 'abroad':
        return (
          <Link key={createKey()} to="/services/individuals/travel">
            Путешествия /{' '}
          </Link>
        );
    }
  }
}; */

const mapPath = path => {
  console.log('path = ' + path)
  if (path !== 'services') {
    switch (path) {
      case '/services/enterprise/combined':
      case '/services/enterprise/staff':
      case '/services/enterprise/liability':
      case '/services/enterprise/property':
        return (
          <Link key={createKey()} to="/services/enterprise">
            Корпоративным / {' '}
          </Link>
        );
      case '/services/enterprise/combined/air':
      case '/services/enterprise/combined/air/about':
      case '/services/enterprise/combined/air/regulations':

      case '/services/enterprise/combined/water':
      case '/services/enterprise/combined/water/about':
      case '/services/enterprise/combined/water/regulations':

      case '/services/enterprise/combined/goods':
      case '/services/enterprise/combined/goods/about':
      case '/services/enterprise/combined/goods/regulations':

      case '/services/enterprise/combined/company':
      case '/services/enterprise/combined/company/about':
      case '/services/enterprise/combined/company/regulations':

      case '/services/enterprise/combined/drilling':
      case '/services/enterprise/combined/drilling/about':
      case '/services/enterprise/combined/drilling/regulations':

      case '/services/enterprise/combined/installation':
      case '/services/enterprise/combined/installation/about':
      case '/services/enterprise/combined/installation/regulations':

      case '/services/enterprise/combined/mortgage':
      case '/services/enterprise/combined/mortgage/about':
      case '/services/enterprise/combined/mortgage/regulations':
        return (
          <Link key={createKey()} to="/services/enterprise/combined">
            Корпоративным / Комбинированное{' '}
          </Link>
        );



      case '/services/enterprise/staff/dms':
      case '/services/enterprise/staff/dms/about':
      case '/services/enterprise/staff/dms/regulations':

      case '/services/enterprise/staff/accident':
      case '/services/enterprise/staff/accident/about':
      case '/services/enterprise/staff/accident/regulations':

      case '/services/enterprise/staff/abroad':
      case '/services/enterprise/staff/abroad/about':
      case '/services/enterprise/staff/abroad/regulations':
        return (
          <Link key={createKey()} to="/services/enterprise/combined">
            Корпоративным / Персонал{' '}
          </Link>
        );

      case '/services/enterprise/liability/compulsory':
        return (
          <Link key={createKey()} to="/services/enterprise/liability">
            Корпоративным / Ответственность{' '}
          </Link>
        );
      case '/services/enterprise/liability/compulsory/osopo':
      case '/services/enterprise/liability/compulsory/osopo/about':
      case '/services/enterprise/liability/compulsory/osopo/faq':
      case '/services/enterprise/liability/compulsory/osopo/regulations':
      case '/services/enterprise/liability/compulsory/osopo/law':
      case '/services/enterprise/liability/compulsory/osopo/rates':
      case '/services/enterprise/liability/compulsory/osopo/calculate':

      case '/services/enterprise/liability/compulsory/osago':
      case '/services/enterprise/liability/compulsory/osago/about':
      case '/services/enterprise/liability/compulsory/osago/regulations':

      case '/services/enterprise/liability/compulsory/osgop':
      case '/services/enterprise/liability/compulsory/osgop/about':
      case '/services/enterprise/liability/compulsory/osgop/faq':
      case '/services/enterprise/liability/compulsory/osgop/regulations':
      case '/services/enterprise/liability/compulsory/osgop/law':
      case '/services/enterprise/liability/compulsory/osgop/passengers':
      case '/services/enterprise/liability/compulsory/osgop/rates':
      case '/services/enterprise/liability/compulsory/osgop/calculate':

      case '/services/enterprise/liability/compulsory/professional':

      case '/services/enterprise/liability/compulsory/doctors':
      case '/services/enterprise/liability/compulsory/doctors/about':
      case '/services/enterprise/liability/compulsory/doctors/regulations':

      case '/services/enterprise/liability/compulsory/appraisers':
      case '/services/enterprise/liability/compulsory/appraisers/about':
      case '/services/enterprise/liability/compulsory/appraisers/regulations':

      case '/services/enterprise/liability/compulsory/auditors':
      case '/services/enterprise/liability/compulsory/auditors/about':
      case '/services/enterprise/liability/compulsory/auditors/regulations':

      case '/services/enterprise/liability/compulsory/detectives':
      case '/services/enterprise/liability/compulsory/detectives/about':
      case '/services/enterprise/liability/compulsory/detectives/regulations':

      case '/services/enterprise/liability/compulsory/sellers':
      case '/services/enterprise/liability/compulsory/sellers/about':
      case '/services/enterprise/liability/compulsory/sellers/regulations':

      case '/services/enterprise/liability/compulsory/animators':
      case '/services/enterprise/liability/compulsory/animators/about':
      case '/services/enterprise/liability/compulsory/animators/regulations':

      case '/services/enterprise/liability/compulsory/sanatoriums':
      case '/services/enterprise/liability/compulsory/sanatoriums/about':
      case '/services/enterprise/liability/compulsory/sanatoriums/regulations':
        return (
          <div>
            <Link key={createKey()} to="/services/enterprise">
              Корпоративным
          </Link>
            {' '} / {' '}
            <Link key={createKey()} to="/services/enterprise/liability">
              Ответственность
          </Link>
            {' '} / {' '}
            <Link key={createKey()} to="/services/enterprise/liability/compulsory">
              Обязательное страхование{' '}
            </Link>
          </div>
        );
      case '/services/enterprise/liability/voluntary':
        return (
          <div>
            <Link key={createKey()} to="/services/enterprise">
              Корпоративным
        </Link>
            {' '} / {' '}
            <Link key={createKey()} to="/services/enterprise/liability">
              Ответственность
        </Link>
          </div>
        );

      case '/services/enterprise/liability/voluntary/accident':
      case '/services/enterprise/liability/voluntary/accident/about':
      case '/services/enterprise/liability/voluntary/accident/regulations':

      case '/services/enterprise/liability/voluntary/directors':
      case '/services/enterprise/liability/voluntary/directors/about':
      case '/services/enterprise/liability/voluntary/directors/regulations':

      case '/services/enterprise/liability/voluntary/capital':
      case '/services/enterprise/liability/voluntary/capital/about':
      case '/services/enterprise/liability/voluntary/capital/regulations':

      case '/services/enterprise/liability/voluntary/civil':
      case '/services/enterprise/liability/voluntary/civil/about':
      case '/services/enterprise/liability/voluntary/civil/regulations':

      case '/services/enterprise/liability/voluntary/defect':
      case '/services/enterprise/liability/voluntary/defect/about':
      case '/services/enterprise/liability/voluntary/defect/regulations':

      case '/services/enterprise/liability/voluntary/installation':
      case '/services/enterprise/liability/voluntary/installation/about':
      case '/services/enterprise/liability/voluntary/installation/regulations':

      case '/services/enterprise/liability/voluntary/nuclear':
      case '/services/enterprise/liability/voluntary/nuclear/about':
      case '/services/enterprise/liability/voluntary/nuclear/regulations':

      case '/services/enterprise/liability/voluntary/hydrotechnics':
      case '/services/enterprise/liability/voluntary/hydrotechnics/about':
      case '/services/enterprise/liability/voluntary/hydrotechnics/regulations':

      case '/services/enterprise/liability/voluntary/opo':
      case '/services/enterprise/liability/voluntary/opo/about':
      case '/services/enterprise/liability/voluntary/opo/regulations':

      case '/services/enterprise/liability/voluntary/air':
      case '/services/enterprise/liability/voluntary/air/about':
      case '/services/enterprise/liability/voluntary/air/regulations':

      case '/services/enterprise/liability/voluntary/car':
      case '/services/enterprise/liability/voluntary/car/about':
      case '/services/enterprise/liability/voluntary/car/regulations':
        return (
          <div>
            <Link key={createKey()} to="/services/enterprise">
              Корпоративным
        </Link>
            {' '} / {' '}
            <Link key={createKey()} to="/services/enterprise/liability">
              Ответственность
        </Link>
            {' '} / {' '}
            <Link key={createKey()} to="/services/enterprise/liability/voluntary">
              Добровольное страхование{' '}
            </Link>
          </div>
        );
      case '/services/enterprise/property/company':
      case '/services/enterprise/property/company/about':
      case '/services/enterprise/property/company/regulations':

      case '/services/enterprise/property/transport':
      case '/services/enterprise/property/transport/about':
      case '/services/enterprise/property/transport/regulations':

      case '/services/enterprise/property/animals':
      case '/services/enterprise/property/animals/about':
      case '/services/enterprise/property/animals/regulations':

      case '/services/enterprise/property/goods':
      case '/services/enterprise/property/goods/about':
      case '/services/enterprise/property/goods/regulations':

      case '/services/enterprise/property/leasing':
      case '/services/enterprise/property/leasing/about':
      case '/services/enterprise/property/leasing/regulations':

      case '/services/enterprise/property/drilling':
      case '/services/enterprise/property/drilling/about':
      case '/services/enterprise/property/drilling/regulations':

      case '/services/enterprise/property/title':
      case '/services/enterprise/property/title/about':
      case '/services/enterprise/property/title/regulations':

      case '/services/enterprise/property/emergency':
      case '/services/enterprise/property/emergency/about':
      case '/services/enterprise/property/emergency/regulations':
        return (
          <div>
            <Link key={createKey()} to="/services/enterprise">
              Корпоративным
        </Link>
            {' '} / {' '}
            <Link key={createKey()} to="/services/enterprise/property">
              Имущество
        </Link>
          </div>
        );
      //case '/services/individuals':
      case '/services/individuals/transport':
        return (
          <div>
            <Link key={createKey()} to="/services/individuals">
              Частным
        </Link>
          </div>
        );

      case '/services/individuals/transport/kasko':
      case '/services/individuals/transport/kasko/about':
      case '/services/individuals/transport/kasko/faq':
      case '/services/individuals/transport/kasko/manual':
      case '/services/individuals/transport/kasko/regulations':

      case '/services/individuals/transport/kasko2':

      case '/services/individuals/transport/kasko50':

      case '/services/individuals/transport/osago':
      case '/services/individuals/transport/osago/about':
      case '/services/individuals/transport/osago/faq':
      case '/services/individuals/transport/osago/regulations':

      case '/services/individuals/transport/eosago':
      case '/services/individuals/transport/eosago/about':
      case '/services/individuals/transport/eosago/regulations':
      case '/services/individuals/transport/eosago/rates':
      case '/services/individuals/transport/eosago/faq':
      case '/services/individuals/transport/eosago/manual':

      case '/services/individuals/transport/voluntary':
      case '/services/individuals/transport/voluntary/about':
      case '/services/individuals/transport/voluntary/faq':
      case '/services/individuals/transport/voluntary/regulations':
        return (
          <div>
            <Link key={createKey()} to="/services/individuals">
              Частным
              </Link>
            {' '}/{' '}
            <Link key={createKey()} to="/services/individuals/transport">
              Транспорт
              </Link>
          </div>
        );

      case '/services/individuals/health':
        return (
          <div>
            <Link key={createKey()} to="/services/individuals">
              Частным
            </Link>
          </div>
        );
      case '/services/individuals/health/accidents':
      case '/services/individuals/health/accidents/about':
      case '/services/individuals/health/accidents/faq':
      case '/services/individuals/health/accidents/manual':
      case '/services/individuals/health/accidents/regulations':

      case '/services/individuals/health/sport':

      case '/services/individuals/health/kids':

      case '/services/individuals/health/family':

      case '/services/individuals/health/borrowers':
        return (
          <div>
            <Link key={createKey()} to="/services/individuals">
              Частным
            </Link>
            {' '}/{' '}
            <Link key={createKey()} to="/services/individuals/health">
              Здоровье
            </Link>
          </div>
        );

      case '/services/individuals/property':
      return (
        <div>
          <Link key={createKey()} to="/services/individuals">
            Частным
          </Link>
        </div>
      );

      case '/services/individuals/property/combined':
      case '/services/individuals/property/combined/about':
      case '/services/individuals/property/combined/faq':
      case '/services/individuals/property/combined/manual':
      case '/services/individuals/property/combined/regulations':

      case '/services/individuals/property/economy':
      case '/services/individuals/property/economy/calculate':

      case '/services/individuals/property/express':
      case '/services/individuals/property/express/regulations':
      case '/services/individuals/property/express/calculate':

      case '/services/individuals/property/estate':
      case '/services/individuals/property/estate/about':
      case '/services/individuals/property/estate/faq':
      case '/services/individuals/property/estate/manual':
      case '/services/individuals/property/estate/regulations':
      return (
        <div>
          <Link key={createKey()} to="/services/individuals">
            Частным
          </Link>
          {' '}/{' '}
          <Link key={createKey()} to="/services/individuals/property">
            Имущество
          </Link>
        </div>
      );

      case '/services/individuals/mortgage':
      case '/services/individuals/mortgage/about':
      case '/services/individuals/mortgage/faq':
      case '/services/individuals/mortgage/regulations':
      return (
        <div>
          <Link key={createKey()} to="/services/individuals">
            Частным
          </Link>
        </div>
      );

      case '/services/individuals/travel':
      case '/services/individuals/travel/abroad':
      case '/services/individuals/travel/abroad/about':
      case '/services/individuals/travel/abroad/faq':
      case '/services/individuals/travel/abroad/manual':
      case '/services/individuals/travel/abroad/regulations':
      case '/services/individuals/travel/abroad/calculate':
      return (
        <div>
          <Link key={createKey()} to="/services/individuals">
            Частным
          </Link>
          {' '}/{' '}
          <Link key={createKey()} to="/services/individuals/travel">
            Путешествия
          </Link>
        </div>
      );

    }
  }
}

const Breadcrumbs = ({ location }) => {
  return (
    <span style={{ fontSize: '14px', color: '#0095D6' }}>
      {/* <div>{location.pathname.split('/').map(mapPath)}</div> */}
      <div>{mapPath(location.pathname)}</div>
      <div>{/* {location.pathname.split('/').map(mapPath)} */}</div>
    </span>
  );
};

export default withRouter(Breadcrumbs);
