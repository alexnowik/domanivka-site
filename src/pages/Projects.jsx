import { useState } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon, DropIcon, HouseIcon, SchoolIcon } from '../icons.jsx';

const TOTALS = [
  { num: '10', en: 'Project directions', uk: 'Напрямів проєктів' },
  { num: '3', en: 'With design documents ready', uk: 'З готовою проєктною документацією' },
  { num: '4', en: 'Active programmes', uk: 'Чинних програм' },
  { num: '14,398', en: 'Residents directly served', uk: 'Мешканців у фокусі' },
  { num: '729.7 km²', en: 'Community territory', uk: 'Площа громади', highlight: true },
];

const FILTERS = [
  { key: 'all', en: 'All directions', uk: 'Усі напрями', count: 10 },
  { key: 'in_progress', en: 'Documents ready / in progress', uk: 'Документи готові / триває', count: 3 },
  { key: 'planned', en: 'Programme active', uk: 'Програма діє', count: 4 },
  { key: 'needs_funding', en: 'Open for partner', uk: 'Відкритий для партнера', count: 3 },
];

const SORT_OPTIONS = [
  { en: 'By priority', uk: 'За пріоритетом' },
  { en: 'By category', uk: 'За категорією' },
  { en: 'By status', uk: 'За статусом' },
];

const WaterIcon = DropIcon;
const HospitalIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <rect x="3" y="6" width="18" height="14" rx="1" />
    <path d="M12 10v6M9 13h6" />
  </svg>
);
const EnergyIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M13 2L4 14h7l-1 8 9-12h-7z" />
  </svg>
);
const WasteIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M3 6h18M8 6V4h8v2M6 6l1 14h10l1-14M10 10v6M14 10v6" />
  </svg>
);
const RoadIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M5 21l3-18M19 21l-3-18M12 4v2M12 10v2M12 16v2" />
  </svg>
);
const InvestIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M3 17l6-6 4 4 8-8M14 7h7v7" />
  </svg>
);
const GreenhouseIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M3 21V10l9-6 9 6v11M3 10h18M12 4v17M7 13v8M17 13v8" />
  </svg>
);
const AccessIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <circle cx="12" cy="5" r="2" />
    <path d="M12 7v6h5M8 11l4 2M9 14l3 8M15 22l-3-8" />
  </svg>
);
const CultureIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2">
    <path d="M4 4h16v16H4z" />
    <path d="M4 8h16M8 4v16" />
  </svg>
);

