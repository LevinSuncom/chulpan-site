import React from 'react';
import image from './image.jpg';

const IndividualsPropertyCombinedAbout = () => {
  return (
    <div>
      <h1 className="product-header">
        Комбинированное страхование имущества граждан
      </h1>

      <img src={image} alt="" className="product-image" />

      {/* <img src={image} className="product-image" alt="" />
        <button
          className="button"
          onClick={() => {
            this.setState({ economIsOpen: !this.state.economIsOpen });
          }}>
          Рассчёт эконом-страхования
        </button>
        <button
          className="button mb-40"
          onClick={() => {
            this.setState({ expressIsOpen: !this.state.expressIsOpen });
          }}>
          Рассчёт экспресс-страхования
        </button> */}
      <p>
        Риск потерять в результате непредвиденных событий имущество и понести в
        связи с этим материальный ущерб вызывает у граждан потребность в
        страховании. Проблема страховой защиты имущества граждан разрешается с
        помощью страхования. При этом страховании страховая защита подразумевает
        возмещения ущерба как застрахованного имущества, так и возмещение ущерба
        пострадавшему имуществу третьих лиц.
      </p>
      <p>По данному договору страхования могут быть застрахованы:</p>

      <ul>
        <li>
          <b>Строения</b>, в том числе земельные участки и строительством
          объекты:
          <ul>
            <li>
              жилые дома, садовые домики, дачи, хозяйственные (хозблоки, бани,
              гаражи, сараи, амбары и другие строения), здания и строения
              сооружения, непосредственно связанные с землей;
            </li>
            <li>
              незавершенные строительством объекты, находящиеся в собственности
              граждан, возведенные на постоянное место на отведенных им
              земельных участках, имеющие стены и крышу;
            </li>
            <li>
              земельные участки, при условии совместного страхования с выше
              перечисленными объектами.
            </li>
          </ul>
        </li>
        <li>
          <b>Квартиры:</b>
          <ul>
            <li>принадлежащие гражданам на праве собственности;</li>
            <li>
              государственного, муниципального, ведомственного жилищного фонда,
              предоставленные гражданам по договору найма, аренды жилого
              помещения, либо на ином законном основании;
            </li>
            <li>
              части домов и квартир, иные помещения, принадлежащие гражданам.
            </li>
          </ul>
        </li>
        <li>
          <b>Домашнее и иное имущество</b>, принадлежащее Страхователю и членам
          его семьи: предметы домашней обстановки, обихода и потребления, а
          также находящиеся в собственности или ином законном основании
          механизмы, технические устройства, инвентарь и т.д.
        </li>
        <li>
          <b>
            Элементы отделки и дополнительное инженерное оборудование
            конструктивных элементов квартиры, строений:
          </b>
          <ul>
            <li>
              внутренняя отделка квартиры/ строений – все виды внутренних
              штукатурных и малярных работ, в том числе лепные работы; отделка
              стен, потолка всеми видами дерева, пластика и другими
              материалами,оклейка их обоями; напольные покрытия (линолеум,
              паркет и т.п.);дверные конструкции (входные, межкомнатные),
              включая саму дверь,дверное остекление и дверную коробку; оконные
              блоки, включая остекление, встроенная мебель и техника.
            </li>
            <li>
              дополнительное инженерное оборудование квартиры/ строений – любое
              оборудование, установленное за счет
              Страхователя/Выгодоприобретателя дополнительно (взамен) к
              стандартному (предусмотренному типовым строительным проектом),
              входящие в состав систем отопления, водо-, газо-, тепло-,
              электроснабжения, канализации, вентиляции, различных видов
              очистки, канализации и других систем жизнеобеспечения,
              телерадиоантенн, (включая комнатные) и стационарно установленное
              (закрепленное) на/в основных конструктивных элементах
              квартиры/строений (газовые и электрические плиты, камины,
              кондиционеры, сантехническое оборудование и иное оборудование.
            </li>
          </ul>
        </li>

        <li>
          <b>Гражданская ответственность</b>Страхователя за вред, причиненный
          жизни, здоровью и/или имуществу третьих лиц в результате наступления
          события, признанного страховым случаем.
        </li>
      </ul>

      {/* <Modal isOpen={this.state.economIsOpen} contentLabel="Modal">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '40px'
            }}>
            <h1 className="mb-20">Эконом страхование</h1>
            <span
              className="bottom-close"
              onClick={() => {
                this.setState({ economIsOpen: !this.state.economIsOpen });
              }}>
              x Закрыть
            </span>
            <form action="" className="callback mb-40">
              <label htmlFor="">Укажите страховую сумму</label>
              <input
                type="text"
                placeholder="Страховая сумма"
                ref="economPrice"
                className="mb-12"
              />

              <label htmlFor="">
                Дата ввода в эксплуатацию/капитального ремонта
              </label>
              <div className="flex mb-32" style={{ alignItems: 'center' }}>
                <input
                  type="date"
                  className=""
                  style={{ width: '80%', marginRight: '40px' }}
                  ref="economDate"
                  onChange={this.dateEconom}
                />
                <span style={{ flexShrink: '0' }}>
                  Возраст: {this.state.economAge}
                </span>
              </div>
              <p>
                ВНИМАНИЕ! Возраст постройки квартир составляет не более 50 лет
              </p>
              <p>Возраст постройки домов составляет не более 35 лет</p>

              <div className="flex mb-32" style={{ alignItems: 'center' }}>
                <button
                  type="submit"
                  className="button"
                  style={{ marginRight: '40px' }}
                  onClick={this.makeEconom}>
                  Рассчитать
                </button>

                <span>
                  Стоимость полиса: <span>{this.state.economPrice}</span>
                </span>
              </div>
              <p>
                *данная программа не распространяется на садовые домики и дачи
              </p>
            </form>
          </div>
        </Modal> */}

      {/* <Modal isOpen={this.state.expressIsOpen} contentLabel="Modal">
          <div
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              marginTop: '40px'
            }}>
            <h1 className="mb-20">Экспресс страхование</h1>
            <span
              className="bottom-close"
              onClick={() => {
                this.setState({ expressIsOpen: !this.state.expressIsOpen });
              }}>
              x Закрыть
            </span>
            <form action="" className="callback mb-40">
              <label htmlFor="">Укажите страховую сумму</label>
              <input
                type="text"
                placeholder="Страховая сумма"
                ref="expressPrice"
                className="mb-12"
              />

              <label htmlFor="">Гражданская ответственность</label>
              <input type="text" placeholder="" ref="" className="mb-12" />

              <label htmlFor="">
                Дата ввода в эксплуатацию/капитального ремонта
              </label>
              <div className="flex mb-32" style={{ alignItems: 'center' }}>
                <input
                  type="date"
                  className=""
                  style={{ width: '80%', marginRight: '40px' }}
                  ref="expressDate"
                  onChange={this.dateExpress}
                />
                <span style={{ flexShrink: '0' }}>
                  Возраст: {this.state.expressAge}
                </span>
              </div>
              <p>
                ВНИМАНИЕ! Возраст постройки квартир составляет не более 50 лет
              </p>
              <p>Возраст постройки домов составляет не более 35 лет</p>

              <div className="flex mb-32" style={{ alignItems: 'center' }}>
                <button
                  type="submit"
                  className="button"
                  style={{ marginRight: '40px' }}
                  onClick={this.makeExpress}>
                  Рассчитать
                </button>

                <span>
                  Стоимость полиса: <span>{this.state.expressPrice}</span>
                </span>
              </div>
            </form>
          </div>
        </Modal> */}
    </div>
  );
};

export default IndividualsPropertyCombinedAbout;
