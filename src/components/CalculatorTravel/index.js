import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import moment from 'moment';

const NextButton = styled.a`
  display: inline-block;
  font-weight: 400;
  color: #ffffff;
  background-color: #0095d6;
  line-height: 32px;
  user-select: none;
  padding: 0 20px;
  font-size: 16px;
  height: 32px;
  border-radius: 4px;
`;

function calculateDays(dateFrom, dateTo) {
  const timeDiff = new Date(dateTo).getTime() - new Date(dateFrom).getTime();
  const diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
  return diffDays;
}

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
        birthday: '',
        sportCheck: false,
        businessCheck: false,
        leisureCheck: false,
        tourismCheck: false
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
    tourismCheck: false,
    rubSum: '',
    responceArr: []
    // feeRub,
    // ambulatoryTreat,
    // currency,
    // error,
    // extraDentalCost,
    // feeCurrency,
    // feeRub,
    // hospitalTreat,
    // infoCost,
    // success,
    // transportationCost
  };

  componentDidMount() {
    const countryUrl = 'http://chulpan.ru/Portal/Travel/GetTravelZones';
    const amountUrl = 'http://chulpan.ru/Portal/Travel/GetInsuranceSums';
    const rubSumm = 'http://chulpan.ru/Portal/Travel/GetRubSum';

    function getCountries() {
      return axios.get(countryUrl);
    }

    function getAmounts() {
      return axios.get(amountUrl);
    }

    axios.all([getCountries(), getAmounts()]).then(
      axios.spread((c, r) => {
        const val1 = c.data.periodTypes;
        const val2 = r.data.insuranceSums;
        this.setState({
          countriesArr: val1,
          amountArr: val2,
          country: val1[0].id,
          amount: val2[0].id
        });

        axios
          .post(rubSumm, {
            zone: this.state.country,
            curr: this.state.amount,
            req: moment()
          })
          .then(responce => {
            const value = responce.data;
            console.log(value);
            this.setState({ rubSum: value.value });
          });
      })
    );
  }

  onChange = event => {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    if (name === 'dayTo' && this.state.dayFrom !== '') {
      this.setState({ time: calculateDays(this.state.dayFrom, value) });
    }
    else if (name === 'dayFrom' && this.state.dayTo !== '') {
      this.setState({ time: calculateDays(value, this.state.dayTo) });
    }
    this.setState(
      {
        [name]: value
      },
      () => {
        if (name === 'amount' || name === 'country') {
          const rubSumm = 'http://chulpan.ru/Portal/Travel/GetRubSum';
          axios
            .post(rubSumm, {
              zone: this.state.country,
              curr: this.state.amount,
              req: moment()
            })
            .then(responce => {
              const value = responce.data;
              console.log(value);
              this.setState({ rubSum: value.value });
            });
        }
      }
    );
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
          'Дата начала страхования должна быть не раньше чем 2 двух дней от текущего',
        responceArr: []
      });
      return;
    }

    if (moment.duration(moment(dayTo).diff(moment(dayFrom))).asYears() > 1) {
      this.setState({
        error: 'Разница дат не должна превышать год',
        responceArr: []
      });
      return;
    }

    if (moment.duration(moment(dayTo).diff(moment(dayFrom))).asDays() < 1) {
      this.setState({
        error: 'Дата начала договора не может быть больше даты окончания',
        responceArr: []
      });
      return;
    }

    let bool = true;

    participantArr.forEach(item => {
      if (moment().diff(item.birthday, 'years') < 0) {
        this.setState({
          error: 'Возраст не может быть отрицательным',
          responceArr: []
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
        birthDates: participantArr
      })
      .then(responce => {
        const data = responce.data;
        if (data.error !== '') {
          this.setState({
            error: data.error,
            responceArr: []
          });
        } else {
          this.setState({
            responceArr: data,
            error: ''
          });
        }
      });
  };

  onParticipantChange = event => {
    const target = event.target;
    const name = target.name;
    const id = target.id;
    const value = target.type === 'checkbox' ? target.checked : target.value;

    const updatedParticipantArr = this.state.participantArr.map(item => {
      if (item.id === id) {
        if (name === 'birthDay') {
          item.birthday = value
        }
        else if (name === 'businessCheck') {
          item.businessCheck = value
        }
        else if (name === 'leisureCheck') {
          item.leisureCheck = value
        }
        else if (name === 'sportCheck') {
          item.sportCheck = value
        }
        else if (name === 'tourismCheck') {
          item.tourismCheck = value
        }

      }
      return item;
    });

    this.setState({
      participantArr: updatedParticipantArr
    });
  };

  addParticipant = event => {
    event.preventDefault();
    const newParticipant = {
      id: `participant-${new Date().getTime()}`,
      birthday: '',
      sportCheck: false,
      businessCheck: false,
      leisureCheck: false,
      tourismCheck: false
    };
    this.setState({
      participantArr: [...this.state.participantArr, newParticipant]
    });
  };

  render() {
    const { participantArr } = this.state;
    return (
      <React.Fragment>
        <h1 className="product-header">Расчёт полиса выезжающих за границу</h1>
        <form action="" className="callback mb-40" onSubmit={this.onSubmit}>
          <label htmlFor="">Территория страхования</label>
          <select
            name="country"
            id=""
            className="mb-12"
            onChange={this.onChange}>
            {this.state.countriesArr.map(item => {
              {
                /* const key = createKey() */
              }
              return (
                <option key={item.id} value={item.id}>
                  {item.value}
                </option>
              );
            })}
          </select>

          <label htmlFor="">Укажите страховую сумму в валюте</label>
          <select
            name="amount"
            id=""
            className="mb-12"
            onChange={this.onChange}>
            {this.state.amountArr.map(item => {
              return (
                <option key={item.id} value={item.id}>
                  {item.valueCurr}
                </option>
              );
            })}
          </select>
          {this.state.rubSum &&
            `Страховая сумма в рублях: ${this.state.rubSum} рублей`}

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
            <label htmlFor="">Укажите дату рождения участника и цель поездки </label>
            {participantArr.map(item => {
              return (
                <React.Fragment>
                  <div
                    key={item.id}
                    style={{ display: 'flex', alignItems: 'center' }}>
                    <input
                      type="date"
                      id={item.id}
                      name="birthDay"
                      className="mb-12 mr-12"
                      onChange={this.onParticipantChange}
                      value={item.birthday}
                      style={{ display: 'block' }}
                      required
                    />
                    {item.birthday &&
                      `Возраст: ${moment().diff(item.birthday, 'years')} лет`}
                  </div>
                  <div>
                    <div style={{ display: 'flex', alignItems: 'center' }}>
                      <input
                        type="checkbox"
                        id={item.id}
                        name="sportCheck"
                        className="mr-12"
                        onChange={this.onParticipantChange}
                        value={item.sportCheck}
                      //checked={this.state.sportCheck}
                      />
                      <label htmlFor="sportCheck">Спорт</label>
                      &nbsp;&nbsp;
                      <input
                        type="checkbox"
                        id={item.id}
                        name="tourismCheck"
                        className="mr-12"
                        onChange={this.onParticipantChange}
                        value={item.tourismCheck}
                      //checked={this.state.tourismCheck}
                      />
                      <label htmlFor="tourismCheck">Туризм</label>
                      &nbsp;&nbsp;
                      <input
                        type="checkbox"
                        id={item.id}
                        name="leisureCheck"
                        className="mr-12"
                        onChange={this.onParticipantChange}
                        value={item.leisureCheck}
                      //checked={this.state.leisureCheck}
                      />
                      <label htmlFor="leisureCheck">Активный отдых</label>
                      &nbsp;&nbsp;
                      <input
                        type="checkbox"
                        id={item.id}
                        name="businessCheck"
                        className="mr-12"
                        onChange={this.onParticipantChange}
                        value={item.businessCheck}
                      //checked={this.state.businessCheck}
                      />
                      <label htmlFor="businessCheck">Профессиональная деятельность</label>
                    </div>

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

          <button type="submit" className="button">
            Расчитать
          </button>
        </form>

        <span style={{ color: 'red' }}>
          {this.state.error && `Ошибка: ${this.state.error}`}
        </span>

        <p style={{ color: 'green' }}>
          {this.state.responceArr.feeRub &&
            `Стоимость полиса: ${this.state.responceArr.feeRub.toFixed(2)} рублей `}
          {this.state.responceArr.currency === 'EUR' &&
            `в евро ${this.state.responceArr.feeCurrency}`}
          {this.state.responceArr.currency === 'USD' &&
            `в долларах ${this.state.responceArr.feeCurrency.toFixed(2)}`}
        </p>

        <div>
          <p>
            {this.state.responceArr.length !== 0 && `Включено в программу:`}
          </p>

          {this.state.responceArr.length !== 0 && (
            <div>
              <ul>
                <li>
                  {this.state.responceArr.hospitalTreat &&
                    `медицинские расходы на стационарное лечение ${
                    this.state.responceArr.hospitalTreat
                    }`}
                </li>
                <li>
                  {this.state.responceArr.ambulatoryTreat &&
                    `медицинские расходы на амбулаторное лечение ${
                    this.state.responceArr.ambulatoryTreat
                    }`}
                </li>
                <li>
                  {this.state.responceArr.transportationCost &&
                    `медико-транспортные расходы ${
                    this.state.responceArr.transportationCost
                    }`}
                </li>
                <li>
                  {this.state.responceArr.extraDentalCost &&
                    `медицинские расходы на экстренную стоматологическую помощь ${
                    this.state.responceArr.extraDentalCost
                    }`}
                </li>
                <li>
                  {this.state.responceArr.infoCost &&
                    `информационные расходы ${this.state.responceArr.infoCost}`}
                </li>
              </ul>

              <div>
                <NextButton
                  href={`http://chulpan.ru/Portal/Selfcare/Login?mode=signin&type=express&guid=${
                    this.state.guid
                    }`}
                  className="mr-12">
                  Войти в Личный кабинет
                </NextButton>
                <NextButton
                  href={`http://chulpan.ru/Portal/Selfcare/Login?mode=signup&type=express&guid=${
                    this.state.guid
                    }`}>
                  Создать Личный Кабинет
                </NextButton>
              </div>
            </div>
          )}
        </div>
        <span id="hotlog_counter"></span>
        <span id="hotlog_dyn"></span>
        <script type="text/javascript">
          var hot_s = document.createElement('script');
          hot_s.type = 'text/javascript'; hot_s.async = true;
          hot_s.src = 'http://js.hotlog.ru/dcounter/2563388.js';
          hot_d = document.getElementById('hotlog_dyn');
          hot_d.appendChild(hot_s);
          </script>
      </React.Fragment>
    );
  }
}
