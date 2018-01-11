import React, { Component } from 'react';

import file1 from './otchet15122017.pdf';
import file2 from './otchetobitogax16052017.pdf';
import file3 from './otchetobitogax09122016.pdf';
import file4 from './otchetobitigax14092016.pdf';
import file5 from './otchetobitogax17052016.pdf';
import file6 from './otchetobitogax140920151.pdf';
import file7 from './otchetobitogax11062015.pdf';
import file8 from './otchet102014.pdf';
import file9 from './otchet102014.pdf';
import file10 from './otchetobitigax20052015.pdf';

import file11 from './soobhenie23112017.pdf';
import file12 from './soobsheniegodsobr12052017.pdf';
import file13 from './soobhenie15112016.pdf';
import file14 from './soobhenie16082016.pdf';
import file15 from './soobshenie12052016.pdf';
import file16 from './soobshenie20082015.pdf';
import file17 from './soobshenie19052015.pdf';
import file18 from './soobshenie20042015.pdf';


class ForShareHolders extends Component {
  render() {
    return (
      <div>
        <h1 className="product-header">Акционерам</h1>
        Отчёты
        <br />
        <ul>
          <li><a href={file1}>Отчет об итогах голосования на внеочередном собрании акционеров от 15.12.2017  </a></li>
          <li><a href={file2}>Отчет об итогах голосования на годовом общем собрании акционеров от 16.05.2017  </a></li>
          <li><a href={file3}>Отчет об итогах голосования на внеочередном собрании акционеров 09.12.2016г  </a></li>
          <li><a href={file4}>Отчет об итогах голосования на внеочередном собрании акционеров 13.09.2016г  </a></li>
          <li><a href={file5}>Отчет об итогах голосования на годовом общем собрании акционеров от 16.05.2016г  </a></li>
          <li><a href={file6}>Отчет об итогах голосования на внеочередном общем собрании акционеров 14.09.2015г</a></li>
          <li><a href={file7}>Отчет об итогах голосования на внеочередном общем собрании акционеров 11.06.2015г  </a></li>
          <li><a href={file8}>Отчет об итогах голосования на внеочередном общем собрании акционеров 13.10 2014г  </a></li>
          <li><a href={file9}>Отчет об итогах голосования на внеочередной общем собрании акционеров 08.12.2014г  </a></li>
          <li><a href={file10}>ОТЧЕТ об итогах голосования на годовом общем собрании акционеров от 20.05.2015г.  </a></li>
        </ul>
        <hr />
        Сообщеня
        <br />
        <ul>
          <li><a href={file11}>СООБЩЕНИЕ о проведении внеочередного собрания акционеров АО СК "Чулпан" от 23.11.2017г.</a></li>
          <li><a href={file12}>СООБЩЕНИЕ о проведении годового общего собрания акционеров АО СК "Чулпан" от 21.04.2017г.</a></li>
          <li><a href={file13}>СООБЩЕНИЕ о проведении внеочередного собрания акционеров АО СК "Чулпан" от 15.11.2016г.</a></li>
          <li><a href={file14}>СООБЩЕНИЕ о проведении внеочередного собрания акционеров АО СК "Чулпан" от 16.08.2016г.</a></li>
          <li><a href={file15}>СООБЩЕНИЕ о проведении внеочередного собрания акционеров АО СК "Чулпан" от 18.04.2016г.</a></li>
          <li><a href={file16}>СООБЩЕНИЕ о проведении внеочередного собрания акционеров АО СК "Чулпан" от 20.08.2015г.</a></li>
          <li><a href={file17}>СООБЩЕНИЕ о проведении внеочередного собрания акционеров АО СК "Чулпан" от 19.05.2015г.</a></li>
          <li><a href={file18}>СООБЩЕНИЕ о проведении годового общего собрания акционеров АО СК "Чулпан" от 20.04.2015г.</a></li>
        </ul>
        <hr />

        <p><span>Дата и время последнего изменения на странице: 19.12.2017г., 15:35</span>
        </p>

      </div>
    );
  }
}

export default ForShareHolders;
