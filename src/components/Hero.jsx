import { Link } from 'react-router-dom';
import { T } from '../i18n.jsx';
import { ArrowIcon, CameraIcon, HillsIcon } from '../icons.jsx';

export default function Hero() {
  return (
    <section className="hero">
      <div className="wrap hero-inner">
        <div className="hero-text">
          <T as="div" className="eyebrow"
             en="Mykolaiv region · Ukraine"
             uk="Миколаївська область · Україна" />
          <h1 className="display hero-h1">
            <T en="A resilient community" uk="Стійка громада," />
            <br />
            <em className="hero-em">
              <T en="rebuilding, developing," uk="що відбудовується, розвивається" />
            </em>
            <br />
            <T en="creating opportunity." uk="і створює можливості." />
          </h1>
          <T
            as="p"
            className="lede hero-lede"
            en="Domanivka hromada is home to thirty-one settlements in southern Ukraine. We are working with partners to repair what war damaged, support displaced families, and build long-term capacity for the people who stayed."
            uk="Доманівська громада об’єднує тридцять один населений пункт на півдні України. Разом із партнерами ми відновлюємо пошкоджене війною, допомагаємо переселенцям і розбудовуємо громаду для людей, які лишилися."
          />
          <div className="row hero-ctas">
            <Link to="/projects" className="btn btn-primary">
              <T en="View our projects" uk="Наші проєкти" />
              <ArrowIcon />
            </Link>
            <Link to="/needs" className="btn btn-secondary">
              <T en="Support the community" uk="Підтримати громаду" />
            </Link>
            <Link to="/contacts" className="btn btn-ghost">
              <T en="Get in touch" uk="Зв’язатися" />
              <ArrowIcon />
            </Link>
          </div>
        </div>

        <div className="hero-media">
          <div className="photo tint-dark hero-photo">
            <div className="ph-center">
              <HillsIcon />
            </div>
            <div className="photo-label">
              <T
                as="span"
                className="tag"
                en="Photo · Domanivka centre, summer 2025"
                uk="Фото · Центр Доманівки, літо 2025"
              />
              <span className="icn">
                <CameraIcon />
              </span>
            </div>
          </div>
          <div className="hero-aside">
            <T as="div" className="hero-aside-tag" en="Quick read" uk="Коротко" />
            <T
              as="p"
              en="An amalgamated hromada in Voznesensk district, Mykolaiv region. 31 settlements, 14,398 residents, 729 km² of black-earth steppe; 80 km of the P-75 national highway."
              uk="Об’єднана громада у Вознесенському районі Миколаївщини. 31 населений пункт, 14 398 мешканців, 729 км² чорноземного степу; 80 км траси Р-75."
            />
            <Link className="aside-link" to="/about">
              <T en="Read about the community →" uk="Більше про громаду →" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
