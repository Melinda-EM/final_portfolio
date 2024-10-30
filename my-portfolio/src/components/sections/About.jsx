import icone from '../../assets/img/Melinda.jpg';
import { WindowsContainer } from '../layout/WindowsContainer';

export const About = () => {
  return (
    <WindowsContainer id="about" title="À propos">
      <div className="flex items-start space-x-6">
        <div className="w-1/3">
          <div className="w-full aspect-square rounded-lg flex items-center justify-center text-gray-400">
            <img src={icone} alt="icone" className="grayscale w-56" />
          </div>
        </div>
        <div className="w-2/3">
          <h2 className="text-4xl font-fsGravity text-dark-blue font-bold mb-4">À propos</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Inventore odit libero et ab!</p>
        </div>
      </div>
    </WindowsContainer>
  );
};