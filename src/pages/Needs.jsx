import { Link } from 'react-router-dom';
import PageIntro from '../components/PageIntro.jsx';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const SUMMARY = [
  { num: '14', en: 'Open needs, documented', uk: 'Відкритих потреб задокументовано' },
  { num: '€ 1.86M', en: 'Total funding gap', uk: 'Загальний дефіцит фінансування' },
  { num: '9,840', en: 'Residents directly impacted', uk: 'Мешканців отримують прямий вплив' },
  { num: '4', en: 'Marked urgent for winter 2025/26', uk: 'Терміново на зиму 2025/26' },
];

const NEEDS = [
  {
    cat: 'urgent',
    catName: { en: 'Urgent — winter 2025/26', uk: 'Терміново — зима 2025/26' },
    catColor: 'var(--terracotta)',
    catShadow: 'rgba(181,106,74,0.18)',
    items: [
      {
        id: 'N-01', badge: 'urgent', badgeLabel: { en: 'Urgent', uk: 'Терміново' },
        title: { en: 'Heating and insulation for two kindergartens', uk: 'Опалення та утеплення двох дитсадків' },
        desc: { en: 'The kindergartens in Vesele and Bohdanivka are heated by old solid-fuel boilers and have un-insulated walls. Inside temperatures dropped to 14°C last January. Replacing heating systems and adding façade insulation would solve it for a decade.',
                uk: 'Дитсадки у Веселому та Богданівці опалюються старими твердопаливними котлами, стіни не утеплені. Минулого січня температура всередині падала до 14°C. Заміна котлів і утеплення фасадів вирішують проблему на десятиріччя.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, <>320 <T en="children, 28 staff" uk="дітей, 28 працівників" /></>],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 168,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Funding · equipment', uk: 'Фінансування · обладнання' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, { en: 'Operational by Nov 2025', uk: 'Готовність — листопад 2025' }],
          [{ en: 'Status', uk: 'Статус' }, <>€ 14k <T en="committed" uk="зобов’язано" /></>],
          [{ en: 'Contact', uk: 'Контакт' }, 'Iryna Boyko'],
        ],
      },
      {
        id: 'N-02', badge: 'urgent', badgeLabel: { en: 'Urgent', uk: 'Терміново' },
        title: { en: 'Ambulance + mobile clinic for remote villages', uk: 'Швидка та мобільна клініка для віддалених сіл' },
        desc: { en: 'Seven villages in the south of the hromada have no permanent clinic. The current ambulance is twelve years old and frequently out of service. A new ambulance and a basic mobile-clinic kit would close the gap.',
                uk: 'Сім сіл на півдні громади не мають постійної амбулаторії. Поточна швидка має 12 років і часто не в роботі. Нова швидка та базовий комплект мобільної клініки закривають питання.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, <>4,260 <T en="residents" uk="мешканців" /></>],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 92,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Equipment · vehicle', uk: 'Обладнання · авто' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, 'Q1 2026'],
          [{ en: 'Status', uk: 'Статус' }, { en: 'Open', uk: 'Відкрита' }],
          [{ en: 'Contact', uk: 'Контакт' }, 'Dr. Volodymyr Lytvyn'],
        ],
      },
      {
        id: 'N-03', badge: 'urgent', badgeLabel: { en: 'Urgent', uk: 'Терміново' },
        title: { en: 'Solar + battery backup for the council building', uk: 'Сонячна станція з акумуляторами для будівлі ради' },
        desc: { en: 'When the grid goes down — and it does — the council building loses connectivity, lighting, and the ability to coordinate emergency response. A 40 kW solar array with battery backup makes the council resilient.',
                uk: 'Коли зникає мережа — а це буває — будівля ради втрачає зв’язок, освітлення і здатність координувати реагування. Сонячна станція 40 кВт із акумуляторами зробить раду стійкою.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, { en: 'Whole hromada', uk: 'Уся громада' }],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 54,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Equipment · expertise', uk: 'Обладнання · експертиза' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, 'Q3 2026'],
          [{ en: 'Status', uk: 'Статус' }, <>€ 13.5k <T en="committed" uk="зобов’язано" /></>],
          [{ en: 'Contact', uk: 'Контакт' }, 'Mykola Tkachenko'],
        ],
      },
      {
        id: 'N-04', badge: 'urgent', badgeLabel: { en: 'Urgent', uk: 'Терміново' },
        title: { en: 'Firewood reserve for 280 vulnerable households', uk: 'Запас дров для 280 вразливих домогосподарств' },
        desc: { en: 'Pensioners living alone, single-parent households, and families hosting displaced people — all confirmed via social workers — heat with wood and cannot afford the price spike this season.',
                uk: 'Самотні пенсіонери, неповні родини та родини, що прийняли ВПО — усі підтверджені соцпрацівниками — опалюються дровами і не можуть подолати цьогорічне зростання цін.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, <>280 <T en="households" uk="домогосподарств" /></>],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 42,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Funding · in-kind', uk: 'Фінансування · допомога' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, { en: 'Before Dec 1', uk: 'До 1 грудня' }],
          [{ en: 'Status', uk: 'Статус' }, <>€ 6k <T en="committed" uk="зобов’язано" /></>],
          [{ en: 'Contact', uk: 'Контакт' }, 'Olha Voronova'],
        ],
      },
    ],
  },
  {
    cat: 'infra',
    catName: { en: 'Infrastructure', uk: 'Інфраструктура' },
    catColor: 'var(--olive)',
    catShadow: 'rgba(107,125,92,0.18)',
    items: [
      {
        id: 'N-05', badge: 'in-progress', badgeLabel: { en: 'Co-funding open', uk: 'Спільне фінансування' },
        title: { en: 'Road repair, Domanivka — Bratske, 11 km', uk: 'Ремонт дороги Доманівка — Братське, 11 км' },
        desc: { en: 'The primary route for school buses, ambulance, and seasonal grain transport. Surface failure on roughly 7 km of the 11 km stretch. Co-funding from Ukravtodor is approved subject to a partner contribution.',
                uk: 'Головна дорога для шкільних автобусів, швидкої та аграрних перевезень. Зруйноване покриття на ~7 км з 11. Співфінансування Укравтодору схвалено за умови внеску партнера.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, '6,400'],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 410,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Funding · co-financing', uk: 'Фінансування · співфінансування' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, '2026 — 2027'],
          [{ en: 'Status', uk: 'Статус' }, <>8% <T en="committed" uk="зобов’язано" /></>],
          [{ en: 'Contact', uk: 'Контакт' }, 'Andriy Hryhorchuk'],
        ],
      },
      {
        id: 'N-06', badge: 'planned', badgeLabel: { en: 'Open', uk: 'Відкрита' },
        title: { en: 'Water tower replacement, Olexandrivka', uk: 'Заміна водонапірної башти, Олександрівка' },
        desc: { en: 'The 1968 water tower fails 4-6 times a year, each failure cutting water to 980 residents for 8–24 hours. Replacing the tower and reservoir is a one-time fix.',
                uk: 'Башта 1968 року виходить з ладу 4–6 разів на рік; кожна аварія залишає 980 мешканців без води на 8–24 години. Заміна башти й резервуару — це разове рішення.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, '980'],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 188,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Funding · contractor', uk: 'Фінансування · підрядник' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, '2026'],
          [{ en: 'Status', uk: 'Статус' }, { en: 'Open', uk: 'Відкрита' }],
          [{ en: 'Contact', uk: 'Контакт' }, 'Mykola Tkachenko'],
        ],
      },
      {
        id: 'N-07', badge: 'planned', badgeLabel: { en: 'Open', uk: 'Відкрита' },
        title: { en: 'Digital infrastructure for the council', uk: 'Цифрова інфраструктура для громади' },
        desc: { en: 'A modern document workflow, accounting system, and 25 secure workstations across the council and four village offices. Cuts the time a resident waits for a certificate from 12 days to 1.',
                uk: 'Сучасний документообіг, бухгалтерська система та 25 захищених робочих місць у раді й чотирьох старостинських округах. Скорочує час видачі довідки з 12 днів до 1.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, '18,400'],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 76,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Equipment · expertise', uk: 'Обладнання · експертиза' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, '2026'],
          [{ en: 'Status', uk: 'Статус' }, { en: 'Open', uk: 'Відкрита' }],
          [{ en: 'Contact', uk: 'Контакт' }, 'Iryna Boyko'],
        ],
      },
    ],
  },
  {
    cat: 'social',
    catName: { en: 'Social & housing', uk: 'Соціальне та житло' },
    catColor: 'var(--muted-blue)',
    catShadow: 'rgba(108,132,148,0.18)',
    items: [
      {
        id: 'N-08', badge: 'planned', badgeLabel: { en: 'Open', uk: 'Відкрита' },
        title: { en: 'Twelve modular homes for displaced families', uk: 'Дванадцять модульних будинків для родин ВПО' },
        desc: { en: 'A pilot residential block on community-owned land, for families that have lived in temporary shelter for more than two winters. Land, utilities, and roads are ready. Construction needs a partner.',
                uk: 'Пілотний житловий квартал на землі громади для родин, які вже понад дві зими у тимчасовому житлі. Земля, комунікації та дороги — готові. Будівництво потребує партнера.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, <>48 <T en="people" uk="осіб" /></>],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 820,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Funding · construction', uk: 'Фінансування · будівництво' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, '2026 — 2027'],
          [{ en: 'Status', uk: 'Статус' }, <>12% <T en="committed" uk="зобов’язано" /></>],
          [{ en: 'Contact', uk: 'Контакт' }, 'Andriy Hryhorchuk'],
        ],
      },
      {
        id: 'N-09', badge: 'planned', badgeLabel: { en: 'Open', uk: 'Відкрита' },
        title: { en: 'Vocational training centre for displaced adults', uk: 'Центр професійної підготовки для дорослих ВПО' },
        desc: { en: 'Skills retraining for adults who lost their work when they relocated — agro-technology, basic accounting, welding, digital skills. The space exists; equipment and curriculum partners are needed.',
                uk: 'Перенавчання дорослих, які втратили роботу через переселення — агро-технології, базова бухгалтерія, зварювання, цифрові навички. Приміщення є; потрібне обладнання та партнери з програмами.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, '~180/year'],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 132,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Equipment · curriculum', uk: 'Обладнання · програма' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, '2026'],
          [{ en: 'Status', uk: 'Статус' }, { en: 'Open', uk: 'Відкрита' }],
          [{ en: 'Contact', uk: 'Контакт' }, 'Olha Voronova'],
        ],
      },
      {
        id: 'N-10', badge: 'planned', badgeLabel: { en: 'Open', uk: 'Відкрита' },
        title: { en: 'Renovation of the youth and culture house, Bohdanivka', uk: 'Ремонт будинку молоді та культури, Богданівка' },
        desc: { en: 'The only public indoor space in a 4-village area. Heating, lighting, accessibility and a small auditorium upgrade — used weekly by 200+ youth and the village choir.',
                uk: 'Єдиний громадський простір у зоні чотирьох сіл. Опалення, освітлення, доступність і невелика модернізація зали — користуються щотижня 200+ молодих людей і сільський хор.' },
        facts: [
          [{ en: 'Who is affected', uk: 'Кого стосується' }, '1,440'],
          [{ en: 'Estimated budget', uk: 'Орієнтовний бюджет' }, '€ 96,000'],
          [{ en: 'Support needed', uk: 'Тип підтримки' }, { en: 'Funding · materials', uk: 'Фінансування · матеріали' }],
          [{ en: 'Deadline', uk: 'Дедлайн' }, '2026 — 2027'],
          [{ en: 'Status', uk: 'Статус' }, { en: 'Open', uk: 'Відкрита' }],
          [{ en: 'Contact', uk: 'Контакт' }, 'Iryna Boyko'],
        ],
      },
    ],
  },
];

