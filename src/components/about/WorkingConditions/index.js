import React, { Component } from 'react';
import file1 from './specocenka.pdf';
import file2 from './specocenka2017.pdf';
import file3 from './meropriyatiaporezultatam.pdf';

class WorkingConditions extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Результаты спецоценки условий труда</h1>
        <a href={file1}>Сводная ведомость результатов проведений специальной оценки условий труда</a>
        <br />
        <a href={file2}>Сводная ведомость результатов проведений специальной оценки условий труда</a>
        <br />
        <a href={file3}>Перечень мероприятий по улучшению условий труда работников</a>
        <br />

        <p><span>Последнее изменение на странице 13.12.2017г. 15:15</span>
        </p>

      </div>
    );
  }
}

export default WorkingConditions;
