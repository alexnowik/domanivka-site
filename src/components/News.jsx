import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const NEWS = [
  {
    date: 'Oct 14, 2025',
    category: { en: 'Education', uk: 'Освіта' },
    title: {
      en: 'School retrofit and shelter works continue across the hromada',
      uk: 'Тривають роботи з термомодернізації шкіл та будівництва укриттів',
    },
    text: {
      en: 'Five schools and eight kindergartens are part of the multi-year energy-efficiency and safety programme — reducing heating costs and protecting children during alerts.',
      uk: 'П’ять шкіл і вісім дитсадків охоплені багаторічною програмою енергоефективності та безпеки — це знижує витрати на опалення та захищає дітей під час тривог.',
    },
  },
  {
    date: 'Oct 02, 2025',
    category: { en: 'Partnership', uk: 'Партнерство' },
    title: {
      en: 'NEFCO advances clean-water programme for 30 villages',
      uk: 'NEFCO розвиває програму чистої води для 30 сіл',
    },
    text: {
      en: 'Our long-term partner NEFCO (Denmark) is moving forward with the next phase of water-supply and sewage modernisation — a priority for the community since 2022.',
      uk: 'Наш довгостроковий партнер NEFCO (Данія) розпочинає наступний етап модернізації водопостачання та каналізації — пріоритетний напрямок для громади від 2022 року.',
    },
  },
  {
    date: 'Sep 18, 2025',
    category: { en: 'Community', uk: 'Громада' },
    title: {
      en: 'Oberih-Agro veterans’ co-operative expands organic production',
      uk: 'Ветеранський кооператив «Оберіг-Агро» розширює органічне виробництво',
    },
    text: {
      en: 'The community’s organic co-operative — founded by veterans — added 19 greenhouses, 30 kW of solar, and beekeeping last season. A small but real example of post-service economic life.',
      uk: 'Органічний кооператив громади, заснований ветеранами, додав 19 теплиць, 30 кВт СЕС і виробництво меду. Невеликий, але реальний приклад економічного життя після служби.',
    },
  },
];

export default function News() {
  const { lang } = useLang();
  const tr = (pair) => (lang === 'uk' ? pair.uk : pair.en);

  return (
    <section className="section news-section">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <T as="div" className="eyebrow" en="From the community" uk="Зі стрічки громади" />
            <T as="h2" en="Recent news, briefly." uk="Свіжі новини — коротко." />
          </div>
          <div className="right">
            <a href="#" className="btn btn-ghost">
              <T en="All news and updates" uk="Усі новини" />
              <ArrowIcon />
            </a>
          </div>
        </div>

        <div className="news-grid">
          {NEWS.map((n, i) => (
            <article key={i} className="news-item">
              <div className="news-meta">
                <time>{n.date}</time>
                <span>{tr(n.category)}</span>
              </div>
              <h3>{tr(n.title)}</h3>
              <p>{tr(n.text)}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
