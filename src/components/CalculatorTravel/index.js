import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';

import moment from 'moment';

function calculateAge(birthday) {
  const ageDifMs = Date.now() - new Date(birthday).getTime();
  const ageDate = new Date(ageDifMs); // miliseconds from epoch
  const age = ageDate.getUTCFullYear() - 1970;
  return age;
}

function calculateDays(dateFrom, dateTo) {
  const timeDiff = new Date(dateTo).getTime() - new Date(dateFrom).getTime();
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

// function calculateFromNow(date) {
//   const timeDiff = Math.abs(Date.now() - new Date(date).getTime());
//   const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
//   return diffDays;
// }

export default class CalculatorTravel extends Component {
  state = {
    countriesArr: [
      {
        value: '500 000',
        id: 'Вариант 1'
      },
      {
        value: '1 500 000',
        id: 'Вариант 2'
      }
    ],
    amountArr: [
      {
        value: '500 000',
        name: 'Вариант 1'
      },
      {
        value: '1 500 000',
        name: 'Вариант 2'
      }
    ],
    participantArr: [
      {
        id: `participant-${new Date().getTime()}`,
        birthday: ''
      }
    ],
    country: '',
    amount: '',
    date: '',
    price: '',
    age: '',
    time: '',
    dayFrom: '',
    dayTo: '',
    today: '',
    button: false,
    guid: '',
    sportCheck: false,
    businessCheck: false,
    leisureCheck: false,
    tourismCheck: false
  };

  componentDidMount() {
    const countryUrl = 'http://chulpan.ru/Portal/Travel/GetTravelZones';
    axios.get(countryUrl).then(responce => {
      const value = responce.data.periodTypes;
      this.setState({ countriesArr: value, country: value[0].id });
      // console.log(responce.data);
    });
    const amountUrl = 'http://chulpan.ru/Portal/Travel/GetInsuranceSums';
    axios.get(amountUrl).then(responce => {
      const value = responce.data.insuranceSums;
      this.setState({ amountArr: value, amount: value[0].id });
    });
  }

  onChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    // if (name === 'date') {
    //   const age = calculateAge(new Date(value));
    //   if (age >= 0) {
    //     this.setState({
    //       age: age
    //     });
    //   } else {
    //     this.setState({
    //       age: ''
    //     });
    //   }
    // }

    if (name === 'dayTo' && this.state.dayFrom !== '') {
      this.setState({ time: calculateDays(this.state.dayFrom, value) });
    }

    if (name === 'dayFrom' && this.state.dayTo !== '') {
      this.setState({ time: calculateDays(value, this.state.dayTo) });
    }

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    const {
      country,
      amount,
      dayFrom,
      dayTo,
      participantArr,
      purposes,
      sportCheck,
      businessCheck,
      leisureCheck,
      tourismCheck
    } = this.state;
    event.preventDefault();

    if (
      !moment(dayFrom).isSameOrAfter(
        moment()
          .startOf('day')
          .add(2, 'days')
      )
    ) {
      this.setState({
        error:
          'Дата начала страхования должна быть не раньше чем 2 двух дней от текущего'
      });
      return;
    }

    if (moment.duration(moment(dayTo).diff(moment(dayFrom))).asYears() > 1) {
      this.setState({
        error: 'Разница дат не должна превышать год'
      });
      return;
    }

    if (moment.duration(moment(dayTo).diff(moment(dayFrom))).asDays() < 1) {
      this.setState({
        error: 'Дата начала договора не может быть больше даты окончания'
      });
      return;
    }

    let bool = true;

    participantArr.forEach(item => {
      if (moment().diff(item.birthday, 'years') < 1) {
        this.setState({
          error: 'Возраст не может быть отрицательным'
        });
        bool = false;
      }
    });

    if (bool === false) return;

    this.setState({
      error: ''
    });

    const url = 'http://chulpan.ru/Portal/Travel/Calculate';
    axios
      .post(url, {
        zone: country,
        insuredSumRub: amount,
        beginDate: dayFrom,
        endDate: dayTo,
        birthDates: participantArr,
        sportCheck: sportCheck,
        businessCheck: businessCheck,
        leisureCheck: leisureCheck,
        tourismCheck: tourismCheck
      })
      .then(responce => {
        console.log(responce);
      });

    // console.log('Vse okey')
  };

  onParticipantChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    // console.log(event);

    // const updatedParticipant = {
    //   id: name,
    //   birthday: value
    // }

    const updatedParticipantArr = this.state.participantArr.map(item => {
      if (item.id === name) {
        item.birthday = value;
      }
      return item;
    });

    this.setState({
      participantArr: updatedParticipantArr
    });
    // this.setState({
    //   participantArr: [
    //     ...this.state.participantArr,
    //     updatedParticipant
    //   ]
    // })
  };

  addParticipant = event => {
    event.preventDefault();
    const newParticipant = {
      id: `participant-${new Date().getTime()}`,
      birthday: ''
    };
    this.setState({
      participantArr: [...this.state.participantArr, newParticipant]
    });
  };

  render() {
    const { participantArr } = this.state;
    return (
      <React.Fragment>
        <h1 className="product-header">Рассчёт ВЗР</h1>
        <form action="" className="callback mb-40" onSubmit={this.onSubmit}>
          <label htmlFor="">Территория страхования</label>
          <select
            name="country"
            id=""
            className="mb-12"
            onChange={this.onChange}>
            {this.state.countriesArr.map(item => {
              return <option value={item.id}>{item.value}</option>;
            })}
          </select>

          <label htmlFor="">Укажите страховую сумму</label>
          <select
            name="amount"
            id=""
            className="mb-12"
            onChange={this.onChange}>
            {this.state.amountArr.map(item => {
              return <option value={item.id}>{item.value}</option>;
            })}
          </select>

          <label htmlFor="">Укажите срок страхования</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="date"
              name="dayFrom"
              id=""
              className="mb-12 mr-12"
              onChange={this.onChange}
              required
            />

            <input
              type="date"
              name="dayTo"
              id=""
              className="mb-12 mr-12"
              onChange={this.onChange}
              required
            />

            {this.state.time && `Период: ${this.state.time} дней`}
          </div>

          <div>
            <label htmlFor="">Укажите дату рождения участника поездки </label>
            {participantArr.map(item => {
              return (
                <React.Fragment>
                  <div style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      key={item.id}
                      type="date"
                      name={item.id}
                      className="mb-12 mr-12"
                      onChange={this.onParticipantChange}
                      value={item.birthday}
                      style={{ display: 'block' }}
                      required
                    />
                    {item.birthday &&
                      `Возраст: ${moment().diff(item.birthday, 'years')} лет`}
                  </div>
                </React.Fragment>
              );
            })}

            <button
              style={{
                width: 'initial',
                display: 'block',
                marginBottom: '12px'
              }}
              onClick={this.addParticipant}>
              + Добавить участника
            </button>
          </div>

          <label htmlFor="">Укажите цель поездки</label>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="sportCheck"
              name="sportCheck"
              className="mr-12"
              onChange={this.onChange}
              checked={this.state.sportCheck}
            />
            <label htmlFor="sportCheck">Спорт</label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="tourismCheck"
              name="tourismCheck"
              className="mr-12"
              onChange={this.onChange}
              checked={this.state.tourismCheck}
            />
            <label htmlFor="tourismCheck">Туризм</label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="leisureCheck"
              name="leisureCheck"
              className="mr-12"
              onChange={this.onChange}
              checked={this.state.leisureCheck}
            />
            <label htmlFor="leisureCheck">Активный отдых</label>
          </div>

          <div style={{ display: 'flex', alignItems: 'center' }}>
            <input
              type="checkbox"
              id="businessCheck"
              name="businessCheck"
              className="mr-12"
              onChange={this.onChange}
              checked={this.state.businessCheck}
            />
            <label htmlFor="businessCheck">Профессиональная деятельность</label>
          </div>

          {/* <span>
            {this.state.age !== '' && `Возраст постройки: ${this.state.age}`}
          </span> */}
          {/* <div className="mb-12" /> */}
          <button type="submit" className="button">
            Рассчитать
          </button>
        </form>
        <span style={{ color: 'green' }}>
          {this.state.price && `Стоимость полиса: ${this.state.price}`}
        </span>
        <span style={{ color: 'red' }}>
          {this.state.error && `Ошибка: ${this.state.error}`}
        </span>
      </React.Fragment>
    );
  }
}
