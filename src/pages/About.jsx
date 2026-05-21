import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const FACTS = [
  { en: 'Administrative centre', uk: 'Адміністративний центр', val: 'smt Domanivka' },
  { en: 'Region', uk: 'Область', val: 'Voznesensk district, Mykolaiv Oblast' },
  { en: 'Community formed', uk: 'Громаду утворено', val: <>2018 <span className="muted">(expanded 2020)</span></>, valUk: <>2018 <span className="muted">(розширено 2020)</span></> },
  { en: 'Settlements', uk: 'Населених пунктів', val: <>31 <span className="muted">(smt + 30 villages)</span></>, valUk: <>31 <span className="muted">(смт + 30 сіл)</span></> },
  { en: 'Area', uk: 'Площа', val: '729.7 km²' },
  { en: 'Population', uk: 'Населення', val: <>14,401 <span className="muted">(01.01.2024)</span></> },
  { en: 'IDPs hosted', uk: 'Прийнято ВПО', val: '1,087' },
  { en: 'Combatants defending Ukraine', uk: 'Учасників бойових дій при захисті України', val: '89' },
  { en: 'Rivers', uk: 'Річки', val: 'Chortala, Bakshala, Chychykliia' },
  { en: 'Coordinates', uk: 'Координати', val: '47°37′N · 30°58′E' },
  { en: 'Head of the community', uk: 'Голова громади', val: 'Viktor Vlasiuk' },
  { en: 'Distance to Mykolaiv', uk: 'Відстань до Миколаєва', val: '137 km' },
];

const SETTLEMENTS = [
  { name: 'smt Domanivka', tag: { en: 'centre', uk: 'центр' } },
  { name: 'Zbroshkove' },
  { name: 'Tsaredarivka' },
  { name: 'Zabary' },
  { name: 'Olexandrivka' },
  { name: 'Novolikarske' },
  { name: 'Viktorivka' },
  { name: 'Zelenyi Yar' },
];

const TIMELINE = [
  { year: '2018', title: { en: 'The community is formed', uk: 'Утворено громаду' },
    desc: { en: 'Domanivska settlement territorial community is established under Ukraine’s decentralisation reform.', uk: 'Доманівська селищна територіальна громада створена в рамках реформи децентралізації.' } },
  { year: '2020', title: { en: 'Expanded to 31 settlements', uk: 'Розширення до 31 населеного пункту' },
    desc: { en: 'Four additional village councils join the community. The result is Domanivka and 30 villages across 729.7 km².', uk: 'До громади приєднуються ще чотири сільські ради. У результаті — Доманівка та 30 сіл на площі 729,7 км².' } },
  { year: '2022', title: { en: 'Full-scale invasion', uk: 'Повномасштабне вторгнення' },
    desc: { en: 'The number of registered IDPs rises sharply: 13 at the start of 2022, 2,425 at the start of 2023, and 1,238 at the start of 2024.', uk: 'Кількість зареєстрованих ВПО різко зростає: 13 на початку 2022 року, 2 425 на початку 2023 року та 1 238 на початку 2024 року.' } },
  { year: '2024', title: { en: 'Reclassified, profile published', uk: 'Зміна статусу, видано профіль' },
    desc: { en: 'Domanivka changes status from urban-type settlement to settlement; the Community Profile is published as an addendum to the Development Strategy.', uk: 'Доманівка змінює статус із селища міського типу на селище; видано Профіль громади як додаток до Стратегії розвитку.' } },
  { year: { en: 'Today', uk: 'Сьогодні' }, now: true, title: { en: 'Strategy through 2027', uk: 'Стратегія до 2027 року' },
    desc: { en: 'The Community Profile is used as an addendum to the Development Strategy through 2027, with a perspective through 2034.', uk: 'Профіль громади використовується як додаток до Стратегії розвитку до 2027 року з перспективою дії до 2034 року.' } },
];

const IDP_YEARS = [
  { l: '2021', v: 1, count: '13' },
  { l: '2022', v: 100, count: '2,425' },
  { l: '2023', v: 82, count: '1,992' },
  { l: '2024', v: 45, count: '1,093' },
];

