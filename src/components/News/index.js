import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

class News extends Component {
  state = {
    gotNews: false,
    news: [
      {
        header: '',
        date: '',
        briefPart: '',
        brief: '',
        id : 0
      }]
  }
  componentDidMount() {
    const url =
      'http://chulpan.ru/Portal/News/List?count=3';
      axios.get(url).then(responce => {
        const value = responce.data;
        this.setState({ news: value });
        this.setState({ gotNews: true });
      });
    }

  renderSingleNews(news) {
      return (
        <div className="col-4">
          <Link to={"news/" + news.id}>
            <span style={{ fontWeight: '200', color: '#000' }}>{(new Date(news.date)).toLocaleDateString()}</span>
            <div style={{ color: '#0095D6' }}>
              {news.header}
            </div>
            <span style={{ fontWeight: '200', color: '#000'  }}>{news.briefPart}</span>
          </Link>
        </div>)
    }
  
  render() {
    if (this.state.gotNews)
    {
      return (
        <div className="row">
          {this.state.news.map(item => this.renderSingleNews(item))}
        </div>
      );
    }
    else
    {
      return (
        <div className="row">
        </div>
      );
    }
  }
}

export default News;
