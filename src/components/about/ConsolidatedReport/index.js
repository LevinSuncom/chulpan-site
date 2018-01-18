import React, { Component } from 'react';
import file1 from './gkfochulpanlife.pdf';
import file2 from './auditreporchulpanleave.pdf';
import file3 from './leaveprim.pdf';

class ConsoliadtedReport extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Консолидированная финансовая отчётность</h1>
        <ul>
          <li><a href={file1}>Консолидированная финансовая отчетность</a></li>
          <li><a href={file2}>Аудиторское заключение</a></li>
          <li><a href={file3}>Примечания к финансовой консолидированной отчетности</a></li>
          </ul>
      </div>
    );
  }
}

export default ConsoliadtedReport;
