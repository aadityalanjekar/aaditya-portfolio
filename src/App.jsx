import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';

import Navbar from './components/layout/Navbar';
import Footer from './components/sections/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import TechDesignMatrix from './components/sections/TechDesignMatrix';
import Skills from './components/sections/Skills';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Education from './components/sections/Education';
import Certifications from './components/sections/Certifications';
import Contact from './components/sections/Contact';

import LoadingScreen from './components/ui/LoadingScreen';
import ScrollProgress from './components/ui/ScrollProgress';
import BackToTop from './components/ui/BackToTop';
import CustomCursor from './components/ui/CustomCursor';

import useDarkMode from './hooks/useDarkMode';

function App() {
  const [isLoading, setIsLoading] = useState(true);
  const { darkMode, toggleDarkMode } = useDarkMode();

  useEffect(() => {
    const timer = setTimeout(() => setIsLoading(false), 1400);
    return () => clearTimeout(timer);
  }, []);

  // Lock scroll while the loading screen is up
  useEffect(() => {
    document.body.style.overflow = isLoading ? 'hidden' : 'unset';
  }, [isLoading]);

  return (
    <>
      <AnimatePresence>
        {isLoading && <LoadingScreen isLoading={isLoading} />}
      </AnimatePresence>

      {!isLoading && (
        <>
          <CustomCursor />
          <ScrollProgress />
          <Navbar darkMode={darkMode} toggleDarkMode={toggleDarkMode} />

          <main>
            <Hero />
            <About />
            <TechDesignMatrix />
            <Skills />
            <Experience />
            <Projects />
            <Education />
            <Certifications />
            <Contact />
          </main>

          <Footer />
          <BackToTop />
        </>
      )}
    </>
  );
}

export default App;
