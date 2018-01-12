import React, { Component } from 'react';

import image from './image.jpg';

class Capital extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Уставный капитал</h1>
        Уставный капитал Компании - 555 миллионoв рублей.
        <hr />
        Собственные средства Компании:
        <img src={image} alt="" />
      </div>
    );
  }
}

export default Capital;