const HELP = [
  { num: '01', title: { en: 'Fund a project end-to-end', uk: 'Профінансувати проєкт повністю' },
    desc: { en: 'Take a single need from documentation to delivery — with co-branding, reporting, and a transparent budget.',
            uk: 'Узяти потребу від документів до реалізації — з ко-брендингом, звітністю і прозорим бюджетом.' } },
  { num: '02', title: { en: 'Co-fund a larger project', uk: 'Співфінансувати проєкт' },
    desc: { en: 'Partial funding on infrastructure projects unlocks matching state co-financing. Often the highest leverage.',
            uk: 'Частковий внесок у інфраструктурні проєкти розблоковує державне співфінансування. Часто найвищий важіль.' } },
  { num: '03', title: { en: 'Donate equipment in-kind', uk: 'Передати обладнання' },
    desc: { en: 'Vehicles, generators, IT equipment, medical kits — all welcome, all logged, all visible in our public asset register.',
            uk: 'Авто, генератори, ІТ-техніка, медичні комплекти — приймаємо, обліковуємо й відображаємо у публічному реєстрі.' } },
  { num: '04', title: { en: 'Share expertise', uk: 'Поділитися експертизою' },
    desc: { en: 'Energy audits, mental-health methodology, agri-tech, digital governance — a few days of expert time can change a project.',
            uk: 'Енергоаудит, методики ментального здоров’я, агро-тех, цифрове врядування — кілька днів експерта здатні змінити проєкт.' } },
  { num: '05', title: { en: 'Become a sister community', uk: 'Стати містом-побратимом' },
    desc: { en: 'A long-term partnership with a European municipality. We currently have one and welcome two more by 2027.',
            uk: 'Довгострокове партнерство з європейською громадою. Маємо одну, відкриті ще до двох — до 2027 року.' } },
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
        crumb={{ en: 'Open needs', uk: 'Відкриті потреби' }}
        title={{ en: 'An open list of what the community needs.', uk: 'Відкритий перелік того, що потрібно громаді.' }}
        lede={{
          en: 'No dramatic appeals. Just specific needs, costed, with a clear beneficiary count and a clear partner role. If something below fits what your organisation does — let’s talk.',
          uk: 'Без драматичних закликів. Лише конкретні потреби з кошторисами, кількістю отримувачів і чіткою роллю партнера. Якщо щось із наведеного — це ваш профіль, давайте поговоримо.',
        }}
      />

      <section className="section-tight" style={{ paddingTop: 24, paddingBottom: 0 }}>
        <div className="wrap">
          <div className="needs-summary">
            {SUMMARY.map((s, i) => (
              <div key={i} className="ns-item">
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
              <T as="div" className="eyebrow accent-terra" en="How to read this page" uk="Як читати цю сторінку" />
              <T as="h2" en="Each need is a self-contained brief." uk="Кожна потреба — окремий бриф." />
            </div>
            <div className="how-text">
              <T as="p"
                 en="A need is what the community has identified as a real, concrete shortfall — different from a project, which is a plan with funding behind it. Each need on this page has a description, the people affected, the type of support required, an estimated budget, and a status indicating how ready it is for a partner to take on."
                 uk="Потреба — це конкретна нестача, виявлена громадою; на відміну від проєкту, який є планом із фінансуванням. Кожна потреба нижче містить опис, кількість залучених людей, тип потрібної підтримки, орієнтовний бюджет та статус готовності до партнерства." />
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="needs-list">
        <div className="wrap">
          {NEEDS.map((group, idx) => (
            <div key={group.cat}>
              <div className="cat-head" style={idx > 0 ? { marginTop: 96 } : undefined}>
                <div className="cat-meta">
                  <span className="dot" style={{ background: group.catColor, boxShadow: `0 0 0 4px ${group.catShadow}` }} />
                  <span className="cat-name">{tr(group.catName)}</span>
                </div>
                <span className="cat-count">{group.items.length}</span>
              </div>

              <div className="needs-grid">
                {group.items.map((n) => (
                  <article key={n.id} className="need-card">
                    <div className="need-top">
                      <span className="need-num">{n.id}</span>
                      <span className={`badge ${n.badge}`}>{tr(n.badgeLabel)}</span>
                    </div>
                    <h3>{tr(n.title)}</h3>
                    <p className="need-desc">{tr(n.desc)}</p>
                    <dl className="need-facts">
                      {n.facts.map(([lbl, val], j) => (
                        <div key={j}>
                          <dt>{tr(lbl)}</dt>
                          <dd>{tr(val)}</dd>
                        </div>
                      ))}
                    </dl>
                    <Link className="need-cta btn btn-primary btn-sm" to="/contacts">
                      <T en="Take this on" uk="Підтримати" />
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
              <T as="div" className="eyebrow" en="How partners can help" uk="Як партнери можуть допомогти" />
              <T as="h2" en="Five ways to work with us." uk="П’ять способів співпрацювати з нами." />
            </div>
            <T
              as="div"
              className="right"
              en="There is no single ‘right’ way to support the community. Some partners fund full projects, others bring in-kind contributions, others lend expertise. All are useful — and all are welcomed."
              uk="Немає єдиного «правильного» способу підтримати громаду. Хтось фінансує проєкти повністю, хтось — допомагає речами, хтось — експертизою. Усе корисне — і всіх вітаємо."
            />
          </div>

          <div className="help-grid">
            {HELP.map((h) => (
              <div key={h.num} className="help-card">
                <div className="hc-num">{h.num}</div>
                <h4>{tr(h.title)}</h4>
                <p>{tr(h.desc)}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div className="cta-inner">
            <T as="div" className="eyebrow on-dark" en="Take a need on" uk="Підтримати потребу" />
            <T as="h2" className="cta-h"
               en="Pick a need above — we’ll send you the full brief within 48 hours."
               uk="Оберіть потребу вище — повний бриф надішлемо протягом 48 годин." />
            <T as="p" className="cta-sub"
               en="Each brief includes the technical scope, supplier estimates, our budget line items, the contact person, and the reporting we commit to."
               uk="У кожному брифі — технічний опис, кошториси постачальників, наші бюджетні статті, контактна особа та звітність, яку зобов’язуємось надавати." />
            <div className="row" style={{ gap: 12, marginTop: 24 }}>
              <Link to="/contacts" className="btn btn-primary on-dark">
                <T en="Contact the partnership office" uk="Написати у відділ співпраці" />
                <ArrowIcon />
              </Link>
              <a href="#" className="btn btn-secondary on-dark">
                <T en="Download all 14 briefs (PDF, 6.8MB)" uk="Завантажити всі 14 брифів (PDF, 6,8МБ)" />
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
