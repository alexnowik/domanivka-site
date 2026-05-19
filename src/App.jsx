import { useEffect } from 'react';
import { Route, Routes, useLocation } from 'react-router-dom';
import Footer from './components/Footer.jsx';
import Header from './components/Header.jsx';
import About from './pages/About.jsx';
import Contacts from './pages/Contacts.jsx';
import Home from './pages/Home.jsx';
import Needs from './pages/Needs.jsx';
import Partners from './pages/Partners.jsx';
import Projects from './pages/Projects.jsx';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => { window.scrollTo(0, 0); }, [pathname]);
  return null;
}

export default function App() {
  return (
    <>
      <ScrollToTop />
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
