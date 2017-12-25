import React, { Component } from 'react';
import { YMaps, Map, Placemark, GeoObject } from 'react-yandex-maps';
// import Modal from 'react-modal';

import Carousel from '../../components/Carousel';
import Options from '../../components/Options';
import News from '../../components/News';
import Stocks from '../../components/Stocks';

import './style.css';

class MainPageContainer extends Component {
  state = {
    modalPop: false
  };
  render() {
    const mapState = { center: [54.902489, 52.304338], zoom: 18 };
    return (
      <div>
        <Carousel />
        <div className="mb-20" />

        <div className="container">
          <Options />
          <div className="mb-28" />
          <hr
            className="mb-20"
            style={{ border: 0, borderBottom: '1px solid #E4E4E4', zIndex: -1 }}
          />

          <h1>Новости</h1>
          <News />

          <div className="mb-52" />

          {/* <h1>Акции</h1> */}

          {/* <Stocks /> */}

          {/* <div className="mb-40" /> */}
          <h1>Головной офис</h1>
          <YMaps>
            <Map state={mapState} width={{ width: '100%' }}>
              <Placemark
                geometry={{
                  type: 'Point',
                  coordinates: [54.902489, 52.304338]
                }}
                properties={{
                  hintContent: 'Чулпан. Головной офис',
                  balloonContent: 'Чулпан. Головной офис'
                }}
                options={{
                  preset: 'twirl#lightblueStretchyIcon'
                }}
              />
            </Map>
          </YMaps>
          <div className="mb-40" />
        </div>
      </div>
    );
  }
}

export default MainPageContainer;
