import { WindowsContainer } from '../layout/WindowsContainer';
import { Carousel } from '../ui/Carousel';
import { career } from '../../data/career';

export const Career = () => {
  return (
    <WindowsContainer id="parcours" title="Parcours">
      <h2 className="text-4xl font-fsGravity text-dark-blue font-bold mb-4">Parcours</h2>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
        <Carousel 
          items={career} 
          totalSlides={career.length} 
          type="Parcours" 
        />
        <div className="w-full md:w-1/3 text-center md:text-left">
          <p className="bg-light-blue p-4 rounded border border-purple">
            Explication du parcours via des slides qui reprennent le concept des anciennes pages sur vieux PC
          </p>
        </div>
      </div>
    </WindowsContainer>
  );
};

export default Career;