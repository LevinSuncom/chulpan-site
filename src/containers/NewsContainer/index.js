import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import axios from 'axios';
import { Link } from 'react-router-dom';

require('./style.css');

class NewsContainer extends Component {
  constructor(props) {
    super(props);
    this.handlePageChange = this.handlePageChange.bind(this);
    this.getCurrentNews = this.getCurrentNews.bind(this);
    this.state = {
      newsId: -1,
      newsPage: 1,
      newsPageCount: 5,
      totalCount: 6,
      newsBrief: [
        {
          title: 'Сообщение о завершении передачи страхового портфеля',
          brief: 'ООО «СК «АСКО-Жизнь» осуществило передачу страхового портфеля по добровольному страхованию жизни',
          id: 1,
          date: '2017-07-21'
        },
        {
          title: 'Сообщение о завершении передачи страхового портфеля',
          brief: 'ООО «СК «АСКО-Жизнь» осуществило передачу страхового портфеля по добровольному страхованию жизни',
          id: 2,
          date: '2017-07-22'
        },
        {
          title: 'Сообщение о завершении передачи страхового портфеля',
          brief: 'ООО «СК «АСКО-Жизнь» осуществило передачу страхового портфеля по добровольному страхованию жизни',
          id: 3,
          date: '2017-07-23'
        },

        {
          title: 'Сообщение о завершении передачи страхового портфеля',
          brief: 'ООО «СК «АСКО-Жизнь» осуществило передачу страхового портфеля по добровольному страхованию жизни',
          id: 4,
          date: '2017-07-24'
        },
        {
          title: 'Сообщение о завершении передачи страхового портфеля',
          brief: 'ООО «СК «АСКО-Жизнь» осуществило передачу страхового портфеля по добровольному страхованию жизни',
          id: 5,
          date: '2017-07-25'
        },

        {
          title: 'Сообщение о завершении передачи страхового портфеля',
          brief: 'ООО «СК «АСКО-Жизнь» осуществило передачу страхового портфеля по добровольному страхованию жизни',
          id: 6,
          date: '2017-07-26'
        }
      ]
    };
  }

  componentDidMount() {
    console.log('Component is mounted')
  }

  handlePageChange(pageNumber) {
    /* console.log(`active page is ${pageNumber}`); */
    this.setState({ newsPage: pageNumber });
  }

  getCurrentNews() {
    var startNews = this.state.newsPageCount*(this.state.newsPage - 1);
    var endNews = startNews + this.state.newsPageCount;

    return this.state.newsBrief.sort(function (a, b) {
      return +new Date(b.date) - +new Date(a.date);
    }).slice(startNews, endNews);
  }

  renderSingleNews(news) {
    return (
      <div>
        <p><b><h5>{(new Date(news.date)).toLocaleDateString()}</h5></b></p>
        <p><h3>{news.title}</h3></p>
        <p>{news.brief}</p>
        <p><Link to={"/news/" + news.id}>Подробнее</Link></p>
        <div className="mb-20" />
        <hr />
      </div>)
  }

