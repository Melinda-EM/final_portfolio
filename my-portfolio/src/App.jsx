import './index.css'
import { Footer } from './components/layout/Footer';
import { Header } from './components/layout/Header';
import { About } from './components/sections/About';
import Career from './components/sections/Career';
import { Skills } from './components/sections/Skills';
import Projects from './components/sections/Projects';
import { Contact } from './components/sections/Contact';


export default function Portfolio() {

  return (
    <div className="bg-blue-100 cursor-custom min-h-screen flex flex-col">
      <Header />
        <main className="flex-grow max-w-6xl mx-auto mt-8 p-4">
          <About/>
          <Skills/>
          <Career/>
          <Projects/>
          <Contact/>
        </main>
      <Footer />
    </div>
  );
}
