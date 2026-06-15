import { useState } from 'react';
import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { asset } from '../lib/asset.js';

const TOTALS = [
  { num: '18', en: 'Internationally supported projects', uk: 'Проєктів із міжнародною підтримкою' },
  { num: '225.1M UAH', en: 'Recorded funding', uk: 'Зафіксоване фінансування' },
  { num: '14', en: 'Completed / implemented', uk: 'Завершено або реалізовано' },
  { num: '3', en: 'Active or finishing', uk: 'Тривають або завершуються' },
  { num: '2023-2027', en: 'Implementation horizon', uk: 'Горизонт реалізації', highlight: true },
];

const FILTERS = [
  { key: 'all', en: 'All projects', uk: 'Усі проєкти' },
  { key: 'completed', en: 'Completed', uk: 'Завершені' },
  { key: 'in_progress', en: 'Active / finishing', uk: 'Тривають / завершуються' },
  { key: 'preparing', en: 'Preparation stage', uk: 'Підготовка до робіт' },
];

const SORT_OPTIONS = [
  { key: 'priority', en: 'By register order', uk: 'За реєстром' },
  { key: 'amount', en: 'By funding', uk: 'За сумою' },
  { key: 'category', en: 'By category', uk: 'За категорією' },
  { key: 'status', en: 'By status', uk: 'За статусом' },
];

const STATUS_ORDER = ['in_progress', 'preparing', 'completed'];

