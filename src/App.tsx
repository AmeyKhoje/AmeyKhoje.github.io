import 'assets/styles/style.scss';
import Banner from './components/sections/banner/Banner';
import About from './components/sections/about/About';
import WorkExperience from './components/sections/work-experience/WorkExperience';
import Skills from './components/sections/skills/Skills';
import { SKILLS } from './utils/constants';
import Contact from './components/sections/contact/Contact';
import { useEffect } from 'react';
import { applySinglePageScroll } from './utils/helper';

const App = () => {
  useEffect(() => {
    applySinglePageScroll();
  }, []);
  return (
    <div>
      <Banner />
      <About />
      <WorkExperience />
      <Skills set={SKILLS} />
      <Contact />
    </div>
  );
};

export default App;
