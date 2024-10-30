import html from '../../assets/img/html.png';
import js from '../../assets/img/js.png';
import php from '../../assets/img/php.png';
import { WindowsContainer } from '../layout/WindowsContainer';

export const Skills = () => {
  return (
    <WindowsContainer id="competences" title="Compétences">
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-light-purple p-4 rounded-lg">
          <h3 className="font-montserrat mb-2">Langages</h3>
          <ul className="list-disc list-inside font-consolas">
            <li><img src={html} alt="html" width={50}/></li>
            <li>CSS</li>
            <li><img src={js} alt="javascript" width={50}/></li>
            <li><img src={php} alt="php" width={50}/></li>
            <li>Python</li>
            <li>Go</li>
          </ul>
        </div>
        {/* ... autres sections de compétences ... */}
      </div>
    </WindowsContainer>
  );
};