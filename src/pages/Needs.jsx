import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const SUMMARY = [
  { num: '100', en: 'Residents surveyed', uk: 'Опитаних мешканців' },
  { num: '11', en: 'Businesses surveyed', uk: 'Опитаних представників бізнесу' },
  { num: '23', en: 'Local programmes listed', uk: 'Діючі програми громади' },
  { num: '14', en: 'Programmes without funding yet', uk: 'Програм ще без фінансування' },
];

const PRIORITIES = [
  {
    cat: 'critical',
    catName: { en: 'Critical infrastructure', uk: 'Критична інфраструктура' },
    catColor: 'var(--terracotta)',
    catShadow: 'rgba(220,90,48,0.18)',
    items: [
      {
        id: 'P-01',
        badge: 'urgent',
        badgeLabel: { en: 'Documented project', uk: 'Є документація' },
        title: { en: 'Water supply and sewage renewal', uk: 'Водопостачання та оновлення каналізації' },
        desc: {
          en: 'The profile records a water shortage in villages, low water quality, scheduled supply in some places, and trucked water for Zabary and Olexandrivka. Documentation is ready for a 6,709 m water main from Zbroshkove to Domanivka, a new well in Tsaredarivka, and sewage/stormwater reconstruction in Domanivka.',
          uk: 'Профіль фіксує дефіцит води в селах, низьку якість води, подачу за графіком і підвіз води для Забарів та Олександрівки. Є документація на водогін 6 709 м із Зброшкового до Доманівки, свердловину в Царедарівці та реконструкцію каналізації й зливової мережі в Доманівці.',
        },
        facts: [
          [{ en: 'Water network', uk: 'Мережа водопостачання' }, '116.1 km'],
          [{ en: 'Sewerage', uk: 'Водовідведення' }, '10.1 km'],
          [{ en: 'Active boreholes', uk: 'Задіяні свердловини' }, '13'],
          [{ en: 'Domanivske utility subscribers', uk: 'Абонентів КП «Доманівське»' }, '3,330'],
        ],
      },
      {
        id: 'P-02',
        badge: 'urgent',
        badgeLabel: { en: 'Top resident priority', uk: 'Топ-пріоритет мешканців' },
        title: { en: 'Road recovery and transport access', uk: 'Відновлення доріг і транспортна доступність' },
        desc: {
          en: 'Municipal roads connect all 31 settlements, but the profile estimates 100% of them as emergency condition. Residents named road repair as the most important development need, and businesses named road condition as their main barrier.',
          uk: 'Комунальні дороги з’єднують 31 населений пункт, але профіль оцінює 100% їх протяжності як аварійні. Мешканці назвали ремонт доріг найважливішим для розвитку, а бізнес — головною перешкодою для роботи.',
        },
        facts: [
          [{ en: 'Municipal roads', uk: 'Комунальні дороги' }, '292.7 km'],
          [{ en: 'Bridges', uk: 'Мости' }, '17'],
          [{ en: 'Regional road R-75', uk: 'Регіональна дорога Р-75' }, '42 km · 2/5'],
          [{ en: 'Roads named by residents', uk: 'Мешканці за ремонт доріг' }, '73%'],
        ],
      },
      {
        id: 'P-03',
        badge: 'in-progress',
        badgeLabel: { en: 'Programme 2023-2025', uk: 'Програма 2023-2025' },
        title: { en: 'Waste management and clean settlements', uk: 'Поводження з відходами та чисті населені пункти' },
        desc: {
          en: 'The waste programme is aimed at reducing accumulation, reusing resources and building a comprehensive solid-waste management system with more recovery of secondary raw materials.',
          uk: 'Програма поводження з відходами спрямована на зменшення накопичення сміття, повторне використання ресурсів і створення комплексної системи управління ТПВ з вилученням вторинної сировини.',
        },
        facts: [
          [{ en: 'Private housing waste', uk: 'Відходи приватної забудови' }, '57%'],
          [{ en: 'Apartment blocks', uk: 'Багатоповерхова забудова' }, '32%'],
          [{ en: 'Business and other sources', uk: 'Бізнес та інші джерела' }, '11%'],
          [{ en: 'Residents who prioritise waste', uk: 'Мешканці за покращення ТПВ' }, '45%'],
        ],
      },
    ],
  },
  {
    cat: 'services',
    catName: { en: 'Public services', uk: 'Публічні послуги' },
    catColor: 'var(--muted-blue)',
    catShadow: 'rgba(74,138,170,0.18)',
    items: [
      {
        id: 'P-04',
        badge: 'planned',
        badgeLabel: { en: 'Education network', uk: 'Освітня мережа' },
        title: { en: 'Education, inclusion and youth services', uk: 'Освіта, інклюзія та послуги для дітей' },
        desc: {
          en: 'The school network remains stable, but the number of children has declined. The 2025 planned budget gives education the largest share, while inclusion already operates in preschool and school classes.',
          uk: 'Освітня мережа залишається стабільною, але кількість дітей зменшується. У бюджеті 2025 року освіта має найбільшу частку, а інклюзивне навчання вже організоване у дошкіллі та школах.',
        },
        facts: [
          [{ en: 'Schools', uk: 'Закладів ЗЗСО' }, '5'],
          [{ en: 'Kindergartens', uk: 'Закладів дошкілля' }, '8 + 1'],
          [{ en: 'Pupils in 2024-2025', uk: 'Учнів у 2024-2025 н.р.' }, '1,345'],
          [{ en: 'Education budget share 2025', uk: 'Частка освіти у бюджеті 2025' }, '57.38%'],
        ],
      },
      {
        id: 'P-05',
        badge: 'in-progress',
        badgeLabel: { en: 'Health and social care', uk: 'Медицина і соцзахист' },
        title: { en: 'Healthcare, IDP support and social services', uk: 'Медицина, підтримка ВПО та соціальні послуги' },
        desc: {
          en: 'Domanivka hospital and primary care serve the community and patients from nearby areas. The profile also names social institutions working with vulnerable groups, children with disabilities, IDPs and elderly people.',
          uk: 'Доманівська лікарня та первинна медицина обслуговують громаду й пацієнтів з інших територій. Профіль також називає соціальні установи для вразливих груп, дітей з інвалідністю, ВПО та людей похилого віку.',
        },
        facts: [
          [{ en: 'People attached to primary care', uk: 'Прикріплено до первинної медицини' }, '15,978'],
          [{ en: 'Registered IDPs in 2024', uk: 'Зареєстровано ВПО у 2024' }, '1,238'],
          [{ en: 'IDPs staying in the community', uk: 'ВПО перебувають у громаді' }, '1,093'],
          [{ en: 'Social-service workers', uk: 'Працівників соцпослуг' }, '48'],
        ],
      },
      {
        id: 'P-06',
        badge: 'planned',
        badgeLabel: { en: 'Repair needs', uk: 'Потреби в ремонтах' },
        title: { en: 'Culture, libraries and sport facilities', uk: 'Культура, бібліотеки та спортивні простори' },
        desc: {
          en: 'Culture and sport remain active during wartime, but libraries and the music school need basic repairs. The profile records cosmetic repairs, windows, floors, ceilings and facade restoration as current facility needs.',
          uk: 'Культура і спорт працюють навіть під час війни, але бібліотеки та музична школа потребують базових ремонтів. У профілі зафіксовані косметичні ремонти, вікна, підлоги, стелі та відновлення фасаду.',
        },
        facts: [
          [{ en: 'Culture house branches', uk: 'Філій будинку культури' }, '12'],
          [{ en: 'Library branches', uk: 'Філій бібліотеки' }, '10'],
          [{ en: 'Children in sports school', uk: 'Дітей у ДЮСШ' }, '226'],
          [{ en: 'Sports grounds', uk: 'Спортивних майданчиків' }, '24'],
        ],
      },
    ],
  },
  {
    cat: 'economy',
    catName: { en: 'Economy and investment', uk: 'Економіка та інвестиції' },
    catColor: 'var(--olive)',
    catShadow: 'rgba(125,166,46,0.18)',
    items: [
      {
        id: 'P-07',
        badge: 'planned',
        badgeLabel: { en: 'Agrarian base', uk: 'Аграрна база' },
        title: { en: 'Agriculture, processing and local jobs', uk: 'Аграрне виробництво, переробка та робочі місця' },
        desc: {
          en: 'The economy is based on grain and oilseed crops, with weak processing capacity. The profile names processing, services, energy crops, berries, medicinal herbs, rosehip and walnuts as possible growth directions.',
          uk: 'Економіка базується на зернових та олійних культурах, а переробка розвинена слабко. Профіль називає перспективами переробку, послуги, енергетичні культури, ягоди, лікарські трави, шипшину та горіхи.',
        },
        facts: [
          [{ en: 'Agricultural land', uk: 'С/г землі' }, '65,143 ha'],
          [{ en: 'Arable land', uk: 'Рілля' }, '53,954 ha'],
          [{ en: 'Active FOPs in 2025', uk: 'Діючих ФОП у 2025' }, '335'],
          [{ en: 'Farms', uk: 'Фермерських господарств' }, '110'],
        ],
      },
      {
        id: 'P-08',
        badge: 'in-progress',
        badgeLabel: { en: 'Partner projects', uk: 'Партнерські проєкти' },
        title: { en: 'Energy resilience and investment sites', uk: 'Енергостійкість та інвестиційні ділянки' },
        desc: {
          en: 'The profile records 19 greenhouses, a 30 kW solar installation at the greenhouse project, nine solar plants with 8.8 MW total capacity, a GIZ-supported hospital solar system and a municipal pellet company.',
          uk: 'У профілі зафіксовано 19 теплиць, СЕС 30 кВт у тепличному проєкті, дев’ять сонячних станцій сумарною потужністю 8,8 МВт, лікарняну СЕС за підтримки GIZ та комунальне підприємство з виробництва палетів.',
        },
        facts: [
          [{ en: 'Greenhouses', uk: 'Теплиць' }, '19'],
          [{ en: 'Solar plants', uk: 'Сонячних електростанцій' }, '9 · 8.8 MW'],
          [{ en: 'Hospital renovation by GIZ', uk: 'Ремонт лікарні за підтримки GIZ' }, '6.5 млн грн'],
          [{ en: 'Free municipal investment sites', uk: 'Вільні інвестділянки громади' }, '4'],
        ],
      },
    ],
  },
];

