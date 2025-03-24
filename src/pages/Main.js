import React, { useEffect } from 'react';
import Home from '../sections/Home';
import AboutSection from '../sections/AboutSection';
import Education from '../sections/Education';
import SkillsSection from '../sections/SkillsSection';
import ProjectSection from '../sections/ProjectSection';
import Contact from '../sections/Contact';

function Main() {
  // Reset scroll position on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <main>
      <Home />
      <AboutSection />
      <Education />
      <SkillsSection />
      <ProjectSection />
      <Contact />
    </main>
  );
}

export default Main;