import React, { Component } from 'react';
import { Link } from 'react-router-dom';

import childrenImage from './images/children.jpg';
import economyImage from './images/economy.jpg';
import expressImage from './images/express.jpg';
import familyImage from './images/family.jpg';
import kaskoImage from './images/kasko.jpg';
import kasko50Image from './images/kasko50.jpg';
import sportImage from './images/sport.jpg';
import travelImage from './images/travel.jpg';
import voluntaryImage from './images/voluntary.jpg';

import './style.css';

const LeftIcon = ({ onClick }) => {
  return (
    // <div >
    <svg
      className="carousel__nav"
      onClick={onClick}
      fill="#ffffff"
      height="100"
      viewBox="0 0 24 24"
      width="100"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
    // </div>
  );
};

const RightIcon = ({ onClick }) => {
  return (
    <svg
      className="carousel__nav"
      onClick={onClick}
      fill="#ffffff"
      height="100"
      viewBox="0 0 24 24"
      width="100"
      xmlns="http://www.w3.org/2000/svg">
      <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
      <path d="M0 0h24v24H0z" fill="none" />
    </svg>
  );
};

const slidesArr = [
  {
    image: childrenImage,
    head: 'А ваш ребёнок защищён?',
    caption: 'Льготное страхование школьников и дошкольников в СК Чулпан',
    link: '/services/individuals/health/kids'
  },
  {
    image: sportImage,
    head: 'Быстрее, выше, сильнее!',
    caption: 'Страхование спортсменов в СК Чулпан',
    link: '/services/individuals/health/sport'
  },
  {
    image: economyImage,
    head: 'Как за каменной стеной',
    caption: 'Эконом страхование в СК Чулпан',
    link: '/services/individuals/property/economy'
  },
  {
    image: expressImage,
    head: 'Защити свой дом',
    caption: 'Экспресс страхование в СК Чулпан',
    link: '/services/individuals/property/express'
  },
  {
    image: kasko50Image,
    head: 'КАСКО 50',
    caption:
      'Программа добровольного страхования средств наземного транспорта в СК Чулпан',
    link: '/services/individuals/transport/kasko50'
  },
  // {
  //   image: familyImage,
  //   head: 'Семейный полис',
  //   caption:
  //     'Программа добровольного страхования от несчастных случаев граждан и детей'
  // },
  {
    image: voluntaryImage,
    head: 'Опора и спокойствие Вашей семьи',
    caption: 'Ипотечное страхование в СК Чулпан',
    link: '/services/individuals/mortgage/about'
  },
  {
    image: travelImage,
    head: 'В отпуск без забот',
    caption: 'Страхование путешественников в СК Чулпан',
    link: '/services/individuals/travel/abroad/about'
  },
  {
    image: kaskoImage,
    head: 'Исключи случайность на дороге',
    caption: 'КАСКО до первого случая в СК Чулпан',
    link: '/services/individuals/transport/kasko2'
  }
];

class Carousel extends Component {
  constructor(props) {
    super(props);

    this.state = {
      slidesArr,
      index: 0,
      timer: '',
      currentSlide: {},
      interval: ''
    };
  }

  componentDidMount() {
    this.setState({ currentSlide: this.state.slidesArr[this.state.index] });
    this.setState({ interval: setInterval(this.nextSlide, 5000) });
  }

  componentWillUnmount() {
    clearInterval(this.state.interval);
  }

  nextSlide = () => {
    clearInterval(this.state.interval);
    if (this.state.index === 7) {
      this.setState({ currentSlide: this.state.slidesArr[0], index: 0 });
      this.setState({ interval: setInterval(this.nextSlide, 5000) });
    } else {
      this.setState({
        currentSlide: this.state.slidesArr[this.state.index + 1],
        index: this.state.index + 1
      });
      this.setState({ interval: setInterval(this.nextSlide, 5000) });
    }
  };

  previousSlide = () => {
    clearInterval(this.state.interval);
    if (this.state.index === 0) {
      this.setState({ currentSlide: this.state.slidesArr[7], index: 7 });
      this.setState({ interval: setInterval(this.nextSlide, 5000) });
    } else {
      this.setState({
        currentSlide: this.state.slidesArr[this.state.index - 1],
        index: this.state.index - 1
      });
      this.setState({ interval: setInterval(this.nextSlide, 5000) });
    }
  };

  render() {
    return (
      <div className="banner">
        <div className="carousel__overlay" />
        <img
          src={this.state.currentSlide.image}
          className="banner__image"
          alt=""
        />

        <section className="banner__section">
          {/* <i
            className="material-icons banner__nav"
            onClick={this.previousSlide}>
            keyboard_arrow_left
          </i> */}
          <LeftIcon onClick={this.previousSlide} />

          <Link
            to={String(this.state.currentSlide.link)}
            className="banner__text">
            <h1 className="banner__head">{this.state.currentSlide.head}</h1>
            <p className="banner__caption">{this.state.currentSlide.caption}</p>
          </Link>
          <RightIcon onClick={this.nextSlide} />
          {/* <i className="material-icons banner__nav" onClick={this.nextSlide}>
            keyboard_arrow_right
          </i> */}
        </section>

        <div className="banner__indicators">
          {this.state.slidesArr.map(item => {
            return item === this.state.currentSlide ? (
              <span className="circle circle--active" />
            ) : (
              <span className="circle" />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Carousel;
