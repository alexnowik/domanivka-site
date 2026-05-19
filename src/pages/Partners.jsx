import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const TOTALS = [
  { num: '23', en: 'Active partners and donors', uk: 'Активних партнерів та донорів' },
  { num: '11', en: 'Countries represented', uk: 'Країн представлено' },
  { num: '48', en: 'Joint projects since 2022', uk: 'Спільних проєктів з 2022 року' },
  { num: '€ 4.8M', en: 'Combined partner contribution', uk: 'Сукупний внесок партнерів', highlight: true },
];

const WALL = [
  { name: 'UNDP' },
  { name: 'UNICEF' },
  { name: 'UNHCR' },
  { name: 'WHO' },
  { name: 'USAID' },
  { name: 'USAID DOBRE' },
  { name: 'GIZ' },
  { name: 'KfW' },
  { name: 'SIDA' },
  { name: 'U-LEAD', en: 'with Europe', uk: 'з Європою' },
  { name: 'DRC', en: 'Danish Refugee Council', uk: 'Данська рада у справах біженців' },
  { name: 'NRC', en: 'Norwegian Refugee Council', uk: 'Норвезька рада біженців' },
  { name: 'PIN', en: 'People in Need', uk: 'Людина в біді' },
  { name: 'Caritas', en: 'Ukraine', uk: 'Ukraine' },
  { name: 'Save the Children' },
  { name: 'CARE' },
  { name: 'Plan Int’l' },
  { name: 'Renaissance', en: 'Foundation', uk: 'Фонд' },
  { name: 'Mykolaiv RMA' },
  { name: 'Ukravtodor' },
  { name: 'UVCF', en: 'Veterans Fund', uk: 'Фонд ветеранів' },
  { name: 'Domanivka', en: 'Diaspora circle', uk: 'Коло діаспори' },
  { name: 'Lyon Sud', en: 'Sister community', uk: 'Громада-побратим' },
];

const STORIES = [
  {
    tint: 'tint-2',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 21V10l8-6 8 6v11M9 21v-7h6v7" /></svg>,
    tag: { en: 'UNICEF · School No. 2', uk: 'UNICEF · Школа №2' },
    name: 'UNICEF',
    year: '2022',
    quote: { en: '“The children stayed. The school had to be ready for them.”',
             uk: '«Діти лишилися. Школа мала бути готова для них.»' },
    text: { en: 'UNICEF has supported three school renovations in Domanivka, certified the bomb shelters in five buildings, and is currently co-funding the restoration of School No. 2. Their team visits quarterly, and reports are published on both sides.',
            uk: 'UNICEF підтримав три ремонти шкіл у Доманівці, сертифікував укриття у п’яти будівлях і зараз співфінансує відбудову школи №2. Команда відвідує щокварталу, звіти публікуються з обох боків.' },
    stats: [
      [{ en: 'Total contribution', uk: 'Загальний внесок' }, '€ 612,000'],
      [{ en: 'Projects delivered', uk: 'Реалізованих проєктів' }, '4'],
      [{ en: 'Children directly served', uk: 'Дітей під прямим впливом' }, '2,840'],
    ],
  },
  {
    tint: 'tint-4',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="12" r="5" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3M5 5l2 2M17 17l2 2M5 19l2-2M17 7l2-2" /></svg>,
    tag: { en: 'GIZ · Energy efficiency', uk: 'GIZ · Енергоефективність' },
    name: 'GIZ',
    year: '2023',
    quote: { en: '“A retrofitted kindergarten uses half the energy. That changes a winter.”',
             uk: '«Модернізований дитсадок споживає вдвічі менше. Це змінює зиму.»' },
    text: { en: 'GIZ funded the full thermal renovation of the ‘Sonechko’ kindergarten and the LED streetlight programme across six villages. Their engineers ran two community workshops on energy planning that local staff still reference today.',
            uk: 'GIZ профінансував комплексну термомодернізацію садка «Сонечко» та програму LED-освітлення у шести селах. Їхні інженери провели два воркшопи з енергопланування, які наша команда досі використовує.' },
    stats: [
      [{ en: 'Total contribution', uk: 'Загальний внесок' }, '€ 482,000'],
      [{ en: 'Projects delivered', uk: 'Реалізованих проєктів' }, '3'],
      [{ en: 'Energy cost avoided / yr', uk: 'Заощадженої енергії / рік' }, '€ 78,000'],
    ],
  },
  {
    tint: 'tint-3',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><circle cx="12" cy="8" r="3" /><path d="M5 21c0-4 3-7 7-7s7 3 7 7" /><path d="M2 4h6M2 4l3-3M2 4l3 3" /></svg>,
    tag: { en: 'Lyon Sud · Sister community', uk: 'Ліон Південь · Громада-побратим' },
    name: 'Lyon Sud',
    year: '2023',
    quote: { en: '“A municipality-to-municipality partnership — for the long term.”',
             uk: '«Партнерство громада-громаді — на довгу перспективу.»' },
    text: { en: 'The municipality of Lyon Sud (France) was Domanivka’s first formal sister community. They send technical staff for one-week exchanges twice a year, organise diaspora fundraising, and host council delegations.',
            uk: 'Громада Ліон Південь (Франція) — наша перша офіційна громада-побратим. Двічі на рік приймають і відправляють спеціалістів на тижневі обміни, координують збори діаспори, приймають делегації нашої ради.' },
    stats: [
      [{ en: 'Total contribution', uk: 'Загальний внесок' }, '€ 184,000'],
      [{ en: 'Joint exchanges', uk: 'Спільних обмінів' }, '6'],
      [{ en: 'Diaspora-raised support', uk: 'Зібрано діаспорою' }, '€ 64,000'],
    ],
  },
];

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M6 2h9l5 5v15H6z" /><path d="M15 2v5h5" /><path d="M9 13h6M9 17h6" />
  </svg>
);

