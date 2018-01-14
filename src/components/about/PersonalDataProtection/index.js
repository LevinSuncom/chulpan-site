import React, { Component } from 'react';
import file1 from './politikainfbezop2016.pdf';

class PersonalDataProtection extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Политика защиты персональных данныъ</h1>
        Страховая компания "Чулпан"    уделяет особое внимание  защите информации и персональных данных своих клиентов.
        <br/>
        <a href={file1}> Политика информационной безопасности в АО СК "Чулпан"</a>

        <p><span>Дата и время последнего изменения на странице: 04.05.2016, 11:20</span>
        </p>

      </div>
    );
  }
}

export default PersonalDataProtection;
