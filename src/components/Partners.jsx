import { Link } from 'react-router-dom';
import { T, useLang } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

const PARTNERS = [
  { name: 'USAID DOBRE', en: 'Decentralisation & strategy', uk: 'Децентралізація і стратегія' },
  { name: 'FRMD', en: 'Foundation for Local Democracy Development', uk: 'Фонд розвитку місцевої демократії' },
  { name: 'EU + BMZ + GIZ', en: 'Strong Regions programme', uk: 'Програма «Міцні регіони»' },
  { name: 'Ministry of Foreign Affairs of Denmark', en: 'Energy independence and efficiency', uk: 'Енергонезалежність та енергоефективність' },
  { name: 'Rural Women’s Business Network', en: 'Greenhouses and food security', uk: 'Теплиці та продовольча безпека' },
  { name: 'TIU-Zelenyi Hai', en: 'Solar power plants', uk: 'Сонячні електростанції' },
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
            en="Partners named in the Community Profile: strategy support, hospital renovation and solar, greenhouse development, energy independence and local renewable-energy projects."
            uk="Партнери, названі у Профілі громади: стратегічна підтримка, ремонт і СЕС для лікарні, тепличний розвиток, енергонезалежність та місцеві проєкти відновлюваної енергетики."
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
