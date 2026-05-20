import { useEffect, useState } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import { MenuIcon } from '../icons.jsx';
import { asset } from '../lib/asset.js';

const NAV_ITEMS = [
  { to: '/', en: 'Home', uk: 'Головна', end: true },
  { to: '/about', en: 'About', uk: 'Про громаду' },
  { to: '/projects', en: 'Projects', uk: 'Проєкти' },
  { to: '/needs', en: 'Needs', uk: 'Потреби' },
  { to: '/partners', en: 'Partners', uk: 'Партнери' },
  { to: '/contacts', en: 'Contacts', uk: 'Контакти' },
];

export function Brand() {
  return (
    <Link to="/" className="brand">
      <img className="brand-logo" src={asset('images/logo.png')} alt="Domanivka" />
      <span>
        Domanivka
        <small>Hromada · Voznesensk District</small>
      </span>
    </Link>
  );
}

export default function Header() {
  const { lang, setLang } = useLang();
  const [menuOpen, setMenuOpen] = useState(false);
  const { pathname } = useLocation();

  // Close on route change
  useEffect(() => { setMenuOpen(false); }, [pathname]);

  // Lock body scroll while menu is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = 'hidden';
      return () => { document.body.style.overflow = ''; };
    }
  }, [menuOpen]);

  // Close on Escape
  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="inner">
        <Brand />
        <nav className="nav" aria-label="Primary">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
            >
              {lang === 'uk' ? item.uk : item.en}
            </NavLink>
          ))}
        </nav>
        <div className="header-right">
          <div className="lang" role="group" aria-label="Language">
            <button
              type="button"
              className={lang === 'en' ? 'on' : undefined}
              onClick={() => setLang('en')}
            >
              EN
            </button>
            <button
              type="button"
              className={lang === 'uk' ? 'on' : undefined}
              onClick={() => setLang('uk')}
            >
              UK
            </button>
          </div>
          <button
            type="button"
            className={`menu-toggle${menuOpen ? ' is-open' : ''}`}
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            {menuOpen ? (
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="1.5">
                <path d="M2 2l10 10M12 2L2 12" />
              </svg>
            ) : (
              <MenuIcon />
            )}
          </button>
        </div>
      </div>

      <div
        className={`mobile-menu${menuOpen ? ' open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <nav className="mobile-nav" aria-label="Mobile">
          {NAV_ITEMS.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.end}
              className={({ isActive }) => (isActive ? 'active' : undefined)}
              onClick={() => setMenuOpen(false)}
            >
              {lang === 'uk' ? item.uk : item.en}
            </NavLink>
          ))}
        </nav>
      </div>
    </header>
  );
}
