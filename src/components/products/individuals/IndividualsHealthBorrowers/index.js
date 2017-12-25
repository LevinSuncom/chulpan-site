import React from 'react';
import image from './image.jpg';

const IndividualsHealthBorrowers = () => {
  return (
    <div>
      <h1 className="product-header">Программа «Страхование заемщиков»</h1>
      <img src={image} className="product-image" alt="" />

      <p>
        <b>
          <span>Страховыми случаями признаются следующие события:</span>
        </b>
      </p>

      <p>
        <span>- смерть Застрахованного в результате несчастного случая.</span>
      </p>

      <p>
        <span>- постоянная утрата, </span>
        <span>
          снижение{' '}
          <span>
            <span>
              Застрахованным<span>&nbsp; </span>трудоспособности
            </span>
          </span>
          <span>
            {' '}
            в результате несчастного случая:<span>
              &nbsp;&nbsp;{' '}
            </span>установление инвалидности{' '}
          </span>
        </span>
        <span>I</span>
        <span> группы.</span>
      </p>

      <p>
        <span>Страховая сумма устанавливается с</span>
        <span>
          огласно сумме оформляемого кредита, включая банковский процент.
        </span>
      </p>

      <p>
        <b>
          <span>
            Данная программа может быть интересна тем, кто планирует взять
            кредит на любые цели (потребительский, ипотечный и др.) в Банке и
            одновременно исполнить требование Банка о страховании жизни и
            здоровья, а также обезопасить своих близких и поручителей от
            непредвиденных ситуаций.
          </span>
        </b>
      </p>

      <p>
        <span />
      </p>
      <p>&nbsp;</p>
    </div>
  );
};

export default IndividualsHealthBorrowers;
