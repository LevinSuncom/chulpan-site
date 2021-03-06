import React, { Component } from 'react';

import image from './rating.jpg';

class Ratings extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Статусы и рейтинги</h1>
        Страховая компания "Чулпан" является членом и активно участвует в работе:
        <ul>
          <li><a href="http://www.ins-union.ru/">Всероссийского Союза Страховщиков</a></li>
          <li>Союз Страховщиков Татарстана</li>
          <li><a href="http://www.autoins.ru/">Российского Союза Автостраховщиков</a></li>
          <li><a href="http://www.nsso.ru/">Национального союза страховщиков ответственности</a></li>
        </ul>
        Компания удостоена премии "Золотая Саламандра" в номинации <strong>"Лучшая региональная страховая компания"</strong> по итогам работы в 2003 году.
        <br/>
        Кроме того, ежегодно Компания принимает участие в Поволжской национальной премии "Серебряный зонт", неоднократно становясь победителем и лауреатом премии в номинации "Лучшая региональная страхования компания"
        <br/>

        <hr />
        <b>Рейтинги</b>
        <br/>
        Впервые в число 50-ти крупнейших российских страховщиков СК "Чулпан" вошла 12 лет назад, а сегодня компания занимает прочные позиции среди крупнейших страховых компаний России по общему объему собранной страховой премии, по активам, по прибыли,  по отдельным отраслям и видам страхования.
        <br/>
        В апреле 2017 года Рейтинговое агентство "ЭкспертРА" подтвердило рейтинг надежности страховой компании «Чулпан». По итогам проведенной оценки платежеспособности и финансовой устойчивости компания отнесена к классу А+ ( подуровень I: высший)
        <br/>
        В соответствии с утвержденным в Рейтинговом агентстве RAEX (Эксперт РА) Стандартом рейтинговой деятельности была проведена процедура мониторинга рейтинга АО СК «Чулпан». На заседании рейтингового комитета (протокол №10994 от 19.05.2017 г.) было принято решение о присвоении рейтинга надежности АО СК «Чулпан» на уровне ruA + (что соответству ет рейтингу А+( I ) по ранее применявшей шкале).
        <img src={image} alt="" />
        <hr />
        <p><span>Дата и время последнего изменения на странице: 27.06.2017г., 15:05</span>
        </p>

      </div>
    );
  }
}

export default Ratings;
