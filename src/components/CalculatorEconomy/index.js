import React, { Component } from 'react';
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

export default class CalculatorEconomy extends Component {
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
    year: '',
    price: '',
    age: '',
    button: false,
    guid: ''
  };

  componentDidMount() {
    const url =
      'http://chulpan.ru/Portal/EconomProperty/GetEconomInsuranceTypes';

    axios.get(url).then(responce => {
      const value = JSON.parse(responce.data).economInsuranceTypes;
      this.setState({ typesArr: value, amount: value[0].id });
    });
  }

  onChange = event => {
    const target = event.target;
    const name = target.name;
    const value = target.value;

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
    const { age, year, amount } = this.state;
    event.preventDefault();

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

    const url = 'http://chulpan.ru/Portal/EconomProperty/Calculate';
    axios
      .post(url, {
        year: Number(year),
        type: Number(amount)
      })
      .then(responce => {
        console.log(responce);
        const data = responce.data;
        if (data.error !== '') {
          this.setState({ error: data.error });
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
        <h1 className="product-header">Расчёт эконом-страхования</h1>
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

          <label htmlFor="">
            Год ввода в эксплуатацию/ капитального ремонта
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
        <span style={{ color: 'green' }}>
          {this.state.price && `Стоимость полиса: ${this.state.price} рублей`}
        </span>
        <span style={{ color: 'red' }}>
          {this.state.error && `Ошибка: ${this.state.error}`}
        </span>
        <div className="mb-12" />

        {this.state.buttons && (
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
        )}
      </React.Fragment>
    );
  }
}
