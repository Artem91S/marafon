import React from "react";
import Container from "../components/ui/Container";

function OfferContract() {
  const urlSite = "diet-trener.com";
  return (
    <Container title={"ДОГОВІР ПУБЛІЧНОЇ ОФЕРТИ"}>
        <a href="https://marafon-rosy.vercel.app/">Повернутися на головну сторінку</a>
      <div className="flex flex-col gap-5">
        <h3>1. ЗАГАЛЬНІ ПОЛОЖЕННЯ</h3>
        <p>
          {`1.1. Нижченаведений текст є Договором між Фізичною особою-підприємцем
          Бурнишевою Ганною Олександрівною (інтернет-сайт: ${urlSite}),
          надалі «Продавець», та користувачем послуг, незалежно від статусу
          (фізична особа, юридична особа, фізична особа-підприємець),
          називається надалі «Покупець».`}
        </p>
        <p>
          1.2. Цей Договір визначає умови купівлі програм з харчування та
          дієтології, надалі «Послуги», Покупцем через інтернет-сайт Продавця.
        </p>
        <p>
          1.3. Договір є публічним згідно зі ст. 633 та ст. 641 Цивільного
          кодексу України і є еквівалентом "усної угоди" та має належну юридичну
          силу.
        </p>
        <p>
          1.4. Відповідно до ст. 642 Цивільного Кодексу України повним та
          беззастережним прийняттям умов цього договору-оферти, що підтверджує
          укладення Договору на запропонованих умовах, факт здійснення Покупцем
          оплати вартості замовленого на сайті Продавця (або іншим способом)
          Послуг.
        </p>
        <p>
          1.5. У даній оферті, якщо контекст не вимагає іншого, наведені нижче
          терміни мають такі значення: "Інтернет-сайт" - сайт Продавця,
          створений для укладання Договорів надання послуг, після ознайомлення
          Покупцем із запропонованими Послугами Продавця дистанційним способом.
          "Продавець" - організація, незалежно від її організаційно-правової
          форми та/або фізична особа-підприємець, яка здійснює надання Послуг.
        </p>
        <p>
          {`
            "Послуги" - продукція, що пропонується, та розміщена на сайті
            ${urlSite}. 
        `}
        </p>
        <p>
          {` "Покупець" - фізична та/або юридична особа, яка здійснює замовлення на
          сайті ${urlSite}.`}
        </p>
        <p>
          "Одержувач" - фізична та/або юридична особа визначена Покупцем, який
          повинен отримати замовлені Послуги.
        </p>
        <p>
          "Акцепт" - повне та беззастережне прийняття Покупцем умов Договору.
        </p>
        <p>
          "Замовлення" - окремі позиції з асортиментного переліку Послуг,
          вказаних Покупцем під час оформлення заявки на сайті.
        </p>
        <p>
          1.6. Оформленням Замовлення Покупець підтверджує погодження та
          безумовне прийняття ним умов цієї пропозиції (оферти).
        </p>
        <p>
          1.7. Укладаючи Договір (тобто акцептуючи умови цієї Пропозиції
          (Оферти) шляхом оформлення Замовлення), Покупець підтверджує наступне:
        </p>
        <p>
          • Покупець цілком і повністю ознайомлений, і погоджується з умовами
          цієї пропозиції (оферти);
        </p>
        <p>
          • Він надає дозвіл на збирання, обробку та передачу персональних даних
          на умовах, визначених нижче у Застереженні щодо збору, обробки та
          передачі персональних даних, дозвіл на обробку персональних даних діє
          протягом усього терміну дії Договору, а також протягом необмеженого
          строку після закінчення його дії . Крім цього, укладанням Договору
          Замовник підтверджує, що він повідомлений (без додаткового
          повідомлення) про права, встановлені Законом України "Про захист
          персональних даних", про цілі збору даних, а також про те, що його
          персональні дані передаються Продавцю з метою виконання умов цього
          Договору, можливості проведення взаєморозрахунків, а також для
          отримання рахунків, актів та інших документів. Замовник також
          погоджується з тим, що Продавець має право надавати доступ та
          передавати його персональні дані третім особам без будь-яких
          додаткових повідомлень Замовника, не змінюючи при цьому мету обробки
          персональних даних. Обсяг прав Замовника як суб'єкта персональних
          даних згідно із Законом України "Про захист персональних даних" йому
          відомий і зрозумілий.
        </p>
      </div>
      <div className="pt-3 flex flex-col gap-5">
        <h3>2. ПРЕДМЕТ ДОГОВОРУ</h3>
        <p>
          {`
          2.1. Продавець здійснює надання Послуг, згідно з чинним прейскурантом,
          опублікованим на сайті ${urlSite}, а Покупець оплачує та приймає
          надані Послуги відповідно до умов цього Договору.`}
        </p>
      </div>
      <div className="flex flex-col gap-5">
        <h3>3. ЦІНА ТОВАРУ</h3>
        <p>{`3.1. Ціна на кожну Послугу вказана на сайті ${urlSite}`}</p>
        <p>
          3.2. Продавець має право в односторонньому порядку змінити ціну на
          будь-яку Послугу.
        </p>
        <p>
          3.3. У разі зміни ціни на замовлені Послуги Продавець зобов'язується
          проінформувати Покупця про зміну ціни Послуг.
        </p>
        <p>
          3.4. Покупець має право підтвердити або анулювати Замовлення на
          замовлені Послуги, якщо ціна змінена Продавцем після оформлення
          Замовлення.
        </p>
        <p>
          3.5. Зміна Продавцем ціни на сплачені Покупцем Послуги не
          допускається.
        </p>
        <p>
          3.6. Зобов'язання Покупця з оплати Послуг вважаються виконаними з
          моменту надходження Продавцю коштів.
        </p>
        <p>
          {`
          3.7. Розрахунки між Продавцем та Покупцем за Товар здійснюються
          способами, вказаними на сайті ${urlSite}`}
        </p>
      </div>
      <div className="pt-3 flex flex-col gap-5">
        <h3>4. ПОРЯДОК ОФОРМЛЕННЯ ЗАМОВЛЕННЯ</h3>
        <h4> 4.1. Формування замовлення.</h4>
        <p>{`
            Замовлення Послуг здійснюється Покупцем, у робочий час Продавця, за телефоном:
            • +38 (097) 404-25-25 
            або через сервіс сайту Інтернет-магазин ${urlSite}`}</p>
        <p>
          4.1.1. При реєстрації на сайті Покупець зобов'язується надати наступну
          реєстраційну інформацію: - прізвище та ім'я Покупця або вказаної ним
          особи (отримувача); - адреса електронної пошти (не обов'язкове поле
          для заповнення); - Контактний телефон.
        </p>
        <p>{`
            4.1.2. Найменування, кількість, ціна обраних Покупцем Послуг зазначаються в кошику Покупця на сайті ${urlSite}
        `}</p>
        <p>{`4.1.3. Якщо Продавцеві потрібна додаткова інформація, він має право запросити її у Покупця. У разі не надання необхідної інформації Покупцем, Продавець не несе відповідальності за надання якісної Послуги Покупцеві, вказаної на сайті ${urlSite}`}</p>
        <p>
          4.1.4. При оформленні Замовлення за телефоном (п. 4.1 цієї Оферти)
          Покупець зобов'язується надати інформацію, зазначену в п. 4.2
          справжньої Оферти.
        </p>
        <p>{`
            4.1.5. Прийняття Покупцем умов цієї Оферти здійснюється за допомогою внесення Покупцем відповідних даних до реєстраційної форми на сайті ${urlSite} або при оформленні Замовлення за телефоном. Після оформлення Замовлення телефоном дані про Покупця реєструються в базі даних Продавця.
        `}</p>
        <p>
          4.1.6. Покупець відповідає за достовірність наданої інформації при
          оформленні Замовлення.
        </p>
        <p>{`
            4.1.7. Договір надання послуг дистанційним способом між Продавцем та Покупцем вважається укладеним з моменту електронного оформлення замовлення на сервісі сайту ${urlSite} або видачі Продавцем Покупцю касового чи товарного чека чи іншого документа, що підтверджує оплату Товару.
        `}</p>
        <p>{`4.1.8. Якщо замовлення було оформлено після 18:00, адміністратор сайту ${urlSite}, зв'язується з Покупцем найближчим робочим часом.`}</p>
        <p>
          4.1.9. При оформленні замовлення Покупець повинен максимально точно
          вказати дані Одержувача. Неправильна інформація, надана Покупцем, може
          перешкодити виконанню замовлення.
        </p>
        <h4>4.2. Порядок оплати замовлення.</h4>
        <p>
          4.2.1. Оплата замовлення означає згоду Покупця на укладення цього
          Договору із Продавцем.
        </p>
        <p>
          4.2.2. Покупець оплачує вартість замовлення за Договором шляхом
          перерахування коштів на розрахунковий рахунок Продавця. Датою оплати
          вважається день надходження коштів на рахунок Продавця.
        </p>
        <p>{`4.2.3. Ціни на будь-які позиції Послуг, вказані на сайті ${urlSite}, є чинними на момент здійснення замовлення.`}</p>
        <p>
          4.2.4. Покупець має право підтвердити або анулювати замовлення, до
          того моменту, поки воно не сплачено.
        </p>
        <p>
          4.2.5. Покупцеві повідомлення про оплату замовлення надсилається на
          електронну адресу, яка була вказана при оформленні замовлення.
        </p>
        <p>
          4.2.6. Послуги платіжних систем, терміналів Покупець оплачує
          додатково.
        </p>
        <h4>4.3. Виконання замовлення у святкові дні.</h4>
        <p>{`4.3.1. Графік виконання замовлень у святкові дні розміщується на сайті ${urlSite}.`}</p>
      </div>
      <div className="pt-3 flex flex-col gap-5">
        <h3>5. ТЕРМІН ВИКОНАННЯ ЗАМОВЛЕННЯ</h3>
        <p>{`5.1. У разі неналежного виконання замовлення з вини Продавця (невідповідність замовлення до вимог Покупця або Послуги надані неналежнім чином) подальші дії узгоджуються з адміністратором Інтернет-сайту  ${urlSite}.`}</p>
        <p>
          5.2. Угода між Продавцем та Покупцем діє з моменту її укладання до
          моменту належного надання Послуг Одержувачу/Покупцю або його довіреним
          особам.
        </p>
      </div>
      <div>
        <h3>6. СТВОРЕННЯ ЗАМОВЛЕННЯ</h3>
        <p>6.1. Продавець створює замовлення відповідно до вимог Покупця.</p>
        <p>{`6.2. Всі інформаційні матеріали, представлені на сайті ${urlSite} мають довідковий характер і не можуть повною мірою передавати достовірну інформацію про певні характеристики Послуг. У разі виникнення запитань у Покупця щодо характеристик Послуг, перед оформленням замовлення йому необхідно звернутися за консультацією до адміністратора інтернет-сайту за телефоном, або направити запит на сайт за звичайною процедурою замовлення.
`}</p>
      </div>
      <div className="pt-3 flex flex-col gap-5">
        <h3>7. ВІДМОВА ВІД ЗАМОВЛЕННЯ. ПОВЕРНЕННЯ ГРОШЕЙ.</h3>
        <p>
          7.1. Одержувач/Покупець може відмовитись від замовлення тільки у тому
          випадку, якщо не було здійснено оплати за замовлені Послуги.
        </p>
        <p>
          7.2. Покупець має право оформити листа з рекламацією на адресу
          електронної пошти: ________________, вказавши причину та надавши
          відповідний опис.
        </p>
        <p>
          7.3. Продавець розглядає скарги протягом 3-х робочих днів із дня її
          отримання, про результати розгляду скарги Продавець повідомляє в
          електронному вигляді.
        </p>
        <p>
          7.4. Якщо з вини Продавця замовлення не було виконано належним чином,
          Покупець/Одержувач має право вимагати компенсацію, розмір якої не може
          перевищувати суму замовлення.
        </p>
      </div>
      <div className="pt-3 flex flex-col gap-5">
        <h3>8. ТЕРМІН ДІЇ ДОГОВОРУ. ПОРЯДОК ВНЕСЕННЯ ЗМІН</h3>
        <p>
          8.1. Акцепт Оферти Покупцем є підтвердженням укладання Договору за
          умов Оферти.
        </p>
        <p>
          8.2. Договір набирає чинності з моменту оплати замовлення Покупцем та
          діє до моменту виконання Продавцем зобов'язань за цим Договором.
        </p>
        <p>
          8.3. Продавець має право вносити зміни до тексту цього Договору на
          свій розсуд у будь-який момент і без попереднього повідомлення
          Покупця. Актуальна (чинна) редакція Договору завжди доступна на сайті.
        </p>
        <p>
          8.4. Покупець погоджується і визнає, що внесення змін до Оферти
          спричиняє внесення цих змін до укладеного вже чинного між Покупцем і
          Продавцем Договору, і ці зміни в Договорі набувають чинності з такими
          змінами в Оферті.
        </p>
      </div>
      <div className="pt-3 flex flex-col gap-5">
        <h3>9. КОНФІДЕНЦІЙНІСТЬ</h3>
        <p>9.1. Продавець гарантує збереження таємниці інформації, яку Покупець вказує під час реєстрації або оформлення замовлення.</p>
        <p>9.2. Продавець гарантує, що персональні дані не будуть використані з корисливою метою, на сторонніх ресурсах або для поширення спаму.</p>
        <p>9.3. При оформленні замовлення Покупець дає згоду на обробку своїх персональних даних, які зберігаються в базі Продавця виключно для ідентифікації Покупця/Отримувача при повторних замовленнях та для коректного виконання. При відмові Покупцем Продавець не зможе відповідним чином провести замовлення.</p>
      </div>
      <div className="pt-3 flex flex-col gap-5">
        <h3>10. ВІДПОВІДАЛЬНІСТЬ</h3>
        <p>10.1. Продавець має право передавати свої права та обов'язки щодо виконання замовлень третім особам, не звільняючись від відповідальності.</p>
        <p>10.2. Відповідальність Сторін в будь-яких випадках визначається відповідно до норм чинного законодавства України.</p>
        <p>10.3. Сторони погоджуються, що будь-які спірні ситуації, вирішення яких не вдалося досягти шляхом переговорів, вирішуються відповідно до вимог чинного законодавства України.</p>
      </div>
    </Container>
  );
}

export default OfferContract;