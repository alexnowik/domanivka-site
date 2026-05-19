import { Link } from 'react-router-dom';
import { useLang } from '../i18n.jsx';

export default function PageIntro({ crumb, title, lede }) {
  const { lang } = useLang();
  const tr = (pair) => (lang === 'uk' ? pair.uk : pair.en);
  return (
    <section className="page-intro">
      <div className="wrap">
        <div className="inner">
          <div className="left">
            <div className="breadcrumbs">
              <Link to="/">{lang === 'uk' ? 'Головна' : 'Home'}</Link>
              <span>›</span>
              <span>{tr(crumb)}</span>
            </div>
            <h1 className="display">{tr(title)}</h1>
          </div>
          <div className="right">
            <p className="lede" style={{ fontSize: 'clamp(18px, 1.6vw, 22px)' }}>
              {tr(lede)}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
