import React, { Component } from 'react';

import file1 from './forma1chulpan2016.pdf';
import file2 from './forma2chulpan2016.pdf';
import file3 from './forma3chulpan2016.pdf';
import file4 from './forma4chulpan2016.pdf';
import file5 from './auditzaklchulpan2016.pdf';

import file6 from './forma1chulpan2015.pdf';
import file7 from './forma2chulpan2015.pdf';
import file8 from './forma3chulpan2015.pdf';
import file9 from './forma4chulpan2015.pdf';
import file10 from './auditzakl2015chulpan.pdf';

import file11 from './forma1chulpan2014.pdf';
import file12 from './forma2chulpan2014.pdf';
import file13 from './forma3chulpan2014.pdf';
import file14 from './forma4chulpan2014.pdf';
import file15 from './auditchulpan2014.pdf';

import file16 from './forma1chulpan2013.pdf';
import file17 from './forma2chulpan2013.pdf';
import file18 from './forma3chulpan2013.pdf';
import file19 from './forma4chulpan2013.pdf';
import file20 from './auditchulpan2013.pdf';

import file21 from './chulpan2012.doc';
import file22 from './auditchulpan2012.pdf';

import file23 from './chulpan2011.doc';
import file24 from './auditchulpan2011.pdf';

import file25 from './chulpan2010.doc';
import file26 from './auditchulpan2010.pdf';

import file27 from './chulpan2009.doc';

import file28 from './chulpan2008.doc';


class ReportsAccountAnnual extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Годовая бухгалтерская отчетность</h1>
        За 2016 год
        <br />
        <ul>
          <li><a href={file1}>Бухгалтерский баланс (форма 1)</a></li>
          <li><a href={file2}>Отчет о финансовых результатах (форма 2)</a></li>
          <li><a href={file3}>Отчет об изменении капитала (форма 3)</a></li>
          <li><a href={file4}>Отчет о движении денежных средств (форма 4)</a></li>
          <li><a href={file5}>Аудиторское заключение о бухгалтерской отчетности</a></li>
        </ul>
        <hr />

        За 2015 год
        <br />
        <ul>
          <li><a href={file6}>Бухгалтерский баланс (форма 1)</a></li>
          <li><a href={file7}>Отчет о финансовых результатах (форма 2)</a></li>
          <li><a href={file8}>Отчет об изменении капитала (форма 3)</a></li>
          <li><a href={file9}>Отчет о движении денежных средств (форма 4)</a></li>
          <li><a href={file10}>Аудиторское заключение о бухгалтерской отчетности</a></li>
        </ul>
        <hr />

        За 2014 год
        <br />
        <ul>
          <li><a href={file11}>Бухгалтерский баланс (форма 1)</a></li>
          <li><a href={file12}>Отчет о финансовых результатах (форма 2)</a></li>
          <li><a href={file13}>Отчет об изменении капитала (форма 3)</a></li>
          <li><a href={file14}>Отчет о движении денежных средств (форма 4)</a></li>
          <li><a href={file15}>Аудиторское заключение о бухгалтерской отчетности</a></li>
        </ul>
        <hr />

        За 2013 год
        <br />
        <ul>
          <li><a href={file16}>Бухгалтерский баланс (форма 1)</a></li>
          <li><a href={file17}>Отчет о финансовых результатах (форма 2)</a></li>
          <li><a href={file18}>Отчет об изменении капитала (форма 3)</a></li>
          <li><a href={file19}>Отчет о движении денежных средств (форма 4)</a></li>
          <li><a href={file20}>Аудиторское заключение о бухгалтерской отчетности</a></li>
        </ul>
        <hr />

        За 2012 год
        <br />
        <ul>
          <li><a href={file21}>Бухгалтерский баланс</a></li>
          <li><a href={file22}>Аудиторское заключение о бухгалтерской отчетности</a></li>
        </ul>
        <hr />

        За 2011 год
        <br />
        <ul>
          <li><a href={file23}>Бухгалтерский баланс</a></li>
          <li><a href={file24}>Аудиторское заключение о бухгалтерской отчетности</a></li>
        </ul>
        <hr />

        За 2010 год
        <br />
        <ul>
          <li><a href={file25}>Бухгалтерский баланс</a></li>
          <li><a href={file26}>Аудиторское заключение о бухгалтерской отчетности</a></li>
        </ul>
        <hr />

        За 2009 год
        <br />
        <ul>
          <li><a href={file27}>Бухгалтерский баланс</a></li>
        </ul>
        <hr />

        За 2008 год
        <br />
        <ul>
          <li><a href={file28}>Бухгалтерский баланс</a></li>
        </ul>
        <hr />


        <p><span>Дата и время последнего изменения на странице: 27.06.2017г., 15:30</span>
        </p>

      </div>
    );
  }
}

export default ReportsAccountAnnual;
