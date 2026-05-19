import { useState } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const TOPICS = [
  { value: 'partnership', en: 'Partnership', uk: 'Партнерство' },
  { value: 'project', en: 'Project support', uk: 'Підтримка проєкту' },
  { value: 'media', en: 'Media', uk: 'Медіа' },
  { value: 'visit', en: 'Site visit', uk: 'Візит' },
  { value: 'other', en: 'Other', uk: 'Інше' },
];

const TEAM = [
  { name: 'Andriy Hryhorchuk', role: { en: 'Head of the community council', uk: 'Голова громади' }, mail: 'holova@domanivka.gov.ua', tint: 'tint-2' },
  { name: 'Iryna Boyko', role: { en: 'Partnership office, lead', uk: 'Керівниця відділу співпраці' }, mail: 'partners@domanivka.gov.ua', tint: 'tint-4' },
  { name: 'Olha Voronova', role: { en: 'Social & humanitarian programmes', uk: 'Соціальні та гуманітарні програми' }, mail: 'social@domanivka.gov.ua', tint: 'tint-6' },
  { name: 'Mykola Tkachenko', role: { en: 'Infrastructure & utilities', uk: 'Інфраструктура та комунальне' }, mail: 'infra@domanivka.gov.ua', tint: 'tint-1' },
  { name: 'Dr. Volodymyr Lytvyn', role: { en: 'Healthcare coordinator', uk: 'Координатор охорони здоров’я' }, mail: 'health@domanivka.gov.ua', tint: 'tint-3' },
];

function PersonIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1">
      <circle cx="12" cy="9" r="4" />
      <path d="M4 21c0-4 4-7 8-7s8 3 8 7" />
    </svg>
  );
}

function VisitMap() {
  return (
    <svg viewBox="0 0 480 360" xmlns="http://www.w3.org/2000/svg" aria-label="Location map">
      <rect width="480" height="360" fill="#F1ECE2" />
      <path d="M40 110 L120 70 L210 60 L290 70 L380 90 L430 130 L440 200 L420 270 L370 310 L280 320 L200 310 L120 290 L60 240 L40 180 Z" fill="#E2D9C6" stroke="#A89F8B" strokeWidth="1" />
      <path d="M120 290 C 180 300, 260 320, 370 310" fill="none" stroke="#A4B6BE" strokeWidth="2.5" />
      <path d="M40 200 L440 200" stroke="#C9B999" strokeWidth="0.5" strokeDasharray="2 4" />
      <path d="M240 60 L240 320" stroke="#C9B999" strokeWidth="0.5" strokeDasharray="2 4" />
      <g fontFamily="Geist, sans-serif" fontSize="11" fill="#5B6670">
        <circle cx="240" cy="130" r="3" fill="#5B6670" /><text x="248" y="134">Kyiv</text>
        <circle cx="260" cy="260" r="3" fill="#5B6670" /><text x="268" y="264">Mykolaiv</text>
        <circle cx="200" cy="280" r="3" fill="#5B6670" /><text x="148" y="296">Odesa</text>
        <circle cx="230" cy="275" r="7" fill="#B56A4A" />
        <circle cx="230" cy="275" r="14" fill="none" stroke="#B56A4A" strokeWidth="1" opacity="0.5" />
        <text x="190" y="252" fontWeight="700" fontSize="13" fill="#1F2933">Domanivka</text>
      </g>
      <g transform="translate(420, 50)" fontFamily="Geist, sans-serif" fontSize="10" fill="#5B6670">
        <circle r="14" fill="none" stroke="#A89F8B" strokeWidth="0.8" />
        <path d="M0 -10 L3 0 L0 10 L-3 0 Z" fill="#1E3A46" />
        <text x="-3" y="-18" fontWeight="600" fill="#1E3A46">N</text>
      </g>
    </svg>
  );
}