const PROJECTS = [
  {
    status: 'in_progress', badge: 'urgent', tint: 'tint-2', Icon: WaterIcon,
    photoTag: { en: 'Water · network upgrade', uk: 'Вода · модернізація мережі' },
    badgeLabel: { en: 'Very high priority', uk: 'Дуже високий пріоритет' },
    cat: { en: 'Water / critical infrastructure', uk: 'Вода / критична інфраструктура' },
    title: {
      en: 'Clean drinking water and water-supply modernisation',
      uk: 'Якісна питна вода та модернізація водопостачання громади',
    },
    desc: {
      en: 'Documents are ready for the 6,709 m water main from Zbroshkove to smt Domanivka and for a new exploratory well in Tsaredarivka. Sewage and stormwater drains in Domanivka are also being designed.',
      uk: 'Готова документація на реконструкцію водогону 6 709 м з с. Зброшкове до смт Доманівка та буріння розвідувальної свердловини в Царедарівці. Готується оновлення господарсько-побутової та зливової каналізації в Доманівці.',
    },
    progressStrong: { en: 'Design ready', uk: 'Документація готова' },
    progressRight: { en: 'Funding needed', uk: 'Потрібне фінансування' },
    progress: 20,
    facts: [
      [{ en: 'Locations', uk: 'Локації' }, 'Domanivka, Zbroshkove, Tsaredarivka, Zabary, Olexandrivka'],
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, { en: 'Whole community, IDPs, business', uk: 'Уся громада, ВПО, бізнес' }],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Funding · pipes · pumps · expertise', uk: 'Фінансування · труби · насоси · експертиза' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Documents ready', uk: 'Документація готова' }],
    ],
    cta: { en: 'Take this on →', uk: 'Підтримати →' },
  },
  {
    status: 'in_progress', badge: 'urgent', tint: 'tint-5', Icon: HospitalIcon,
    photoTag: { en: 'Domanivka General Hospital', uk: 'Доманівська багатопрофільна лікарня' },
    badgeLabel: { en: 'Very high priority', uk: 'Дуже високий пріоритет' },
    cat: { en: 'Healthcare / energy', uk: 'Охорона здоров’я / енергетика' },
    title: {
      en: 'Healthcare infrastructure and hospital energy resilience',
      uk: 'Модернізація медичної інфраструктури та енергонезалежність лікарні',
    },
    desc: {
      en: 'KNP "Domanivka General Hospital" is connected to eHealth and serves 15,978 people on primary care. Free hospital rooms can host physiotherapy and rehabilitation. A solar PV system for medical infrastructure is a separate priority.',
      uk: 'КНП «Доманівська багатопрофільна лікарня» підключена до eHealth, охоплює 15 978 осіб первинної допомоги. У вільних приміщеннях можна організувати фізіотерапію та реабілітацію. Окремий напрям — сонячна станція для медичної інфраструктури.',
    },
    progressStrong: { en: 'Partly implemented', uk: 'Частково реалізовано' },
    progressRight: { en: 'Equipment needed', uk: 'Потрібне обладнання' },
    progress: 35,
    facts: [
      [{ en: 'Location', uk: 'Локація' }, 'KNP Domanivka General Hospital'],
      [{ en: 'Primary care', uk: 'Первинна допомога' }, '15,978 people'],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Equipment · solar · rehab · generators', uk: 'Обладнання · СЕС · реабілітація · генератори' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Co-funding open', uk: 'Спільне фінансування' }],
    ],
    cta: { en: 'Take this on →', uk: 'Підтримати →' },
  },
  {
    status: 'in_progress', badge: 'in-progress', tint: 'tint-4', Icon: EnergyIcon,
    photoTag: { en: 'Pellets plant · community-owned', uk: 'Пелетна лінія · комунальна' },
    badgeLabel: { en: 'High priority', uk: 'Високий пріоритет' },
    cat: { en: 'Energy / climate resilience', uk: 'Енергетика / кліматична стійкість' },
    title: {
      en: 'Energy independence and alternative fuel development',
      uk: 'Енергонезалежність громади та розвиток альтернативного палива',
    },
    desc: {
      en: 'A community-owned enterprise "Domanivka Agro-Fuel Company" has been formed to produce wood pellets. The first industrial-line equipment is being delivered. A 250 m² energy-purpose land plot is reserved near Zelenyi Yar.',
      uk: 'Створено комерційне комунальне підприємство «Доманівська аграрно-паливна компанія» для виробництва пелетів. Розпочато поставку обладнання промислової лінії. Зарезервовано ділянку 250 м² для енергетики біля с. Зелений Яр.',
    },
    progressStrong: { en: 'Concept ready', uk: 'Концепція готова' },
    progressRight: { en: 'Scaling support needed', uk: 'Потрібне масштабування' },
    progress: 30,
    facts: [
      [{ en: 'Location', uk: 'Локація' }, { en: 'Communal facilities, Zelenyi Yar', uk: 'Комунальні заклади, Зелений Яр' }],
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, { en: 'Schools, hospital, budget', uk: 'Школи, лікарня, бюджет громади' }],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Pellet line · solar · storage · audits', uk: 'Пелетна лінія · СЕС · накопичувачі · аудити' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'KP formed', uk: 'КП створено' }],
    ],
    cta: { en: 'Learn more →', uk: 'Детальніше →' },
  },
  {
    status: 'planned', badge: 'in-progress', tint: 'tint-1', Icon: HouseIcon,
    photoTag: { en: 'IDP housing programme 2022–2026', uk: 'Програма житла для ВПО 2022–2026' },
    badgeLabel: { en: 'High priority', uk: 'Високий пріоритет' },
    cat: { en: 'Social support / housing', uk: 'Соціальна підтримка / житло' },
    title: {
      en: 'Housing and support for internally displaced persons',
      uk: 'Житло та підтримка внутрішньо переміщених осіб',
    },
    desc: {
      en: 'IDP count: 13 (2021) → 2,425 (2022) → 1,992 (2023) → 1,093 (2024). The community runs an IDP housing programme for 2022–2026 and the "Turbota" social support programme.',
      uk: 'Кількість ВПО: 13 (2021) → 2 425 (2022) → 1 992 (2023) → 1 093 (2024). Діє програма забезпечення житлом ВПО на 2022–2026 роки та програма соціального захисту «Турбота».',
    },
    progressStrong: { en: 'Programme active', uk: 'Програма діє' },
    progressRight: { en: 'Housing solutions needed', uk: 'Потрібні житлові рішення' },
    progress: 45,
    facts: [
      [{ en: 'IDPs (2024)', uk: 'ВПО (2024)' }, '1,093'],
      [{ en: 'Families in difficulty', uk: 'Сім’ї у складних обставинах' }, '130'],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Modular housing · repairs · furniture · services', uk: 'Модульне житло · ремонти · меблі · послуги' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Programme through 2026', uk: 'Програма до 2026' }],
    ],
    cta: { en: 'Take this on →', uk: 'Підтримати →' },
  },
  {
    status: 'planned', badge: 'in-progress', tint: 'tint-3', Icon: WasteIcon,
    photoTag: { en: 'Waste management · 31 settlements', uk: 'Поводження з відходами · 31 нп' },
    badgeLabel: { en: 'High priority', uk: 'Високий пріоритет' },
    cat: { en: 'Environment / municipal services', uk: 'Екологія / благоустрій' },
    title: {
      en: 'Modern waste management and clean settlements',
      uk: 'Сучасне управління відходами та чисті населені пункти',
    },
    desc: {
      en: 'Waste sources: 57% private households, 32% multi-storey, 11% business. Programmes for municipal improvement (2021–2025) and waste handling are active; containers, trucks, sites and sorting are needed.',
      uk: 'Джерела відходів: 57% приватні будинки, 32% багатоквартирні, 11% бізнес. Діють програми благоустрою (2021–2025) та поводження з ТПВ; потрібні контейнери, спецтехніка, майданчики й сортування.',
    },
    progressStrong: { en: 'Programme active', uk: 'Програма діє' },
    progressRight: { en: 'Equipment needed', uk: 'Потрібне обладнання' },
    progress: 25,
    facts: [
      [{ en: 'Locations', uk: 'Локації' }, { en: '31 settlements', uk: '31 населений пункт' }],
      [{ en: 'TBO density', uk: 'Густина ТПВ' }, '1 m³ ≈ 270 kg'],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Containers · trucks · sites · sorting', uk: 'Контейнери · техніка · майданчики · сортування' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Programme through 2025', uk: 'Програма до 2025' }],
    ],
    cta: { en: 'Take this on →', uk: 'Підтримати →' },
  },
  {
    status: 'needs_funding', badge: 'urgent', tint: 'tint-6', Icon: RoadIcon,
    photoTag: { en: 'Municipal roads · 292.7 km', uk: 'Комунальні дороги · 292,7 км' },
    badgeLabel: { en: 'Open for partner', uk: 'Відкритий для партнера' },
    cat: { en: 'Roads / accessibility', uk: 'Дороги / мобільність' },
    title: {
      en: 'Road recovery and transport accessibility',
      uk: 'Відновлення комунальних доріг та транспортної доступності',
    },
    desc: {
      en: '292.7 km of municipal roads — assessed as 100% in emergency condition. The community also hosts 80 km of state roads, 63 km of oblast roads (P-75: 42 km, condition 2/5; T-15-06: 34 km, 1/5), and 17 bridges.',
      uk: 'Загальна протяжність комунальних доріг — 292,7 км; 100% в аварійному стані. Також на території громади — 80 км держдоріг, 63 км обласних (Р-75: 42 км, 2/5; Т-15-06: 34 км, 1/5) та 17 мостів.',
    },
    progressStrong: { en: 'Co-funding needed', uk: 'Потрібне співфінансування' },
    progressRight: { en: '292.7 km · 17 bridges', uk: '292,7 км · 17 мостів' },
    progress: 5,
    facts: [
      [{ en: 'Municipal roads', uk: 'Комунальні дороги' }, '292.7 km'],
      [{ en: 'Bridges', uk: 'Мости' }, '17'],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Surface · drainage · bridges · machinery', uk: 'Покриття · водовідведення · мости · техніка' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Funding needed', uk: 'Потрібне фінансування' }],
    ],
    cta: { en: 'Take this on →', uk: 'Підтримати →' },
  },
  {
    status: 'planned', badge: 'in-progress', tint: 'tint-4', Icon: InvestIcon,
    photoTag: { en: 'Investment sites · free plots', uk: 'Інвестиційні ділянки · вільні землі' },
    badgeLabel: { en: 'Strategic direction', uk: 'Стратегічний напрям' },
    cat: { en: 'Economy / investment', uk: 'Економіка / інвестиції' },
    title: {
      en: 'Local economic development and investment sites',
      uk: 'Розвиток місцевої економіки, агропереробки та інвестиційних ділянок',
    },
    desc: {
      en: 'Free, uncontaminated land plots are identified near Novolikarske, Zbroshkove, Viktorivka and Zelenyi Yar. Business survey: 54.5% want preferential credit, 54.5% want grants or vouchers.',
      uk: 'Визначено вільні незабруднені земельні ділянки біля Новолікарського, Зброшкового, Вікторівки та Зеленого Яру. Опитування бізнесу: 54,5% хочуть пільгові кредити, 54,5% — гранти або ваучери.',
    },
    progressStrong: { en: 'Data ready', uk: 'Дані готові' },
    progressRight: { en: 'Investors wanted', uk: 'Шукаємо інвесторів' },
    progress: 15,
    facts: [
      [{ en: 'Free plots', uk: 'Вільні ділянки' }, '4 villages'],
      [{ en: 'Survey', uk: 'Опитування' }, '54.5% want credit / grants'],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Grants · credit · utilities · marketing', uk: 'Гранти · кредити · мережі · маркетинг' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Strategic', uk: 'Стратегічний' }],
    ],
    cta: { en: 'Learn more →', uk: 'Детальніше →' },
  },
  {
    status: 'planned', badge: 'planned', tint: 'tint-3', Icon: GreenhouseIcon,
    photoTag: { en: '"Sady Peremohy" · gardens of victory', uk: '«Сади Перемоги»' },
    badgeLabel: { en: 'Medium / high priority', uk: 'Середній / високий пріоритет' },
    cat: { en: 'Agriculture / food security', uk: 'Аграрний розвиток / продовольча безпека' },
    title: {
      en: 'Greenhouse farming and food security',
      uk: 'Тепличне господарство, продовольча безпека та «Сади Перемоги»',
    },
    desc: {
      en: 'The community profile mentions a greenhouse project by AC "Oberih-Agro" and the "Sady Peremohy" food self-sufficiency programme. Potential to add greenhouses, nurseries, early vegetables and rooftop solar.',
      uk: 'У профілі громади згадується проєкт тепличного овочівництва СВК «Оберіг-Агро» та програма самозабезпечення харчами «Сади Перемоги». Можна додавати теплиці, розсадники, ранні овочі та СЕС.',
    },
    progressStrong: { en: 'Examples exist', uk: 'Приклади існують' },
    progressRight: { en: 'Scaling support', uk: 'Підтримка масштабування' },
    progress: 18,
    facts: [
      [{ en: 'Location', uk: 'Локація' }, { en: 'Rural settlements', uk: 'Сільські нп громади' }],
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, { en: 'Families, IDPs, co-ops, small business', uk: 'Сім’ї, ВПО, кооперативи, МСБ' }],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Greenhouses · seeds · irrigation · cold storage', uk: 'Теплиці · насіння · полив · холодильники' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Pilot stage', uk: 'Пілотна стадія' }],
    ],
    cta: { en: 'Learn more →', uk: 'Детальніше →' },
  },
  {
    status: 'planned', badge: 'planned', tint: 'tint-1', Icon: AccessIcon,
    photoTag: { en: 'Barrier-free Domanivka', uk: 'Безбар’єрна Доманівщина' },
    badgeLabel: { en: 'Medium / high priority', uk: 'Середній / високий пріоритет' },
    cat: { en: 'Inclusion / accessibility', uk: 'Інклюзія / доступність' },
    title: {
      en: 'Accessible Domanivka: barrier-free community services',
      uk: 'Безбар’єрна Доманівщина та доступність громадських послуг',
    },
    desc: {
      en: 'The "Barrier-Free Domanivshchyna" programme through 2025 frames adaptation of public, medical, cultural and administrative facilities for people with disabilities, elderly people, parents with children, veterans and IDPs.',
      uk: 'Програма «Безбар’єрна Доманівщина до 2025 року» — адаптація громадських, медичних, культурних і адміністративних об’єктів для людей з інвалідністю, літніх людей, батьків з дітьми, ветеранів і ВПО.',
    },
    progressStrong: { en: 'Programme active', uk: 'Програма діє' },
    progressRight: { en: 'Implementation needed', uk: 'Потрібне втілення' },
    progress: 20,
    facts: [
      [{ en: 'Programme', uk: 'Програма' }, { en: 'Through 2025', uk: 'До 2025 року' }],
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, { en: 'PwD, elderly, veterans, children, IDPs', uk: 'ЛзІ, літні, ветерани, діти, ВПО' }],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Ramps · entrances · WC · navigation · transport', uk: 'Пандуси · входи · санвузли · навігація · транспорт' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Programme active', uk: 'Програма діє' }],
    ],
    cta: { en: 'Take this on →', uk: 'Підтримати →' },
  },
  {
    status: 'planned', badge: 'planned', tint: 'tint-2', Icon: CultureIcon,
    photoTag: { en: 'Culture & youth spaces', uk: 'Культурні та молодіжні простори' },
    badgeLabel: { en: 'Medium priority', uk: 'Середній пріоритет' },
    cat: { en: 'Education / culture / youth', uk: 'Освіта / культура / молодь' },
    title: {
      en: 'Education, culture, youth and community spaces',
      uk: 'Освіта, культура, молодь і простори для розвитку',
    },
    desc: {
      en: '1 Culture House with 12 branches, 1 library, 1 museum with 10 branches. Children at the youth sports school dropped from 317 to 226 in 2021–2024. The disused swimming pool in Domanivka awaits reconstruction.',
      uk: '1 Будинок культури з 12 філіями, 1 бібліотека, 1 музей із 10 філіями. Кількість дітей у ДЮСШ скоротилася з 317 до 226 у 2021–2024 рр. Окрема потреба — реконструкція недіючого басейну в Доманівці.',
    },
    progressStrong: { en: 'Needs ready', uk: 'Потреби описані' },
    progressRight: { en: 'Partners wanted', uk: 'Потрібні партнери' },
    progress: 10,
    facts: [
      [{ en: 'Culture facilities', uk: 'Культурні заклади' }, '1 + 12 branches'],
      [{ en: 'Sport facilities', uk: 'Спортивні заклади' }, '4 football fields · 10 sport sites'],
      [{ en: 'Support needed', uk: 'Потрібна допомога' }, { en: 'Renovation · furniture · equipment · pool', uk: 'Ремонт · меблі · обладнання · басейн' }],
      [{ en: 'Status', uk: 'Статус' }, { en: 'Open for partner', uk: 'Відкритий для партнера' }],
    ],
    cta: { en: 'Take this on →', uk: 'Підтримати →' },
  },
];

