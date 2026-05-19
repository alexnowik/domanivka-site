import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const NEWS = [
  {
    date: { en: 'Dec 13, 2024', uk: 'Дек 13, 2024' },
    category: { en: 'Status', uk: 'Статус' },
    title: {
      en: 'Domanivka reclassified from urban-type settlement to settlement',
      uk: 'Доманівку перекласифіковано із «selyshche miskoho typu» на «selyshche»',
    },
    text: {
      en: 'By resolution of the Domanivka settlement council, the administrative centre of the community formally changed status from «selyshche miskoho typu» to «selyshche» — aligning the centre with the rural character of the 30 villages it serves.',
      uk: 'Рішенням Доманівської селищної ради адміністративний центр громади офіційно змінив статус із «cелища міського типу» на «cелище» — відповідно до сільського характеру 30 сіл, які вона об’єднує.',
    },
  },
  {
    date: { en: '2024', uk: '2024' },
    category: { en: 'Strategy', uk: 'Стратегія' },
    title: {
      en: 'Community Profile released as addendum to the 2027 Development Strategy',
      uk: 'Профіль громади видано як додаток до Стратегії розвитку до 2027 року',
    },
    text: {
      en: 'A complete dossier covering historic development, geography, soils, demography, infrastructure, budget and economy of the community — prepared as an addendum to the Development Strategy through 2027 (with perspective through 2034).',
      uk: 'Детальний досьє про історичний розвиток, географію, ґрунти, населення, інфраструктуру, бюджет та економіку громади — як додаток до Стратегії розвитку до 2027 року (з перспективою дії до 2034 року).',
    },
  },
  {
    date: { en: 'Updated 2024', uk: 'Оновлено 2024' },
    category: { en: 'Environment', uk: 'Довкілля' },
    title: {
      en: 'Bakshalynski Plavni reserve protects 96 ha of wetlands and bird habitat',
      uk: 'Ландшафтний заказник «Бакшалинські плавні» охороняє 96 га плавнів',
    },
    text: {
      en: 'The community’s landscape reserve sits along both banks of the Bakshala river between the villages of Novolikarske and Zelenyi Yar — a nesting area for waterfowl and a refuge of native steppe vegetation alongside the mouth of the Bakshala (a botanical monument of 5 ha).',
      uk: 'Ландшафтний заказник громади розташований по обидва береги р. Бакшала між селами Новолікарське та Зелений Яр — місце гніздування птахів і збереження степової рослинності, поруч із ботанічною пам’яткою «Гирло р. Бакшала» (5 га).',
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
                <time>{tr(n.date)}</time>
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
