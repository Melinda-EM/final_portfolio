import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faWindowRestore, faXmark } from '@fortawesome/free-solid-svg-icons';
import logo from '../../assets/img/MEM.png';

export const Header = () => {
  return (
    <header className="bg-light-blue shadow-[0px_10px_19px_2px] shadow-light-purple p-4">
      <nav className="flex justify-between items-center max-w-6xl mx-auto">
        <div className="w-20">
          <a href='/'><img src={logo} alt="logo"/></a>
        </div>
        <ul className="flex space-x-6 text-3xl font-fsGravity text-purple">
          <li className="hover:text-dark-blue">
            <a href="#about" className='cursor-hand'>À propos</a>
          </li>
          <li className="hover:text-dark-blue">
            <a href="#competences" className='cursor-hand'>Compétences</a>
          </li>
          <li className="hover:text-dark-blue">
            <a href="#parcours" className='cursor-hand'>Parcours</a>
          </li>
          <li className="hover:text-dark-blue">
            <a href="#projets" className="cursor-hand">Projets</a>
          </li>
          <li className="hover:text-dark-blue">
            <a href="#contact" className='cursor-hand'>Contact</a>
          </li>
        </ul>
        <div className='flex justify-center mx-6 gap-3'>
          <FontAwesomeIcon icon={faWindowMinimize}/>
          <FontAwesomeIcon icon={faWindowRestore}/>
          <FontAwesomeIcon icon={faXmark}/>
        </div>
      </nav>
    </header>
  );
};