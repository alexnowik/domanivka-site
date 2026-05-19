import { Link } from 'react-router-dom';
import { T } from '../i18n.jsx';
import { ArrowIcon } from '../icons.jsx';

export default function CtaBand() {
  return (
    <section className="cta-band">
      <div className="wrap">
        <div className="cta-inner">
          <T as="div" className="eyebrow on-dark"
             en="Work with the community"
             uk="Співпраця з громадою" />
          <T as="h2" className="cta-h"
             en="If you are considering Domanivka — we are ready to begin the conversation."
             uk="Якщо ви розглядаєте Доманівку — ми готові починати розмову." />
          <T as="p" className="cta-sub"
             en="Our partnership office responds within two working days. We can share documents, financials, a concrete project list, or arrange a site visit."
             uk="Наш відділ співпраці відповідає протягом двох робочих днів. Можемо надіслати документи, фінансову звітність, перелік проєктів або організувати візит на місце." />
          <div className="row" style={{ gap: 12, marginTop: 24 }}>
            <Link to="/contacts" className="btn btn-primary on-dark">
              <T en="Contact the partnership office" uk="Написати у відділ співпраці" />
              <ArrowIcon />
            </Link>
            <a href="#" className="btn btn-secondary on-dark">
              <T en="Download community brief (PDF, 4.2MB)"
                 uk="Завантажити брошуру (PDF, 4,2МБ)" />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
