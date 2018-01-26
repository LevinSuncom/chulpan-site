import React, { Component } from 'react';

import euroProtocol from '../../../../documents/Документы для ОСАГО/европротокол.pdf'
import accidentNotice from '../../../../documents/Документы для ОСАГО/извещение о дтп.rtf';
import accidentNoticeInstuction from '../../../../documents/Документы для ОСАГО/инструкция по заполнению извещения.doc';
import osagoPlus from '../../../../documents/Документы для ОСАГО/осаго +.pdf';
import ownerNote from '../../../../documents/Документы для ОСАГО/памятка автовладельцам.pdf';
import delegates from '../../../../documents/Документы для ОСАГО/перечень представителей.pdf';
import stations from '../../../../documents/Документы для ОСАГО/перечень СТО.pdf';
import tariffs from '../../../../documents/Документы для ОСАГО/приказ об утверждении страховых тарифов.pdf';

import actualRules from '../../../../documents/Обязательное страхование автогражданской ответственности.doc';

const Regulations = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">ОСАГО</h1>
      <p>
        <a href={euroProtocol}>Скачать европротокол</a>
      </p>
      <p>
        <a href={accidentNotice}>Скачать извещение о ДТП</a>
      </p>
      <p>
        <a href={accidentNoticeInstuction}>Скачать инструкцию по заполнению извещения о ДТП</a>
      </p>
      <p>
        <a href={osagoPlus}>Скачать памятку по ОСАГО+</a>
      </p>
      <p>
        <a href={ownerNote}>Скачать памятку автовладельцам</a>
      </p>
      <p>
        <a href={delegates}>Скачать перечень представителей</a>
      </p>
      <p>
        <a href={stations}>Скачать перечень СТО</a>
      </p>
      <p>
        <a href={tariffs}>Скачать приказ об утверждении страховых тарифов</a>
      </p>
      <br/>
      <p>
        <a href={actualRules} target="blank">Скачать актуальные правила</a>
      </p>
    </div >
  );
};

export default Regulations;
