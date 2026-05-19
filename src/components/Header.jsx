import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import { MenuIcon } from '../icons.jsx';

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
      <span className="brand-mark">D</span>
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
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((v) => !v)}
          >
            <MenuIcon />
          </button>
        </div>
      </div>
    </header>
  );
}
