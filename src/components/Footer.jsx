import { Link } from 'react-router-dom';
import { T } from '../i18n.jsx';
import { Brand } from './Header.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="wrap">
        <div className="grid">
          <div>
            <Brand />
            <T
              as="p"
              className="blurb"
              en="The official site of Domanivka territorial community — 31 settlements in Voznesensk district, Mykolaiv region. Built for transparency with our partners and our people."
              uk="Офіційний сайт Доманівської територіальної громади — 31 населений пункт на півдні Миколаївщини. Створено для прозорості перед партнерами та мешканцями."
            />
          </div>
          <div>
            <T as="h5" en="The community" uk="Громада" />
            <ul>
              <li><Link to="/about"><T en="About" uk="Про громаду" /></Link></li>
              <li><Link to="/about#settlements"><T en="Settlements" uk="Населені пункти" /></Link></li>
              <li><Link to="/about#history"><T en="History" uk="Історія" /></Link></li>
              <li><Link to="/about#strategy"><T en="Strategy 2026–2030" uk="Стратегія 2026–2030" /></Link></li>
            </ul>
          </div>
          <div>
            <T as="h5" en="Work with us" uk="Співпраця" />
            <ul>
              <li><Link to="/projects"><T en="Projects" uk="Проєкти" /></Link></li>
              <li><Link to="/needs"><T en="Open needs" uk="Відкриті потреби" /></Link></li>
              <li><Link to="/partners"><T en="Partners" uk="Партнери" /></Link></li>
              <li><a href="#"><T en="Documents" uk="Документи" /></a></li>
            </ul>
          </div>
          <div>
            <T as="h5" en="Contact" uk="Контакти" />
            <ul>
              <li>
                smt Domanivka, 56400<br />
                <T en="Voznesensk district, Mykolaiv Oblast" uk="Вознесенський район, Миколаївщина" />
              </li>
              <li><a href="https://domanivska-gromada.gov.ua" target="_blank" rel="noopener noreferrer">domanivska-gromada.gov.ua</a></li>
              <li><a href="mailto:sr@domanivska-gromada.gov.ua">sr@domanivska-gromada.gov.ua</a></li>
              <li><Link to="/contacts"><T en="All contacts →" uk="Усі контакти →" /></Link></li>
            </ul>
          </div>
        </div>
        <div className="legal">
          <span>
            © 2026 Domanivka Hromada ·{' '}
            <T en="All rights reserved" uk="Усі права захищено" />
          </span>
          <T
            en="Built openly · Source: Community Profile, Domanivka, 2024"
            uk="Створено відкрито · Джерело: Профіль громади, Доманівка, 2024"
          />
        </div>
      </div>
    </footer>
  );
}
