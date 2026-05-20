import { useState } from 'react';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const TOPICS = [
  { value: 'partnership', en: 'Partnership', uk: 'Співпраця' },
  { value: 'project', en: 'Project support', uk: 'Підтримка проєкту' },
  { value: 'services', en: 'Council services', uk: 'Послуги ради' },
  { value: 'media', en: 'Media', uk: 'Медіа' },
  { value: 'other', en: 'Other', uk: 'Інше' },
];

const DEPARTMENTS = [
  {
    name: { en: 'Council reception', uk: 'Приймальня ради' },
    role: { en: 'General questions, where to send what', uk: 'Загальні питання, куди з чим звертатися' },
    contact: '05152-9-19-49',
  },
  {
    name: { en: 'Partnerships & projects', uk: 'Партнерства та проєкти' },
    role: { en: 'Donors, NGOs, international partners', uk: 'Донори, ГО, міжнародні партнери' },
    contact: 'sr@domanivska-gromada.gov.ua',
  },
  {
    name: { en: 'Social protection', uk: 'Соціальний захист' },
    role: { en: 'IDPs, families in difficulty, support programmes', uk: 'ВПО, сім’ї у складних обставинах, програми' },
    contact: { en: 'via the reception', uk: 'через приймальню' },
  },
  {
    name: { en: 'Land & infrastructure', uk: 'Земля та інфраструктура' },
    role: { en: 'Water, roads, utilities, investment plots', uk: 'Вода, дороги, комунальне, інвестділянки' },
    contact: { en: 'via the reception', uk: 'через приймальню' },
  },
  {
    name: { en: 'Administrative services (TsNAP)', uk: 'Адмінпослуги (ЦНАП)' },
    role: { en: 'Certificates, registrations, documents', uk: 'Довідки, реєстрації, документи' },
    contact: { en: 'via the reception', uk: 'через приймальню' },
  },
];

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
        <circle cx="230" cy="275" r="7" fill="#DC5A30" />
        <circle cx="230" cy="275" r="14" fill="none" stroke="#DC5A30" strokeWidth="1" opacity="0.5" />
        <text x="190" y="252" fontWeight="700" fontSize="13" fill="#1F2933">Domanivka</text>
      </g>
      <g transform="translate(420, 50)" fontFamily="Geist, sans-serif" fontSize="10" fill="#5B6670">
        <circle r="14" fill="none" stroke="#A89F8B" strokeWidth="0.8" />
        <path d="M0 -10 L3 0 L0 10 L-3 0 Z" fill="#0E5A75" />
        <text x="-3" y="-18" fontWeight="600" fill="#0E5A75">N</text>
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
        title={{ en: 'Get in touch.', uk: 'Зв’язатися.' }}
        lede={{
          en: 'The council office is open Monday to Friday. Write with a question, a partnership idea, or paperwork — we read everything and reply as soon as we can.',
          uk: 'Апарат ради працює з понеділка по п’ятницю. Напишіть із питанням, ідеєю співпраці чи у справі — ми все читаємо і відповідаємо, щойно можемо.',
        }}
      />

      <section className="section">
        <div className="wrap">
          <div className="contact-grid">
            <form className="contact-form" onSubmit={handleSubmit}>
              <div className="cf-head">
                <T as="div" className="eyebrow" en="Send us a message" uk="Надіслати повідомлення" />
                <T as="h2" en="Write to the council." uk="Напишіть до ради." />
                <T
                  as="p"
                  className="muted"
                  en="Tell us briefly who you are and what you need. We’ll reply by email."
                  uk="Коротко напишіть, хто ви і що потрібно. Відповімо електронною поштою."
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
                    <input type="text" placeholder="Olena Petrenko" />
                  </div>
                  <div className="field">
                    <T as="label" en="Organisation (optional)" uk="Організація (необов’язково)" />
                    <input type="text" placeholder="—" />
                  </div>
                </div>

                <div className="cf-row">
                  <div className="field">
                    <T as="label" en="Email" uk="Email" />
                    <input type="email" placeholder="you@example.org" required />
                  </div>
                  <div className="field">
                    <T as="label" en="Phone (optional)" uk="Телефон (необов’язково)" />
                    <input type="text" placeholder="+380…" />
                  </div>
                </div>

                <div className="field">
                  <T as="label" en="Message" uk="Повідомлення" />
                  <textarea rows="5" placeholder="A few sentences about what you'd like to discuss." />
                </div>

                <label className="cf-urgent">
                  <input type="checkbox" checked={urgent} onChange={(e) => setUrgent(e.target.checked)} />
                  <T en="This is time-sensitive" uk="Це термінове звернення" />
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
                    <a href="mailto:sr@domanivska-gromada.gov.ua">sr@domanivska-gromada.gov.ua</a>
                  </span>
                </div>
              </div>
            </form>

            <aside className="contact-side">
              <div className="cs-block">
                <T as="div" className="cs-eyebrow" en="Council office" uk="Апарат ради" />
                <address>
                  vul. Tsentralna, 48<br />
                  <T en="smt Domanivka, 56401" uk="смт Доманівка, 56401" /><br />
                  <T en="Voznesensk district, Mykolaiv Oblast" uk="Вознесенський район, Миколаївщина" />
                </address>
                <div className="cs-line"><span>05152-9-19-49</span></div>
                <div className="cs-line"><a href="mailto:sr@domanivska-gromada.gov.ua">sr@domanivska-gromada.gov.ua</a></div>
                <div className="cs-line muted">
                  <T en="Mon–Fri · 08:00–17:00" uk="Пн–Пт · 08:00–17:00" />
                </div>
              </div>

              <div className="cs-block">
                <T as="div" className="cs-eyebrow" en="Head of the community" uk="Голова громади" />
                <address>Viktor Vlasiuk</address>
                <T as="div" className="cs-line muted"
                   en="Reachable through the council office"
                   uk="Звертатися через апарат ради" />
              </div>

              <div className="cs-block">
                <T as="div" className="cs-eyebrow" en="Online" uk="Онлайн" />
                <div className="cs-line"><a href="https://domanivska-gromada.gov.ua" target="_blank" rel="noopener noreferrer">domanivska-gromada.gov.ua</a></div>
                <ul className="cs-social">
                  <li><a href="https://www.facebook.com/otgdomanivka" target="_blank" rel="noopener noreferrer">Facebook</a></li>
                  <li><a href="https://www.instagram.com/domanivkaotg" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                  <li><a href="https://www.youtube.com/channel/UCbsy1VAGLQrlWzcDC9kPtMQ" target="_blank" rel="noopener noreferrer">YouTube</a></li>
                  <li><a href="https://t.me/gromadaorgua_bot?start=select_gromada_5962" target="_blank" rel="noopener noreferrer">Telegram</a></li>
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
              <T as="div" className="eyebrow" en="Departments" uk="Відділи" />
              <T as="h2" en="Where to send what." uk="Куди з чим звертатися." />
            </div>
            <T
              as="div"
              className="right"
              en="A small council office handles the whole community. If you’re not sure who to write to, send it to the reception and it will be passed on."
              uk="Невеликий апарат ради обслуговує всю громаду. Якщо не впевнені, кому писати — надішліть у приймальню, і звернення передадуть далі."
            />
          </div>

          <div className="team-grid">
            {DEPARTMENTS.map((d, i) => (
              <div key={i} className="team-card dept-card">
                <div className="team-name">{tr(d.name)}</div>
                <div className="team-role">{tr(d.role)}</div>
                {typeof d.contact === 'string' && d.contact.includes('@')
                  ? <a className="team-mail" href={`mailto:${d.contact}`}>{d.contact}</a>
                  : <div className="team-mail">{tr(d.contact)}</div>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="visit-grid">
            <div className="visit-text">
              <T as="div" className="eyebrow" en="Getting here" uk="Як дістатися" />
              <T as="h2"
                 en="Where Domanivka is."
                 uk="Де розташована Доманівка." />
              <T as="p"
                 en="Domanivka sits in the Voznesensk district of Mykolaiv region, on the P-75 highway. If you plan to come, write ahead so someone can meet you and show you around."
                 uk="Доманівка — у Вознесенському районі Миколаївщини, на трасі Р-75. Якщо плануєте приїхати, напишіть заздалегідь, щоб вас зустріли та провели." />
              <ul className="visit-list">
                <li>
                  <T as="strong" en="From Mykolaiv" uk="З Миколаєва" />
                  <span>137 km</span>
                </li>
                <li>
                  <T as="strong" en="From Odesa" uk="З Одеси" />
                  <span>176 km</span>
                </li>
                <li>
                  <T as="strong" en="From Kyiv" uk="З Києва" />
                  <span>364 km</span>
                </li>
              </ul>
              <div style={{ marginTop: 16 }}>
                <a href="mailto:sr@domanivska-gromada.gov.ua" className="btn btn-primary">
                  <T en="Write before you visit" uk="Напишіть перед візитом" />
                  <ArrowIcon />
                </a>
              </div>
            </div>

            <div className="visit-map">
              <VisitMap />
              <div className="vm-coords"><span>47°37′N</span><span>30°58′E</span></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