const PROJECTS = [
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Agriculture / food security', uk: 'Аграрний розвиток / продовольча безпека' },
    photo: 'images/oberig_agro/489023890_1087868690044618_4109634621948471375_n.jpg',
    photoTag: { en: 'Oberih-Agro greenhouse', uk: 'Тепличний комплекс «Оберіг-Агро»' },
    badgeLabel: { en: 'Implemented', uk: 'Реалізовано' },
    title: {
      en: 'CASE support for food and energy security in rural communities',
      uk: 'Проєкт CASE: підтримка продовольчої та енергетичної безпеки',
    },
    desc: {
      en: 'Oxfam supported CASE initiatives in Domanivka, including cooperation, autonomy, safety and protection, with the construction of a greenhouse complex at the Oberih-Agro cooperative.',
      uk: 'Oxfam підтримала ініціативи CASE у Доманівській громаді: продовольча та енергетична безпека, кооперація, автономія, безпека і захист, зокрема будівництво тепличного комплексу в кооперативі «Оберіг-Агро».',
    },
    amount: { en: 'UAH 32.0M', uk: '32,0 млн грн' },
    amountValue: 32000,
    progress: 100,
    progressStrong: { en: 'Implemented', uk: 'Реалізовано' },
    progressRight: '2023-2024',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, 'Oxfam'],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Domanivka, Oberih-Agro', uk: 'с-ще Доманівка, «Оберіг-Агро»' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Period', uk: 'Період' }, '2023-2024'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Agriculture / reforms', uk: 'Аграрний розвиток / реформи' },
    photo: 'images/oberig_agro/635574414_26064653353151304_7345952855844811491_n.jpg',
    photoTag: { en: 'Gardens of Victory', uk: '«Сади Перемоги»' },
    badgeLabel: { en: 'Implemented', uk: 'Реалізовано' },
    title: {
      en: 'SURGe initiative "Gardens of Victory"',
      uk: 'SURGe: ініціатива «Сади Перемоги»',
    },
    desc: {
      en: 'The Government of Canada, Alinea International and CDF Canada supported the SURGe reform-support initiative and the Gardens of Victory activity at Oberih-Agro.',
      uk: 'Уряд Канади, Alinea International та CDF Canada підтримали ініціативу SURGe «Супровід урядових реформ в Україні» і напрям «Сади Перемоги» на базі СК «Оберіг-Агро».',
    },
    amount: { en: 'UAH 800.0K', uk: '800,0 тис. грн' },
    amountValue: 800,
    progress: 100,
    progressStrong: { en: 'Implemented', uk: 'Реалізовано' },
    progressRight: '2024',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'Canada / Alinea / CDF Canada', uk: 'Уряд Канади / Alinea / CDF Canada' }],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Domanivka, Oberih-Agro', uk: 'с-ще Доманівка, «Оберіг-Агро»' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Year', uk: 'Рік' }, '2024'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Governance / data', uk: 'Управління / дані' },
    photo: 'images/iom_team.jpg',
    photoTag: { en: 'Human Dimension', uk: '«Людський вимір»' },
    badgeLabel: { en: 'Implemented', uk: 'Реалізовано' },
    title: {
      en: 'Human Dimension: data-driven governance and community engagement',
      uk: '«Людський вимір»: управління за допомогою даних та залучення громад',
    },
    desc: {
      en: 'IOM, the Western Ukrainian Resource Centre and the Government of Canada supported Domanivka settlement council in improving data use and engagement practices.',
      uk: 'МОМ у партнерстві із Західноукраїнським ресурсним центром за фінансування Уряду Канади підтримала Доманівську селищну раду в роботі з даними та залученням жителів.',
    },
    amount: { en: 'UAH 439.5K', uk: '439,5 тис. грн' },
    amountValue: 439.516,
    progress: 100,
    progressStrong: { en: 'Implemented', uk: 'Реалізовано' },
    progressRight: '2024',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'IOM / WURC / Canada', uk: 'МОМ / ЗУРЦ / Уряд Канади' }],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Domanivka settlement council', uk: 'Доманівська селищна рада' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Year', uk: 'Рік' }, '2024'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Healthcare resilience', uk: 'Стійкість медицини' },
    photo: 'images/hospital_team.jpg',
    photoTag: { en: 'Hospital and PHC centre', uk: 'Лікарня та Центр ПМСД' },
    badgeLabel: { en: 'Implemented', uk: 'Реалізовано' },
    title: {
      en: 'Strengthening healthcare capacity under the EU Strong Regions programme',
      uk: 'Посилення спроможності закладів охорони здоров’я',
    },
    desc: {
      en: "The EU and Germany's BMZ supported Domanivka General Hospital and the Primary Healthcare Centre under the EU Strong Regions special support programme for Ukraine.",
      uk: 'Європейський Союз та Федеральне міністерство економічного співробітництва та розвитку Німеччини (BMZ) підтримали КНП «Доманівська багатопрофільна лікарня» і КНП «Центр ПМСД» у межах програми ЄС «Міцні Регіони».',
    },
    amount: { en: 'EUR 325.5K / UAH 15.6M', uk: '325,5 тис. євро / 15,6 млн грн' },
    amountValue: 15624,
    progress: 100,
    progressStrong: { en: 'Implemented', uk: 'Реалізовано' },
    progressRight: { en: 'EU / BMZ', uk: 'ЄС / BMZ' },
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'EU / BMZ', uk: 'ЄС / BMZ' }],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Hospital and PHC centre', uk: 'Лікарня та Центр ПМСД' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Implemented', uk: 'Реалізовано' }],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Municipal services', uk: 'Комунальні послуги' },
    photo: 'images/entrance.jpg',
    photoTag: { en: 'Municipal accountability', uk: 'Підзвітність ОМС' },
    badgeLabel: { en: 'Implemented', uk: 'Реалізовано' },
    title: {
      en: 'Improving the efficiency and accountability of local self-government',
      uk: 'Підвищення ефективності роботи і підзвітності органів місцевого самоврядування',
    },
    desc: {
      en: "USAID Hoverla supported municipal enterprises \"Domanivske\" and \"Marynivske\", strengthening the community's local services and accountability capacity.",
      uk: 'Програма USAID «Говерла» підтримала КП «Доманівське» та КП «Маринівське», посилюючи комунальні послуги й підзвітність місцевого самоврядування.',
    },
    amount: { en: 'UAH 12.9M', uk: '12,9 млн грн' },
    amountValue: 12945.554,
    progress: 100,
    progressStrong: { en: 'Implemented', uk: 'Реалізовано' },
    progressRight: '2025',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, 'USAID Hoverla'],
      [{ en: 'Location', uk: 'Локація' }, { en: 'KP Domanivske, KP Marynivske', uk: 'КП «Доманівське», КП «Маринівське»' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Year', uk: 'Рік' }, '2025'],
    ],
  },
  {
    status: 'in_progress',
    badge: 'in-progress',
    category: { en: 'Housing / IDPs', uk: 'Житло / ВПО' },
    photo: 'images/vpo_house.jpg',
    photoTag: { en: '9 modular houses', uk: '9 модульних будинків' },
    badgeLabel: { en: 'Finishing stage', uk: 'На стадії завершення' },
    title: {
      en: 'Construction of modular estate-type houses in Domanivka',
      uk: 'Будівництво модульних будинків садибного типу',
    },
    desc: {
      en: 'The Ukraine Recovery Fund and the Government of Denmark are supporting nine modular estate-type houses in Domanivka.',
      uk: 'Фонд відбудови України та уряд Данії підтримують будівництво 9 модульних будинків садибного типу в селищі Доманівка.',
    },
    amount: { en: 'UAH 22.1M', uk: '22,1 млн грн' },
    amountValue: 22056.975,
    progress: 90,
    progressStrong: { en: 'Finishing stage', uk: 'Стадія завершення' },
    progressRight: '2026',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'Ukraine Recovery Fund / Denmark', uk: 'Фонд відбудови України / уряд Данії' }],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Domanivka', uk: 'с-ще Доманівка' }],
      [{ en: 'Scale', uk: 'Масштаб' }, { en: '9 houses', uk: '9 будинків' }],
      [{ en: 'Planned year', uk: 'Плановий рік' }, '2026'],
    ],
  },
  {
    status: 'in_progress',
    badge: 'in-progress',
    category: { en: 'Energy independence', uk: 'Енергонезалежність' },
    photo: 'images/pellets_equipment.jpg',
    photoTag: { en: 'Biofuel technologies', uk: 'Біопаливні технології' },
    badgeLabel: { en: 'In progress', uk: 'Реалізується' },
    title: {
      en: 'Biofuel technologies for community energy independence',
      uk: 'Енергонезалежність громади через біопаливні технології',
    },
    desc: {
      en: 'The communal enterprise Domanivka Agro-Fuel Company is implementing biofuel technologies to improve energy independence and energy efficiency.',
      uk: 'КП «Доманівська аграрно-паливна компанія» впроваджує біопаливні технології для енергонезалежності та енергоефективності громади.',
    },
    amount: { en: 'UAH 9.0M', uk: '9,0 млн грн' },
    amountValue: 9000,
    progress: 70,
    progressStrong: { en: 'In progress', uk: 'Реалізується' },
    progressRight: '2026',
    facts: [
      [{ en: 'Partner funding', uk: 'Партнерські кошти' }, { en: 'UAH 9.0M', uk: '9,0 млн грн' }],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Domanivka Agro-Fuel Company', uk: 'КП «Доманівська аграрно-паливна компанія»' }],
      [{ en: 'Direction', uk: 'Напрям' }, { en: 'Biofuel and energy efficiency', uk: 'Біопаливо та енергоефективність' }],
      [{ en: 'Planned year', uk: 'Плановий рік' }, '2026'],
    ],
  },
  {
    status: 'in_progress',
    badge: 'in-progress',
    category: { en: 'Water supply', uk: 'Водопостачання' },
    photo: 'images/location_map_domanivka.png',
    photoTag: { en: 'Tsaredarivka well', uk: 'Свердловина в Царедарівці' },
    badgeLabel: { en: 'Finishing stage', uk: 'Стадія завершення' },
    title: {
      en: 'New exploratory production well in Tsaredarivka',
      uk: 'Нове будівництво розвідувально-експлуатаційної свердловини в с. Царедарівка',
    },
    desc: {
      en: 'NGO Desyate Kvitnya and the European Union are supporting a new exploratory production well in Tsaredarivka, Voznesensk district.',
      uk: 'ГО «Десяте квітня» та Європейський Союз підтримують будівництво нової розвідувально-експлуатаційної свердловини в с. Царедарівка Вознесенського району.',
    },
    amount: { en: 'UAH 4.5M', uk: '4,5 млн грн' },
    amountValue: 4490.85,
    progress: 88,
    progressStrong: { en: 'Finishing stage', uk: 'Стадія завершення' },
    progressRight: '2025-2026',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'NGO Desyate Kvitnya / EU', uk: 'ГО «Десяте квітня» / ЄС' }],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Tsaredarivka', uk: 'с. Царедарівка' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Period', uk: 'Період' }, '2025-2026'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Healthcare / solar energy', uk: 'Медицина / сонячна енергія' },
    photo: 'images/hospital_front.jpg',
    photoTag: { en: 'Hospital solar station', uk: 'СЕС для лікарні' },
    badgeLabel: { en: 'Implemented', uk: 'Реалізовано' },
    title: {
      en: 'Solar station for Domanivka General Hospital',
      uk: 'Встановлення сонячної станції в КНП «Доманівська БП лікарня»',
    },
    desc: {
      en: 'GIZ-supported international funding provided a 53 kW/h solar station for Domanivka General Hospital.',
      uk: 'За міжнародної підтримки GIZ для КНП «Доманівська багатопрофільна лікарня» встановлено сонячну станцію потужністю 53 кВт/год.',
    },
    amount: { en: 'UAH 2.2M', uk: '2,2 млн грн' },
    amountValue: 2158.072,
    progress: 100,
    progressStrong: { en: 'Implemented', uk: 'Реалізовано' },
    progressRight: '2024',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, 'GIZ'],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Domanivka General Hospital', uk: 'КНП «Доманівська БП лікарня»' }],
      [{ en: 'Capacity', uk: 'Потужність' }, '53 kW/h'],
      [{ en: 'Year', uk: 'Рік' }, '2024'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Primary healthcare / solar energy', uk: 'Первинка / сонячна енергія' },
    photo: 'images/hospital_lab.jpg',
    photoTag: { en: 'PHC solar station', uk: 'СЕС для ЦПМСД' },
    badgeLabel: { en: 'Implemented', uk: 'Реалізовано' },
    title: {
      en: 'Solar station for Domanivka Primary Healthcare Centre',
      uk: 'Встановлення сонячної станції для КНП «Доманівський ЦПМСД»',
    },
    desc: {
      en: 'GIZ-supported international funding equipped Domanivka Primary Healthcare Centre with a solar station.',
      uk: 'За міжнародної підтримки GIZ КНП «Доманівський центр ПМСД» отримав сонячну станцію.',
    },
    amount: { en: 'UAH 564.1K', uk: '564,1 тис. грн' },
    amountValue: 564.073,
    progress: 100,
    progressStrong: { en: 'Implemented', uk: 'Реалізовано' },
    progressRight: '2024',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, 'GIZ'],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Domanivka Primary Healthcare Centre', uk: 'КНП «Доманівський ЦПМСД»' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Year', uk: 'Рік' }, '2024'],
    ],
  },
  {
    status: 'preparing',
    badge: 'planned',
    category: { en: 'Water supply', uk: 'Водопостачання' },
    photo: 'images/location_map_domanivka_tinted.png',
    photoTag: { en: 'Zbroshkove to Domanivka', uk: 'Зброшкове - Доманівка' },
    badgeLabel: { en: 'Preparation stage', uk: 'Підготовка до робіт' },
    title: {
      en: 'Reconstruction of external water-supply networks from Zbroshkove to Domanivka',
      uk: 'Реконструкція зовнішніх мереж водопостачання від с. Зброшкове до Доманівки',
    },
    desc: {
      en: 'NEFCO and the Government of Denmark are supporting reconstruction of water-supply networks from the existing well in Zbroshkove to Domanivka. The project is at the work-preparation stage.',
      uk: 'Північна екологічна фінансова корпорація НЕФКО та уряд Данії підтримують реконструкцію мереж водопостачання від існуючої свердловини в с. Зброшкове до Доманівки. Проєкт на етапі підготовки до робіт.',
    },
    amount: { en: 'UAH 82.5M incl. local co-funding', uk: '82,5 млн грн зі співфінансуванням громади' },
    amountValue: 82546.5,
    progress: 25,
    progressStrong: { en: 'Preparing works', uk: 'Підготовка до робіт' },
    progressRight: '30.09.2027',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'NEFCO / Denmark', uk: 'НЕФКО / уряд Данії' }],
      [{ en: 'International funding', uk: 'Міжнародні кошти' }, { en: 'UAH 71.7M', uk: '71,7 млн грн' }],
      [{ en: 'Local budget', uk: 'Місцевий бюджет' }, { en: 'UAH 10.8M', uk: '10,8 млн грн' }],
      [{ en: 'Target date', uk: 'Цільова дата' }, '30.09.2027'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Healthcare infrastructure', uk: 'Медична інфраструктура' },
    photo: 'images/hospital_callcenter.jpg',
    photoTag: { en: 'Hospital call centre', uk: 'Кол-центр лікарні' },
    badgeLabel: { en: 'Completed', uk: 'Завершено' },
    title: {
      en: 'Polyclinic first-floor overhaul, call centre and roof works',
      uk: 'Капітальний ремонт поліклініки, кол-центр і перекриття даху',
    },
    desc: {
      en: 'The Government of Germany and GIZ supported the first-floor overhaul of the hospital polyclinic, call-centre setup and roof works at 6 Pyrohova Street.',
      uk: 'Уряд Німеччини та GIZ підтримали капітальний ремонт 1 поверху поліклініки, облаштування кол-центру та перекриття даху поліклінічного відділення КНП «Доманівська багатопрофільна лікарня» по вул. Пірогова, 6.',
    },
    amount: { en: 'UAH 8.6M', uk: '8,6 млн грн' },
    amountValue: 8619.669,
    progress: 100,
    progressStrong: { en: 'Completed', uk: 'Завершено' },
    progressRight: '2024',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'Government of Germany / GIZ', uk: 'Уряд Німеччини / GIZ' }],
      [{ en: 'Location', uk: 'Локація' }, { en: '6 Pyrohova St', uk: 'вул. Пірогова, 6' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Year', uk: 'Рік' }, '2024'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Primary healthcare', uk: 'Первинна медицина' },
    photo: 'images/hospital_corridor.jpg',
    photoTag: { en: 'PHC second floor', uk: '2 поверх ЦПМСД' },
    badgeLabel: { en: 'Completed', uk: 'Завершено' },
    title: {
      en: 'Second-floor repair at Domanivka Primary Healthcare Centre',
      uk: 'Ремонт приміщення 2 поверху КНП «Доманівський центр ПМСД»',
    },
    desc: {
      en: 'IOM supported repairs on the second floor of Domanivka Primary Healthcare Centre at 6 Pyrohova Street.',
      uk: 'Міжнародна організація з міграції (МОМ) підтримала ремонт приміщення 2 поверху КНП «Доманівський центр ПМСД» по вул. Пірогова, 6.',
    },
    amount: { en: 'UAH 6.2M', uk: '6,2 млн грн' },
    amountValue: 6193.3,
    progress: 100,
    progressStrong: { en: 'Completed', uk: 'Завершено' },
    progressRight: '2025',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, 'IOM'],
      [{ en: 'Location', uk: 'Локація' }, { en: '6 Pyrohova St', uk: 'вул. Пірогова, 6' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Year', uk: 'Рік' }, '2025'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Heating / resilience', uk: 'Теплопостачання / стійкість' },
    photo: 'images/pellets_worker.jpg',
    photoTag: { en: 'Pellet boiler rooms', uk: 'Пелетні котельні' },
    badgeLabel: { en: 'Completed', uk: 'Виконано' },
    title: {
      en: 'Four 200 kW pellet modular boiler rooms for public facilities',
      uk: 'Чотири модульні пелетні котельні по 200 кВт для комунальних закладів',
    },
    desc: {
      en: 'With German Government and GIZ support, four modular pellet boiler rooms were installed for the hospital, the Uspikh lyceum, the Lider lyceum and Domanivka youth sports school.',
      uk: 'За підтримки уряду Німеччини та GIZ встановлено 4 модульні котельні на пелетах по 200 кВт для лікарні, ліцею «Успіх», ліцею «Лідер» та Доманівської дитячо-юнацької спортивної школи.',
    },
    amount: { en: 'UAH 12.0M', uk: '12,0 млн грн' },
    amountValue: 11983.612,
    progress: 100,
    progressStrong: { en: 'Completed', uk: 'Виконано' },
    progressRight: '31.05.2025',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'Government of Germany / GIZ', uk: 'Уряд Німеччини / GIZ' }],
      [{ en: 'Scale', uk: 'Масштаб' }, { en: '4 boiler rooms x 200 kW', uk: '4 котельні по 200 кВт' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Completed', uk: 'Виконано' }, '31.05.2025'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Rural healthcare', uk: 'Сільська медицина' },
    photo: 'images/fap_kuznytsove.jpg',
    photoTag: { en: 'Kuznetsove FAP', uk: 'ФАП с. Кузнецове' },
    badgeLabel: { en: 'Completed', uk: 'Виконано' },
    title: {
      en: 'Modular frame facility for the Kuznetsove FAP',
      uk: 'Модульна збірна каркасна конструкція для ФАПу с. Кузнецове',
    },
    desc: {
      en: 'The Ukraine Recovery Fund and the Government of Denmark supported a modular frame facility for the feldsher-midwife point in Kuznetsove.',
      uk: 'Фонд відбудови України та уряд Данії підтримали модульну збірну каркасну конструкцію для ФАПу с. Кузнецове.',
    },
    amount: { en: 'UAH 2.9M', uk: '2,9 млн грн' },
    amountValue: 2877.7,
    progress: 100,
    progressStrong: { en: 'Completed', uk: 'Виконано' },
    progressRight: '2025',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'Ukraine Recovery Fund / Denmark', uk: 'Фонд відбудови України / уряд Данії' }],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Kuznetsove', uk: 'с. Кузнецове' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Date in register', uk: 'Дата в реєстрі' }, '31.11.2025'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Rural healthcare', uk: 'Сільська медицина' },
    photo: 'images/fap/image.png',
    photoTag: { en: 'Petropavlivka FAP', uk: 'ФАП с. Петропавлівка' },
    badgeLabel: { en: 'Completed', uk: 'Виконано' },
    title: {
      en: 'Modular frame facility for the Petropavlivka FAP',
      uk: 'Модульна збірна каркасна конструкція для ФАПу с. Петропавлівка',
    },
    desc: {
      en: 'IOM supported a modular frame facility for the feldsher-midwife point in Petropavlivka.',
      uk: 'МОМ підтримала модульну збірну каркасну конструкцію для ФАПу с. Петропавлівка.',
    },
    amount: { en: 'UAH 6.0M', uk: '6,0 млн грн' },
    amountValue: 6004,
    progress: 100,
    progressStrong: { en: 'Completed', uk: 'Виконано' },
    progressRight: '2024',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, 'IOM'],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Petropavlivka', uk: 'с. Петропавлівка' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Year', uk: 'Рік' }, '2024'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Administrative services', uk: 'Адміністративні послуги' },
    photo: 'images/mobile_clinic.jpg',
    photoTag: { en: 'Mobile service vehicle', uk: 'Мобільний ЦНАП' },
    badgeLabel: { en: 'Completed', uk: 'Виконано' },
    title: {
      en: 'Mykolaiv Renewed project: mobile administrative service centre',
      uk: 'Проєкт «Миколаїв відновлений»: мобільний ЦНАП',
    },
    desc: {
      en: 'UNDP supported a mobile administrative service centre for the Domanivka community under the Mykolaiv Renewed project.',
      uk: 'Програма розвитку ООН підтримала мобільний ЦНАП для Доманівської громади в межах проєкту «Миколаїв відновлений».',
    },
    amount: { en: 'UAH 2.9M', uk: '2,9 млн грн' },
    amountValue: 2930.292,
    progress: 100,
    progressStrong: { en: 'Completed', uk: 'Виконано' },
    progressRight: '10.11.2025',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, 'UNDP'],
      [{ en: 'Direction', uk: 'Напрям' }, { en: 'Mobile ASC', uk: 'Мобільний ЦНАП' }],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Completed', uk: 'Виконано' }, '10.11.2025'],
    ],
  },
  {
    status: 'completed',
    badge: 'completed',
    category: { en: 'Education / transport', uk: 'Освіта / транспорт' },
    photo: 'images/school_bus.jpg',
    photoTag: { en: 'School bus', uk: 'Шкільний автобус' },
    badgeLabel: { en: 'Completed', uk: 'Виконано' },
    title: {
      en: 'ATAMAN D093-S-2 school bus from Denmark',
      uk: 'Шкільний автобус АТАМАН D093-S-2 від Данії',
    },
    desc: {
      en: 'The Ukraine Recovery Fund and the Government of Denmark supported the delivery of an ATAMAN D093-S-2 school bus.',
      uk: 'Фонд відбудови України та уряд Данії підтримали передачу шкільного автобуса АТАМАН D093-S-2.',
    },
    amount: { en: 'UAH 3.8M', uk: '3,8 млн грн' },
    amountValue: 3842.9,
    progress: 100,
    progressStrong: { en: 'Completed', uk: 'Виконано' },
    progressRight: '2025',
    facts: [
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'Ukraine Recovery Fund / Denmark', uk: 'Фонд відбудови України / уряд Данії' }],
      [{ en: 'Asset', uk: 'Об’єкт' }, 'ATAMAN D093-S-2'],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'International organisations', uk: 'Кошти міжнародних організацій' }],
      [{ en: 'Year', uk: 'Рік' }, '2025'],
    ],
  },
];

