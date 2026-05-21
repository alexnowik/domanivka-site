import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import { useLang } from './i18n.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import Home from './pages/Home.jsx';
import Needs from './pages/Needs.jsx';
import Partners from './pages/Partners.jsx';
import Projects from './pages/Projects.jsx';

function ScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (!hash) {
      window.scrollTo(0, 0);
      return;
    }

    requestAnimationFrame(() => {
      const target = document.getElementById(hash.slice(1));
      if (target) target.scrollIntoView({ block: 'start' });
    });
  }, [pathname, hash]);

  return null;
}

const META = {
  '/': {
    en: {
      title: 'Domanivka Community — Mykolaiv region, Ukraine',
      description: 'Information about Domanivska hromada, its people, current priorities, partner projects and documented community needs.',
    },
    uk: {
      title: 'Доманівська громада — Миколаївщина, Україна',
      description: 'Інформація про Доманівську громаду, її людей, пріоритети, партнерські проєкти та задокументовані потреби.',
    },
  },
  '/about': {
    en: {
      title: 'About Domanivka Community',
      description: 'Key facts, geography, settlements, history and development priorities of Domanivska settlement territorial community.',
    },
    uk: {
      title: 'Про Доманівську громаду',
      description: 'Ключові факти, географія, населені пункти, історія та пріоритети розвитку Доманівської селищної територіальної громади.',
    },
  },
  '/projects': {
    en: {
      title: 'Projects — Domanivka Community',
      description: 'Current project directions for water, healthcare, energy, roads, social support, economy and resilience.',
    },
    uk: {
      title: 'Проєкти — Доманівська громада',
      description: 'Поточні напрями проєктів у сферах води, медицини, енергетики, доріг, соціальної підтримки, економіки та стійкості.',
    },
  },
  '/needs': {
    en: {
      title: 'Priorities — Domanivka Community',
      description: 'Documented priorities from the Community Profile: water, roads, waste management, utilities, economy and public services.',
    },
    uk: {
      title: 'Пріоритети — Доманівська громада',
      description: 'Задокументовані пріоритети з Профілю громади: вода, дороги, відходи, ЖКГ, економіка та публічні послуги.',
    },
  },
  '/partners': {
    en: {
      title: 'Partners — Domanivka Community',
      description: 'Partners and programmes supporting Domanivka community, plus documents behind the community priorities.',
    },
    uk: {
      title: 'Партнери — Доманівська громада',
      description: 'Партнери та програми, що підтримують Доманівську громаду, а також документи, на яких базуються пріоритети.',
    },
  },
  '/contacts': {
    en: {
      title: 'Contacts — Domanivka Community',
      description: 'Council contacts, partnership email, departments and visitor information for Domanivska hromada.',
    },
    uk: {
      title: 'Контакти — Доманівська громада',
      description: 'Контакти ради, пошта для партнерств, відділи та інформація для візиту до Доманівської громади.',
    },
  },
};

function DocumentMeta() {
  const { pathname } = useLocation();
  const { lang } = useLang();

  useEffect(() => {
    const page = META[pathname] || META['/'];
    const meta = page[lang] || page.en;
    document.title = meta.title;

    let description = document.querySelector('meta[name="description"]');
    if (!description) {
      description = document.createElement('meta');
      description.setAttribute('name', 'description');
      document.head.appendChild(description);
    }
    description.setAttribute('content', meta.description);

    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) ogTitle.setAttribute('content', meta.title);

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) ogDescription.setAttribute('content', meta.description);
  }, [pathname, lang]);

  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
      <DocumentMeta />
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/needs" element={<Needs />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="/contacts" element={<Contacts />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}
