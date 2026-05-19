import { T, useLang } from '../i18n.jsx';

const STATS = [
  {
    value: <>14,398<sup>+</sup></>,
    en: 'Residents across 31 settlements',
    uk: 'Мешканців у 31 населеному пункті',
  },
  {
    value: '1,087',
    en: 'Internally displaced people supported',
    uk: 'ВПО зараз приймаємо, 3 000+ з 2022 року',
  },
  {
    value: <>729<span className="num-unit">km²</span></>,
    en: 'Community territory, Voznesensk district, Mykolaiv region',
    uk: 'Площа громади на півдні Миколаївщини',
  },
  {
    value: '48',
    en: 'Projects implemented since 2022',
    uk: 'Реалізованих проєктів з 2022 року',
  },
  {
    value: '23',
    en: 'Active partners and donors',
    uk: 'Активних партнерів та донорів',
  },
  {
    value: <><span className="num-unit">€</span>4.8M</>,
    en: 'Total project value, completed and active',
    uk: 'Загальна вартість завершених і активних проєктів',
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
             en="Updated October 2025 · Source: community council records"
             uk="Оновлено: жовтень 2025 · Джерело: реєстр громади" />
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
