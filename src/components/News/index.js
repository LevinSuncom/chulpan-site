import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class News extends Component {
  // state = {}
  render() {
    return (
      <div className="row">
        <div className="col-4">
          <Link to="news/1">
            <span style={{ fontWeight: '200' }}>20.07.2017</span>
            <div style={{ color: '#0095D6' }}>
              Сообщение о завершении передачи страхового портфеля
            </div>
            <span style={{ fontWeight: '200' }}>Акционерное общество…</span>
          </Link>
        </div>
        <div className="col-4">
          <Link to="news/1">
            <span style={{ fontWeight: '200' }}>20.07.2017</span>
            <div style={{ color: '#0095D6' }}>
              Сообщение о завершении передачи страхового портфеля
            </div>
            <span style={{ fontWeight: '200' }}>Акционерное общество…</span>
          </Link>
        </div>
        <div className="col-4">
          <Link to="news/1">
            <span style={{ fontWeight: '200' }}>20.07.2017</span>
            <div style={{ color: '#0095D6' }}>
              Сообщение о завершении передачи страхового портфеля
            </div>
            <span style={{ fontWeight: '200' }}>Акционерное общество…</span>
          </Link>
        </div>
      </div>
    );
  }
}

export default News;