export default function Contacts() {
  const { lang } = useLang();
  const tr = (val) => (val == null ? val : (typeof val === 'string' || typeof val === 'number') ? val : (lang === 'uk' ? val.uk : val.en));

  const [topic, setTopic] = useState('partnership');
  const [urgent, setUrgent] = useState(false);
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
    setTimeout(() => setSent(false), 2400);
  };

  return (
    <>
      <PageIntro
        crumb={{ en: 'Contacts', uk: 'Контакти' }}
        title={{ en: 'Real people, who answer.', uk: 'Реальні люди — які відповідають.' }}
        lede={{
          en: 'The partnership office responds within two working days. The council reception within five. If something is urgent, mark it urgent in the form — we read those first.',
          uk: 'Відділ співпраці відповідає протягом двох робочих днів. Приймальня ради — протягом п’яти. Якщо терміново — позначте у формі: такі читаємо першими.',
        }}
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="cf-head">
                <T as="div" className="eyebrow" en="Send us a message" uk="Надіслати повідомлення" />
                <T as="h2" en="Start a conversation." uk="Почати розмову." />
                <T
                  as="p"
                  className="muted"
                  en="Tell us briefly who you are and what brings you here. We’ll reply from partners@domanivka.gov.ua."
                  uk="Коротко напишіть, хто ви та що вас цікавить. Відповімо з partners@domanivka.gov.ua."
                />
              </div>

              <div className="cf-fields">
                <div className="field">
                  <T as="label" en="What is this about?" uk="Про що звернення?" />
                  <div className="field-radio-group">
                    {TOPICS.map((t) => (
                      <label key={t.value}>
                        <input
                          type="radio"
                          name="topic"
                          value={t.value}
                          checked={topic === t.value}
                          onChange={() => setTopic(t.value)}
                        />
                        <span>{tr(t)}</span>
                      </label>
                    ))}
                  </div>
                </div>

                <div className="cf-row">
                  <div className="field">
                    <T as="label" en="Your name" uk="Ваше ім’я" />
                    <input type="text" placeholder="Jane Bergmann" />
                  </div>
                  <div className="field">
                    <T as="label" en="Organisation" uk="Організація" />
                    <input type="text" placeholder="Foundation for…" />
                  </div>
                </div>

                <div className="cf-row">
                  <div className="field">
                    <T as="label" en="Email" uk="Email" />
                    <input type="email" placeholder="you@example.org" required />
                  </div>
                  <div className="field">
                    <T as="label" en="Country" uk="Країна" />
                    <input type="text" placeholder="Germany" />
                  </div>
                </div>

                <div className="field">
                  <T as="label" en="Message" uk="Повідомлення" />
                  <textarea rows="5" placeholder="A few sentences about your organisation and what you'd like to discuss." />
                </div>

                <label className="cf-urgent">
                  <input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} />
                  <T en="Mark as urgent — read first" uk="Позначити терміновим — читати першочергово" />
                </label>

                <div className={`cf-submit${sent ? ' sent' : ''}`}>
                  <button className="btn btn-primary" type="submit">
                    <span>
                      {sent
                        ? (lang === 'uk' ? 'Надіслано ✓' : 'Message sent ✓')
                        : (lang === 'uk' ? 'Надіслати' : 'Send message')}
                    </span>
                    <ArrowIcon />
                  </button>
                  <span className="muted small">
                    {lang === 'uk' ? 'Або напишіть на ' : 'Or write directly to '}
                    <a href="mailto:partners@domanivka.gov.ua">partners@domanivka.gov.ua</a>
                  </span>
                </div>
              </div>
            </form>

            <aside className="contact-side">
              <div className="cs-block">
                <T as="div" className="cs-eyebrow" en="Council reception" uk="Приймальня ради" />
                <address>
                  vul. Tsentralna, 19<br />
                  <T en="smt Domanivka" uk="смт Доманівка" /><br />
                  <T en="Mykolaiv Oblast, 56400" uk="Миколаївська область, 56400" /><br />
                  <T en="Ukraine" uk="Україна" />
                </address>
                <div className="cs-line"><span>+380 (5152) 9-12-44</span></div>
                <div className="cs-line"><a href="mailto:rada@domanivka.gov.ua">rada@domanivka.gov.ua</a></div>
                <div className="cs-line muted">
                  <T en="Mon–Fri · 09:00 – 17:00 EET" uk="Пн–Пт · 09:00 – 17:00 EET" />
                </div>
              </div>

              <div className="cs-block">
                <T as="div" className="cs-eyebrow" en="Partnership office" uk="Відділ співпраці" />
                <T as="p"
                   en="The dedicated team for donors, NGOs, and international partners. Replies within 48 hours."
                   uk="Команда для донорів, ГО та міжнародних партнерів. Відповідаємо за 48 годин." />
                <div className="cs-line"><a href="mailto:partners@domanivka.gov.ua">partners@domanivka.gov.ua</a></div>
                <div className="cs-line"><span>+380 (50) 384-22-19</span></div>
              </div>

              <div className="cs-block">
                <T as="div" className="cs-eyebrow" en="Press & media" uk="Преса та медіа" />
                <div className="cs-line"><a href="mailto:press@domanivka.gov.ua">press@domanivka.gov.ua</a></div>
                <div className="cs-line muted">
                  <T en="Photo and b-roll requests welcome" uk="Просьби про фото та відео — вітаємо" />
                </div>
              </div>

              <div className="cs-block">
                <T as="div" className="cs-eyebrow" en="Find us online" uk="Ми онлайн" />
                <ul className="cs-social">
                  <li><a href="#">Facebook</a></li>
                  <li><a href="#">Telegram</a></li>
                  <li><a href="#">YouTube</a></li>
                  <li><a href="#">LinkedIn</a></li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      <section className="section" style={{ background: 'var(--bg-2)', padding: '80px 0' }}>
        <div className="wrap">
          <div className="section-head">
            <div className="left">
              <T as="div" className="eyebrow" en="The team you will work with" uk="Команда, з якою ви будете працювати" />
              <T as="h2" en="Five people, all reachable directly." uk="П’ятеро людей — кожен доступний прямо." />
            </div>
            <T
              as="div"
              className="right"
              en="A council and a community office of fifty staff in total. For partnership work, these are the people you will meet — directly, not through a layer of communications."
              uk="Громадська рада та апарат у п’ятдесят співробітників. У роботі з партнерами ви бачите цих людей напряму — без шарів комунікацій."
            />
          </div>

          <div className="team-grid">
            {TEAM.map((p, i) => (
              <div key={i} className="team-card">
                <div className={`team-photo photo ${p.tint}`}>
                  <div className="ph-center"><PersonIcon /></div>
                </div>
                <div className="team-name">{p.name}</div>
                <div className="team-role">{tr(p.role)}</div>
                <a className="team-mail" href={`mailto:${p.mail}`}>{p.mail}</a>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="visit-grid">
            <div className="visit-text">
              <T as="div" className="eyebrow" en="Visit Domanivka" uk="Відвідати Доманівку" />
              <T as="h2"
                 en="The fastest way to understand the community is to walk through it."
                 uk="Найшвидший спосіб зрозуміти громаду — пройти нею." />
              <T as="p"
                 en="We host partner delegations regularly. A typical site visit covers two days, the council, three settlements, and at least one active project. We arrange transport from Mykolaiv or Odesa."
                 uk="Регулярно приймаємо партнерські делегації. Типовий візит — два дні: рада, три населені пункти і щонайменше один активний проєкт. Організуємо транспорт з Миколаєва або Одеси." />
              <ul className="visit-list">
                <li>
                  <T as="strong" en="From Mykolaiv" uk="З Миколаєва" />
                  <T as="span" en="112 km · 1h 45m by car" uk="112 км · 1 год 45 хв авто" />
                </li>
                <li>
                  <T as="strong" en="From Odesa" uk="З Одеси" />
                  <T as="span" en="148 km · 2h 10m by car" uk="148 км · 2 год 10 хв авто" />
                </li>
                <li>
                  <T as="strong" en="From Kyiv" uk="З Києва" />
                  <T as="span" en="552 km · train to Mykolaiv + 1h 45m by car" uk="552 км · потяг до Миколаєва + 1 год 45 хв авто" />
                </li>
              </ul>
              <div style={{ marginTop: 16 }}>
                <a href="#" className="btn btn-primary">
                  <T en="Request a site visit" uk="Запросити візит" />
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="visit-map">
              <VisitMap />
              <div className="vm-coords"><span>47°37′N</span><span>30°59′E</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
