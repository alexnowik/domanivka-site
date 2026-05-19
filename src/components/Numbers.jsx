import { T, useLang } from '../i18n.jsx';

const STATS = [
  {
    value: <>14,398<sup>+</sup></>,
    en: 'Residents across 31 settlements',
    uk: 'Мешканців у 31 населеному пункті',
  },
  {
    value: '31',
    en: 'Settlements — smt Domanivka and 30 villages',
    uk: 'Населених пунктів — смт Доманівка та 30 сіл',
  },
  {
    value: <>729.7<span className="num-unit">km²</span></>,
    en: 'Total area · 3rd largest in Voznesensk district',
    uk: 'Загальна площа · 3-тє місце у Вознесенському районі',
  },
  {
    value: <>65,143<span className="num-unit">ha</span></>,
    en: 'Agricultural land · 89% of the community (53,954 ha arable)',
    uk: 'С/г угіддя · 89% території громади (53 954 га ріллі)',
  },
  {
    value: <>60<span className="num-unit">%</span></>,
    en: 'Of the local budget allocated to education',
    uk: 'Місцевого бюджету спрямовано на освіту',
  },
  {
    value: <>7,437<span className="num-unit">UAH</span></>,
    en: 'Budget expenditure per resident · 2023',
    uk: 'Видатки бюджету на одного мешканця · 2023',
  },
];

export default function Numbers() {
  const { lang } = useLang();
  return (
    <section className="section-tight numbers-section">
      <div className="wrap">
        <div className="numbers-head">
          <T as="div" className="eyebrow"
             en="The community in numbers"
             uk="Громада у цифрах" />
          <T as="p" className="muted small"
             en="Source: Community Profile, addendum to the Development Strategy through 2027 · Domanivka, 2024"
             uk="Джерело: Профіль громади, додаток до Стратегії розвитку до 2027 року · Доманівка, 2024" />
        </div>

        <div className="stat-grid grid-3">
          {STATS.map((stat, i) => (
            <div key={i} className="stat">
              <div className="num">{stat.value}</div>
              <div className="label">{lang === 'uk' ? stat.uk : stat.en}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
