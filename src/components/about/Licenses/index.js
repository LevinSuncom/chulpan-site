import React, { Component } from 'react';

import file1 from '../../../documents/О Компании/Устав.pdf';
import file2 from '../../../documents/О Компании/ИНН.pdf';
import file3 from '../../../documents/О Компании/ОГРН.pdf';

class Licenses extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Лицензии и документы</h1>
        Полное наименование организации - <strong>Акционерное общество Страховая компания "Чулпан"</strong>
        <br />
        Cокращенное наименование - <stromg>АО СК "Чулпан"</stromg>
        <br />
        Имеет лицензии выданные Центральным банком Российской Федерации:
        <ul>
          <li>СЛ № 1216 от 07.05.2015г. (добровольное личное страхование, за исключением добровольного страхования жизни)</li>
          <li>СИ № 1216 от 07.05 2015г. (добровольное имущественное страхование)</li>
          <li>ПС № 1216 от 07.05.2015г. (перестрахование)</li>
          <li>ОС № 1216-03 от 07.05.2015г. (обязательное страхование гражданской ответственности владельцев транспортных средств)</li>
          <li>ОС № 1216-04 от 07.05.2015г. (обязательное страхование гражданской ответственности владельца опасного объекта за причинение вреда в результате аварии на опасном объекте)</li>
          <li>ОС № 1216-05 от 07.05.2015г. (обязательное страхование гражданской ответственности перевозчика за причинение при перевозках вреда жизни, здоровью, имуществу пассажиров)</li>
        </ul>
        <strong>Срок действия лицензий - бесрочный.</strong>

        <hr />
        <strong>Сведения об учредительных документах</strong>
        <ul>
          <li><strong>Устав</strong>&nbsp;<a href={file1}>Скачать</a></li>
        </ul>

        <hr />
        <strong>Сведения о правоустанавливающих документах</strong>
        <ul>
          <li><strong>Сведения об основном государственном регистрационном номере</strong>&nbsp;<a href={file3}>Скачать</a></li>
          <li><strong>Идентификационный номер налогоплательщика</strong>&nbsp;<a href={file2}>Скачать</a></li>
          <li><strong>регистрационный номер в едином государственном реестре субъектов страхового дела - 1216</strong></li>
        </ul>

        <p><span>Дата и время последнего изменения на странице: 21.06.2017г., 11:30</span>
        </p>

      </div>
    );
  }
}

export default Licenses;
