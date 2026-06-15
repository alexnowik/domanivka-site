import { Link } from 'react-router-dom';
import { T, useLang } from '../i18n.jsx';
import { asset } from '../lib/asset.js';
import { ArrowIcon } from '../icons.jsx';

const PROJECTS = [
  {
    photo: 'images/location_map_domanivka_tinted.png',
    tag: { en: 'NEFCO / Denmark', uk: 'НЕФКО / Данія' },
    status: 'planned',
    statusLabel: { en: 'Preparation stage', uk: 'Підготовка до робіт' },
    meta: { en: 'UAH 82.5M', uk: '82,5 млн грн' },
    title: {
      en: 'Reconstruction of the water-supply network from Zbroshkove to Domanivka',
      uk: 'Реконструкція водогону від с. Зброшкове до Доманівки',
    },
    desc: {
      en: 'NEFCO and the Government of Denmark support the water-supply reconstruction from the existing well in Zbroshkove to Domanivka, with local co-funding included.',
      uk: 'НЕФКО та уряд Данії підтримують реконструкцію водопостачання від існуючої свердловини в с. Зброшкове до Доманівки зі співфінансуванням громади.',
    },
    progress: 25,
    progressStrong: { en: 'Preparing works', uk: 'Підготовка до робіт' },
    progressRight: '30.09.2027',
  },
  {
    photo: 'images/vpo_house.jpg',
    tag: { en: 'Ukraine Recovery Fund / Denmark', uk: 'Фонд відбудови України / Данія' },
    status: 'in-progress',
    statusLabel: { en: 'Finishing stage', uk: 'Стадія завершення' },
    meta: { en: 'UAH 22.1M', uk: '22,1 млн грн' },
    title: {
      en: 'Nine modular estate-type houses in Domanivka',
      uk: 'Дев’ять модульних будинків садибного типу в Доманівці',
    },
    desc: {
      en: 'A housing project supported by the Ukraine Recovery Fund and the Government of Denmark is at the finishing stage and planned for 2026.',
      uk: 'Житловий проєкт за підтримки Фонду відбудови України та уряду Данії перебуває на стадії завершення і запланований на 2026 рік.',
    },
    progress: 90,
    progressStrong: { en: 'Finishing', uk: 'Завершується' },
    progressRight: '2026',
  },
  {
    photo: 'images/pellets_worker.jpg',
    tag: { en: 'Germany / GIZ', uk: 'Німеччина / GIZ' },
    status: 'completed',
    statusLabel: { en: 'Completed', uk: 'Виконано' },
    meta: { en: 'UAH 12.0M', uk: '12,0 млн грн' },
    title: {
      en: 'Four 200 kW pellet boiler rooms for public facilities',
      uk: 'Чотири пелетні котельні по 200 кВт для комунальних закладів',
    },
    desc: {
      en: 'Germany and GIZ supported modular pellet boiler rooms for the hospital, two lyceums and the youth sports school, completed in May 2025.',
      uk: 'Уряд Німеччини та GIZ підтримали модульні пелетні котельні для лікарні, двох ліцеїв і ДЮСШ, виконано у травні 2025 року.',
    },
    progress: 100,
    progressStrong: { en: 'Completed', uk: 'Виконано' },
    progressRight: '31.05.2025',
  },
];

export default function FeaturedProjects() {
  const { lang } = useLang();
  const tr = (val) => {
    if (val == null) return val;
    if (typeof val === 'string' || typeof val === 'number') return val;
    return lang === 'uk' ? val.uk : val.en;
  };

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <T as="div" className="eyebrow" en="International projects" uk="Міжнародні проєкти" />
            <T as="h2" en="What partners are helping build now." uk="Що громада будує разом із партнерами." />
          </div>
          <T
            as="div"
            className="right"
            en="A short selection from the updated international-funding register: water supply, housing for displaced people, heating resilience and public services."
            uk="Коротка добірка з оновленого реєстру проєктів за міжнародні кошти: водопостачання, житло для ВПО, теплова стійкість і публічні послуги."
          />
        </div>

        <div className="grid-3">
          {PROJECTS.map((p, i) => (
            <Link key={i} className="project-card" to="/projects">
              <div className="photo">
                <img className="photo-img" src={asset(p.photo)} alt={tr(p.tag)} loading="lazy" />
                <div className="photo-label">
                  <span className="tag">{tr(p.tag)}</span>
                </div>
              </div>
              <div className="row-between">
                <span className={`badge ${p.status}`}>{tr(p.statusLabel)}</span>
                <span className="meta">{tr(p.meta)}</span>
              </div>
              <h3>{tr(p.title)}</h3>
              <p className="desc">{tr(p.desc)}</p>
              <div className={`progress ${p.status === 'completed' ? 'completed' : ''}`}>
                <span style={{ width: `${p.progress}%` }} />
              </div>
              <div className="progress-row">
                <span><strong>{tr(p.progressStrong)}</strong></span>
                <span>{tr(p.progressRight)}</span>
              </div>
            </Link>
          ))}
        </div>

        <div className="row" style={{ marginTop: 48, justifyContent: 'flex-end' }}>
          <Link to="/projects" className="btn btn-secondary">
            <T en="See all international projects" uk="Усі міжнародні проєкти" />
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