const SURVEY = [
  {
    num: '73%',
    title: { en: 'Residents: road repair is the key development need', uk: 'Мешканці: ремонт доріг — головна потреба розвитку' },
    desc: { en: 'Roads were followed by waste management (45%) and utility modernisation (41%).', uk: 'Далі мешканці назвали управління відходами (45%) та модернізацію ЖКГ (41%).' },
  },
  {
    num: '67%',
    title: { en: 'Residents: transport and road condition blocks development', uk: 'Мешканці: транспортно-дорожній стан стримує розвиток' },
    desc: { en: 'The second largest barrier was lack of jobs and business closures (63%).', uk: 'Друга за частотою перешкода — нестача роботи та закриття підприємств (63%).' },
  },
  {
    num: '63.6%',
    title: { en: 'Business: poor roads are the main barrier', uk: 'Бізнес: погані дороги — головна перешкода' },
    desc: { en: 'Low purchasing power was named by 45.5% of surveyed businesses.', uk: 'Низький платоспроможний попит назвали 45,5% опитаних підприємців.' },
  },
  {
    num: '54.5%',
    title: { en: 'Business wants preferential loans and grants', uk: 'Бізнес очікує пільгові кредити та гранти' },
    desc: { en: 'Both preferential credit and grant/voucher support were selected by 54.5% of businesses.', uk: 'Пільгові кредити та грантову/ваучерну підтримку обрали по 54,5% бізнесів.' },
  },
];

