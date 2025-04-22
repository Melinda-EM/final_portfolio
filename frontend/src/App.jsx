import './index.css';
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import Career from './components/sections/Career';
import { Skills } from './components/sections/Skills';
import Projects from './components/sections/Projects';
import { Contact } from './components/sections/Contact';
import { useState, useEffect } from 'react';
import { FaArrowUp } from 'react-icons/fa'; 

export default function App() {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScroll(window.scrollY > 300);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="bg-b cursor-custom min-h-screen flex flex-col relative overflow-x-hidden">
      <Header />
      <main className="flex-grow w-full max-w-6xl mx-auto px-4 md:px-6 lg:px-8 py-8">
        <About />
        <Skills />
        <Career />
        <Projects />
        <Contact />
      </main>
      <Footer className="mt-auto" />
      
      {showScroll && (
        <button 
          onClick={scrollToTop} 
          className="fixed bottom-8 right-8 z-50 bg-light-purple text-white p-3 rounded-full shadow-md hover:bg-dark-blue transition duration-300"
          aria-label="Retour en haut"
        >
          <FaArrowUp size={25} />
        </button>
      )}
    </div>
  );
}
