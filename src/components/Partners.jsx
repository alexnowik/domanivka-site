import { Link } from 'react-router-dom';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const PARTNERS = [
  { name: 'NEFCO', en: 'Denmark · Infrastructure & clean water', uk: 'Данія · Інфраструктура та чиста вода' },
  { name: 'USAID DOBRE', en: 'Decentralisation & strategy', uk: 'Децентралізація і стратегія' },
  { name: 'GIZ', en: 'Germany · Community development', uk: 'Німеччина · Розвиток громади' },
  { name: 'IOM', en: 'IDP support & humanitarian', uk: 'Підтримка ВПО та гуманітарна допомога' },
  { name: 'UNOPS', en: 'Infrastructure & procurement', uk: 'Інфраструктура та закупівлі' },
  { name: 'Danish Embassy', en: 'IDP housing programme', uk: 'Програма житла для ВПО' },
];

export default function Partners() {
  const { lang } = useLang();
  return (
    <section className="section partners-band">
      <div className="wrap">
        <div className="section-head">
          <div className="left">
            <T as="div" className="eyebrow" en="Partners and donors" uk="Партнери та донори" />
            <T as="h2"
               en="The partners who stand with Domanivka."
               uk="Партнери, які поряд із Доманівкою." />
          </div>
          <T
            as="div"
            className="right"
            en="Multilateral donors, bilateral agencies, and humanitarian organisations — every partner is named, and every contribution is documented in our public reports."
            uk="Міжнародні донори, двосторонні агенції та гуманітарні організації — кожного партнера називаємо, кожен внесок документуємо у публічних звітах."
          />
        </div>

        <div className="partners-grid">
          {PARTNERS.map((p) => (
            <div key={p.name} className="p-logo">
              {p.name} <small>{lang === 'uk' ? p.uk : p.en}</small>
            </div>
          ))}
        </div>

        <div className="partners-cta">
          <Link to="/partners" className="btn btn-ghost">
            <T en="Meet our partners" uk="Наші партнери" />
            <ArrowIcon />
          </Link>
        </div>
      </div>
    </section>
  );
}
