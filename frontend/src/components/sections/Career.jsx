import { useState } from 'react';
import WindowsContainer from '../layout/WindowsContainer';
import { career } from '../../data/career';
import { WindowsButton } from '../ui/Button';

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
        <div className="flex flex-col md:flex-row gap-8 p-2 md:p-4">
          <div className="w-full md:w-2/3">
            <img
              src={career[currentSlideParcours].image}
              alt={career[currentSlideParcours].title}
              className="w-full h-48 md:h-80 object-cover border-2 border-purple"
            />
            <p className="mt-4 font-windows text-lg font-bold md:text-2xl text-dark-blue text-center hover:underline overflow-hidden text-ellipsis whitespace-nowrap">
              C:\Parcours\{career[currentSlideParcours].title}.exe
            </p>
            <p className="mt-2 font-consolas text-sm md:text-base">
              {career[currentSlideParcours].description}
            </p>
          </div>
          <div className="w-full md:w-1/3">
            <div className="bg-light-blue border border-purple p-4 font-consolas">
              <p className="text-lg font-bold">Navigation :</p>
              <div className="flex justify-center gap-6 mt-4">
                <WindowsButton onClick={handlePrevious}>
                  ← Précédent
                </WindowsButton>
                <WindowsButton onClick={handleNext}>
                  Suivant →
                </WindowsButton>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowsContainer>
  );
};

export default Career;
