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
      en: 'School retrofits and shelter construction',
      uk: 'Термомодернізація шкіл і будівництво укриттів',
    },
    desc: {
      en: '5 general secondary schools, 9 preschools, 1 vocational education facility. 60% of the local budget is allocated to education.',
      uk: '5 закладів загальної середньої освіти, 9 ДНЗ, 1 заклад профосвіти. 60% місцевого бюджету — на освіту.',
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
      en: 'Hosting 1,087 internally displaced people today; 3,000+ have sheltered here since 2022.',
      uk: 'Зараз приймаємо 1 087 ВПО; з 2022 року тут знайшли прихисток 3 000+ людей.',
    },
    amount: { en: 'Danish Embassy', uk: 'Посольство Данії' },
    badge: 'in-progress',
    badgeLabel: { en: 'Co-funded', uk: 'Співфінансовано' },
  },
  {
    num: '04',
    title: {
      en: 'Municipal road repairs',
      uk: 'Ремонт комунальних доріг',
    },
    desc: {
      en: 'Rural connector roads link 31 settlements across 729.7 km²; many need surface and drainage work after years of heavy use.',
      uk: 'Сільські з’єднувальні дороги поєднують 31 населений пункт на 729,7 км²; багатьом з них потрібний ремонт покриття та водовідведення.',
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
            en="These are the open needs the community council has prioritised for the coming winter and spring. Each one is costed, documented, and ready for a partner to take on in part or in full."
            uk="Це відкриті потреби, які громадська рада визначила пріоритетними на найближчу зиму та весну. Кожна — з кошторисом, документами та готова до підтримки повністю або частково."
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
            <T en="See full needs list" uk="Повний перелік потреб" />
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
