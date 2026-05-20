import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const TOTALS = [
  { num: 'EU + GIZ', en: 'Flagship “Strong Regions” programme', uk: 'Флагман — програма «Міцні регіони»' },
  { num: '₴6.5M', en: 'Hospital renovation (EU / GIZ)', uk: 'Ремонт лікарні (ЄС / GIZ)' },
  { num: '~50%', en: 'Hospital electricity from solar (GIZ)', uk: 'Електрики лікарні від СЕС (GIZ)' },
  { num: '2018–2026', en: 'Development Strategy (USAID DOBRE)', uk: 'Стратегія розвитку (USAID DOBRE)', highlight: true },
];

const WALL = [
  { name: 'European Union', en: 'Strong Regions programme', uk: 'Програма «Міцні регіони»' },
  { name: 'GIZ', en: 'Germany · Hospital & energy efficiency', uk: 'Німеччина · Лікарня та енергоефективність' },
  { name: 'BMZ', en: 'Germany · Programme co-funder', uk: 'Німеччина · Співфінансування програми' },
  { name: 'USAID DOBRE', en: 'Decentralisation & strategy', uk: 'Децентралізація і стратегія' },
  { name: 'Danish Embassy', en: 'Denmark · Energy independence, IDP housing', uk: 'Данія · Енергонезалежність, житло ВПО' },
  { name: 'NEFCO', en: 'Denmark · Infrastructure & clean water', uk: 'Данія · Інфраструктура та чиста вода' },
  { name: 'IOM', en: 'IDP support & humanitarian', uk: 'Підтримка ВПО та гуманітарна допомога' },
  { name: 'UNOPS', en: 'Infrastructure & procurement', uk: 'Інфраструктура та закупівлі' },
  { name: 'FRMD', en: 'Foundation for Local Democracy Development', uk: 'Фонд розвитку місцевої демократії' },
  { name: 'Rural Women’s Business Network', en: 'Greenhouse & food-security project', uk: 'Тепличний проєкт і продбезпека' },
];

const STORIES = [
  {
    tint: 'tint-2',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><rect x="3" y="6" width="18" height="14" rx="1" /><path d="M12 10v6M9 13h6" /></svg>,
    tag: { en: 'EU + GIZ · Hospital', uk: 'ЄС + GIZ · Лікарня' },
    name: 'EU + GIZ',
    year: { en: 'Strong Regions', uk: 'Міцні регіони' },
    quote: {
      en: '“A warm, lit hospital that keeps working when the grid goes down.”',
      uk: '«Тепла, освітлена лікарня, що працює навіть коли немає світла.»',
    },
    text: {
      en: 'Under the EU “Strong Regions” programme — co-funded by Germany’s BMZ and implemented by GIZ — the Domanivka hospital received a capital renovation worth ₴6.5M (new roof and windows) and a solar power station that covers about half of its electricity needs.',
      uk: 'У межах програми ЄС «Міцні регіони» — за співфінансування BMZ (Німеччина) та впровадження GIZ — Доманівська лікарня отримала капітальний ремонт на 6,5 млн ₴ (новий дах і вікна) та сонячну станцію, що покриває близько половини її потреб в електроенергії.',
    },
    stats: [
      [{ en: 'Renovation value', uk: 'Вартість ремонту' }, '₴ 6.5M'],
      [{ en: 'Hospital electricity from solar', uk: 'Електрики від СЕС' }, '~50%'],
      [{ en: 'Implementer', uk: 'Виконавець' }, 'GIZ'],
    ],
  },
  {
    tint: 'tint-4',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M4 21V10l8-6 8 6v11M9 21v-7h6v7" /></svg>,
    tag: { en: 'USAID DOBRE · Strategy', uk: 'USAID DOBRE · Стратегія' },
    name: 'USAID DOBRE',
    year: '2018',
    quote: {
      en: '“A plan the community wrote for itself — and still follows.”',
      uk: '«План, який громада написала для себе — і досі ним керується.»',
    },
    text: {
      en: 'Through the USAID DOBRE programme (“Decentralisation Offering Better Results and Efficiency”), and with the Foundation for Local Democracy Development, the community drafted its Sustainable Development Strategy for 2018–2026 — the backbone of the priorities you see on this site today.',
      uk: 'За програмою USAID DOBRE («Підвищення ефективності роботи і підзвітності органів місцевого самоврядування») та за участі Фонду розвитку місцевої демократії громада розробила Стратегію сталого розвитку на 2018–2026 роки — основу пріоритетів, які ви бачите на цьому сайті.',
    },
    stats: [
      [{ en: 'Strategy period', uk: 'Період стратегії' }, '2018–2026'],
      [{ en: 'Drafted with', uk: 'Розроблено з' }, 'FRMD'],
      [{ en: 'Focus', uk: 'Фокус' }, { en: 'Decentralisation', uk: 'Децентралізація' }],
    ],
  },
  {
    tint: 'tint-3',
    icon: <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.2"><path d="M3 21V10l9-6 9 6v11M3 10h18M12 4v17" /></svg>,
    tag: { en: 'Rural Women’s Network · Greenhouses', uk: 'Бізнес-мережа сільських жінок · Теплиці' },
    name: { en: 'Rural Women’s Business Network', uk: 'Бізнес-мережа сільських жінок' },
    year: '2024',
    quote: {
      en: '“Local vegetables, local jobs — grown under glass and sun.”',
      uk: '«Місцеві овочі, місцеві робочі місця — під склом і сонцем.»',
    },
    text: {
      en: 'The NGO “Rural Women’s Business Network” supports the community’s greenhouse-vegetable project. In 2024, with grant funding, 14 greenhouses were added together with solar panels — a practical step toward food security and rural employment.',
      uk: 'ГО «Бізнес-мережа сільських жінок» підтримує тепличний овочевий проєкт громади. У 2024 році за грантові кошти додано 14 теплиць разом із сонячними панелями — практичний крок до продовольчої безпеки та сільської зайнятості.',
    },
    stats: [
      [{ en: 'Greenhouses added (2024)', uk: 'Додано теплиць (2024)' }, '14'],
      [{ en: 'Funding', uk: 'Фінансування' }, { en: 'Grant', uk: 'Грант' }],
      [{ en: 'Plus', uk: 'Додатково' }, { en: 'Solar panels', uk: 'Сонячні панелі' }],
    ],
  },
];

