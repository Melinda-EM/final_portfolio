import icone from '../../assets/img/Melinda.jpg';
import WindowsContainer from '../layout/WindowsContainer';
import CV from '../../assets/img/CV Dev Melinda ESTEVES MENDES.pdf';
import { WindowsLink } from '../ui/Button';

export const About = () => {
  return (
    <WindowsContainer id="a-propos" title="À propos">
      <div className="flex flex-col md:flex-row gap-8">
        <div className="w-full md:w-1/4 flex justify-center md:justify-start">
          <img 
            src={icone} 
            alt="Profile" 
            className="w-48 md:w-64 grayscale mt-4 md:mt-20 border-2 border-purple p-1 bg-white max-w-full"
          />
        </div>
        <div className="w-full md:w-3/4 px-4 md:px-0">
          <h2 className="text-4xl font-fsGravity text-dark-blue font-bold mb-4 text-center">Qui suis-je ?</h2>
          <div className="bg-light-blue border border-purple p-4 font-consolas">
            <p>
              Pour vous parler un peu de moi :
              <br /><br />
              Passionnée d&#39;informatique et de jeux vidéo comme Call Of Duty, Final Fantasy, Dead Or Alive ou encore Les Sims, et avec un esprit créatif, 
              j&#39;ai décidé, après trois ans dans le milieu hôtelier, de me reconvertir dans le développement web.
              <br /><br />
              Cette nouvelle aventure m&#39;a amenée à la Web@cadémie by Epitech, d&#39;où je suis aujourd&#39;hui diplômée, pour assouvir ma curiosité pour l&#39;informatique et perfectionner mes compétences.
              Ce qui me motive, c&#39;est de pouvoir donner vie aux idées en créant des expériences interactives et innovantes.
              <br /><br />
              L&#39;informatique est pour moi un terrain de créativité, où chaque ligne de code me rapproche d&#39;un résultat concret et utile.
              <br /><br />
              Comme j&#39;aime à dire, je ne suis pas là pour chasser des papillons.
            </p>
          </div>

          <div className="mt-6">
            <div className="bg-light-blue border-purple p-4 items-baseline">
              <h2 className="text-4xl font-fsGravity font-bold text-dark-blue mb-4 text-center">Liens utiles</h2>
              <div className="flex flex-col md:flex-row justify-center space-x-0 md:space-x-4 mb-4">
                <WindowsLink
                  href="https://github.com/Melinda-EM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 md:mb-0"
                >
                  <span className="mr-2">💻</span>
                  GitHub
                </WindowsLink>
                <WindowsLink
                  href="https://www.linkedin.com/in/melinda-e-m/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 md:mb-0"
                >
                  <span className="mr-2">💼</span>
                  LinkedIn
                </WindowsLink>
                <WindowsLink
                  href={CV}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mb-2 md:mb-0"
                >
                  <span className="mr-2">👀</span>
                  Voir CV
                </WindowsLink>
                <WindowsLink
                  href={CV}
                  download="CV_Melinda_ESTEVES_MENDES.pdf"
                  className="mb-2 md:mb-0"
                >
                  <span className="mr-2">💾</span>
                  Télécharger CV
                </WindowsLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </WindowsContainer>
  );
};
