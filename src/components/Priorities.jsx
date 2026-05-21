import { Link } from 'react-router-dom';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const PRIORITIES = [
  {
    num: '01',
    title: {
      en: 'Clean drinking water for 30 villages',
      uk: 'Чиста питна вода для 30 сіл',
    },
    desc: {
      en: 'Water-supply and sewage system modernisation; construction of treatment facilities.',
      uk: 'Модернізація систем водопостачання та водовідведення; будівництво очисних споруд.',
    },
    amount: { en: 'Multi-year', uk: 'Багаторічний' },
    badge: 'urgent',
    badgeLabel: { en: 'Priority area', uk: 'Пріоритет' },
  },
  {
    num: '02',
    title: {
      en: 'Education network and inclusion',
      uk: 'Освітня мережа та інклюзія',
    },
    desc: {
      en: '5 schools, 8 standalone preschools and 1 preschool unit. Education takes 57.38% of the planned 2025 budget.',
      uk: '5 шкіл, 8 самостійних ЗДО та 1 дошкільний підрозділ. На освіту припадає 57,38% планового бюджету 2025 року.',
    },
    amount: { en: 'Multi-year', uk: 'Багаторічний' },
    badge: 'urgent',
    badgeLabel: { en: 'Priority area', uk: 'Пріоритет' },
  },
  {
    num: '03',
    title: {
      en: 'IDP housing programme',
      uk: 'Програма житла для ВПО',
    },
    desc: {
      en: '1,238 IDPs were registered at the start of 2024; 1,093 were staying in the community, and the 2025 figure is 1,087.',
      uk: 'На початок 2024 року зареєстровано 1 238 ВПО; у громаді перебували 1 093 особи, показник 2025 року — 1 087.',
    },
    amount: { en: 'Programme 2022-2026', uk: 'Програма 2022-2026' },
    badge: 'in-progress',
    badgeLabel: { en: 'Programme active', uk: 'Програма діє' },
  },
  {
    num: '04',
    title: {
      en: 'Municipal road repairs',
      uk: 'Ремонт комунальних доріг',
    },
    desc: {
      en: '292.7 km of municipal roads connect 31 settlements; the profile estimates 100% of them as emergency condition.',
      uk: '292,7 км комунальних доріг з’єднують 31 населений пункт; профіль оцінює 100% із них як аварійні.',
    },
    amount: { en: 'Co-funding open', uk: 'Спільне фінансування' },
    badge: 'planned',
    badgeLabel: { en: 'Open', uk: 'Відкрито' },
  },
];

export default function Priorities() {
  const { lang } = useLang();
  const tr = (pair) => (lang === 'uk' ? pair.uk : pair.en);

  return (
    <section className="section-tight priorities">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <T as="div" className="eyebrow accent-terra"
               en="Current priorities" uk="Поточні пріоритети" />
            <T as="h2"
               en="Where partner support matters most, right now."
               uk="Де підтримка партнерів потрібна найбільше зараз." />
          </div>
          <T
            as="div"
            className="right"
            en="These are the directions that repeat across the Community Profile: documented infrastructure gaps, service networks, active programmes and survey priorities."
            uk="Це напрями, які повторюються у Профілі громади: задокументовані інфраструктурні розриви, мережі послуг, чинні програми та пріоритети опитувань."
          />
        </div>

        <ol className="priority-list">
          {PRIORITIES.map((p) => (
            <li key={p.num}>
              <span className="p-num">{p.num}</span>
              <div className="p-body">
                <h3>{tr(p.title)}</h3>
                <p>{tr(p.desc)}</p>
              </div>
              <span className="p-amount">{typeof p.amount === 'string' ? p.amount : tr(p.amount)}</span>
              <span className={`p-badge badge ${p.badge}`}>{tr(p.badgeLabel)}</span>
            </li>
          ))}
        </ol>

        <div className="row" style={{ marginTop: 32, justifyContent: 'flex-end' }}>
          <Link to="/needs" className="btn btn-primary">
            <T en="See profile priorities" uk="Пріоритети профілю" />
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
