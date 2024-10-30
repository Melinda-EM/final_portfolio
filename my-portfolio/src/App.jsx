import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faWindowRestore, faXmark } from '@fortawesome/free-solid-svg-icons';
import { Github, Globe } from 'lucide-react';
import './index.css'
import logo from './assets/img/MEM.png';
import icone from './assets/img/Melinda.jpg';
import html from './assets/img/html.png';
import js from './assets/img/js.png';
import php from './assets/img/php.png'
import previously from './assets/img/Previously.png';
import connect4 from './assets/img/connectFour.png';
import gaming from './assets/img/gaming.png';
import ecole from './assets/img/ecole.png';
import art from './assets/img/art.png';
import PropTypes from 'prop-types';
import WindowsContainer from './components/layout/WindowsContainer';

const projets = [
  {
    image: previously,
    githubLink: 'https://github.com/Melinda-EM/Previously_on',
    title: 'Previously_on',
    description: 'Projet visant à utiliser l\'API de Betaseries pour regrouper les séries vues et à voir.',
  },
  {
    image: connect4,
    githubLink: 'https://github.com/Melinda-EM/ConnectFour',
    title: 'ConnectFour',
    description: 'Création d\'un puissance 4.',
  },
  {
    image: gaming,
    githubLink: 'https://github.com/user/repo-3',
    title: 'Html Gaming',
    description: 'Création d\'un jeu vidéo de type fighting game',
  },
  // Ajoute d'autres projets ici
];

const parcours = [
  {
    image: art,
    title: 'Bac STD2A',
    description: 'Projet visant à utiliser l\'API de Betaseries pour regrouper les séries vues et à voir.',
  },
  {
    image: ecole,
    title: 'Formation Réceptionniste',
    description: 'Création d\'un puissance 4.',
  },
  // {
  //   image: gaming,
  //   title: 'Html Gaming',
  //   description: 'Création d\'un jeu vidéo de type fighting game',
  // },
  // Ajoute d'autres projets ici
];


