import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    debug: true,
    fallbackLng: 'ua',
    interpolation: {
      escapeValue: false, // not needed for react as it escapes by default
    },
    resources: {
      ru: {
        translation: {
          description:{
           "greeting":" Похудеть ДО ",
           "btnText":"Get CV",
           "title":"I am  Frontend developer",
           "about":"About",
           "aboutDescription":" I am a frontend specialist with experience writing projects in pure JS and React. I am looking for an opportunity to use my creative and analytical abilities. At my previous place of work, I proved to be a good team player, communicative and attentive to details, which helped me complete tasks on time and with minimal changes. I learned React, Redux, JS, CSS, HTML, responsive design and I am ready to use them all in your companies projects.",
           "skills":"Skills",
           "skillsLink":"Link to certificate",
           "projects":"Projects",
           "aboutProdject":"About Project",
           "crypterTitle":"Sales platform of NFT.",
           "crypterDescription":"The best multi-page site for selling NFTs which you has ever see.It was a team work. In my work, I solved the following tasks:made  design of site in figma;filling the database with information;worked with the token for users for login in systems ; interaction with the server to reproduce information on the page;development of a mechanism for adding goods to the cart;made the 'Mint' of cards mechanism and its full implementation;adaptive design for Desktop, Laptop, Tablet, Mobile I used Frame-motion, Swiper,  modules Css for styling the page.",
           "dashboardTitile":"Dashboard for you admin",
           "dashboardDescription": "A very good option for displaying sales reports. The site is not adaptive, designed for a screen size of 1920px. In my work, I solved the task of obtaining data through TanStack Query, dynamic display of data in the form of diagrams, stylization using Styled-components.",
           "WORDPRESSTitle":"Landing page site for Wordpress Theme.",
           "WORDPRESSDescription":"Landing page site about a company that generates themes for applications. In my work, I solved the following tasks: adaptive design for Desktop, Laptop, Tablet, Mobile. made imitation of uploading a photo from the server ;made slider for photos;used Flex and Grid technologies;worked with BEM; written in pure JS without libraries.",
           "ApertureTitle":"App for order taxi like Uber",
           "ApertureDescription":"The application for ordering a taxi is similar to Uber. In my work, I solved the following tasks: -Registration of a new user; - Searching for the user's location; - Obtaining information on the route; - Display of the route at the request of Google maps; - Customization of map styles; - Connecting the system for payment. ",
           "BoostedTitle":"Todo app",
           "BoostedDescription":"A great application for planning your own time. Create a page and name it whatever you want. Add your affairs to it. You can sort your tasks, delete, change and even drag them to other tasks. Try it soon.",
           "MedicalTitle":"App for a medical administrator ",
           "MedicalDescription":"The application is written in a clean JS without adding libraries. In this work, solved the  next tasks:user authorization by 'token'; creation, editing and deleting of visiting cards;filter block filter was made for cards by status and urgency;interact with the server all the time through GET, POST, PUT, DELETE requests to the server;adaptive design for Desktop, Laptop, Tablet, Mobile;Testing login: TestSytnikov.a@ukr.net Password:1234 .",
           "ContactTitle":"Contact me",
           "ContactDescriptionFirst":"Fill my contact form below if you want to connect! You can also find me on ",
           "ContactDescriptionSecond":"if that's more your speed.",
           "ContactDescriptionThird":"or",
           "FormName":"Your Name",
           "PlaceholderName":"Enter your name",
           "FormEmail":"Your Email",
           "PlaceholderEmail":"Enter your email",
           "FormComment":"Leave a few words",
           "PlaceholderComment":"Comment....",
           "FormBtn":"Send",
           "ModalLinks":"Project Links",
           "ModalLinkOnCode":"look on code",
           "ModalLinkOnSite":"live project",
           "ModalBtn":"Back to page"
        },
         
        }
      },
      ua: {
        translation: {
            description: { 
            "greeting":" СХУДНИ ДО",
            "btnText":"Зберегти CV",
            "title":"Я фронтенд розробник",
            "about":"Про мене",
            "aboutDescription":"Я фронтенд спеціаліст з досвідом написання проектів на чистому JS і React. Шукаю можливість використати свої творчі і аналітичні здібності. На попередньому місці роботи я проявив себе як хороший командний гравець, комунікаційний і уважний до деталей , що допомагало мені виконувати завдання в термін і з мінімальними правками. Я володію  React,Redux,JS,CSS,HTML , адаптивний дизайн і готовий використовувати це все у проектах у вашій компанії.",
            "skills":"Навички",
            "skillsLink":"Посилання на сертифікат",
            "projects":"Мої Роботи",
            "aboutProdject":"Про проект",
            "crypterTitle":"Платформа по продажу NFT.",
            "crypterDescription":"Найкращий багатосторінковий сайт для продажу NFT, який ви коли-небудь бачили.Це була командна робота.У своїй роботі я вирішувала наступні задачі:зробив дизайн сайту у Figma;наповнив базу даних інформацією;працював з токеном для безпечного входу в систему користувача;взаємодія з сервером для відтворення інформації на сторінці;розробка механізму додавання товарів у кошик;створено механізм «Мінту» карток та його повна розробка;адаптивний дизайн для настільних ПК, ноутбуків, планшетів, мобільних пристроїв.Для оформлення сторінки використовував Frame-motion, Swiper, модулі Css.",
            "dashboardTitile":"Дашборд адмін панель",
            "dashboardDescription": "Дуже гарний варіант відображення звітів по продажам.  Сайт не адаптивний, розрахований на розмір екрану 1920пх. У роботі я вирішив завдання отримання даних через TanStack Query, динамічне відображення даних у вигляді діаграм,стилізування за допомогою Styled-components.", 
            "WORDPRESSTitle":"Односторінковий сайт для генерації тем",
            "WORDPRESSDescription":"Односторінковий сайту про компанію, яка генерує теми для додатків. У своїй роботі я вирішував наступні завдання: адаптивний дизайн для настільних ПК, ноутбуків, планшетів, мобільних пристроїв; зроблена імітація завантаження фото з сервера; зроблений слайдер для фотографій; використані технології Flex та Grid; працював з БЕМ; написаний на чистому JS без бібліотек.",
            "ApertureTitle":"Застосунок для замовлення таксі схожий на Uber",
            "ApertureDescription":"Додаток для замовлення таксі схоже на Uber.У своїй роботі я вирішувала наступні задачі: -Реєстрація нового користувача; -Пошук локації користувача;-Отримання інформації по маршруту;-За домогою Гугл карти відображення маршруту;-Кастомизація стилів карти;-Підключення системи для оплати. ",
            "BoostedTitle":"Застосунок Todo лист",
            "BoostedDescription":"Чудовий застосунок для планування власного часу. Створіть сторінку і надайте їй будь-яку назву. Додайте до неї свої справи. Ви можете сортувати свої завдання, видаляти, змінювати і перетягувати їх навіть в інші справи.Спробуйте скоріше. ",
            "MedicalTitle":"Додаток для медичного центру",
            "MedicalDescription":"Програма написана на чистому JS без додавання бібліотек. В даній роботі вирішені наступні задачі: авторизація користувача по 'токену'; створення, редагування та видалення візитівок;створено фільтр блоку фільтрів для карток за статусом і терміновістю;постійно взаємодіяти з сервером через запити GET, POST, PUT, DELETE до сервера;адаптивний дизайн для настільних ПК, ноутбуків, планшетів, мобільних пристроїв; Логін для тестування: TestSytnikov.a@ukr.net Пароль:1234 .",
            "ContactTitle":"Зв'язатися зі мною",
            "ContactDescriptionFirst":"Заповніть форму нижче, якщо ви хочете зв'язатися зі мною. Ви також можете знайти мене в ",
            "ContactDescriptionSecond":"якщо ви хочете зв'язатися зі мною швидше.",
            "ContactDescriptionThird":"або",
            "FormName":"Ваше Ім'я",
            "PlaceholderName":"Введіть ваше ім'я ",
            "FormEmail":"Ваш Імейл",
            "PlaceholderEmail":"Введіть ваш імейл",
            "FormComment":"Залишити коменетар про мене",
            "PlaceholderComment":"Ваш коментар....",
            "FormBtn":"Відправити",
            "ModalLinks":"Посилання на проект",
            "ModalLinkOnCode":"подивитися код",
            "ModalLinkOnSite":"перейти на сайт",
            "ModalBtn":"Повернутися на сторінку"
          },
           
        }
      }
    }
  });

export default i18n;