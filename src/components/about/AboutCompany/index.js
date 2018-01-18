import React, { Component } from 'react';

class AboutComapny extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Информация о компани</h1>
        В целях исполнения Федерального закона Российской Федерации от 23 июля 2013 г. N 234-ФЗ "О внесении изменений в Закон Российской Федерации "Об организации страхового дела в Российской Федерации и удобства посетителей сайта АО СК "Чулпан" на данной странице размещены ссылки на необходимую информацию о Компании
        <br />
        <ul>
          <li><a href = "/about/licenses">полное наименование</a>, <a href = "/about/contacts">адрес (место нахождения), номера телефонов,  режим работы страховщика, </a><a href="/services/delegates">его филиалов и представительств</a></li>
          <hr />
          <li><a href = "/about/heads">сведения о руководителях</a> , <a href = "/about/founders">об акционерах страховщика</a></li>
          <hr />
          <li><a href = "/about/licenses">сведения о правоустанавливающих документах, включая сведения об основном государственном регистрационном номере, идентификационном номере налогоплательщика, о регистрационном номере в едином государственном реестре субъектов страхового дела, а также сведения о лицензии страховщика и сроке ее действия</a></li>
          <hr />
          <li><a href="/services/allRules">перечень осуществляемых видов страхования : для юридических лиц , для физических лиц</a></li>
          <hr />
          <li><a href="/services/allRules">правила страхования и страховые тарифы: для физических лиц, для юридических лиц</a></li>
          <hr />
          <li><a href="/about/reportsAccountAnnual">годовая бухгалтерская (финансовая) отчетность страховщика и подтверждающее ее достоверность аудиторское заключение за три предыдущих отчетных года</a></li>
          <hr />
          <li><a href="/about/consolidatedReport">годовая консолидированная финансовая отчетность и подтверждающее ее достоверность аудиторское заключение за три предыдущих отчетных года</a></li>
          <hr />
          <li><a href="/about/ratings">присвоенные страховщику рейтинговыми агентствами рейтинги</a></li>
          <hr />
          <li><a href="/services/allRules">сведения о деятельности страховщика, об опыте его работы по видам страхования</a></li>
          <hr />
          <li><a href="/about/ratings">посведения об участии в профессиональных объединениях, союзах, ассоциациях страховщиков</a></li>
          <hr />
          <li><a href="/about/agents">реестр страховых агентов</a></li>
        </ul>
      </div>
    );
  }
}

export default AboutComapny;