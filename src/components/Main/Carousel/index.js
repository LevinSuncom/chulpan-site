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

class Carousel extends Component {
  constructor(props) {
    super(props);

    const slidesArr = [
      {
        image: childrenImage,
        head: 'А ваш ребёнок защищён?',
        caption: 'Льготное страхование школьников и дошкольников в СК Чулпан',
        link: '/individuals/accident'
      },
      {
        image: sportImage,
        head: 'Быстрее, выше, сильнее!',
        caption: 'Страхование спортсменов в СК Чулпан',
        link: '/individuals/accident'
      },
      {
        image: economyImage,
        head: 'Как за каменной стеной',
        caption: 'Эконом страхование в СК Чулпан',
        link: '/individuals/property'
      },
      {
        image: expressImage,
        head: 'Защити свой дом',
        caption: 'Экспресс страхование в СК Чулпан',
        link: '/individuals/property'
      },
      {
        image: kasko50Image,
        head: 'КАСКО 50',
        caption:
          'Программа добровольного страхования средств наземного транспорта в СК Чулпан',
        link: '/individuals/kasko'
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
        link: '/individuals/mortgage'
      },
      {
        image: travelImage,
        head: 'В отпуск без забот',
        caption: 'Страхование путешественников в СК Чулпан',
        link: '/individuals/travel'
      },
      {
        image: kaskoImage,
        head: 'Исключи случайность на дороге',
        caption: 'КАСКО до первого случая в СК Чулпан',
        link: '/individuals/kasko'
      }
    ];

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
        <img
          src={this.state.currentSlide.image}
          className="banner__image"
          alt=""
        />

        <section className="banner__section">
          <i
            className="material-icons banner__nav"
            onClick={this.previousSlide}>
            keyboard_arrow_left
          </i>
          <Link
            to={String(this.state.currentSlide.link)}
            className="banner__text">
            <h1 className="banner__head">{this.state.currentSlide.head}</h1>
            <p className="banner__caption">{this.state.currentSlide.caption}</p>
          </Link>
          <i className="material-icons banner__nav" onClick={this.nextSlide}>
            keyboard_arrow_right
          </i>
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
