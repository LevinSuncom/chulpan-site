import React, { Component } from 'react';
import Pagination from "react-js-pagination";
import axios from 'axios';
import { Link } from 'react-router-dom';

require('./style.css');

const listMode = 'list';
const singleMode = 'single';

class NewsContainer extends Component {
  state = {
    mode: 'list',
    newsId: -1,
    newsPage: 1,
    newsPageCount: 10,
    totalCount: 6,
    newsBrief: [
      {
        header: '',
        date: '',
        briefPart: '',
        brief: '',
        id : 0
      }],
      news: {
        header: '',
        date: '',
        briefPart: '',
        brief: '',
        content: '',
        id : 0
      }
    }

  componentDidMount() {
    if (this.state.mode === listMode)
    {
      this.getListNews();
    }
    if (this.state.mode === singleMode)
    {
      this.getSingleNews(this.state.newsId);
    }    
  }

  getListNews()
  {
    const url =
    'http://chulpan.ru/Portal/News/List?count=999';
    axios.get(url).then(responce => {
      const value = responce.data;
      console.log(value);
      this.setState({ newsBrief: value,  totalCount: value.length});
    });    
  }

  getSingleNews(newsId)
  {
    const url =
    'http://chulpan.ru/Portal/News/Details?id=' + newsId;
    axios.get(url).then(responce => {
      const value = responce.data;
      this.setState({ news: value});
    });
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

  renderListNewsItem(news) {
    return (
      <div>
        <p><b><h5>{(new Date(news.date)).toLocaleDateString()}</h5></b></p>
        <p><h3>{news.header}</h3></p>
        <p>{news.brief}</p>
        <p><Link to={"/news/" + news.id} style={{color: 'rgb(0, 149, 214)'}}>Подробнее</Link></p>
        <div className="mb-20" />
        <hr />
      </div>)
  }

  renderListNews()
  {
    return (
      <div className="container mb-32"
        style={{ minHeight: 'calc(100vh - 312px)' }}>

        <div className="mb-20" />
        <h1 className="product-header">Новости</h1>

        {/* <p style={{ textAlign: 'center' }}> */}
        <div className="list">
          {this.getCurrentNews().map(item => this.renderListNewsItem(item))}
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
      </div>
    );
  }

  renderSingleNews(news)
  {
    return (
      <div
      className="container mb-32" style={{ minHeight: 'calc(100vh - 312px)' }}>
      <div className="mb-20" />
      <p style={{ textAlign: 'left' }}>
        <small><Link to={"/news"} style={{color: 'rgb(100, 100, 100)'}}>&lt;&nbsp;Назад к списку новостей</Link></small>
      </p>
      <p style={{ textAlign: 'center' }}>
        <b>{news.header}</b>
      </p>
      <p style={{ textAlign: 'center' }}>
        <small>{(new Date(news.date)).toLocaleDateString()}</small>
      </p>
      <p>
        <div dangerouslySetInnerHTML={{__html: news.content}}>
        </div>        
      </p>
      <p><small>{(new Date(news.date)).toLocaleDateString() + ' ' + (new Date(news.date)).toLocaleTimeString()}</small></p>
      </div>
    );
  }

  render() {
    var mode = '';
    if (this.props.match.params.id === undefined)
    {
      if (this.state.mode != listMode)
      {
        this.setState({mode: listMode})
        this.getListNews();
      }
    }
    else
    {
      if (this.state.mode != singleMode)
      {
        this.setState({mode: singleMode})
      }
      if (this.state.newsId != this.props.match.params.id)
      {
        this.setState({newsId: this.props.match.params.id})
        this.getSingleNews(this.props.match.params.id);
      }
    }

    if (this.state.mode === listMode)
    {
      return this.renderListNews();
    }
    if (this.state.mode === singleMode)
    {
      return this.renderSingleNews(this.state.news);
    }

  }

/*      if (this.props.match.params.id == 1)
      {
      return (
         <div
          className="container mb-32"
          style={{ minHeight: 'calc(100vh - 312px)' }}>
          <div className="mb-20" />
          <p style={{ textAlign: 'center' }}>
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
    if (this.props.match.params.id == 2)
    {
    }
    if (this.props.match.params.id == 3)
    {
    }
  }*/
}

export default NewsContainer;
