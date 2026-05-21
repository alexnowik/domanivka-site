import { Link } from 'react-router-dom';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon, DropIcon, HouseIcon, SchoolIcon } from '../icons.jsx';

const PROJECTS = [
  {
    tint: 'tint-2',
    Icon: DropIcon,
    tag: { en: 'Exploratory well · Tsaredarivka', uk: 'Розвідувальна свердловина · Царедарівка' },
    status: 'in-progress',
    statusLabel: { en: 'Design ready', uk: 'Проєкт готовий' },
    meta: { en: 'Water supply', uk: 'Водопостачання' },
    title: {
      en: 'Exploratory production well in Tsaredarivka and village network repairs',
      uk: 'Розвідувально-експлуатаційна свердловина у Царедарівці та ремонт сільських мереж',
    },
    desc: {
      en: 'Permit documents are drawn up for drilling a new well in Tsaredarivka and overhauling water-supply networks across villages where 13 active boreholes already struggle to meet summer demand.',
      uk: 'Підготовлено документацію на буріння нової свердловини в с. Царедарівка та капітальний ремонт мереж водопостачання в селах, де 13 діючих свердловин літом вже не витримують навантаження.',
    },
    progress: 15,
    progressStrong: { en: 'Permits stage', uk: 'Стадія дозволів' },
    progressRight: { en: '13 boreholes in use', uk: '13 діючих свердловин' },
  },
  {
    tint: 'tint-4',
    Icon: DropIcon,
    tag: { en: 'Water main · Zbroshkove → Domanivka', uk: 'Водогін · Зброшкове → Доманівка' },
    status: 'in-progress',
    statusLabel: { en: 'Design ready', uk: 'Проєкт готовий' },
    meta: { en: 'Infrastructure', uk: 'Інфраструктура' },
    title: {
      en: 'Reconstruction of the water main from Zbroshkove to smt Domanivka',
      uk: 'Реконструкція водогону від свердловини в с. Зброшкове до смт Доманівка',
    },
    desc: {
      en: '6,709 m of new pipe from an existing well in Zbroshkove to the settlement of Domanivka — securing quality drinking water and supporting local business growth. Project documentation complete; awaiting construction funding.',
      uk: '6 709 м нового водогону від діючої свердловини в с. Зброшкове до смт Доманівка — якісна питна вода для жителів і бізнесу. Проєктна документація готова, чекаємо фінансування робіт.',
    },
    progress: 18,
    progressStrong: { en: 'Stage 1 of 3', uk: 'Етап 1 з 3' },
    progressRight: { en: '6,709 m · pipeline', uk: '6 709 м · водогін' },
  },
  {
    tint: 'tint-5',
    Icon: HouseIcon,
    tag: { en: 'Sewage rebuild · Domanivka', uk: 'Реконструкція каналізації · Доманівка' },
    status: 'planned',
    statusLabel: { en: 'Open for partner', uk: 'Відкритий для партнера' },
    meta: { en: 'Infrastructure', uk: 'Інфраструктура' },
    title: {
      en: 'Sewage on O. Lyvadara St and stormwater on Horodnia St',
      uk: 'Господарсько-побутова каналізація на вул. О. Ливадара та зливова на вул. Городня',
    },
    desc: {
      en: 'Design documentation is ready for reconstruction of the household-sewage network on O. Lyvadara Street and the stormwater drains on Horodnia Street — part of cutting accident rates on the only centralised sewage system in the community (10.1 km).',
      uk: 'Розроблено проєктну документацію на реконструкцію господарсько-побутової каналізації на вул. О. Ливадара та зливової каналізації на вул. Городня — щоб знизити рівень аварійності єдиної в громаді централізованої системи каналізації (10,1 км).',
    },
    progress: 8,
    progressStrong: { en: 'Documents ready', uk: 'Документація готова' },
    progressRight: { en: 'Awaiting partner', uk: 'Потрібен партнер' },
  },
];

export default function FeaturedProjects() {
  const { lang } = useLang();
  const tr = (pair) => (lang === 'uk' ? pair.uk : pair.en);

  return (
    <section className="section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <T as="div" className="eyebrow" en="Featured work" uk="Обрані проєкти" />
            <T as="h2" en="What we are building this season." uk="Над чим працюємо просто зараз." />
          </div>
          <T
            as="div"
            className="right"
            en="A short look at project directions named in the Community Profile: drinking-water networks, sewage renewal and documented works that need partner coordination."
            uk="Кілька напрямів із Профілю громади: питні водогони, оновлення каналізації та задокументовані роботи, де потрібна координація з партнерами."
          />
        </div>

        <div className="grid-3">
          {PROJECTS.map((p, i) => {
            const Icon = p.Icon;
            return (
              <Link key={i} className="project-card" to="/projects">
                <div className={`photo ${p.tint}`}>
                  <div className="ph-center"><Icon /></div>
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
                <div className="progress"><span style={{ width: `${p.progress}%` }} /></div>
                <div className="progress-row">
                  <span><strong>{tr(p.progressStrong)}</strong></span>
                  <span>{tr(p.progressRight)}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="row" style={{ marginTop: 48, justifyContent: 'flex-end' }}>
          <Link to="/projects" className="btn btn-secondary">
            <T en="See all current projects" uk="Усі поточні проєкти" />
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
