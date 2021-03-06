import React from 'react';
import image from './image.jpg';

const IndividualsMortgageAbout = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}

      <h1 className="product-header">Ипотечное страхование</h1>
      <img src={image} className="product-image" alt="" />
      <p>
        <b>Ипотечное страхование</b> – это способ защиты финансовых интересов
        заемщика по выплате ипотечного кредита в случае наступления
        непредвиденных обстоятельств.{' '}
      </p>
      <p />
      <p>
        Наличие договора страхования зачастую позволяет получить ипотечный
        кредит на более выгодных для заемщика условиях.
      </p>
      <p />
      <p>
        Страховая Компания «<span>Чулпан» предлагает</span> Вам комплексные
        программы ипотечного страхования, позволяющие при минимальных затратах<span>
          &nbsp;
        </span>получить максимальную страховую защиту своего имущества, права
        собственности, жизни и здоровья.{' '}
      </p>

      <p>
        Договор страхования заключается на один год или на срок кредита. При
        заключении договора на срок кредита страховая премия оплачивается
        ежегодно.
      </p>
      <p />
      <p>
        <span>
          Страховая сумма по страхованию имущества, жизни и{' '}
          <span>здоровья и</span>
          титульному страхованию устанавливается в соответствии с требованиями
          кредитной программы банка и может рассчитываться исходя из:<p />
        </span>
      </p>
      <ul>
        <li>
          суммы задолженности по кредиту, но не более действительной стоимости
          недвижимого имущества;
        </li>
        <li>
          суммы задолженности по кредиту, увеличенной на установленный банком
          процент, но не более действительной стоимости недвижимого имущества.
        </li>
      </ul>

      <p>Договор комплексного ипотечного страхования может включать:</p>
      <ul>
        <li>
          {' '}
          <b>
            Страхование имущества: страхование недвижимого имущества,
            передаваемого в залог банку, на случай повреждения или гибели.
          </b>{' '}
          Страховым случаем является гибель или повреждение недвижимого
          имущества в результате: пожара, взрыва, удара молнии, залива жидкостью
          в результате аварии в системах водоснабжения, стихийных бедствий и
          других событий, предусмотренных договором страхования
        </li>
        <li>
          <b>
            Страхование риска потери права собственности (титульное
            страхование):
          </b>{' '}
          страхование на случай утраты недвижимого имущества в результате
          прекращения права собственности по решению суда{' '}
        </li>
        <li>
          <b>Страхование жизни и здоровья заемщика и созаемщика кредита</b>:
          страхование на случай смерти заемщика / созаемщика / поручителя по
          любой причине, включая смерть в результате несчастного случая,
          установления I или II группы инвалидности
        </li>
        <li>
          Страхование гражданской ответственности Залогодателя перед третьими
          лицами
        </li>
      </ul>

      <p>Стоимость страхования зависит от:</p>

      <ul>
        <li>технического состояния объекта недвижимости;</li>
        <li>количества и вида сделок с объектом недвижимости;</li>
        <li>пола, возраста, состояния здоровья заемщика и т.п.</li>
      </ul>
      <p>
        Помните, что наличие полиса обязательно для предоставления в банк, а{' '}
        <b>выбор страховой компании всегда остается за Вами!</b>
      </p>
    </div>
  );
};

export default IndividualsMortgageAbout;
