import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const FACTS = [
  { en: 'Administrative centre', uk: 'Адміністративний центр', val: 'Domanivka' },
  { en: 'Region', uk: 'Область', val: 'Mykolaiv Oblast, Ukraine' },
  { en: 'Founded', uk: 'Засновано', val: '1782' },
  { en: 'Established as hromada', uk: 'Створена як громада', val: '2020' },
  { en: 'Area', uk: 'Площа', val: '912 km²' },
  { en: 'Population', uk: 'Населення', val: <>18,400 <span className="muted">(2024 est.)</span></> },
  { en: 'Settlements', uk: 'Населених пунктів', val: <>27 <span className="muted">(1 town + 26 villages)</span></>, valUk: <>27 <span className="muted">(1 смт + 26 сіл)</span></> },
  { en: 'Rivers', uk: 'Річки', val: 'Chichikleia, Tylihul' },
  { en: 'Distance to Mykolaiv', uk: 'Відстань до Миколаєва', val: '112 km' },
  { en: 'Distance to Odesa', uk: 'Відстань до Одеси', val: '148 km' },
  { en: 'Time zone', uk: 'Часовий пояс', val: 'EET (UTC+2)' },
  { en: 'Council head', uk: 'Голова громади', val: 'Andriy Hryhorchuk' },
];

const SETTLEMENTS = [
  { name: 'Domanivka', pop: '5,142' },
  { name: 'Bohdanivka', pop: '1,206' },
  { name: 'Olexandrivka', pop: '980' },
  { name: 'Vesele', pop: '820' },
  { name: 'Prybuzhany', pop: '748' },
  { name: 'Marianivka', pop: '692' },
  { name: 'Krasnopilske', pop: '624' },
  { name: 'Sofiivka', pop: '560' },
  { name: 'Tarasivka', pop: '512' },
  { name: 'Dilove', pop: '488' },
  { name: 'Lupareve', pop: '410' },
  { name: 'Pidhirnia', pop: '386' },
];

const TIMELINE = [
  { year: '1782', title: { en: 'Domanivka is founded', uk: 'Засновано Доманівку' },
    desc: { en: 'A small settlement is established by farming families on the banks of the Chichikleia river.', uk: 'Селяни-переселенці засновують поселення на берегах Чичиклеї.' } },
  { year: '1872', title: { en: 'First school opens', uk: 'Відкриття першої школи' },
    desc: { en: 'A parish school begins teaching reading, writing, and arithmetic to roughly forty children.', uk: 'Парафіяльна школа починає навчати грамоти й арифметики близько сорока дітей.' } },
  { year: '1932–33', title: { en: 'The Holodomor', uk: 'Голодомор' },
    desc: { en: 'Soviet grain seizures cause mass famine. Local death toll is estimated in the hundreds; remembered annually.', uk: 'Радянські хлібозаготівлі спричиняють масовий голод. Місцеві втрати — сотні людей; ушановуємо щороку.' } },
  { year: '1991', title: { en: 'Ukrainian independence', uk: 'Незалежність України' },
    desc: { en: 'Local farms decollectivise over the following decade. The agricultural backbone of the community takes its modern shape.', uk: 'Протягом десятиріччя колгоспи переходять у приватне володіння. Аграрна основа громади набуває сучасного вигляду.' } },
  { year: '2020', title: { en: 'Amalgamated hromada is formed', uk: 'Створено об’єднану громаду' },
    desc: { en: 'Twenty-seven settlements unite into a single self-governing community under Ukraine’s decentralisation reform.', uk: 'Двадцять сім населених пунктів об’єднуються в єдину громаду в рамках реформи децентралізації.' } },
  { year: '2022', title: { en: 'Full-scale invasion', uk: 'Повномасштабне вторгнення' },
    desc: { en: 'The community hosts thousands of internally displaced families from Mykolaiv and Kherson, and absorbs damage from missile strikes.', uk: 'Громада приймає тисячі ВПО з Миколаєва та Херсонщини; зазнає руйнувань від ракетних ударів.' } },
  { year: { en: 'Today', uk: 'Сьогодні' }, now: true, title: { en: 'Rebuilding and planning forward', uk: 'Відбудова і планування на майбутнє' },
    desc: { en: 'Forty-eight projects implemented since 2022, twenty-three active partners, and a five-year development strategy entering consultation.', uk: 'Сорок вісім реалізованих проєктів з 2022 року, двадцять три активних партнери; стратегія розвитку на п’ять років виходить на обговорення.' } },
];

