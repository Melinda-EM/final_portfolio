import icone from '../../assets/img/Melinda.jpg';
import WindowsContainer from '../layout/WindowsContainer';
import CV from '../../assets/img/CV Dev Melinda ESTEVES MENDES.pdf';

export const About = () => {
  return (
        <WindowsContainer title="À propos">
          <div className="flex flex-col md:flex-row gap-8">
            <div className="w-full md:w-1/3">
              <img 
                src={icone} 
                alt="Profile" 
                className="w-64 grayscale mt-20 border-2 border-purple p-1 bg-white"
              />
            </div>
            <div className="w-full md:w-2/3">
              <h2 className="text-4xl font-fsGravity text-dark-blue font-bold mb-4">Qui suis-je ?</h2>
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
                  <h2 className="text-3xl font-fsGravity text-dark-blue mb-4 text-center">Liens utiles</h2>
                  <div className="flex justify-center space-x-4 mb-4">
                    <a 
                      href="https://github.com/Melinda-EM" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="
                        bg-light-blue 
                        border-t-2 border-l-2
                        border-b-2 border-r-2 border-purple
                        px-4 py-2
                        flex items-center
                        active:border-t-2 
                        active:border-l-2 
                        active:border-b-2 
                        active:border-r-2 
                        active:border-white
                        cursor-hand
                      "
                    >
                      <span className="mr-2">💻</span>
                      GitHub
                    </a>
                    <a 
                      href="https://www.linkedin.com/in/melinda-e-m/" 
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="
                        bg-light-blue 
                        border-t-2 border-l-2
                        border-b-2 border-r-2 border-purple
                        px-4 py-2
                        flex items-center
                        active:border-t-2 
                        active:border-l-2 
                        active:border-b-2 
                        active:border-r-2 
                        active:border-white
                        cursor-hand
                      "
                    >
                      <span className="mr-2">💼</span>
                      LinkedIn
                    </a>
                    <a 
                      href={CV}
                      target="_blank" 
                      rel="noopener noreferrer" 
                      className="
                        bg-light-blue 
                        border-t-2 border-l-2 
                        border-b-2 border-r-2 border-purple
                        px-4 py-2
                        flex items-center
                        active:border-t-2 
                        active:border-l-2 
                        active:border-b-2 
                        active:border-r-2 
                        active:border-white
                        cursor-hand
                      "
                    >
                      <span className="mr-2">👀</span>
                      Voir CV
                    </a>
                    <a 
                      href={CV}
                      download="CV_Melinda_ESTEVES_MENDES.pdf"
                      className="
                        bg-light-blue 
                        border-t-2 border-l-2 
                        border-b-2 border-r-2 border-purple
                        px-4 py-2
                        flex items-center
                        active:border-t-2 
                        active:border-l-2 
                        active:border-b-2 
                        active:border-r-2 
                        active:border-white
                        cursor-hand
                      "
                    >
                      <span className="mr-2">💾</span>
                      Télécharger CV
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </WindowsContainer>
  );
};