export default function Portfolio() {
  const [currentSlideParcours, setCurrentSlideParcours] = useState(0);
  const [currentSlideProjets, setCurrentSlideProjets] = useState(0);
  const totalSlidesParcours = parcours.length;
  const totalSlidesProjets = projets.length;

  const nextSlideParcours = () => {
    setCurrentSlideParcours((prev) => (prev + 1) % totalSlidesParcours);
  };

  const prevSlideParcours = () => {
    setCurrentSlideParcours((prev) => (prev - 1 + totalSlidesParcours) % totalSlidesParcours);
  };

  const nextSlideProjets = () => {
    setCurrentSlideProjets((prev) => (prev + 1) % totalSlidesProjets);
  };

  const prevSlideProjets = () => {
    setCurrentSlideProjets((prev) => (prev - 1 + totalSlidesProjets) % totalSlidesProjets);
  };


  return (
    <div className="min-h-screen bg-blue-100 cursor-custom">
      <header className="bg-gradient-rainbow shadow-[0px_10px_19px_2px] shadow-light-purple p-4 mb-5">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <div className="w-20"><a href='/'><img src={logo} alt="logo" className='cursor-hand'/></a></div>
          <ul className="flex space-x-6 text-3xl font-fsGravity text-dark-blue">
            <li className="hover:text-purple">
              <a href="#about" className='cursor-hand'>À propos</a>
            </li>
            <li className="hover:text-purple">
              <a href="#competences" className='cursor-hand'>Compétences</a>
            </li>
            <li className="hover:text-purple">
              <a href="#parcours" className='cursor-hand'>Parcours</a>
            </li>
            <li className="hover:text-purple">
              <a href="#projets" className="cursor-hand">Projets</a>
            </li>
            <li className="hover:text-purple">
              <a href="#contact" className='cursor-hand'>Contact</a>
            </li>
          </ul>
        </nav>
      </header>

      <main className="max-w-6xl mx-auto mt-8 p-4">
        <WindowsContainer id="about" title="A propos">
        <section className="bg-light-blue p-6 rounded-lg shadow-md mt-2 mb-6">
          <div className="flex items-start space-x-6">
            <div className="w-1/3">
              <div className="w-full aspect-square rounded-lg flex items-center justify-center">
                <img src={icone} alt="icone" className="grayscale w-56" />
              </div>
            </div>
            <div className="w-2/3">
              <h2 className="text-3xl font-fsGravity text-dark-blue font-bold mb-4">Qui suis-je ?</h2>
              <p className='font-consolas'>Pour vous parler un peu de moi :
              Passionnée de jeux vidéos comme Call Of Duty, Final Fantasy, Dead Or Alive ou encore Les Sims pour n'en citer que quelques uns. J'aime aussi Stitch, c'est un peu mon animal spirituel et il m'accompagne dans chaque projet.

              Après 3 ans dans milieu hôtellier, j'ai décidé de me reconvertir et de faire le grand plongeon dans l'univers du Développement Web et j'ai entamée ma quête avec la formation de la Web@cadémie by Epitech pour étancher ma soif d'apprentissage et m'améliorer, si ce n'est de me perfectionner dans ce domaine si vaste.

              Comme j'aime à dire, Je ne suis pas là pour chasser des papillons.
              </p>
            </div>
          </div>
        </section>
        </WindowsContainer>

        <WindowsContainer id="competences" title="Compétences">
        <section className="bg-gray p-6 rounded-lg shadow-md mt-2 mb-6">
          <h2 className="text-3xl font-fsGravity text-dark-blue font-bold mb-4">Acquis</h2>
          <div className="grid grid-cols-3 gap-4">
            <div className="bg-light-purple p-4 rounded-lg">
              <h3 className="font-montserrat mb-2">Langages</h3>
              <ul className="list-none flex flex-wrap gap-2">
                <li className="flex items-center">
                  <img src={html} alt="HTML" width={30} className="mr-2" />
                  <span>HTML</span>
                </li>
                {/* <li className="flex items-center">
                  <img src={cssIcon} alt="CSS" width={30} className="mr-2" />
                  <span>CSS</span>
                </li> */}
                <li className="flex items-center">
                  <img src={js} alt="JavaScript" width={30} className="mr-2" />
                  <span>JavaScript</span>
                </li>
                <li className="flex items-center">
                  <img src={php} alt="PHP" width={30} className="mr-2" />
                  <span>PHP</span>
                </li>
                {/* <li className="flex items-center">
                  <img src={python} alt="Python" width={30} className="mr-2" />
                  <span>Python</span>
                </li>
                <li className="flex items-center">
                  <img src={go} alt="Go" width={30} className="mr-2" />
                  <span>Go</span>
                </li> */}
              </ul>
            </div>
            <div className="bg-blue p-4 rounded-lg">
              <h3 className="font-montserrat mb-2">Frameworks</h3>
              <ul className="list-none flex flex-wrap gap-2">
                <li className="flex items-center"><span>React</span></li>
                <li className="flex items-center"><span>Symfony</span></li>
                <li className="flex items-center"><span>Express.js</span></li>
                <li className="flex items-center"><span>Django</span></li>
              </ul>
            </div>
            <div className="bg-dark-blue p-4 rounded-lg">
              <h3 className="font-montserrat mb-2">Soft-skills</h3>
              <ul className="list-disc list-inside font-consolas">
                <li>Leadership</li>
                <li>Organisation</li>
                <li>Travail d'équipe</li>
                <li>Créativité</li>
                <li>Prise d'initiative</li>
                <li>Adaptabilité</li>
              </ul>
            </div>
          </div>
        </section>
      </WindowsContainer>
        
      <WindowsContainer id="parcours" title="Parcours">
        <section className="bg-gray p-6 rounded border border-purple mt-2 mb-6">
          <h2 className="text-3xl font-fsGravity text-dark-blue font-bold mb-4">Présentation de mon parcours</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-full md:w-2/3 h-80 bg-light-blue rounded border-2 border-purple overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 bg-purple flex items-center px-2">
                <div className="w-3 h-3 rounded-full bg-[#ff3333] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffff33] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#33ff33]"></div>
              </div>
              {[...Array(totalSlidesParcours)].map((_, index) => (
                <div
                key={index}
                className={`absolute top-8 left-0 w-full h-[calc(100%-2rem)] transition-opacity duration-500 ease-in-out p-4 ${index === currentSlideProjets ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                  style={{
                    transform: `translateY(${(index - currentSlideParcours) * 10}px) scale(${1 - Math.abs(index - currentSlideParcours) * 0.05})`,
                    zIndex: totalSlidesParcours - Math.abs(index - currentSlideParcours),
                    opacity: 1 - Math.abs(index - currentSlideParcours) * 0.2,
                  }}
                >
                  <div className="w-full h-full border-purple flex flex-col items-center justify-center">
                  <img src={parcours[currentSlideParcours].image} alt={`Parcours ${currentSlideParcours + 1}`} className="mb-4 w-full h-[70%] object-cover" />
                    <p className="text-center text-sm text-purple mb-2">C:\\Parcours\\{parcours[currentSlideParcours].title}.exe</p>
                    <p className="text-center text-sm text-purple mb-4">{parcours[currentSlideParcours].description}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/3 text-center md:text-left">
              <p className="bg-light-blue p-4 rounded border border-purple">
                Explication du parcours via des slides qui reprennent le concept des anciennes pages sur vieux PC
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              onClick={prevSlideParcours}
              aria-label="Slide précédent"
              className="px-4 py-2 bg-gray-300 border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand font-mono transform hover:scale-105"
            >
              ← Précédent
            </button>
            <span className="font-bold text-xl text-purple">{currentSlideParcours + 1}/{totalSlidesParcours}</span>
            <button
              onClick={nextSlideParcours}
              aria-label="Slide suivant"
              className="px-4 py-2 bg-gray-300 border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand font-mono transform hover:scale-105"
            >
              Suivant →
            </button>
          </div>
        </section>
      </WindowsContainer>

      <WindowsContainer id="projets" title="Projets">
        <section className="bg-gray p-6 rounded shadow-md border border-purple mt-2 mb-6">
          <h2 className="text-3xl text-dark-blue font-fsGravity font-bold mb-4">Aperçu des projets réalisés</h2>
          <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
            <div className="relative w-full md:w-2/3 h-[500px] bg-light-blue rounded border-2 border-purple overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-8 bg-purple flex items-center px-2">
                <div className="w-3 h-3 rounded-full bg-[#ff3333] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#ffff33] mr-2"></div>
                <div className="w-3 h-3 rounded-full bg-[#33ff33]"></div>
              </div>
              {projets.map((projet, index) => (
                <div
                  key={index}
                  className={`absolute top-8 left-0 w-full h-[calc(100%-2rem)] transition-opacity duration-500 ease-in-out p-4 ${index === currentSlideProjets ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
                >
                  <div className="w-full h-full border-purple flex flex-col items-center justify-center">
                    <img src={projet.image} alt={`Projet ${index + 1}`} className="mb-4 w-full h-[70%] object-cover" />
                    <p className="text-center text-sm text-purple mb-2">C:\\Projets\\{projet.title}.exe</p>
                    <p className="text-center text-sm text-purple mb-4">{projet.description}</p>
                    <div className="flex space-x-4 mt-4">
                      <a
                        href={projet.githubLink}
                        className="border cursor-hand rounded-md px-2 py-1 text-sm text-blue-600 hover:bg-blue-100 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Github className="w-4 h-4 mr-2"/>
                        GitHub
                      </a>
                      {/* <a
                        href={projet.demoLink}
                        className="border cursor-hand rounded-md px-2 py-1 text-sm text-blue-600 hover:bg-blue-100 flex items-center"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <Globe className="w-4 h-4 mr-2" />
                        Demo
                      </a> */}
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <div className="w-full md:w-1/3 text-center md:text-left">
              <p className="bg-light-blue p-4 rounded border border-purple">
                Présentation de certains projets que j'ai pu réaliser durant mes 2 années de formation
                <br/>
                Chaque projet représente une étape clé de mon apprentissage. N'hésitez pas à explorer ces réalisations et à me contacter si vous souhaitez en discuter !
              </p>
            </div>
          </div>
          <div className="flex justify-center items-center mt-6 gap-4">
            <button
              onClick={prevSlideProjets}
              aria-label="Slide précédent"
              className="px-4 py-2 font-consolas border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand transform hover:scale-105"
            >
              ← Précédent
            </button>
            <span className="font-consolas text-xl text-purple">Projet {currentSlideProjets + 1}/{totalSlidesProjets}</span>
            <button
              onClick={nextSlideProjets}
              aria-label="Slide suivant"
              className="px-4 py-2 bg-gray-300 border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand font-consolas transform hover:scale-105"
            >
              Suivant →
            </button>
          </div>
        </section>
      </WindowsContainer>

      <WindowsContainer id="contact" title="Contact">
        <section className="bg-gray p-6 rounded-lg shadow-md mt-2 mb-6">
          <h2 className="text-3xl text-dark-blue font-fsGravity font-bold mb-4">Envie de me contacter ?</h2>
          <form className="space-y-4">
            <div>
              <label htmlFor="name" className="block mb-1">Nom</label>
              <input id="name" placeholder="Votre nom" className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="email" className="block mb-1">Email</label>
              <input id="email" type="email" placeholder="Votre email" className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="phone" className="block mb-1">Téléphone</label>
              <input id="phone" type="tel" placeholder="Votre numéro de téléphone" className="border rounded-md p-2 w-full" />
            </div>
            <div>
              <label htmlFor="message" className="block mb-1">Message</label>
              <textarea id="message" placeholder="Votre message" rows="4" className="border rounded-md p-2 w-full" />
            </div>
            <div className='flex justify-center items-center'>
              <button type="submit" className="w-64 bg-purple text-white rounded-md p-2 cursor-hand">Envoyer</button>
            </div>
          </form>
        </section>
        </WindowsContainer>
      </main>

      <footer className="bg-gradient-rainbow shadow-[0px_-10px_19px_2px] mt-5 shadow-light-purple p-4 text-center">
        <p>&copy; 2024 Melinda ESTEVES MENDES - All Rights Reserved</p>
      </footer>
    </div>
  );
}