const SOCIAL = [
  { en: 'IDPs in the community', uk: 'ВПО у громаді', val: '1,087' },
  { en: 'People in difficult circumstances', uk: 'У складних життєвих обставинах', val: '352' },
  { en: 'Families in difficulty', uk: 'Сімей у складних обставинах', val: '130' },
  { en: 'Registered for primary care', uk: 'Прикріплено до первинної медицини', val: '15,978' },
];

const RESILIENCE = [
  { en: 'Combatants defending Ukraine', uk: 'Учасників бойових дій при захисті України', val: '89' },
  { en: 'Registered IDPs in 2025', uk: 'ВПО у 2025 році', val: '1,087' },
  { en: 'Solar power plants', uk: 'Сонячних електростанцій', val: '9' },
  { en: 'Farms', uk: 'Фермерських господарств', val: '110' },
];

const SECTORS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 19c4-2 6-6 6-12M9 7c4 0 8 2 12 6M21 13c-3 4-8 6-12 6"/></svg>,
    title: { en: 'Agriculture', uk: 'Сільське господарство' },
    desc: { en: '63,543 ha of black-soil farmland, 110 farms and 12 agro-enterprises. Wheat, rapeseed, sunflower and orchards.', uk: '63 543 га чорноземних угідь, 110 фермерських господарств і 12 агропідприємств. Пшениця, ріпак, соняшник, сади.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M13 2L4 14h7l-1 8 9-12h-7z"/></svg>,
    title: { en: 'Energy', uk: 'Енергетика' },
    desc: { en: 'Nine solar power plants (8.8 MW total) and a municipal fuel-pellets plant. An energy-purpose land plot is reserved near Zelenyi Yar.', uk: 'Дев’ять сонячних електростанцій (8,8 МВт) і комунальна пелетна лінія. Зарезервовано ділянку для енергетики біля с. Зелений Яр.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V4h8v3"/><path d="M3 13h18"/></svg>,
    title: { en: 'Business', uk: 'Бізнес' },
    desc: { en: '335 entrepreneurs and 149 registered firms, including the dairy branch “Mykolaivmolprom”. Limestone, sand and clay reserves.', uk: '335 підприємців і 149 зареєстрованих фірм, зокрема молочна філія «Миколаївмолпром». Поклади вапняку, піску та глини.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="6" width="18" height="14" rx="1"/><path d="M12 10v6M9 13h6"/></svg>,
    title: { en: 'Healthcare', uk: 'Охорона здоров’я' },
    desc: { en: 'A multidisciplinary hospital and a primary-care centre serving three hromadas, with 5 outpatient clinics, 12 paramedic posts and a mobile clinic.', uk: 'Багатопрофільна лікарня та центр первинної допомоги на три громади: 5 амбулаторій, 12 ФАПів і мобільна клініка.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 9l9-6 9 6v11H3z"/><path d="M9 20v-7h6v7"/></svg>,
    title: { en: 'Education & culture', uk: 'Освіта та культура' },
    desc: { en: '60% of the local budget goes to education: 5 schools, 8 kindergartens, a music and sports school, plus 10 cultural centres and 12 libraries.', uk: '60% місцевого бюджету — на освіту: 5 шкіл, 8 дитсадків, музична та спортивна школи, а також 10 будинків культури і 12 бібліотек.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9"/><path d="M3 12c4 4 14 4 18 0M3 12c4-4 14-4 18 0M12 3v18"/></svg>,
    title: { en: 'Location & connectivity', uk: 'Розташування та сполучення' },
    desc: { en: 'Mykolaiv 137 km, Odesa 176 km, Kyiv 364 km. 80 km of the P-75 national highway run through the community.', uk: 'Миколаїв 137 км, Одеса 176 км, Київ 364 км. Територією громади проходить 80 км траси Р-75.' },
  },
];

const HORIZONS = [
  {
    period: { en: 'Critical infrastructure', uk: 'Критична інфраструктура' },
    years: { en: 'Priority', uk: 'Пріоритет' },
    title: { en: 'Water, sewage, roads.', uk: 'Вода, каналізація, дороги.' },
    items: [
      { en: 'Clean drinking water for 30 villages', uk: 'Чиста питна вода для 30 сіл' },
      { en: 'Water & sewage system modernisation', uk: 'Модернізація водогонів і каналізації' },
      { en: 'Construction of treatment facilities', uk: 'Будівництво очисних споруд' },
      { en: 'Municipal road repairs (292.7 km)', uk: 'Ремонт комунальних доріг (292,7 км)' },
    ],
  },
  {
    period: { en: 'Social & recovery', uk: 'Соціальне та відновлення' },
    years: { en: 'In progress', uk: 'Триває' },
    title: { en: 'People first.', uk: 'Люди понад усе.' },
    items: [
      { en: 'IDP housing programme 2022-2026', uk: 'Програма забезпечення житлом ВПО на 2022-2026 роки' },
      { en: 'School retrofits + shelter construction', uk: 'Термомодернізація шкіл і укриття' },
      { en: 'Hospital modernisation & energy resilience', uk: 'Модернізація лікарні та енергостійкість' },
      { en: 'Barrier-free community services', uk: 'Безбар’єрні громадські послуги' },
    ],
  },
  {
    period: { en: 'Economy & resilience', uk: 'Економіка та стійкість' },
    years: { en: 'Development', uk: 'Розвиток' },
    title: { en: 'A community that earns.', uk: 'Громада, що заробляє.' },
    items: [
      { en: 'Municipal fuel-pellets plant & solar', uk: 'Комунальна пелетна лінія та СЕС' },
      { en: 'Investment land plots', uk: 'Інвестиційні земельні ділянки' },
      { en: 'Veterans’ co-op & food security', uk: 'Ветеранський кооператив і продбезпека' },
      { en: 'Waste management & clean settlements', uk: 'Поводження з відходами, чисті села' },
    ],
  },
];

function MapSvg() {
  return (
    <svg viewBox="0 0 600 460" xmlns="http://www.w3.org/2000/svg" aria-label="Map of Domanivka hromada">
      <rect width="600" height="460" fill="#F1ECE2" />
      <path d="M60 90 L180 60 L320 70 L460 100 L530 160 L550 240 L520 330 L420 400 L300 410 L180 380 L100 320 L60 220 Z" fill="#E2D9C6" stroke="#A89F8B" strokeWidth="1" strokeDasharray="3 3" />
      <path d="M80 170 C 180 200, 260 230, 380 220 S 540 200, 570 180" fill="none" stroke="#A4B6BE" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M120 360 C 200 320, 280 310, 360 330 S 480 350, 540 320" fill="none" stroke="#A4B6BE" strokeWidth="1.8" strokeLinecap="round" />
      <path d="M40 250 L560 250" stroke="#C9B999" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M300 40 L300 420" stroke="#C9B999" strokeWidth="1" strokeDasharray="4 4" />
      <g fontFamily="Geist, sans-serif" fontSize="11" fill="#24303A">
        <g>
          <circle cx="300" cy="245" r="9" fill="#0E5A75" />
          <circle cx="300" cy="245" r="14" fill="none" stroke="#0E5A75" strokeWidth="1" opacity="0.5" />
          <text x="316" y="249" fontWeight="600" fontSize="13">smt Domanivka</text>
          <text x="316" y="263" fill="#5B6670" fontSize="10">Administrative centre</text>
        </g>
        <g fill="#7DA62E">
          <circle cx="200" cy="200" r="4" /><text x="208" y="204" fill="#24303A">Zbroshkove</text>
          <circle cx="380" cy="180" r="4" /><text x="388" y="184" fill="#24303A">Tsaredarivka</text>
          <circle cx="450" cy="220" r="4" /><text x="458" y="224" fill="#24303A">Zabary</text>
          <circle cx="160" cy="290" r="4" /><text x="120" y="306" fill="#24303A">Olexandrivka</text>
          <circle cx="240" cy="340" r="4" /><text x="200" y="358" fill="#24303A">Novolikarske</text>
          <circle cx="380" cy="320" r="4" /><text x="388" y="324" fill="#24303A">Viktorivka</text>
          <circle cx="470" cy="340" r="4" /><text x="430" y="356" fill="#24303A">Zelenyi Yar</text>
          <circle cx="120" cy="130" r="3" />
          <circle cx="240" cy="120" r="3" />
          <circle cx="350" cy="115" r="3" />
          <circle cx="500" cy="155" r="3" />
          <circle cx="220" cy="260" r="3" />
          <circle cx="350" cy="270" r="3" />
          <circle cx="420" cy="280" r="3" />
          <circle cx="170" cy="240" r="3" />
          <circle cx="280" cy="180" r="3" />
          <circle cx="320" cy="350" r="3" />
          <circle cx="180" cy="350" r="3" />
          <circle cx="500" cy="280" r="3" />
          <circle cx="100" cy="200" r="3" />
        </g>
      </g>
      <g transform="translate(540, 60)" fontFamily="Geist, sans-serif" fontSize="10" fill="#5B6670">
        <circle r="14" fill="none" stroke="#A89F8B" strokeWidth="0.8" />
        <path d="M0 -10 L3 0 L0 10 L-3 0 Z" fill="#0E5A75" />
        <text x="-3" y="-18" fontWeight="600" fill="#0E5A75">N</text>
      </g>
      <g transform="translate(60, 420)" fontFamily="Geist, sans-serif" fontSize="10" fill="#5B6670">
        <line x1="0" y1="0" x2="80" y2="0" stroke="#5B6670" strokeWidth="1" />
        <line x1="0" y1="-3" x2="0" y2="3" stroke="#5B6670" />
        <line x1="40" y1="-3" x2="40" y2="3" stroke="#5B6670" />
        <line x1="80" y1="-3" x2="80" y2="3" stroke="#5B6670" />
        <text x="0" y="16">0</text><text x="36" y="16">10</text><text x="72" y="16">20 km</text>
      </g>
    </svg>
  );
}

export default function About() {
  const { lang } = useLang();
  const tr = (pair) => (lang === 'uk' ? pair.uk : pair.en);

  return (
    <>
      <PageIntro
        crumb={{ en: 'About the community', uk: 'Про громаду' }}
        title={{ en: 'People, land, and a long memory.', uk: 'Люди, земля та довга пам’ять.' }}
        lede={{
          en: 'Domanivska settlement territorial community was formed in 2018 by uniting Petropavlivka and Tsaredarivka councils. In 2020, Volodymyrivka, Zelenyi Yar, Marynivka and Shchaslyvka councils joined. Today the community covers Domanivka and 30 villages across 729.7 km² in Voznesensk district, along the Chortala, Bakshala and Chychykliia rivers.',
          uk: 'Доманівська селищна територіальна громада утворена 2018 року, у 2020-му розширилася об’єднанням сільрад. Сьогодні це 31 населений пункт — смт Доманівка та 30 сіл — на 729,7 км² чорноземного степу у Вознесенському районі Миколаївщини, уздовж річок Чортала, Бакшала та Чичиклія.',
        }}
      />

      <section className="section">
        <div className="wrap">
          <div className="glance-grid">
            <div className="glance-photo photo tint-1">
              <div className="ph-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M2 20h20" /><path d="M3 20l4-9 4 5 3-3 7 7" /><circle cx="17" cy="5" r="2" />
                </svg>
              </div>
              <div className="photo-label">
                <T as="span" className="tag" en="Steppe along the Chortala river" uk="Степ уздовж річки Чортала" />
              </div>
            </div>
            <div className="glance-text">
              <T as="div" className="eyebrow" en="At a glance" uk="Коротко" />
              <dl className="facts">
                {FACTS.map((f, i) => (
                  <div key={i}>
                    <dt>{tr(f)}</dt>
                    <dd>{lang === 'uk' && f.valUk ? f.valUk : f.val}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="settlements" style={{ background: 'var(--bg-2)', paddingTop: 96, paddingBottom: 96 }}>
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="Geography" uk="Географія" />
              <T as="h2" en="Thirty-one settlements, one community." uk="Тридцять один населений пункт — одна громада." />
            </div>
            <T
              as="div"
              className="right"
              en="The community stretches across the steppe of the Voznesensk district, along the Chortala, Bakshala and Chychykliia rivers. Its centre, smt Domanivka, sits on the Chortala. The map shows the council seat and the settlements named in current projects."
              uk="Громада розкинулася в степу Вознесенського району вздовж річок Чортала, Бакшала та Чичиклія. Її центр — смт Доманівка — лежить на Чорталі. На карті — центр громади та населені пункти з поточних проєктів."
            />
          </div>

          <div className="map-grid">
            <div className="map">
              <MapSvg />
              <div className="map-legend">
                <div><span className="leg-dot" style={{ background: 'var(--navy)' }} /><T en="Administrative centre" uk="Адміністративний центр" /></div>
                <div><span className="leg-dot" style={{ background: 'var(--olive)' }} /><T en="Settlement" uk="Населений пункт" /></div>
                <div><span className="leg-line" style={{ background: 'var(--muted-blue)' }} /><T en="Rivers" uk="Річки" /></div>
                <div><span className="leg-line" style={{ background: '#C9B999' }} /><T en="Main roads" uk="Основні дороги" /></div>
              </div>
            </div>

            <div className="settlement-list">
              <div className="row-between" style={{ marginBottom: 24 }}>
                <h3 style={{ fontFamily: 'var(--font-sans)', fontSize: 13, fontWeight: 500, letterSpacing: '0.16em', textTransform: 'uppercase', color: 'var(--ink-mute)' }}>
                  <T en="Settlements (selection)" uk="Населені пункти (вибірка)" />
                </h3>
                <span className="meta">31</span>
              </div>
              <ul className="s-list">
                {SETTLEMENTS.map((s) => (
                  <li key={s.name}><span>{s.name}</span><span className="muted s-pop">{s.tag ? tr(s.tag) : ''}</span></li>
                ))}
                <li className="more">
                  <T en="…and 23 more villages" uk="…і ще 23 села" />
                  <span />
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="history">
        <div className="wrap">
          <div className="history-grid">
            <div className="history-side">
              <T as="div" className="eyebrow" en="History" uk="Історія" />
              <T as="h2" en="A young community with deep steppe roots." uk="Молода громада з глибоким степовим корінням." />
              <T
                as="p"
                className="muted"
                en="Domanivka is a young amalgamated community shaped by Ukraine’s decentralisation, the full-scale war, and the people who chose to stay, rebuild and serve."
                uk="Доманівка — молода об’єднана громада, сформована реформою децентралізації, повномасштабною війною та людьми, які обрали лишитися, відбудовувати й служити."
              />
            </div>
            <ol className="timeline">
              {TIMELINE.map((t, i) => (
                <li key={i} className={t.now ? 'now' : undefined}>
                  <span className="t-year">{typeof t.year === 'string' ? t.year : tr(t.year)}</span>
                  <div className="t-body">
                    <h4>{tr(t.title)}</h4>
                    <p>{tr(t.desc)}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </div>
      </section>

      <section className="section" id="people" style={{ background: 'var(--bg-2)', padding: '96px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="People & resilience" uk="Люди та стійкість" />
              <T as="h2" en="Who lives here, and how the community holds." uk="Хто тут живе і як громада тримається." />
            </div>
            <T
              as="div"
              className="right"
              en="A farming community with 8,514 working-age residents, 4,156 residents aged 60+, and a significant IDP presence since 2022. These figures come from the Community Profile, 2024."
              uk="Аграрна громада з 8 514 мешканцями працездатного віку, 4 156 людьми віком 60+ та значною присутністю ВПО з 2022 року. Дані — з Профілю громади, 2024."
            />
          </div>

          <div className="people-grid">
            <div className="demo-card">
              <T as="div" className="demo-title" en="Displaced people hosted" uk="Прийнято ВПО" />
              <div className="demo-bars">
                {IDP_YEARS.map((a) => (
                  <div key={a.l} className="demo-row">
                    <span className="d-l">{a.l}</span>
                    <div className="d-bar"><span style={{ width: `${a.v}%` }} /></div>
                    <span className="d-v">{a.count}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="demo-card">
              <T as="div" className="demo-title" en="Social support · 2024" uk="Соціальна підтримка · 2024" />
              <ul className="demo-list">
                {SOCIAL.map((h, i) => (
                  <li key={i}><span>{tr(h)}</span><strong>{h.val}</strong></li>
                ))}
              </ul>
            </div>
            <div className="demo-card">
              <T as="div" className="demo-title" en="Community & resilience" uk="Громада та стійкість" />
              <ul className="demo-list">
                {RESILIENCE.map((o, i) => (
                  <li key={i}><span>{tr(o)}</span><strong>{o.val}</strong></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="culture-band">
            <div className="culture-photo photo tint-3">
              <div className="ph-center">
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
                  <path d="M3 21v-7c0-3 3-5 9-5s9 2 9 5v7" /><circle cx="12" cy="6" r="3" />
                </svg>
              </div>
              <div className="photo-label">
                <T as="span" className="tag" en="Veterans’ co-operative “Oberih-Agro”" uk="Ветеранський кооператив «Оберіг-Агро»" />
              </div>
            </div>
            <div className="culture-text">
              <T as="h3" en="Steppe, service, and stubborn self-reliance." uk="Степ, служба і вперта самозарадність." />
              <T as="p"
                 en="Beyond farming, the community runs a network of 10 cultural centres, 12 libraries, a museum, and a music and sports school. Volunteers weave camouflage nets, make trench candles and raise funds for drones and vehicles for the front."
                 uk="Окрім аграрного життя, громада має 10 будинків культури, 12 бібліотек, музей, музичну та спортивну школи. Волонтери плетуть маскувальні сітки, виготовляють окопні свічки та збирають кошти на дрони й авто для фронту." />
              <T as="p"
                 en="The veterans’ organic co-operative “Oberih-Agro” — with 19 greenhouses and 30 kW of solar — is a small but real example of post-service economic life. The disused swimming pool in Domanivka awaits reconstruction."
                 uk="Ветеранський органічний кооператив «Оберіг-Агро» — з 19 теплицями та СЕС на 30 кВт — невеликий, але реальний приклад економіки після служби. Недіючий басейн у Доманівці очікує на реконструкцію." />
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="Economy & potential" uk="Економіка та потенціал" />
              <T as="h2" en="Not only asking — also offering." uk="Не лише просимо — також пропонуємо." />
            </div>
            <T
              as="div"
              className="right"
              en="Black-earth soil, growing solar capacity, free investment plots and a logistic corridor to the Black Sea ports. We are open to long-term investors and to partnerships that strengthen the local economy."
              uk="Родючі чорноземи, зростаюча сонячна генерація, вільні інвестиційні ділянки та логістична вісь до чорноморських портів. Ми відкриті до довгострокових інвесторів і партнерств, що зміцнюють місцеву економіку."
            />
          </div>

          <div className="sector-grid">
            {SECTORS.map((s, i) => (
              <div key={i} className="sector">
                <div className="s-icon">{s.icon}</div>
                <h3>{tr(s.title)}</h3>
                <p>{tr(s.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section strategy" id="strategy">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="Development Strategy through 2027" uk="Стратегія розвитку до 2027 року" />
              <T as="h2" en="Priority directions, in three blocks." uk="Пріоритетні напрями у трьох блоках." />
            </div>
            <T
              as="div"
              className="right"
              en="The Development Strategy through 2027 (with perspective to 2034) is built on the Community Profile and partner advice. Below are the priority project areas open to support."
              uk="Стратегія розвитку до 2027 року (з перспективою до 2034) ґрунтується на Профілі громади та порадах партнерів. Нижче — пріоритетні напрями, відкриті для підтримки."
            />
          </div>

          <div className="horizons">
            {HORIZONS.map((h, i) => (
              <div key={i} className="horizon">
                <div className="h-head">
                  <span className="h-period">{tr(h.period)}</span>
                  <span className="h-years">{tr(h.years)}</span>
                </div>
                <h3>{tr(h.title)}</h3>
                <ul>
                  {h.items.map((it, j) => <li key={j}>{tr(it)}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="row" style={{ marginTop: 48 }}>
            <Link to="/projects" className="btn btn-secondary">
              <T en="See all current projects" uk="Усі поточні проєкти" />
              <ArrowIcon />
            </Link>
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <T as="div" className="eyebrow on-dark" en="Visit the community" uk="Відвідати громаду" />
            <T as="h2" className="cta-h"
               en="The fastest way to understand Domanivka is to come and walk through it."
               uk="Найкращий спосіб зрозуміти Доманівку — приїхати та пройтися нею." />
            <T as="p" className="cta-sub"
               en="We host partner delegations regularly. A typical site visit covers the council, several settlements, and at least one active project."
               uk="Регулярно приймаємо партнерські делегації. Типовий візит охоплює раду, кілька населених пунктів і щонайменше один активний проєкт." />
            <div className="row" style={{ gap: 12, marginTop: 24 }}>
              <Link to="/contacts" className="btn btn-primary on-dark">
                <T en="Request a site visit" uk="Запросити візит" />
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
