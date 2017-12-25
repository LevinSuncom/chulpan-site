import React, { Component } from 'react';
import './style.css';

class Breadcrumbs extends Component {
  getPath = pathname => {
    switch (pathname.split('/')[1]) {
      case 'enterprise':
        return 'Главная / Корпоративным клиентам';
      case 'individuals':
        return 'Главная / Частным клиентам';
      // case '/individuals/common':
      //     return 'Главная / Частным клиентам'
    }
  };
  render() {
    return (
      <div style={{ padding: '' }}>
        <span style={{ fontSize: '14px', color: '#0095D6' }}>
          {this.getPath(this.props.children)}
        </span>
      </div>
    );
  }
}

export default Breadcrumbs;
