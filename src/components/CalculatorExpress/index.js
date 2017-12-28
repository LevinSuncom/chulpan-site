import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import axios from 'axios';

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

function _calculateAge(year) {
  var now = new Date();
  var age = now.getFullYear() - year;
  console.log(now.getFullYear());
  console.log(age);
  return age;
}

export default class CalculatorExpress extends Component {
  state = {
    typesArr: [
      {
        id: '',
        value: '500 000',
        name: 'Вариант 1'
      },
      {
        id: '',
        value: '1 500 000',
        name: 'Вариант 2'
      }
    ],
    amount: '',
    amount2: '',
    year: '',
    price: '',
    age: '',
    guid: '',
    buttons: false
  };

  componentDidMount() {
    const url =
      'http://chulpan.ru/Portal/ExpressProperty/GetExpressInsuranceTypes';
    axios.get(url).then(responce => {
      console.log(responce);
      const value = JSON.parse(responce.data).expressInsuranceTypes;
      this.setState({ typesArr: value, amount: value[0].id });
    });

    // var today = new Date();
    // var dd = today.getDate();
    // var mm = today.getMonth()+1; //January is 0!
    // var yyyy = today.getFullYear();
    // if(dd<10){
    //         dd='0'+dd
    //     }
    //     if(mm<10){
    //         mm='0'+mm
    //     }

    // today = yyyy+'-'+mm+'-'+dd;
    // this.setState({
    //   today: today
    // })
  }

  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

    // console.log(value)
    // console.log(typeof value)

    if (name === 'year') {
      const age = _calculateAge(value);
      if (age >= 0) {
        this.setState({
          age: age
        });
      } else {
        this.setState({
          age: ''
        });
      }
    }

    this.setState({
      [name]: value
    });
  };

  onSubmit = event => {
    const { amount2, age, year, amount } = this.state;
    event.preventDefault();

    if (amount2 < 0 || amount2 > 100000) {
      this.setState({
        error:
          'Гражданская ответственность должна быть в интервале от 0 до 100000 рублей'
      });
      return;
    }

    if (age < 0 || age > 50000 || age === '') {
      this.setState({
        error:
          'Дата постройки не должна превышать текущую дату. Возраст постройки не должен превышать 50 лет'
      });
      return;
    }

    this.setState({
      error: ''
    });

    const url = 'http://chulpan.ru/Portal/ExpressProperty/Calculate';
    axios
      .post(url, {
        year: Number(year),
        type: Number(amount),
        civil: Number(amount2)
      })
      .then(responce => {
        console.log(responce);
        const data = responce.data;
        if (data.error !== '') {
          this.setState({ error: data.error, buttons: false });
        } else {
          this.setState({
            error: '',
            price: data.fee,
            buttons: true,
            guid: data.guid
          });
        }
      });

    // console.log('Vse okey')
  };
  render() {
    return (
      <React.Fragment>
        <h1 className="product-header">Рассчёт экспресс-страхования</h1>
        <form action="" className="callback mb-20" onSubmit={this.onSubmit}>
          <label htmlFor="">Условия страхования</label>
          <select
            name="amount"
            id=""
            className="mb-12"
            onChange={this.onChange}>
            {this.state.typesArr.map(item => {
              return (
                <option value={item.id}>{`${item.name} (${
                  item.value
                })`}</option>
              );
            })}
          </select>

          <label htmlFor="">Гражданская ответственность</label>
          <input
            type="number"
            name="amount2"
            placeholder="Гражданская ответственность"
            className="mb-12"
            onChange={this.onChange}
            value={this.state.amount2}
            required
          />

          <label htmlFor="">
            Дата ввода в эксплуатацию/ капитального ремонта
          </label>
          <input
            type="number"
            name="year"
            placeholder="Дата ввода в эксплуатацию"
            className="mb-12"
            onChange={this.onChange}
            value={this.state.year}
            required
          />

          <span>
            {this.state.age !== '' && `Возраст постройки: ${this.state.age}`}
          </span>
          <div className="mb-12" />
          <button type="submit" className="button">
            Рассчитать
          </button>
        </form>
        <span style={{ color: 'green', marginBotton: '8px' }}>
          {this.state.price && `Стоимость полиса: ${this.state.price}`}
        </span>
        <span style={{ color: 'red' }}>
          {this.state.error && `Ошибка: ${this.state.error}`}
        </span>
        <div className="mb-12" />

        {this.state.buttons && (
          <div>
            <NextButton
              href={`http://chulpan.ru/Portal/Selfcare/Login/mode=signin&type=express&guid=${
                this.state.guid
              }`}
              className="mr-12">
              Войти в Личный кабинет
            </NextButton>
            <NextButton
              href={`http://chulpan.ru/Portal/Selfcare/Login/mode=signup&type=express&guid=${
                this.state.guid
              }`}>
              Создать Личный Кабинет
            </NextButton>
          </div>
        )}
      </React.Fragment>
    );
  }
}