export default function Needs() {
  const { lang } = useLang();
  const tr = (val) => {
    if (val == null) return val;
    if (typeof val === 'string' || typeof val === 'number') return val;
    if (val.en !== undefined || val.uk !== undefined) return lang === 'uk' ? val.uk : val.en;
    return val;
  };

  return (
    <>
      <PageIntro
        crumb={{ en: 'Priorities', uk: 'Пріоритети' }}
        title={{ en: 'What the Community Profile says needs attention.', uk: 'Що, за Профілем громади, потребує уваги.' }}
        lede={{
          en: 'This page replaces the illustrative wish-list with priorities taken from the Community Profile, 2024: infrastructure gaps, service needs, economic constraints and survey results from residents and local businesses.',
          uk: 'Ця сторінка замінює ілюстративний список потреб на пріоритети з Профілю громади 2024 року: інфраструктурні розриви, потреби послуг, економічні обмеження та результати опитувань мешканців і бізнесу.',
        }}
      />

      <section className="section-tight" style={{ paddingTop: 24, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="needs-summary">
            {SUMMARY.map((s) => (
              <div key={s.num} className="ns-item">
                <div className="ns-num">{s.num}</div>
                <div className="ns-lbl">{tr(s)}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingBottom: 0 }}>
        <div className="wrap">
          <div className="how-grid">
            <div className="how-side">
              <T as="div" className="eyebrow accent-terra" en="Source-based" uk="За джерелом" />
              <T as="h2" en="Not a donation catalogue. A structured profile." uk="Не каталог донатів, а структурований профіль." />
            </div>
            <div className="how-text">
              <T
                as="p"
                en="The document does not give a ready-made budget for every need. It gives verified context: networks, facilities, programmes, survey priorities and development constraints. The site now presents those facts honestly, without invented amounts or contact people."
                uk="Документ не дає готовий бюджет для кожної потреби. Він дає перевірений контекст: мережі, заклади, програми, пріоритети опитувань і обмеження розвитку. Сайт тепер показує ці факти чесно — без вигаданих сум і контактних осіб."
              />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="priorities-list">
        <div className="wrap">
          {PRIORITIES.map((group, idx) => (
            <div key={group.cat}>
              <div className="cat-head" style={idx > 0 ? { marginTop: 96 } : undefined}>
                <div className="cat-meta">
                  <span className="dot" style={{ background: group.catColor, boxShadow: `0 0 0 4px ${group.catShadow}` }} />
                  <span className="cat-name">{tr(group.catName)}</span>
                </div>
                <span className="cat-count">{group.items.length}</span>
              </div>

              <div className="needs-grid">
                {group.items.map((item) => (
                  <article key={item.id} className="need-card">
                    <div className="need-top">
                      <span className="need-num">{item.id}</span>
                      <span className={`badge ${item.badge}`}>{tr(item.badgeLabel)}</span>
                    </div>
                    <h3>{tr(item.title)}</h3>
                    <p className="need-desc">{tr(item.desc)}</p>
                    <dl className="need-facts">
                      {item.facts.map(([label, value], index) => (
                        <div key={index}>
                          <dt>{tr(label)}</dt>
                          <dd>{tr(value)}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link className="need-cta btn btn-primary btn-sm" to="/contacts">
                      <T en="Discuss this priority" uk="Обговорити пріоритет" />
                      <ArrowIcon />
                    </Link>
                  </article>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="section help-band">
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="Survey signal" uk="Сигнал опитувань" />
              <T as="h2" en="What residents and businesses said." uk="Що сказали мешканці та бізнес." />
            </div>
            <T
              as="div"
              className="right"
              en="The Community Profile includes a resident survey and a business survey. Their answers explain why the priorities above are not abstract: roads, jobs, waste and utilities show up repeatedly."
              uk="Профіль містить опитування мешканців і бізнесу. Їхні відповіді пояснюють, чому пріоритети вище не абстрактні: дороги, робота, відходи та ЖКГ повторюються в різних відповідях."
            />
          </div>

          <div className="help-grid">
            {SURVEY.map((item) => (
              <div key={item.num} className="help-card">
                <div className="hc-num">{item.num}</div>
                <h4>{tr(item.title)}</h4>
                <p>{tr(item.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <T as="div" className="eyebrow on-dark" en="Work from the profile" uk="Працювати від профілю" />
            <T
              as="h2"
              className="cta-h"
              en="If a priority matches your programme, start with the profile and current project documents."
              uk="Якщо пріоритет збігається з вашою програмою, почнімо з профілю та актуальних проєктних документів."
            />
            <T
              as="p"
              className="cta-sub"
              en="The next useful step is not a generic appeal, but a focused conversation: scope, existing documentation, budget status, partner role and reporting."
              uk="Наступний корисний крок — не загальний заклик, а предметна розмова: обсяг робіт, наявна документація, стан бюджету, роль партнера та звітність."
            />
            <div className="row" style={{ gap: 12, marginTop: 24 }}>
              <Link to="/contacts" className="btn btn-primary on-dark">
                <T en="Contact the council" uk="Зв’язатися з радою" />
                <ArrowIcon />
              </Link>
              <Link to="/partners#documents" className="btn btn-secondary on-dark">
                <T en="See source documents" uk="Переглянути документи" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
