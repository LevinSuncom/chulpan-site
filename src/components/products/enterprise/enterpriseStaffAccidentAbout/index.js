import React from 'react';

import { Link } from 'react-router-dom';
// import Breadcrumbs from '../../App/Breadcrumbs';


// const imgStyle = {
//   width: '100%',
//   height: '260px',
//   backgroundImage: `url(${IndividualsImage})`,
//   borderRadius: '4px',
//   backgroundSize: 'cover',
//   backgroundPositionY: 'top',
//   marginBottom: '12px'
// };

import image from '../enterpriseStaff/image.jpg';

const EnterpriseAbout = () => {
  return (
    <div>
      {/* <Breadcrumbs>{this.props.location.pathname}</Breadcrumbs> */}
      <h1 className="product-header">Страхование несчастных случаев на производстве</h1>
      <img src={image} className="product-image" alt="" />
      <p>Стремительна жизнь современного человека. К сожалению, несчастные случаи и болезни настигают всегда неожиданно. Несомненно, каждый работо-датель заинтересован в защите здоровья и жизни каждого сотрудника  и за-ключение договора коллективного  страхования от несчастных случаев являет-ся одним из вариантов решения. Преимуществами  принятия решения о за-ключении договора страхования  является: 	</p>
      <ul>
        <li>расширение социального пакета для сотрудников;</li>
        <li>уменьшение расходов, связанных с нетрудоспособностью сотрудников, вследствие наступления страховых случаев;</li>
        <li>материальная поддержка, прежде всего в случае потери кормильца, ин-валидности, а также возможность компенсации дополнительных затрат, возни-кающих в связи с нетрудоспособностью в результате несчастного случая ра-ботников.</li>
      </ul>
      <p>Страхование от несчастных случаев работников предприятий осуществ-ляется независимо от профиля деятельности и количества сотрудников - от не-скольких человек до десятков тысяч работников.</p>
      <p>Договор страхования может предусматривать возмещение вреда, причи-ненного жизни и здоровью застрахованного, как во время работы, так и 24 ча-са в сутки.</p>
      <p>АО СК «Чулпан» предлагает на выбор Страхователя несколько вариантов страховых программ:</p>
      <p>Страхование основных рисков:</p>
      <ul>
        <li>временная утрата трудоспособности в результате несчастного случая;</li>
        <li>постоянная утрата трудоспособности (инвалидность) в результате несчастного случая;</li>
        <li>смерть застрахованного в результате несчастного случая.</li>
      </ul>
      <p>Также, возможно расширить базовые программы страхования и дополни-тельно включить следующие условия страхования:</p>
      <ul>
        <li>страховая защита 24 часа в сутки, только в рабочее время или в рабо-чее время, включая дорогу на работу и обратно;</li>
        <li>срок действия договора страхования устанавливается по соглашению сторон;</li>
        <li>общее количество застрахованных лиц не ограничено;</li>
        <li>набор страховых рисков на усмотрение Страхователя;</li>
        <li>индивидуальная страховая сумма для каждого застрахованного;</li>
        <li>страховые суммы могут быть увеличены / уменьшены в период дей-ствия договора страхования с доплатой / возвратом части страховой премии путем заключения дополнительного соглашения;</li>
        <li>количество застрахованных может быть увеличено / уменьшено в пери-од действия договора страхования с доплатой / возвратом части страховой премии путем заключения дополнительного соглашения;</li>
        <li>страховая премия может быть уплачена единовременно или в рассроч-ку;</li>
        <li> территория страхования определяется договором и может включать весь мир.</li>
      </ul>
      <p>В случае временной утраты трудоспособности застрахованному лицу единовременно производится страховая выплата:</p>
      <ul>
        <li> в размере 0,5 % за каждый день нетрудоспособности от индивидуаль-ной страховой суммы;</li>
      </ul>
      <p>В случае получения инвалидности:</p>
      <ul>
        <li>при установлении  I группы инвалидности  - 100 %   индивидуальной страховой суммы;</li>
        <li>при установлении II группы инвалидности – 75 % от индивидуальной страховой суммы;</li>
        <li>при установлении III группы инвалидности –  50 % от индивидуально йстраховой суммы;</li>
        <li>в случае смерти- 100%  индивидуальной страховой суммы.</li>
      </ul>
      <p>Страховая выплата производится в течение 3-х (трех) рабочих дней с момента получения всех необходимых документов.</p>
      <p>При коллективном страховании от несчастного случая действует гибкая система скидок.</p>
      <p>Коллективное страхование от несчастных случаев позволяет получить следующие налоговые льготы:</p>
      <ul>
        <li>совокупная сумма платежей (взносов) работодателей, оплачиваемых по страхованию в размере, не превышающем 15 000 рублей в год, рассчитанном как отношение общей суммы взносов к количеству застрахованных работни-ков, могут быть отнесены на фонд оплаты труда (НК РФ, часть II, гл. 25, ст. 255, п. 16);</li>
        <li>расходы на страхование граждан от несчастных случаев не входят в со-вокупный годовой доход  застрахованного работника (НК РФ, часть II, гл. 23, ст. 213);</li>
        <li>на суммы страховых платежей, уплачиваемых работодателем по дого-ворам добровольного страхования  от несчастных случаев работников, не начисляется единый социальный налог (НК РФ, часть II, гл. 24, ст. 238);</li>
        <li>страховые взносы по договорам добровольного страхования граждан от несчастных случаев освобождаются от налога на добавленную стоимость (НДС) (НК РФ, часть II, гл. 21, ст. 149).</li>
      </ul>
      <p>Главная задача страховой компании  - обеспечение высоких гарантий страховой защиты граждан и предприятий. - это залог устойчивости, покрытие непредвиденных потерь при минимальных затратах.  </p>
      <p>Все наши действия -  развитие новых страховых продуктов, обеспечение качественной страховой защиты, инвестиционная политика - направлены на то, чтобы клиент нашел  в  нашем лице надежного партнера.</p>
    </div >
  );
};

export default EnterpriseAbout;