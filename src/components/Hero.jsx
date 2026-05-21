import { Link } from 'react-router-dom';
import { T } from '../i18n.jsx';
import { ArrowIcon, CameraIcon, HillsIcon } from '../icons.jsx';
import { asset } from '../lib/asset.js';

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
            en="Domanivska settlement territorial community was formed in 2018 by uniting Petropavlivka and Tsaredarivka councils, then expanded in 2020 when four more village councils joined. Today it covers 31 settlements — Domanivka and 30 villages — across 729.7 km² of the Voznesensk district, Mykolaiv region. The Community Profile names water, roads, utilities, jobs and investment conditions as practical priorities for the next stage."
            uk="Доманівська селищна територіальна громада утворена 2018 року, у 2020-му до неї приєдналися ще чотири сільради. Сьогодні це 31 населений пункт — смт Доманівка та 30 сіл — на 729,7 км² у Вознесенському районі Миколаївщини. Разом із партнерами ми модернізуємо водогони, підтримуємо родини ВПО та розбудовуємо спроможності для людей, які лишилися."
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
            <img
              className="photo-img"
              src={asset('images/domanivka_ponorama.png')}
              alt="Domanivka"
              loading="lazy"
              onError={(e) => { e.currentTarget.style.display = 'none'; }}
            />
            <div className="photo-label">
              <T
                as="span"
                className="tag"
                en="Photo · smt Domanivka on the Chortala river"
                uk="Фото · смт Доманівка на р. Чортала"
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
              en="A settlement territorial community in Voznesensk district, Mykolaiv region. 31 settlements, 14,401 residents, 729.7 km² of chornozem steppe along the Chortala, Bakshala and Chychykliia rivers. 47°37′N · 30°58′E."
              uk="Селищна територіальна громада у Вознесенському районі Миколаївщини. 31 населений пункт, 14 401 мешканець, 729,7 км² чорноземного степу вздовж річок Чортала, Бакшала та Чичиклія. 47°37′N · 30°58′E."
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
