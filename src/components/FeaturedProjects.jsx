import { Link } from 'react-router-dom';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon, DropIcon, HouseIcon, SchoolIcon } from '../icons.jsx';

const PROJECTS = [
  {
    tint: 'tint-2',
    Icon: SchoolIcon,
    tag: { en: 'School No. 2 · Domanivka', uk: 'Школа №2 · Доманівка' },
    status: 'in-progress',
    statusLabel: { en: 'In progress', uk: 'Триває' },
    meta: { en: 'Education', uk: 'Освіта' },
    title: {
      en: 'Restoring School No. 2 — windows, roof, heating',
      uk: 'Відновлення школи №2 — вікна, дах, опалення',
    },
    desc: {
      en: 'Replacing damaged windows, repairing the roof, and installing energy-efficient heating so 412 children can return to in-person classes this autumn.',
      uk: 'Заміна пошкоджених вікон, ремонт даху та встановлення енергоефективного опалення, щоб 412 дітей повернулися до очного навчання восени.',
    },
    progress: 64,
    progressLabel: { en: 'funded', uk: 'профінансовано' },
    amount: '€184k / €286k',
  },
  {
    tint: 'tint-4',
    Icon: DropIcon,
    tag: { en: 'Water network · 3 villages', uk: 'Водогін · 3 села' },
    status: 'in-progress',
    statusLabel: { en: 'In progress', uk: 'Триває' },
    meta: { en: 'Infrastructure', uk: 'Інфраструктура' },
    title: {
      en: 'Drinking-water network: Bohdanivka, Olexandrivka, Vesele',
      uk: 'Питний водогін: Богданівка, Олександрівка, Веселе',
    },
    desc: {
      en: 'Replacing a 1970s pump station and laying 14 km of new pipe so 3,180 residents have safe drinking water at home, not from tankers.',
      uk: 'Заміна насосної станції 1970-х та прокладання 14 км нових труб, щоб 3 180 мешканців мали безпечну питну воду вдома, а не з цистерн.',
    },
    progress: 38,
    progressLabel: { en: 'funded', uk: 'профінансовано' },
    amount: '€212k / €560k',
  },
  {
    tint: 'tint-5',
    Icon: HouseIcon,
    tag: { en: 'Modular housing · IDP families', uk: 'Модульне житло · родини ВПО' },
    status: 'planned',
    statusLabel: { en: 'Planned · 2026', uk: 'Заплановано · 2026' },
    meta: { en: 'Housing', uk: 'Житло' },
    title: {
      en: 'Twelve modular homes for displaced families',
      uk: 'Дванадцять модульних будинків для родин ВПО',
    },
    desc: {
      en: 'A pilot residential block on community-owned land, designed for families who have lived in temporary shelter for more than two winters.',
      uk: 'Пілотний житловий квартал на землі громади для родин, які вже більше двох зим живуть у тимчасовому житлі.',
    },
    progress: 12,
    progressLabel: { en: 'committed', uk: 'зобов’язано' },
    amount: '€96k / €820k',
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
            en="A short look at projects in progress — from rebuilding a damaged school to expanding the drinking-water network across three villages. Every project is documented and reported, partner by partner."
            uk="Кілька проєктів, які зараз у роботі — від відбудови школи до розширення питного водогону в трьох селах. Кожен проєкт документуємо і звітуємо, партнер за партнером."
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
                  <span>
                    <strong>{p.progress}%</strong> {tr(p.progressLabel)}
                  </span>
                  <span>{p.amount}</span>
                </div>
              </Link>
            );
          })}
        </div>

        <div className="row" style={{ marginTop: 48, justifyContent: 'flex-end' }}>
          <Link to="/projects" className="btn btn-secondary">
            <T en="See all 48 projects" uk="Усі 48 проєктів" />
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
