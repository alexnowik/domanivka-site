import { useState } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon, DropIcon, HouseIcon, SchoolIcon } from '../icons.jsx';

const TOTALS = [
  { num: '48', en: 'Projects total', uk: 'Усього проєктів' },
  { num: '31', en: 'Completed since 2022', uk: 'Завершено з 2022 року' },
  { num: '9', en: 'In progress', uk: 'Триває' },
  { num: '8', en: 'Planned, partially funded', uk: 'Заплановано, частково фінансовано' },
  { num: '€ 4.8M', en: 'Total project value', uk: 'Загальна вартість проєктів', highlight: true },
];

const FILTERS = [
  { key: 'all', en: 'All projects', uk: 'Усі проєкти', count: 48 },
  { key: 'in_progress', en: 'In progress', uk: 'Триває', count: 9 },
  { key: 'completed', en: 'Completed', uk: 'Завершено', count: 31 },
  { key: 'planned', en: 'Planned', uk: 'Заплановано', count: 5 },
  { key: 'needs_funding', en: 'Needs funding', uk: 'Потребує фінансування', count: 3 },
];

const SORT_OPTIONS = [
  { en: 'Most recent', uk: 'Найновіші' },
  { en: 'Budget (high → low)', uk: 'Бюджет (більший → менший)' },
  { en: 'Beneficiaries (most)', uk: 'Найбільше отримувачів' },
];