  render() {
    var renderedNews = this.getCurrentNews().map(item => this.renderSingleNews(item));
    if (this.props.match.params.id === undefined) {
      return (
        <div className="container mb-32"
          style={{ minHeight: 'calc(100vh - 312px)' }}>

          <div className="mb-20" />
          <h1 className="product-header">Новости</h1>

          {/* <p style={{ textAlign: 'center' }}> */}
          <div className="list">
            {renderedNews}
          </div>

           <Pagination
            hideDisabled
            prevPageText='раньше'
            nextPageText='позже'
            firstPageText='<<'
            lastPageText='>>'
            activePage={this.state.newsPage}
            itemsCountPerPage={this.state.newsPageCount}
            totalItemsCount={this.state.totalCount}
            onChange={this.handlePageChange}
          />
  {/*                 <ReactPaginate previousLabel={"previous"}
                       nextLabel={"next"}
                       breakLabel={<a href="">...</a>}
                       breakClassName={"break-me"}
                       pageCount={this.state.pageCount}
                       marginPagesDisplayed={2}
                       pageRangeDisplayed={5}
                       onPageChange={this.handlePageClick}
                       containerClassName={"pagination"}
                       subContainerClassName={"pages pagination"}
                       activeClassName={"active"} />  */}
          {/* </p> */}
        </div>
      );
    }
    else {
      console.log("single news")
    }
    return (
      <div
        className="container mb-32"
        style={{ minHeight: 'calc(100vh - 312px)' }}>
        <div className="mb-20" />
        <p style={{ textAlign: 'center' }}>
          {/* <b>Акционерное общество<br/> */}
          {/* Страховая компания «Чулпан» (АО СК «Чулпан»)</b> */}
          Сообщение о завершении передачи страхового портфеля
        </p>

        <p style={{ textAlign: 'center' }}>
          г.
          Альметьевск&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;20
          июня 2017 года
        </p>

        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          Общество с ограниченной ответственностью Страховая компания
          «Чулпан-Жизнь»(сокращённое наименование – ООО СК «Чулпан-Жизнь», ОГРН
          1061644063690; ИНН 1644039560) сообщает, что 20 июня 2017 года, после
          подписания актов приёма-передачи страхового портфеля (от «07» июня
          2017 года акт по договорам страхования жизни и от «20» июня 2017 года
          акт по договорам страхования иным, чем страхование жизни (иных
          договоров добровольного личного страхования), процедура передачи
          страхового портфеля завершена.
        </p>

        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          ООО «СК «АСКО-Жизнь» осуществило передачу страхового портфеля по
          добровольному страхованию жизни и страхованию иному, чем страхование
          жизни (иных договоров добровольного личного страхования), который
          состоит из обязательств по договорам страхования, соответствующих
          сформированным страховым резервам, и активов, принимаемых для покрытия
          сформированных страховых резервов (математический резерв, резерв
          незаработанной премии, резерв произошедших, но незаявленных убытков),
          включая обязательства по договорам страхования, действующим на дату
          передачи, вместе с правами требования уплаты страховых премий
          (страховых взносов). Передача была осуществлена на основании договора
          о передаче страхового портфеля б/н от 02 мая 2017 года, а также актов
          приёма-передачи страхового портфеля от 07 июня 2017 года и 20 июня
          2017 года, подписанных между ООО «СК «АСКО-Жизнь» и ООО СК
          «Чулпан-Жизнь».
        </p>

        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          <b>Страховая организация, принявшая страховой портфель:</b>
          <br />
          - Полное наименование: Общество с ограниченной ответственностью
          Страховая компания «Чулпан-Жизнь»;<br />
          - Сокращенное наименование: ООО СК «Чулпан-Жизнь»;<br />
          - Адрес местонахождения: 423450, Республика Татарстан г. Альметьевск,
          ул. Советская, д.178;<br />
          - ОГРН: 1061644063690;<br />
          - ИНН: 1644039560;<br />
          - Официальный сайт в информационно-телекоммуникационной сети
          Интернет»: http://www.chulpan.ru.
        </p>

        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          Основной деятельностью страховой организации, принявшей страховой
          портфель, является страховая деятельность. Финансовое положение ООО СК
          «Чулпан-Жизнь» удовлетворяет требованиям финансовой устойчивости и
          платежеспособности с учетом вновь принятых обязательств. ООО СК
          «Чулпан-Жизнь» имеет лицензию: <u>СЖ № 4001 от 17.04.2015 г.</u> и{' '}
          <u>СЛ № 4001 от 17.04.2015 г.</u> на осуществление видов страхования,
          по которым принят страховой портфель.
        </p>

        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          Со дня подписания акта приёма-передачи страхового портфеля все права и
          обязанности по договорам добровольного страхования жизни и страхованию
          иному, чем страхование жизни (иных договоров добровольного личного
          страхования) перешли к страховой организации, принявшей страховой
          портфель, – ООО СК «Чулпан-Жизнь».
        </p>

        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          Датой начала исполнения ООО СК «Чулпан-Жизнь» обязательств по принятым
          договорам страхования, включённым в переданный страховой портфель,
          является 20 июня 2017 года.
        </p>
        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          По всем вопросам просим обращаться по адресу: 423450, Республика
          Татарстан г. Альметьевск, ул. Советская, д.178.
        </p>
        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          Телефон: 8(8553) 37-55-10.
        </p>
        <p
          style={{ textIndent: '36px', textAlign: 'justify', marginBottom: 0 }}>
          Дата и время последнего обновления на странице: 21 июня 2017г. 10:25
        </p>
      </div>
    );
  }
}

export default NewsContainer;