const DocIcon = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.4">
    <path d="M6 2h9l5 5v15H6z" /><path d="M15 2v5h5" /><path d="M9 13h6M9 17h6" />
  </svg>
);

const DOCS = [
  { tag: { en: 'Profile · 2024', uk: 'Профіль · 2024' }, size: 'PDF',
    title: { en: 'Community Profile, 2024', uk: 'Профіль громади, 2024' } },
  { tag: { en: 'Strategy', uk: 'Стратегія' }, size: 'PDF',
    title: { en: 'Development Strategy through 2027', uk: 'Стратегія розвитку до 2027 року' } },
  { tag: { en: 'Strategy · 2018', uk: 'Стратегія · 2018' }, size: 'PDF',
    title: { en: 'Sustainable Development Strategy 2018–2026', uk: 'Стратегія сталого розвитку 2018–2026' } },
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
          en: 'Every partner named here is on the public record — drawn from the Community Profile and our development strategies. We name each partner and document each project, because trust is built on honest accounting.',
          uk: 'Кожного партнера тут названо за документами — Профілем громади та стратегіями розвитку. Ми називаємо кожного партнера і документуємо кожен проєкт, бо довіра будується на чесному обліку.',
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
              <T as="div" className="eyebrow" en="On the record" uk="За документами" />
              <T as="h2" en="The partners who stand with Domanivka." uk="Партнери, які поряд із Доманівкою." />
            </div>
            <T
              as="div"
              className="right"
              en="International institutions, bilateral programmes and civil-society organisations named in the Community Profile and confirmed in delivered projects. Listed by the role they play in the community."
              uk="Міжнародні інституції, двосторонні програми та громадські організації, названі у Профілі громади й підтверджені реалізованими проєктами. У порядку ролі, яку вони відіграють."
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
              en="How three documented partnerships actually work — what they delivered, and what they mean for everyday life in the community."
              uk="Як насправді працюють три задокументовані партнерства — що дали і що змінили у щоденному житті громади."
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
                    <span className="s-name">{tr(s.name)}</span>
                    <T as="span" className="s-since" en="Role / programme" uk="Роль / програма" />
                    <span className="s-year">{tr(s.year)}</span>
                  </div>
                  <h3>{tr(s.quote)}</h3>
                  <p>{tr(s.text)}</p>
                  <ul className="story-list">
                    {s.stats.map(([lbl, val], j) => (
                      <li key={j}><span>{tr(lbl)}</span><strong>{tr(val)}</strong></li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="Transparency" uk="Прозорість" />
              <T as="h2" en="The documents behind our work." uk="Документи, на яких стоїть наша робота." />
            </div>
            <T
              as="div"
              className="right"
              en="Our priorities and partner projects trace back to public planning documents. Below are the core ones — current versions are available on request."
              uk="Наші пріоритети та партнерські проєкти спираються на публічні планувальні документи. Нижче — основні; чинні версії надаємо за запитом."
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
               en="We will send you the community profile, a current project list, our planning documents, and a proposed meeting agenda. No template responses — every partnership starts with a real conversation."
               uk="Надішлемо профіль громади, актуальний перелік проєктів, планувальні документи і пропозицію щодо порядку зустрічі. Без шаблонних відповідей — кожне партнерство починається з реальної розмови." />
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