export default function Projects() {
  const { lang } = useLang();
  const [filter, setFilter] = useState('all');
  const tr = (val) => {
    if (val == null) return val;
    if (typeof val === 'string' || typeof val === 'number') return val;
    if (val.en !== undefined || val.uk !== undefined) return lang === 'uk' ? val.uk : val.en;
    return val;
  };

  const visible = PROJECTS.filter((p) => filter === 'all' || p.status === filter);

  return (
    <>
      <PageIntro
        crumb={{ en: 'Projects', uk: 'Проєкти' }}
        title={{ en: 'Ten directions, one community ledger.', uk: 'Десять напрямів — один прозорий реєстр громади.' }}
        lede={{
          en: 'Ten project directions drawn from the Community Profile — the addendum to our Development Strategy through 2027. Each one has documented context, a clear ask, and a beneficiary list. Funded, partly funded, or open for a partner — all visible.',
          uk: 'Десять напрямів проєктів із Профілю громади — додатку до Стратегії розвитку до 2027 року. Кожен має контекст, чіткий запит і коло отримувачів. Профінансовані, частково фінансовані та відкриті для партнера — все видно.',
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
                  <span className="count">{f.count}</span>
                </button>
              ))}
            </div>
            <div className="filters-sort">
              <label><T en="Sort" uk="Сортувати" /></label>
              <select className="sort-select">
                {SORT_OPTIONS.map((s, i) => (
                  <option key={i}>{tr(s)}</option>
                ))}
              </select>
            </div>
          </div>

          <div className="proj-grid">
            {visible.map((p, i) => {
              const Icon = p.Icon;
              return (
                <article key={i} className="proj-card">
                  <div className={`photo ${p.tint} proj-photo`}>
                    <div className="ph-center"><Icon /></div>
                    <div className="photo-label"><span className="tag">{tr(p.photoTag)}</span></div>
                  </div>
                  <div className="proj-meta-top">
                    <span className={`badge ${p.badge}`}>{tr(p.badgeLabel)}</span>
                    <span className="proj-cat">{tr(p.cat)}</span>
                  </div>
                  <h3>{tr(p.title)}</h3>
                  <p>{tr(p.desc)}</p>
                  <div className="progress">
                    <span style={{ width: `${p.progress}%` }} />
                  </div>
                  <div className="progress-row">
                    <span><strong>{tr(p.progressStrong)}</strong></span>
                    <span>{tr(p.progressRight)}</span>
                  </div>
                  <dl className="proj-facts">
                    {p.facts.map(([lbl, val], j) => (
                      <div key={j}>
                        <dt>{tr(lbl)}</dt>
                        <dd>{tr(val)}</dd>
                      </div>
                    ))}
                  </dl>
                  <a className="proj-link" href="#">{tr(p.cta)}</a>
                </article>
              );
            })}
          </div>

          <div className="load-more">
            <span className="muted small">
              <T
                en={`Showing ${visible.length} of 10 directions · Source: Community Profile, Domanivka, 2024`}
                uk={`Показано ${visible.length} з 10 напрямів · Джерело: Профіль громади, Доманівка, 2024`}
              />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