const DOCS = [
  { tag: { en: 'Audit · 2024', uk: 'Аудит · 2024' }, size: 'PDF · 2.8 MB',
    title: { en: 'Annual financial audit, 2024', uk: 'Річний фінансовий аудит, 2024' } },
  { tag: { en: 'Report · 2024', uk: 'Звіт · 2024' }, size: 'PDF · 4.2 MB',
    title: { en: 'Partner contributions report, 2024', uk: 'Звіт про внески партнерів, 2024' } },
  { tag: { en: 'Brief · 2026', uk: 'Бриф · 2026' }, size: 'PDF · 6.8 MB',
    title: { en: 'Open needs brief, winter 2025/26', uk: 'Бриф відкритих потреб, зима 2025/26' } },
  { tag: { en: 'Strategy', uk: 'Стратегія' }, size: 'PDF · 12.4 MB',
    title: { en: 'Development strategy 2026–2030', uk: 'Стратегія розвитку 2026–2030' } },
];

export default function Partners() {
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
        crumb={{ en: 'Partners & gratitude', uk: 'Партнери та вдячність' }}
        title={{ en: 'Thank you — to every partner who chose Domanivka.', uk: 'Дякуємо — кожному, хто обрав Доманівку.' }}
        lede={{
          en: 'Every partner who works with the community helps turn plans into real changes for families, children, and local residents. We name every partner and document every project — because trust is built on honest accounting.',
          uk: 'Кожен партнер, який працює з громадою, перетворює плани на реальні зміни для родин, дітей і мешканців. Ми називаємо кожного партнера і документуємо кожен проєкт — бо довіра будується на чесному обліку.',
        }}
      />

      <section className="section-tight" style={{ paddingTop: 24, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="totals-bar cols-4">
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
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="All our partners" uk="Усі наші партнери" />
              <T as="h2" en="Twenty-three names, each one matters." uk="Двадцять три імені — кожне важливе." />
            </div>
            <T
              as="div"
              className="right"
              en="Multilateral institutions, bilateral agencies, humanitarian foundations, civil-society organisations, and private benefactors. Listed in the order they began working with Domanivka."
              uk="Міжнародні інституції, двосторонні агенції, гуманітарні фонди, громадянські організації, приватні меценати. У порядку, в якому почали співпрацю з Доманівкою."
            />
          </div>

          <div className="wall">
            {WALL.map((w, i) => (
              <div key={i} className="wall-cell">
                {w.name}
                {(w.en || w.uk) && <small>{lang === 'uk' ? w.uk : w.en}</small>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="Partner stories" uk="Історії партнерств" />
              <T as="h2" en="Three partnerships, in detail." uk="Три партнерства — детально." />
            </div>
            <T
              as="div"
              className="right"
              en="A snapshot of how three of our partnerships actually work — how they started, what they delivered, and what they mean for everyday life in the community."
              uk="Як насправді працюють три з наших партнерств — як вони почалися, що дали і що змінили у щоденному житті громади."
            />
          </div>

          <div className="stories">
            {STORIES.map((s, i) => (
              <article key={i} className={`story${i % 2 === 1 ? ' reverse' : ''}`}>
                <div className={`story-photo photo ${s.tint}`}>
                  <div className="ph-center">{s.icon}</div>
                  <div className="photo-label">
                    <span className="tag">{tr(s.tag)}</span>
                  </div>
                </div>
                <div className="story-text">
                  <div className="story-meta">
                    <span className="s-name">{s.name}</span>
                    <T as="span" className="s-since" en="With Domanivka since" uk="Працює з Доманівкою з" />
                    <span className="s-year">{s.year}</span>
                  </div>
                  <h3>{tr(s.quote)}</h3>
                  <p>{tr(s.text)}</p>
                  <ul className="story-list">
                    {s.stats.map(([lbl, val], j) => (
                      <li key={j}><span>{tr(lbl)}</span><strong>{val}</strong></li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ padding: '96px 0' }}>
        <div className="wrap wrap-r" style={{ maxWidth: 900 }}>
          <figure className="quote-block">
            <div className="quote-mark">“</div>
            <T
              as="blockquote"
              en="When the new heating system was installed in our kindergarten, the children noticed it before the staff did. By the end of the first week one of them said the room finally smelled like home — and that is what every partner here helps us bring back, one project at a time."
              uk="Коли в нашому садку встановили нову систему опалення, діти помітили це раніше за дорослих. Наприкінці першого тижня одна дитина сказала, що в групі нарешті пахне домом — і саме це нам повертають партнери, проєкт за проєктом."
            />
            <figcaption>
              <div className="qf-name">Iryna Boyko</div>
              <T as="div" className="qf-role" en="Director, Kindergarten ‘Sonechko’" uk="Директорка дитсадка «Сонечко»" />
            </figcaption>
          </figure>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="Transparency" uk="Прозорість" />
              <T as="h2" en="How we report to our partners." uk="Як ми звітуємо партнерам." />
            </div>
            <T
              as="div"
              className="right"
              en="Every partner project comes with a public budget line, a project narrative, a delivery timeline, and a closing report. Documents below are samples — current reports are available on request."
              uk="Кожен партнерський проєкт супроводжується публічною бюджетною лінією, описом, графіком реалізації та підсумковим звітом. Документи нижче — приклади; чинні звіти надаємо за запитом."
            />
          </div>

          <div className="docs">
            {DOCS.map((d, i) => (
              <a key={i} className="doc" href="#">
                <div className="doc-icon"><DocIcon /></div>
                <div className="doc-meta">
                  <span>{tr(d.tag)}</span>
                  <span>{d.size}</span>
                </div>
                <h4>{tr(d.title)}</h4>
                <span className="doc-link"><T en="Download →" uk="Завантажити →" /></span>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <T as="div" className="eyebrow on-dark" en="Become a partner" uk="Стати партнером" />
            <T as="h2" className="cta-h"
               en="If your organisation wants to be part of what comes next — we will respond within 48 hours."
               uk="Якщо ваша організація хоче бути частиною того, що далі — відповімо протягом 48 годин." />
            <T as="p" className="cta-sub"
               en="We will send you a community brief, a current project list, our finance reports, and a proposed meeting agenda. No template responses — every partnership starts with a real conversation."
               uk="Надішлемо бриф громади, актуальний перелік проєктів, фінансові звіти і пропозицію щодо порядку зустрічі. Без шаблонних відповідей — кожне партнерство починається з реальної розмови." />
            <div className="row" style={{ gap: 12, marginTop: 24 }}>
              <Link to="/contacts" className="btn btn-primary on-dark">
                <T en="Start a partnership conversation" uk="Почати розмову про партнерство" />
                <ArrowIcon />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