export default function Projects() {
  const { lang } = useLang();
  const [filter, setFilter] = useState('all');
  const [sort, setSort] = useState('priority');
  const tr = (val) => {
    if (val == null) return val;
    if (typeof val === 'string' || typeof val === 'number') return val;
    if (val.en !== undefined || val.uk !== undefined) return lang === 'uk' ? val.uk : val.en;
    return val;
  };

  const countFor = (key) => (
    key === 'all' ? PROJECTS.length : PROJECTS.filter((p) => p.status === key).length
  );

  const visible = PROJECTS
    .map((project, priority) => ({ ...project, priority }))
    .filter((p) => filter === 'all' || p.status === filter)
    .sort((a, b) => {
      if (sort === 'amount') return b.amountValue - a.amountValue;
      if (sort === 'category') {
        return String(tr(a.category)).localeCompare(String(tr(b.category)), lang === 'uk' ? 'uk' : 'en');
      }
      if (sort === 'status') {
        return STATUS_ORDER.indexOf(a.status) - STATUS_ORDER.indexOf(b.status) || a.priority - b.priority;
      }
      return a.priority - b.priority;
    });

  return (
    <>
      <PageIntro
        crumb={{ en: 'Projects', uk: 'Проєкти' }}
        title={{ en: 'International project register of Domanivka community.', uk: 'Реєстр міжнародних проєктів Доманівської громади.' }}
        lede={{
          en: 'A consolidated list of projects financed or supported by international organisations and partner countries: agriculture, healthcare, housing, water supply, energy, municipal services, administrative services and education.',
          uk: 'Зведений перелік проєктів, профінансованих або підтриманих міжнародними організаціями та країнами-партнерами: аграрний розвиток, медицина, житло, водопостачання, енергетика, комунальні послуги, ЦНАП та освіта.',
        }}
      />

      <section className="section-tight" style={{ paddingTop: 24, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="totals-bar">
            {TOTALS.map((t, i) => (
              <div key={i} className={`tb-item${t.highlight ? ' highlight' : ''}`}>
                <div className="tb-num">{t.num}</div>
                <div className="tb-lbl">{tr(t)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="filters-row">
            <div className="filters">
              {FILTERS.map((f) => (
                <button
                  key={f.key}
                  type="button"
                  className={filter === f.key ? 'on' : undefined}
                  onClick={() => setFilter(f.key)}
                >
                  <span>{tr(f)}</span>
                  <span className="count">{countFor(f.key)}</span>
                </button>
              ))}
            </div>
            <div className="filters-sort">
              <label><T en="Sort" uk="Сортувати" /></label>
              <select
                className="sort-select"
                value={sort}
                onChange={(event) => setSort(event.target.value)}
              >
                {SORT_OPTIONS.map((s, i) => (
                  <option key={i} value={s.key}>{tr(s)}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="proj-grid">
            {visible.map((p, i) => (
              <article key={`${p.title.uk}-${i}`} className="proj-card">
                <div className="photo proj-photo">
                  {p.photo && <img className="photo-img" src={asset(p.photo)} alt={tr(p.photoTag)} loading="lazy" />}
                  <div className="photo-label"><span className="tag">{tr(p.photoTag)}</span></div>
                </div>
                <div className="proj-meta-top">
                  <span className={`badge ${p.badge}`}>{tr(p.badgeLabel)}</span>
                  <span className="proj-cat">{tr(p.category)}</span>
                </div>
                <h3>{tr(p.title)}</h3>
                <p>{tr(p.desc)}</p>
                <div className={`progress ${p.status === 'completed' ? 'completed' : ''}`}>
                  <span style={{ width: `${p.progress}%` }} />
                </div>
                <div className="progress-row">
                  <span><strong>{tr(p.progressStrong)}</strong></span>
                  <span>{tr(p.progressRight)}</span>
                </div>
                <dl className="proj-facts">
                  <div>
                    <dt><T en="Amount" uk="Сума" /></dt>
                    <dd>{tr(p.amount)}</dd>
                  </div>
                  {p.facts.map(([lbl, val], j) => (
                    <div key={j}>
                      <dt>{tr(lbl)}</dt>
                      <dd>{tr(val)}</dd>
                    </div>
                  ))}
                </dl>
                <Link className="proj-link" to="/contacts">
                  <T en="Contact the community ->" uk="Зв’язатися з громадою ->" />
                </Link>
              </article>
            ))}
          </div>

          <div className="load-more">
            <span className="muted small">
              <T
                en={`Showing ${visible.length} of ${PROJECTS.length} projects · Source: international-funding project register provided by Domanivka community`}
                uk={`Показано ${visible.length} з ${PROJECTS.length} проєктів · Джерело: реєстр проєктів за міжнародні кошти, наданий Доманівською громадою`}
              />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
