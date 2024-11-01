import { Github } from 'lucide-react';
import WindowsContainer from '../layout/WindowsContainer';
import { useState } from 'react';
import { projects } from '../../data/projects'; 

export const Projects = () => {
  const [currentSlideProjets, setCurrentSlideProjets] = useState(0); 

  const handlePrevious = () => {
    setCurrentSlideProjets((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentSlideProjets((prev) => (prev + 1) % projects.length);
  };

  return (
    <WindowsContainer id="projets" title="Projets">
      <div className="relative bg-light-blue border-2 border-purple p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 text-center">
            <img
              src={projects[currentSlideProjets].image}
              alt={projects[currentSlideProjets].title}
              className="w-full h-80 object-fill border-2 border-purple"
            />
            <p className="mt-4 font-windows text-2xl text-dark-blue text-center hover:underline">
              C:\Projets\{projects[currentSlideProjets].title}.exe
            </p>
            <p className="mt-2 font-consolas">
              {projects[currentSlideProjets].description}
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={projects[currentSlideProjets].githubLink}
                className="bg-light-blue border-t-2 border-l-2 border-b-2 border-r-2 border-purple px-4 py-1 flex items-center gap-2 hover:scale-110 cursor-hand"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="w-4 h-4" />
                Voir sur GitHub
              </a>
            </div>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-light-blue border border-purple p-4 font-consolas">
              <p>Navigation :</p>
              <div className="flex justify-center gap-4 mt-4">
                <button
                  onClick={handlePrevious}
                  className="bg-light-blue border-t-2 border-l-2 border-b-2 border-r-2 border-purple px-4 py-1 hover:scale-110 cursor-hand"
                >
                  ← Précédent
                </button>
                <button
                  onClick={handleNext}
                  className="bg-light-blue border-t-2 border-l-2 border-b-2 border-r-2 border-purple px-4 py-1 hover:scale-110 cursor-hand"
                >
                  Suivant →
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowsContainer>

    // <WindowsContainer id="projets" title="Projets">
    // <section className="bg-gray p-6 rounded shadow-md border border-purple mt-2 mb-6">
    //   <h2 className="text-3xl text-dark-blue font-fsGravity font-bold mb-4">Aperçu des projets réalisés</h2>
    //   <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
    //     <div className="relative w-full md:w-2/3 h-[500px] bg-light-blue rounded border-2 border-purple overflow-hidden">
    //       <div className="absolute top-0 left-0 w-full h-8 bg-purple flex items-center px-2">
    //         <div className="w-3 h-3 rounded-full bg-[#ff3333] mr-2"></div>
    //         <div className="w-3 h-3 rounded-full bg-[#ffff33] mr-2"></div>
    //         <div className="w-3 h-3 rounded-full bg-[#33ff33]"></div>
    //       </div>
    //       {projets.map((projet, index) => (
    //         <div
    //           key={index}
    //           className={`absolute top-8 left-0 w-full h-[calc(100%-2rem)] transition-opacity duration-500 ease-in-out p-4 ${index === currentSlideProjets ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
    //         >
    //           <div className="w-full h-full border-purple flex flex-col items-center justify-center">
    //             <img src={projet.image} alt={`Projet ${index + 1}`} className="mb-4 w-full h-[70%] object-cover" />
    //             <p className="text-center text-sm text-purple mb-2">C:\\Projets\\{projet.title}.exe</p>
    //             <p className="text-center text-sm text-purple mb-4">{projet.description}</p>
    //             <div className="flex space-x-4 mt-4">
    //               <a
    //                 href={projet.githubLink}
    //                 className="border cursor-hand rounded-md px-2 py-1 text-sm text-blue-600 hover:bg-blue-100 flex items-center"
    //                 target="_blank"
    //                 rel="noopener noreferrer"
    //               >
    //                 <Github className="w-4 h-4 mr-2"/>
    //                 GitHub
    //               </a>
    //             </div>
    //           </div>
    //         </div>
    //       ))}
    //     </div>
    //     <div className="w-full md:w-1/3 text-center md:text-left">
    //       <p className="bg-light-blue p-4 rounded border border-purple">
    //         Présentation de certains projets que j'ai pu réaliser durant mes 2 années de formation
    //         <br/>
    //         Chaque projet représente une étape clé de mon apprentissage. N'hésitez pas à explorer ces réalisations et à me contacter si vous souhaitez en discuter !
    //       </p>
    //     </div>
    //   </div>
    //   <div className="flex justify-center items-center mt-6 gap-4">
    //     <button
    //       onClick={prevSlideProjets}
    //       aria-label="Slide précédent"
    //       className="px-4 py-2 font-consolas border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand transform hover:scale-105"
    //     >
    //       ← Précédent
    //     </button>
    //     <span className="font-consolas text-xl text-purple">Projet {currentSlideProjets + 1}/{totalSlidesProjets}</span>
    //     <button
    //       onClick={nextSlideProjets}
    //       aria-label="Slide suivant"
    //       className="px-4 py-2 bg-gray-300 border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand font-consolas transform hover:scale-105"
    //     >
    //       Suivant →
    //     </button>
    //   </div>
    // </section>
    // </WindowsContainer>
  );
};

export default Projects;
