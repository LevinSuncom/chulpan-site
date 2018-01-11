import React, { Component } from 'react';

import file1 from './konsotchetnostmsfochulpan2016.pdf';
import file2 from './auditzaklchulpan2016.pdf';
import file3 from './primechanchulpan2016.pdf';
import file4 from './aktuarzaklchulpan2016.pdf';

import file5 from './konsolidotchetnostchulpan2015.pdf';
import file6 from './auditzaklzachulpan2015.pdf';
import file7 from './primechaniechulpanza2015.pdf';
import file8 from './aktuarzaklzachulpan2015.pdf';

import file9 from './konsotchetnostchulpan2014.pdf';
import file10 from './auditreportchulpan2014.pdf';
import file11 from './primechaniechulpan2014.pdf';
import file12 from './Actuarrashet2014chulpan.pdf';

import file13 from './msfochulpan2013.pdf';
import file14 from './auditchulpan2013.pdf';
import file15 from './primechaniechulpan2013.pdf';

import file17 from './konsotchetchulpan.pdf';
import file18 from './auditzaklchulpan.pdf';
import file19 from './primechkkonsotchetchulpan.pdf';


class ReportsMSFO extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Отчётность по МСФО</h1>
        За 2016 год
        <br />
        <ul>
          <li><a href={file1}>Годовая консолидированная отченость по МСФО</a></li>
          <li><a href={file2}>Аудиторское заключение</a></li>
          <li><a href={file3}>Примечания к консолидированной бухгалтерской отчетности</a></li>
          <li><a href={file4}>Актуарное заключение</a></li>
        </ul>
        <hr />
        За 2015 год
        <br />
        <ul>
          <li><a href={file5}>Годовая консолидированная отченость по МСФО</a></li>
          <li><a href={file6}>Аудиторское заключение</a></li>
          <li><a href={file7}>Примечания к консолидированной бухгалтерской отчетности</a></li>
          <li><a href={file8}>Актуарное заключение</a></li>
        </ul>
        <hr />
        За 2014 год
        <br />
        <ul>
          <li><a href={file9}>Годовая консолидированная отченость по МСФО</a></li>
          <li><a href={file10}>Аудиторское заключение</a></li>
          <li><a href={file11}>Примечания к консолидированной бухгалтерской отчетности</a></li>
          <li><a href={file12}>Актуарное заключение</a></li>
        </ul>
        <hr />
        За 2013 год
        <br />
        <ul>
          <li><a href={file13}>Годовая консолидированная отченость по МСФО</a></li>
          <li><a href={file14}>Аудиторское заключение</a></li>
          <li><a href={file15}>Примечания к консолидированной бухгалтерской отчетности</a></li>

        </ul>
        <hr />
        За 2012 год
        <br />
        <ul>
          <li><a href={file17}>Годовая консолидированная отченость по МСФО</a></li>
          <li><a href={file18}>Аудиторское заключение</a></li>
          <li><a href={file19}>Примечания к консолидированной бухгалтерской отчетности</a></li>
        </ul>
        <hr />


        <p><span>Дата и время последнего изменения на странице: 16.05.2017г., 08:30</span>
        </p>

      </div>
    );
  }
}

export default ReportsMSFO;
