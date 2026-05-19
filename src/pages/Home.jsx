import CtaBand from '../components/CtaBand.jsx';
import FeaturedProjects from '../components/FeaturedProjects.jsx';
import Hero from '../components/Hero.jsx';
import News from '../components/News.jsx';
import Numbers from '../components/Numbers.jsx';
import Partners from '../components/Partners.jsx';
import Priorities from '../components/Priorities.jsx';

export default function Home() {
  return (
    <>
      <Hero />
      <Numbers />
      <FeaturedProjects />
      <Priorities />
      <Partners />
      <News />
      <CtaBand />
    </>
  );
}
