import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
  // state = {}
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Link to="news/1">
            <span style={{ fontWeight: '200' }}>15/11/2016</span>
            <div style={{ color: '#0095D6' }}>
              Сообщение о проведении внеочередного собрания акционеров АО СК
              «Чулпан»
            </div>
            <span style={{ fontWeight: '200' }}>Акционерное общество…</span>
          </Link>
        </div>
        <div className="col-4">
          <Link to="news/1">
            <span style={{ fontWeight: '200' }}>15/11/2016</span>
            <div style={{ color: '#0095D6' }}>
              Сообщение о проведении внеочередного собрания акционеров АО СК
              «Чулпан»
            </div>
            <span style={{ fontWeight: '200' }}>Акционерное общество…</span>
          </Link>
        </div>
        <div className="col-4">
          <Link to="news/1">
            <span style={{ fontWeight: '200' }}>15/11/2016</span>
            <div style={{ color: '#0095D6' }}>
              Сообщение о проведении внеочередного собрания акционеров АО СК
              «Чулпан»
            </div>
            <span style={{ fontWeight: '200' }}>Акционерное общество…</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default News;
