import { useState } from 'react';
import WindowsContainer from '../layout/WindowsContainer';
import { career } from '../../data/career';

export const Career = () => {
  const [currentSlideParcours, setCurrentSlideParcours] = useState(0);

  const handlePrevious = () => {
    setCurrentSlideParcours((prev) => (prev - 1 + career.length) % career.length);
  };

  const handleNext = () => {
    setCurrentSlideParcours((prev) => (prev + 1) % career.length);
  };

  return (
    <WindowsContainer id="parcours" title="Parcours">
      <div className="relative bg-light-blue border-2 border-purple p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3 text-center">
            <img
              src={career[currentSlideParcours].image}
              alt={career[currentSlideParcours].title}
              className="w-full h-80 object-fill border-2 border-purple"
            />
            <p className="mt-4 font-windows text-2xl text-dark-blue text-center hover:underline">
              C:\Parcours\{career[currentSlideParcours].title}.exe
            </p>
            <p className="mt-2 font-consolas">
              {career[currentSlideParcours].description}
            </p>
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

      // <WindowsContainer id="parcours" title="Parcours">
      // <section className="bg-gray p-6 rounded border border-purple mt-2 mb-6">
      //   <h2 className="text-3xl font-fsGravity text-dark-blue font-bold mb-4">Présentation de mon parcours</h2>
      //   <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      //     <div className="relative w-full md:w-2/3 h-80 bg-light-blue rounded border-2 border-purple overflow-hidden">
      //       <div className="absolute top-0 left-0 w-full h-8 bg-purple flex items-center px-2">
      //         <div className="w-3 h-3 rounded-full bg-[#ff3333] mr-2"></div>
      //         <div className="w-3 h-3 rounded-full bg-[#ffff33] mr-2"></div>
      //         <div className="w-3 h-3 rounded-full bg-[#33ff33]"></div>
      //       </div>
      //       {[...Array(totalSlidesParcours)].map((_, index) => (
      //         <div
      //         key={index}
      //         className={`absolute top-8 left-0 w-full h-[calc(100%-2rem)] transition-opacity duration-500 ease-in-out p-4 ${index === currentSlideProjets ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
      //           style={{
      //             transform: `translateY(${(index - currentSlideParcours) * 10}px) scale(${1 - Math.abs(index - currentSlideParcours) * 0.05})`,
      //             zIndex: totalSlidesParcours - Math.abs(index - currentSlideParcours),
      //             opacity: 1 - Math.abs(index - currentSlideParcours) * 0.2,
      //           }}
      //         >
      //           <div className="w-full h-full border-purple flex flex-col items-center justify-center">
      //           <img src={parcours[currentSlideParcours].image} alt={`Parcours ${currentSlideParcours + 1}`} className="mb-4 w-full h-[70%] object-cover" />
      //             <p className="text-center text-sm text-purple mb-2">C:\\Parcours\\{parcours[currentSlideParcours].title}.exe</p>
      //             <p className="text-center text-sm text-purple mb-4">{parcours[currentSlideParcours].description}</p>
      //           </div>
      //         </div>
      //       ))}
      //     </div>
      //     <div className="w-full md:w-1/3 text-center md:text-left">
      //       <p className="bg-light-blue p-4 rounded border border-purple">
      //         Explication du parcours via des slides qui reprennent le concept des anciennes pages sur vieux PC
      //       </p>
      //     </div>
      //   </div>
      //   <div className="flex justify-center items-center mt-6 gap-4">
      //     <button
      //       onClick={prevSlideParcours}
      //       aria-label="Slide précédent"
      //       className="px-4 py-2 bg-gray-300 border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand font-mono transform hover:scale-105"
      //     >
      //       ← Précédent
      //     </button>
      //     <span className="font-bold text-xl text-purple">{currentSlideParcours + 1}/{totalSlidesParcours}</span>
      //     <button
      //       onClick={nextSlideParcours}
      //       aria-label="Slide suivant"
      //       className="px-4 py-2 bg-gray-300 border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand font-mono transform hover:scale-105"
      //     >
      //       Suivant →
      //     </button>
      //   </div>
      // </section>
      // </WindowsContainer>
  );
};

export default Career;