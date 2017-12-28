import React, { Component } from 'react';

class Heads extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Руководство АО СК "Чулпан"</h1>

        <div>
          <img
            style={{ width: '85px', height: '110px' }}
            alt=""
            src="http://www.chulpan.ru/img/rukovodstvo/vafin2013.jpg"
            width="85"
            height="110"
          />
        </div>
        <div>
          <a href="http://www.chulpan.ru/130/">
            <b>Вафин Фарит Салихович</b>
          </a>{' '}
          - генеральный директор
        </div>
        <div>
          <hr />
        </div>
        <div>
          <img
            style={{ width: '85px', height: '111px' }}
            alt=""
            src="http://www.chulpan.ru/img/rukovodstvo/shakirov2013.jpg"
            width="85"
            height="111"
          />
        </div>
        <div>
          <a href="http://www.chulpan.ru/134/">
            <span style={{ fontWeight: 'bold' }}>
              Шакиров Фарит Гарифзанович
            </span>
          </a>
        </div>
        <div>
          - первый заместитель генерального директора, начальник управления по
          экономике и финансам
        </div>
        <div>
          <hr />
        </div>
        <div>
          <p>
            <img
              style={{ width: '85px', height: '110px' }}
              alt=""
              src="http://www.chulpan.ru/img/rukovodstvo/galjautdinov2013.jpg"
              width="85"
              height="110"
            />
          </p>
          <p>
            <a href="http://www.chulpan.ru/132/">
              <span style={{ fontWeight: 'bold' }}>
                Галяутдинов Баязит Аледдинович
              </span>
            </a>
            - заместитель генерального директора,начальник управления личного
            страхования<br />
          </p>
          <hr />
        </div>
        <div>
          <img
            style={{ width: '84px', height: '107px' }}
            alt=""
            src="http://www.chulpan.ru/img/rukovodstvo/sadikov2013.jpg"
            width="84"
            height="107"
          />
        </div>
        <div>
          <a href="/133/">
            <span style={{ fontWeight: 'bold' }}>Садыков Илдар Шакирович</span>
          </a>
          - заместитель генерального директора, начальник управления по
          страхованию имущества и ответственности
        </div>
        <blockquote dir="ltr">
          <hr />
          <p>
            <strong>
              <img
                style={{ width: '87px', height: '111px' }}
                alt=""
                src="http://www.chulpan.ru/img/rukovodstvo/leuhina.jpg"
                width="97"
                height="121"
              />
            </strong>
          </p>
          <p>
            <strong>
              <a href="http://www.chulpan.ru/250/">Леухина Елена Петровна</a>
            </strong>
            &nbsp;- главный бухгалтер - начальник управления бухгалтерского
            учета и отчетности
          </p>
        </blockquote>
      </div>
    );
  }
}

export default Heads;