const PROJECTS = [
  {
    status: 'in_progress', badge: 'in-progress', tint: 'tint-2',
    icon: <SchoolIcon />,
    photoTag: { en: 'School No. 2 · Domanivka', uk: 'Школа №2 · Доманівка' },
    badgeLabel: { en: 'In progress', uk: 'Триває' },
    cat: { en: 'Education', uk: 'Освіта' },
    title: { en: 'Restoring School No. 2 — windows, roof, heating', uk: 'Відновлення школи №2 — вікна, дах, опалення' },
    desc: { en: 'Replacing damaged windows, repairing the roof, installing efficient heating so 412 children return to in-person classes.', uk: 'Замінюємо пошкоджені вікна, ремонтуємо дах, ставимо ефективне опалення — щоб 412 дітей повернулися до очного навчання.' },
    progress: 64, progressLbl: { en: 'funded', uk: 'фінансовано' }, amount: '€184k / €286k',
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, <>412 <T en="children" uk="дітей" /></>],
      [{ en: 'Partner', uk: 'Партнер' }, 'UNICEF · KfW'],
      [{ en: 'Location', uk: 'Локація' }, 'Domanivka'],
      [{ en: 'Timeline', uk: 'Терміни' }, 'Apr 2025 — Mar 2026'],
    ],
    cta: { en: 'Learn more →', uk: 'Детальніше →' },
  },
  {
    status: 'in_progress', badge: 'in-progress', tint: 'tint-4',
    icon: <DropIcon />,
    photoTag: { en: 'Water · 3 villages', uk: 'Вода · 3 села' },
    badgeLabel: { en: 'In progress', uk: 'Триває' },
    cat: { en: 'Water supply', uk: 'Водопостачання' },
    title: { en: 'Drinking-water network: Bohdanivka, Olexandrivka, Vesele', uk: 'Питний водогін: Богданівка, Олександрівка, Веселе' },
    desc: { en: 'New pump station and 14 km of pipe so 3,180 residents have safe drinking water at home, not from tankers.', uk: 'Нова насосна станція й 14 км труб, щоб 3 180 мешканців мали безпечну воду вдома, а не з цистерн.' },
    progress: 38, progressLbl: { en: 'funded', uk: 'фінансовано' }, amount: '€212k / €560k',
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, '3,180'],
      [{ en: 'Partner', uk: 'Партнер' }, 'UNDP · Government of Sweden'],
      [{ en: 'Location', uk: 'Локація' }, '3 villages'],
      [{ en: 'Timeline', uk: 'Терміни' }, 'Jun 2025 — Dec 2026'],
    ],
    cta: { en: 'Learn more →', uk: 'Детальніше →' },
  },
  {
    status: 'needs_funding', badge: 'urgent', tint: 'tint-5',
    icon: <HouseIcon />,
    photoTag: { en: 'Modular housing block', uk: 'Модульний квартал' },
    badgeLabel: { en: 'Needs funding', uk: 'Потребує фінансування' },
    cat: { en: 'Housing', uk: 'Житло' },
    title: { en: 'Twelve modular homes for displaced families', uk: 'Дванадцять модульних будинків для родин ВПО' },
    desc: { en: 'A pilot residential block on community land for families who have lived in temporary shelter for more than two winters.', uk: 'Пілотний житловий квартал на землі громади для родин, які вже понад дві зими у тимчасовому житлі.' },
    progress: 12, progressLbl: { en: 'committed', uk: 'зобов’язано' }, amount: '€96k / €820k',
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, <>48 <T en="people" uk="осіб" /></>],
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'Open', uk: 'Відкритий пошук' }],
      [{ en: 'Location', uk: 'Локація' }, 'Domanivka'],
      [{ en: 'Timeline', uk: 'Терміни' }, '2026 — 2027'],
    ],
    cta: { en: 'Support this project →', uk: 'Підтримати →' },
  },
  {
    status: 'completed', badge: 'completed', tint: 'tint-1',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 21h18M5 21V8l7-5 7 5v13" /><path d="M9 21v-6h6v6" /><circle cx="12" cy="11" r="1.4" /></svg>,
    photoTag: { en: 'Kindergarten ‘Sonechko’', uk: 'Дитсадок «Сонечко»' },
    badgeLabel: { en: 'Completed', uk: 'Завершено' },
    cat: { en: 'Education', uk: 'Освіта' },
    title: { en: 'Kindergarten ‘Sonechko’ — full thermal renovation', uk: 'Дитсадок «Сонечко» — комплексна термомодернізація' },
    desc: { en: 'Walls insulated, windows replaced, heating modernised. Energy costs down 46% in the first winter after.', uk: 'Утеплення стін, заміна вікон, модернізація опалення. Енерговитрати знизилися на 46% у першу зиму.' },
    progress: 100, progressLbl: { en: 'delivered', uk: 'виконано' }, amount: '€164k', completed: true,
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, <>180 <T en="children" uk="дітей" /></>],
      [{ en: 'Partner', uk: 'Партнер' }, 'GIZ'],
      [{ en: 'Location', uk: 'Локація' }, 'Domanivka'],
      [{ en: 'Completed', uk: 'Завершено' }, 'Mar 2025'],
    ],
    cta: { en: 'View report →', uk: 'Подивитись звіт →' },
  },
  {
    status: 'completed', badge: 'completed', tint: 'tint-3',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M12 2v10M8 6l4-4 4 4M4 22h16M6 22v-7h12v7" /></svg>,
    photoTag: { en: 'Bomb shelters in schools', uk: 'Укриття у школах' },
    badgeLabel: { en: 'Completed', uk: 'Завершено' },
    cat: { en: 'Safety', uk: 'Безпека' },
    title: { en: 'Certified bomb shelters in five schools', uk: 'Сертифіковані укриття у п’яти школах' },
    desc: { en: 'Five basements reinforced, ventilated, equipped with emergency power, water, and seating — all certified.', uk: 'П’ять підвалів посилено, провітрено, обладнано аварійним живленням, водою та місцями для людей — усе сертифіковано.' },
    progress: 100, progressLbl: { en: 'delivered', uk: 'виконано' }, amount: '€312k', completed: true,
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, <>1,840 <T en="children" uk="дітей" /></>],
      [{ en: 'Partner', uk: 'Партнер' }, 'Save the Children'],
      [{ en: 'Location', uk: 'Локація' }, '5 schools'],
      [{ en: 'Completed', uk: 'Завершено' }, 'Aug 2024'],
    ],
    cta: { en: 'View report →', uk: 'Подивитись звіт →' },
  },
  {
    status: 'in_progress', badge: 'in-progress', tint: 'tint-6',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 12l9-9 9 9M5 10v11h14V10" /><circle cx="12" cy="15" r="2" /></svg>,
    photoTag: { en: 'Primary clinic · Prybuzhany', uk: 'Амбулаторія · Прибужани' },
    badgeLabel: { en: 'In progress', uk: 'Триває' },
    cat: { en: 'Healthcare', uk: "Охорона здоров'я" },
    title: { en: 'Primary-care clinic for southern villages', uk: 'Амбулаторія первинної допомоги для південних сіл' },
    desc: { en: 'A new outpatient clinic in Prybuzhany so seven villages no longer drive 40 km for routine care.', uk: 'Нова амбулаторія в Прибужанах, щоб мешканці семи сіл не їздили по 40 км за плановою допомогою.' },
    progress: 48, progressLbl: { en: 'funded', uk: 'фінансовано' }, amount: '€156k / €326k',
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, '4,260'],
      [{ en: 'Partner', uk: 'Партнер' }, 'WHO · MoH Ukraine'],
      [{ en: 'Location', uk: 'Локація' }, 'Prybuzhany'],
      [{ en: 'Timeline', uk: 'Терміни' }, 'Jul 2025 — Jun 2026'],
    ],
    cta: { en: 'Learn more →', uk: 'Детальніше →' },
  },
  {
    status: 'planned', badge: 'planned', tint: 'tint-2',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></svg>,
    photoTag: { en: 'Solar + battery · Council building', uk: 'СЕС + АКБ · Будівля ради' },
    badgeLabel: { en: 'Planned', uk: 'Заплановано' },
    cat: { en: 'Energy', uk: 'Енергетика' },
    title: { en: 'Solar + battery backup for the community council', uk: 'Сонячна станція з акумуляторами для будівлі ради' },
    desc: { en: 'A 40 kW rooftop system and battery bank to keep essential services running through extended outages.', uk: 'Сонячна станція на 40 кВт із акумуляторами — щоб критичні служби працювали під час тривалих відключень.' },
    progress: 25, progressLbl: { en: 'committed', uk: 'зобов’язано' }, amount: '€13.5k / €54k',
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, { en: 'Whole hromada', uk: 'Уся громада' }],
      [{ en: 'Partner', uk: 'Партнер' }, 'GIZ · USAID DOBRE'],
      [{ en: 'Location', uk: 'Локація' }, 'Domanivka'],
      [{ en: 'Timeline', uk: 'Терміни' }, 'Q1 2026 — Q3 2026'],
    ],
    cta: { en: 'Learn more →', uk: 'Детальніше →' },
  },
  {
    status: 'needs_funding', badge: 'urgent', tint: 'tint-4',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 7h16M4 12h16M4 17h16" /><circle cx="8" cy="7" r="1.4" fill="currentColor" /><circle cx="14" cy="12" r="1.4" fill="currentColor" /><circle cx="11" cy="17" r="1.4" fill="currentColor" /></svg>,
    photoTag: { en: 'Road · Domanivka–Bratske 11 km', uk: 'Дорога · Доманівка-Братське 11 км' },
    badgeLabel: { en: 'Needs funding', uk: 'Потребує фінансування' },
    cat: { en: 'Roads', uk: 'Дороги' },
    title: { en: 'Road repair, Domanivka — Bratske, 11 km', uk: 'Ремонт дороги Доманівка — Братське, 11 км' },
    desc: { en: 'The primary route for school buses, ambulance services, and seasonal grain transport. Surface failure on 7 km.', uk: 'Головна дорога для шкільних автобусів, швидкої та сезонних аграрних перевезень. Зруйноване покриття на 7 км.' },
    progress: 8, progressLbl: { en: 'committed', uk: 'зобов’язано' }, amount: '€34k / €410k',
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, '6,400'],
      [{ en: 'Partner', uk: 'Партнер' }, { en: 'Co-funding open', uk: 'Спільне фінансування' }],
      [{ en: 'Location', uk: 'Локація' }, 'Domanivka — Bratske'],
      [{ en: 'Timeline', uk: 'Терміни' }, '2026 — 2027'],
    ],
    cta: { en: 'Support this project →', uk: 'Підтримати →' },
  },
  {
    status: 'completed', badge: 'completed', tint: 'tint-1',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 12c3-6 15-6 18 0M3 12c3 6 15 6 18 0" /><circle cx="12" cy="12" r="2.5" /></svg>,
    photoTag: { en: 'Streetlights · 6 villages', uk: 'Освітлення · 6 сіл' },
    badgeLabel: { en: 'Completed', uk: 'Завершено' },
    cat: { en: 'Energy', uk: 'Енергетика' },
    title: { en: 'LED streetlight modernisation, six villages', uk: 'Модернізація вуличного LED-освітлення у шести селах' },
    desc: { en: '412 streetlights replaced with LED units. Electricity bill for street lighting dropped by 58%.', uk: 'Заміна 412 ліхтарів на LED. Рахунок за вуличне освітлення зменшився на 58%.' },
    progress: 100, progressLbl: { en: 'delivered', uk: 'виконано' }, amount: '€82k', completed: true,
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, '5,200'],
      [{ en: 'Partner', uk: 'Партнер' }, 'U-LEAD · EU'],
      [{ en: 'Location', uk: 'Локація' }, '6 villages'],
      [{ en: 'Completed', uk: 'Завершено' }, 'Nov 2024'],
    ],
    cta: { en: 'View report →', uk: 'Подивитись звіт →' },
  },
  {
    status: 'completed', badge: 'completed', tint: 'tint-3',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 20h16M6 20V8l6-4 6 4v12" /><rect x="9" y="11" width="6" height="9" /></svg>,
    photoTag: { en: 'Community centre · Marianivka', uk: "Будинок культури · Мар'янівка" },
    badgeLabel: { en: 'Completed', uk: 'Завершено' },
    cat: { en: 'Culture', uk: 'Культура' },
    title: { en: 'Marianivka community centre — renovation', uk: 'Будинок культури в Мар’янівці — відновлення' },
    desc: { en: 'Roof, heating, and event hall refresh. The local choir, youth theatre, and IDP support group all use the space weekly.', uk: 'Дах, опалення та зала. Місцевий хор, молодіжний театр і клуб ВПО — користуються щотижня.' },
    progress: 100, progressLbl: { en: 'delivered', uk: 'виконано' }, amount: '€108k', completed: true,
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, '1,200'],
      [{ en: 'Partner', uk: 'Партнер' }, 'Renaissance Foundation'],
      [{ en: 'Location', uk: 'Локація' }, 'Marianivka'],
      [{ en: 'Completed', uk: 'Завершено' }, 'Jun 2024'],
    ],
    cta: { en: 'View report →', uk: 'Подивитись звіт →' },
  },
  {
    status: 'in_progress', badge: 'in-progress', tint: 'tint-6',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="3" /><path d="M5 21c0-4 3-7 7-7s7 3 7 7" /></svg>,
    photoTag: { en: 'Psycho-social support · IDPs', uk: 'Психосоціальна підтримка · ВПО' },
    badgeLabel: { en: 'In progress', uk: 'Триває' },
    cat: { en: 'Social', uk: 'Соціальне' },
    title: { en: 'Psycho-social support for displaced families and veterans', uk: 'Психосоціальна підтримка для родин ВПО та ветеранів' },
    desc: { en: 'Three counsellors, weekly group sessions, and a children’s programme — coordinated through the council.', uk: 'Троє психологів, щотижневі групи й дитяча програма — координує громадська рада.' },
    progress: 72, progressLbl: { en: 'funded', uk: 'фінансовано' }, amount: '€48k / €68k',
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, '620'],
      [{ en: 'Partner', uk: 'Партнер' }, 'People in Need'],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Hromada-wide', uk: 'Уся громада' }],
      [{ en: 'Timeline', uk: 'Терміни' }, '2024 — 2026'],
    ],
    cta: { en: 'Learn more →', uk: 'Детальніше →' },
  },
  {
    status: 'completed', badge: 'completed', tint: 'tint-5',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 21V10l8-6 8 6v11M9 21V13h6v8" /></svg>,
    photoTag: { en: '50 IDP-host families · winter kit', uk: '50 родин-приймачів ВПО · зимовий пакет' },
    badgeLabel: { en: 'Completed', uk: 'Завершено' },
    cat: { en: 'Housing', uk: 'Житло' },
    title: { en: 'Winter readiness kits for IDP-hosting families', uk: 'Зимові пакети для родин, що прийняли ВПО' },
    desc: { en: 'Insulation materials, firewood, simple boiler upgrades for fifty families across the hromada.', uk: 'Утеплювачі, дрова та прості модернізації котлів для п’ятдесяти родин по громаді.' },
    progress: 100, progressLbl: { en: 'delivered', uk: 'виконано' }, amount: '€46k', completed: true,
    facts: [
      [{ en: 'Beneficiaries', uk: 'Отримувачі' }, <>50 <T en="families" uk="родин" /></>],
      [{ en: 'Partner', uk: 'Партнер' }, 'Caritas Ukraine'],
      [{ en: 'Location', uk: 'Локація' }, { en: 'Hromada-wide', uk: 'Уся громада' }],
      [{ en: 'Completed', uk: 'Завершено' }, 'Feb 2024'],
    ],
    cta: { en: 'View report →', uk: 'Подивитись звіт →' },
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
        title={{ en: 'Forty-eight projects, one community ledger.', uk: 'Сорок вісім проєктів — один прозорий реєстр громади.' }}
        lede={{
          en: 'Every project the hromada has implemented since 2022, every project we are running today, and every project we have planned. Funded, partially funded, and looking for partners — all visible.',
          uk: 'Усі проєкти, які громада реалізувала з 2022 року, усі проєкти, що тривають, і всі заплановані. Профінансовані, частково профінансовані та такі, що шукають партнерів — все відкрито.',
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
            {visible.map((p, i) => (
              <article key={i} className="proj-card">
                <div className={`photo ${p.tint} proj-photo`}>
                  <div className="ph-center">{p.icon}</div>
                  <div className="photo-label"><span className="tag">{tr(p.photoTag)}</span></div>
                </div>
                <div className="proj-meta-top">
                  <span className={`badge ${p.badge}`}>{tr(p.badgeLabel)}</span>
                  <span className="proj-cat">{tr(p.cat)}</span>
                </div>
                <h3>{tr(p.title)}</h3>
                <p>{tr(p.desc)}</p>
                <div className={`progress${p.completed ? ' completed' : ''}`}>
                  <span style={{ width: `${p.progress}%` }} />
                </div>
                <div className="progress-row">
                  <span><strong>{p.progress}%</strong> {tr(p.progressLbl)}</span>
                  <span>{p.amount}</span>
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
            ))}
          </div>

          <div className="load-more">
            <button type="button" className="btn btn-secondary">
              <T en="Load more projects" uk="Більше проєктів" />
              <svg className="arrow" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.6"><path d="M7 2v10M3 8l4 4 4-4" /></svg>
            </button>
            <span className="muted small">
              <T en={`Showing ${visible.length} of 48 projects`} uk={`Показано ${visible.length} з 48 проєктів`} />
            </span>
          </div>
        </div>
      </section>
    </>
  );
}
