import React, { Component } from 'react';

import vafin from './vafin.jpg';
import shakirov from './shakirov.jpg';
import leuhina from './leuhina.jpg';
import galiautdinov from './galiautdinov.jpg';

class Heads extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Руководство АО СК "Чулпан"</h1>

        <div>
          <img
            style={{ width: '85px', height: '110px' }}
            alt=""
            src={vafin}
            width="85"
            height="110"
          />
        </div>
        <div>
          {/* <a href="http://www.chulpan.ru/130/"> */}
            <b>Вафин Фарит Салихович</b>
          {/* </a>{' '}a */}
          <br/>
          Генеральный директор
        </div>
        <div>
          <hr />
        </div>
        <div>
          <img
            style={{ width: '85px', height: '111px' }}
            alt=""
            src={shakirov}
            width="85"
            height="111"
          />
        </div>
        <div>
          {/* <a href="http://www.chulpan.ru/134/"> */}
            {/* <span style={{ fontWeight: 'bold' }}> */}
              <b>Шакиров Фарит Гарифзанович</b>
            {/* </span> */}
          {/* </a> */}
        </div>
        <div>
          Первый заместитель генерального директора, начальник управления по
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
              src={galiautdinov}
              width="85"
              height="110"
            />
          </p>
          <p>
            {/* <a href="http://www.chulpan.ru/132/">
              <span style={{ fontWeight: 'bold' }}> */}
                <b>Галяутдинов Баязит Аледдинович</b>
{/*               </span>
            </a> */}
            <br/>
            Заместитель генерального директора,начальник управления личного
            страхования<br />
          </p>
        </div>
{/*         <div>
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
        </div> */}
        <blockquote dir="ltr">
          <hr />
          <p>
            <strong>
              <img
                style={{ width: '87px', height: '111px' }}
                alt=""
                src={leuhina}
                width="97"
                height="121"
              />
            </strong>
          </p>
          <p>
            {/* <strong>
              <a href="http://www.chulpan.ru/250/"> */}
              <b>Леухина Елена Петровна</b>
              {/* </a>
            </strong> */}
            <br/>
            Главный бухгалтер, начальник управления бухгалтерского
            учета и отчетности
          </p>
        </blockquote>
      </div>
    );
  }
}

export default Heads;
