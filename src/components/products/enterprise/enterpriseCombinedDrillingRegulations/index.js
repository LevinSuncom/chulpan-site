import React from 'react';

import { Link } from 'react-router-dom';
// import Breadcrumbs from '../../App/Breadcrumbs';


// const imgStyle = {
//   width: '100%',
//   height: '260px',
//   backgroundImage: `url(${IndividualsImage})`,
//   borderRadius: '4px',
//   backgroundSize: 'cover',
//   backgroundPositionY: 'top',
//   marginBottom: '12px'
// };

import app10 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 10.docx';
import app11 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 11.docx';
import app12 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 12.docx';
import app13 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 13.docx';
import app14 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 14.docx';
import app15 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 15.docx';
import app16 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 16.docx';
import app17 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 17.docx';
import app18 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 18.docx';
import app19 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 19.docx';
import app21 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 21.docx';
import app9 from '../../../../documents/Бланки договоров/Комбинированное/КСБР/Приложение 9.docx';

import actualRules from '../../../../documents/Комбинированное страхование буровых работ.doc';

const EnterpriseRegulations = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Комбинированное страхование буровых работ</h1>
      <p><a href={app10}>Приложение 10</a></p>
      <p><a href={app11}>Приложение 11</a></p>
      <p><a href={app12}>Приложение 12</a></p>
      <p><a href={app13}>Приложение 13</a></p>
      <p><a href={app14}>Приложение 14</a></p>
      <p><a href={app15}>Приложение 15</a></p>
      <p><a href={app16}>Приложение 16</a></p>
      <p><a href={app17}>Приложение 17</a></p>
      <p><a href={app18}>Приложение 18</a></p>
      <p><a href={app19}>Приложение 19</a></p>
      <p><a href={app21}>Приложение 21</a></p>
      <p><a href={app9}>Приложение 9</a></p>
            <br/>
      <p>
        <a href={actualRules} target="blank">Скачать актуальные правила</a>
      </p>

    </div >
  );
};

export default EnterpriseRegulations;