const AGE = [
  { l: '0–17', v: 18 },
  { l: '18–34', v: 21 },
  { l: '35–54', v: 28 },
  { l: '55–69', v: 19 },
  { l: '70+', v: 14 },
];

const HOUSEHOLDS = [
  { en: 'Total households', uk: 'Усього домогосподарств', val: '6,820' },
  { en: 'Single-occupant', uk: 'Один мешканець', val: '1,704' },
  { en: 'With children', uk: 'З дітьми', val: '2,180' },
  { en: 'IDP-hosting', uk: 'Що приймають ВПО', val: '412' },
  { en: 'Pensioner-only', uk: 'Лише пенсіонери', val: '1,196' },
];

const OCCUPATION = [
  { en: 'Agriculture', uk: 'Сільське господарство', val: '41%' },
  { en: 'Public services', uk: 'Бюджетні установи', val: '16%' },
  { en: 'Trade & services', uk: 'Торгівля та послуги', val: '14%' },
  { en: 'Construction', uk: 'Будівництво', val: '9%' },
  { en: 'Other / commuting', uk: 'Інше / маятникова міграція', val: '20%' },
];

const SECTORS = [
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 19c4-2 6-6 6-12M9 7c4 0 8 2 12 6M21 13c-3 4-8 6-12 6"/></svg>,
    title: { en: 'Agriculture', uk: 'Сільське господарство' },
    desc: { en: 'Wheat, sunflower, rapeseed, dairy. 64,000 hectares of arable land. Eight active farming co-operatives.', uk: 'Пшениця, соняшник, ріпак, молочна продукція. 64 000 га ріллі. Вісім активних аграрних кооперативів.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><rect x="3" y="7" width="18" height="13" rx="1"/><path d="M8 7V4h8v3"/><path d="M3 13h18"/></svg>,
    title: { en: 'Small business', uk: 'Малий бізнес' },
    desc: { en: '218 registered businesses, mostly trade, food processing, repair, and rural tourism along the rivers.', uk: '218 зареєстрованих підприємств: торгівля, переробка продуктів, ремонт і сільський туризм уздовж річок.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 9l9-6 9 6v11H3z"/><path d="M9 20v-7h6v7"/></svg>,
    title: { en: 'Education & people', uk: 'Освіта та люди' },
    desc: { en: 'Eight schools, two arts schools, a vocational training centre, and a community library. Strong young teacher cohort.', uk: 'Вісім шкіл, дві мистецькі школи, центр професійної підготовки та громадська бібліотека. Активна когорта молодих учителів.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M3 18h18M5 18v-7l7-5 7 5v7"/><path d="M9 18v-4h6v4"/></svg>,
    title: { en: 'Infrastructure', uk: 'Інфраструктура' },
    desc: { en: '74% of roads paved. Three substations. Gas line through the centre. Drinking water under expansion.', uk: '74% доріг з твердим покриттям. Три підстанції. Газопровід через центр. Питний водогін у розширенні.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><circle cx="12" cy="12" r="9"/><path d="M3 12c4 4 14 4 18 0M3 12c4-4 14-4 18 0M12 3v18"/></svg>,
    title: { en: 'Strategic location', uk: 'Стратегічне розташування' },
    desc: { en: 'Two-hour drive from the Black Sea ports at Odesa and Mykolaiv. M-14 highway corridor passes 18 km north.', uk: 'Дві години автомобілем до чорноморських портів Одеси та Миколаєва. Автомагістраль М-14 проходить за 18 км на північ.' },
  },
  {
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4"><path d="M12 2v6M12 22v-6M2 12h6M22 12h-6M5 5l4 4M19 19l-4-4M5 19l4-4M19 5l-4 4"/></svg>,
    title: { en: 'Green & energy potential', uk: 'Зелений та енергетичний потенціал' },
    desc: { en: 'High solar yield in the southern Ukrainian belt. Two community-owned roof installations in pilot.', uk: 'Високий показник інсоляції південного поясу. Дві покрівельні СЕС громади — у пілоті.' },
  },
];

const HORIZONS = [
  {
    period: { en: 'Short term', uk: 'Короткостроково' },
    years: '2026 – 2027',
    title: { en: 'Immediate recovery.', uk: 'Невідкладне відновлення.' },
    items: [
      { en: 'Repair winter-critical infrastructure', uk: 'Ремонт критичної зимової інфраструктури' },
      { en: 'Restore three damaged schools', uk: 'Відновити три пошкоджені школи' },
      { en: 'Expand drinking-water network', uk: 'Розширити мережу питної води' },
      { en: 'Stabilise support for IDP families', uk: 'Стабілізувати підтримку ВПО' },
      { en: 'Energy backup for essential services', uk: 'Резерв живлення для базових служб' },
    ],
  },
  {
    period: { en: 'Medium term', uk: 'Середньостроково' },
    years: '2027 – 2029',
    title: { en: 'Local economy & dignity.', uk: 'Місцева економіка та гідність.' },
    items: [
      { en: 'Modular housing for displaced families', uk: 'Модульне житло для родин ВПО' },
      { en: 'Modernise primary healthcare', uk: 'Модернізація первинної медицини' },
      { en: 'Support small farms & processing', uk: 'Підтримка малих ферм і переробки' },
      { en: 'Renovate cultural & community centres', uk: 'Реновація культурних і громадських просторів' },
      { en: 'Digital services for residents', uk: 'Цифрові послуги для мешканців' },
    ],
  },
  {
    period: { en: 'Long term', uk: 'Довгостроково' },
    years: '2029 – 2030+',
    title: { en: 'A community people choose.', uk: 'Громада, яку обирають.' },
    items: [
      { en: 'Green-energy plan for public buildings', uk: 'Зелена енергія для громадських будівель' },
      { en: 'Tourism along the Chichikleia river', uk: 'Туризм уздовж Чичиклеї' },
      { en: 'Vocational programmes for youth', uk: 'Професійні програми для молоді' },
      { en: 'Smart land-use planning', uk: 'Раціональне землекористування' },
      { en: 'Sustainable budget independence', uk: 'Стійка бюджетна самостійність' },
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
          <circle cx="300" cy="245" r="9" fill="#1E3A46" />
          <circle cx="300" cy="245" r="14" fill="none" stroke="#1E3A46" strokeWidth="1" opacity="0.5" />
          <text x="316" y="249" fontWeight="600" fontSize="13">Domanivka</text>
          <text x="316" y="263" fill="#5B6670" fontSize="10">Administrative centre</text>
        </g>
        <g fill="#6B7D5C">
          <circle cx="200" cy="200" r="4" /><text x="208" y="204" fill="#24303A">Bohdanivka</text>
          <circle cx="380" cy="180" r="4" /><text x="388" y="184" fill="#24303A">Olexandrivka</text>
          <circle cx="450" cy="220" r="4" /><text x="458" y="224" fill="#24303A">Vesele</text>
          <circle cx="160" cy="290" r="4" /><text x="120" y="306" fill="#24303A">Prybuzhany</text>
          <circle cx="240" cy="340" r="4" /><text x="200" y="358" fill="#24303A">Krasnopilske</text>
          <circle cx="380" cy="320" r="4" /><text x="388" y="324" fill="#24303A">Marianivka</text>
          <circle cx="470" cy="340" r="4" /><text x="478" y="344" fill="#24303A">Lupareve</text>
          <circle cx="120" cy="130" r="4" /><text x="128" y="134" fill="#24303A">Pidhirnia</text>
          <circle cx="240" cy="120" r="4" /><text x="248" y="124" fill="#24303A">Tarasivka</text>
          <circle cx="350" cy="115" r="4" /><text x="358" y="119" fill="#24303A">Dilove</text>
          <circle cx="500" cy="155" r="4" /><text x="445" y="148" fill="#24303A">Sofiivka</text>
          <circle cx="220" cy="260" r="3" />
          <circle cx="350" cy="270" r="3" />
          <circle cx="420" cy="280" r="3" />
          <circle cx="170" cy="240" r="3" />
          <circle cx="280" cy="180" r="3" />
          <circle cx="320" cy="350" r="3" />
          <circle cx="180" cy="350" r="3" />
          <circle cx="450" cy="280" r="3" />
          <circle cx="500" cy="280" r="3" />
          <circle cx="100" cy="200" r="3" />
          <circle cx="510" cy="280" r="3" />
        </g>
      </g>
      <g transform="translate(540, 60)" fontFamily="Geist, sans-serif" fontSize="10" fill="#5B6670">
        <circle r="14" fill="none" stroke="#A89F8B" strokeWidth="0.8" />
        <path d="M0 -10 L3 0 L0 10 L-3 0 Z" fill="#1E3A46" />
        <text x="-3" y="-18" fontWeight="600" fill="#1E3A46">N</text>
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
          en: 'Domanivka was first settled in 1782 along the Chichikleia river, on the broad steppe that runs from Mykolaiv toward Odesa. Today it is an amalgamated hromada of twenty-seven settlements, with farming at its heart and a community council in the centre.',
          uk: 'Доманівка вперше згадується 1782 року — поселення на річці Чичиклея, у широкому степу між Миколаєвом і Одесою. Сьогодні це об’єднана територіальна громада з двадцяти семи населених пунктів, де у центрі — сільське господарство та громадська рада.',
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
                <T as="span" className="tag" en="Steppe landscape near Tylihul" uk="Степ біля Тилігулу" />
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
              <T as="h2" en="Twenty-seven settlements, one community." uk="Двадцять сім населених пунктів — одна громада." />
            </div>
            <T
              as="div"
              className="right"
              en="Domanivka hromada stretches across the steppe between Mykolaiv and Odesa oblasts. The administrative centre, Domanivka itself, sits along the Chichikleia river. The map shows the council seat, all settlements, and the main project sites."
              uk="Громада розташована у степу між Миколаївською та Одеською областями. Адміністративний центр — Доманівка — лежить на річці Чичиклея. На карті — центр громади, всі населені пункти та основні майданчики проєктів."
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
                <span className="meta">27</span>
              </div>
              <ul className="s-list">
                {SETTLEMENTS.map((s) => (
                  <li key={s.name}><span>{s.name}</span><span className="muted s-pop">{s.pop}</span></li>
                ))}
                <li className="more">
                  <T en="…and 15 more villages" uk="…і ще 15 сіл" />
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
              <T as="h2" en="Two centuries of farming and resilience." uk="Два століття землеробства і стійкості." />
              <T
                as="p"
                className="muted"
                en="The community has survived steppe drought, two world wars, the Holodomor, Soviet collectivisation, the 1990s transition, and the full-scale invasion that began in 2022. It is still here."
                uk="Громада пережила степові посухи, дві світові війни, Голодомор, колективізацію, перехід 1990-х і повномасштабне вторгнення з 2022 року. Вона досі тут."
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
              <T as="div" className="eyebrow" en="People & culture" uk="Люди та культура" />
              <T as="h2" en="Who lives here, and how the community spends its year." uk="Хто тут живе і чим живе громада упродовж року." />
            </div>
            <T
              as="div"
              className="right"
              en="Domanivka is mostly a working-age community of farming families, teachers, council staff, and small business owners. Since 2022, it has also become home for displaced families from neighbouring oblasts."
              uk="Доманівка — переважно громада людей працездатного віку: фермерські родини, вчителі, працівники ради, малий бізнес. Із 2022 року тут також знайшли дім родини ВПО з сусідніх областей."
            />
          </div>

          <div className="people-grid">
            <div className="demo-card">
              <T as="div" className="demo-title" en="Age distribution" uk="Розподіл за віком" />
              <div className="demo-bars">
                {AGE.map((a) => (
                  <div key={a.l} className="demo-row">
                    <span className="d-l">{a.l}</span>
                    <div className="d-bar"><span style={{ width: `${a.v}%` }} /></div>
                    <span className="d-v">{a.v}%</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="demo-card">
              <T as="div" className="demo-title" en="Households" uk="Домогосподарства" />
              <ul className="demo-list">
                {HOUSEHOLDS.map((h, i) => (
                  <li key={i}><span>{tr(h)}</span><strong>{h.val}</strong></li>
                ))}
              </ul>
            </div>
            <div className="demo-card">
              <T as="div" className="demo-title" en="What people do" uk="Чим зайняті люди" />
              <ul className="demo-list">
                {OCCUPATION.map((o, i) => (
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
                <T as="span" className="tag" en="Harvest festival, central square" uk="Свято врожаю, центральна площа" />
              </div>
            </div>
            <div className="culture-text">
              <T as="h3" en="Local identity is steppe, song, and stubbornness." uk="Місцева ідентичність — це степ, пісня та впертість." />
              <T as="p"
                 en="The community keeps an annual cycle of public events: Maslyana in February, an Easter market, Independence Day on the central square, harvest festival in September, and a memorial day for the Holodomor in November. The local folk choir “Chichikleia” sings at most of them."
                 uk="Громада зберігає річний цикл подій: Масляна у лютому, Великодній ярмарок, День Незалежності на центральній площі, Свято врожаю у вересні, день пам’яті Голодомору в листопаді. На більшості подій співає народний хор «Чичиклея»." />
              <T as="p"
                 en="Two local museums document the steppe, the wars, and family stories collected from villages across the hromada."
                 uk="Два краєзнавчі музеї зберігають історію степу, воєн і родинні історії з сіл громади." />
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
              en="Domanivka has black-earth soil, two rivers, low-cost land, and a quiet logistic corridor to two major Ukrainian ports. We are open to long-term investors and to partnerships that strengthen the local economy."
              uk="У Доманівці — родючі чорноземи, дві річки, доступна земля та тиха логістична вісь до двох українських портів. Ми відкриті до довгострокових інвесторів і партнерств, які зміцнюють місцеву економіку."
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
              <T as="div" className="eyebrow" en="Development strategy 2026–2030" uk="Стратегія розвитку 2026–2030" />
              <T as="h2" en="A clear plan, in three horizons." uk="Чіткий план у трьох горизонтах." />
            </div>
            <T
              as="div"
              className="right"
              en="The development strategy is built on community consultations, council priorities, and partner advice. It is published openly and reviewed each year."
              uk="Стратегія розвитку ґрунтується на громадських консультаціях, пріоритетах ради та порадах партнерів. Документ публікуємо відкрито і переглядаємо щороку."
            />
          </div>

          <div className="horizons">
            {HORIZONS.map((h, i) => (
              <div key={i} className="horizon">
                <div className="h-head">
                  <span className="h-period">{tr(h.period)}</span>
                  <span className="h-years">{h.years}</span>
                </div>
                <h3>{tr(h.title)}</h3>
                <ul>
                  {h.items.map((it, j) => <li key={j}>{tr(it)}</li>)}
                </ul>
              </div>
            ))}
          </div>

          <div className="row" style={{ marginTop: 48 }}>
            <a href="#" className="btn btn-secondary">
              <T en="Read the full strategy document" uk="Повний текст стратегії" />
              <ArrowIcon />
            </a>
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
               en="We host partner delegations regularly. A typical site visit covers two days, the council, three settlements, and at least one active project."
               uk="Регулярно приймаємо партнерські делегації. Типовий візит — два дні, рада, три населені пункти та щонайменше один активний проєкт." />
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
