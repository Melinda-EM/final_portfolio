import { Github } from 'lucide-react';
import { WindowsContainer } from '../layout/WindowsContainer';
import { Carousel } from '../ui/Carousel';
import { projects } from '../../data/projects';

export const Projects = () => {
    return (
  <WindowsContainer id="projets" title="Projets">
    <h2 className="text-4xl text-dark-blue font-bold mb-4">Projets</h2>
    <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
      <div className="relative w-full md:w-2/3 h-[500px] bg-light-blue rounded border-2 border-purple overflow-hidden">
      <Carousel
        items={projects.map((projet, index) => (
            <div key={index} className="project-slide">
            <img src={projet.image} alt={`Projet ${index + 1}`} className="w-full h-auto" />
            <p>C:\\Projets\\{projet.title}.exe</p>
            <p>{projet.description}</p>
            <a
                href={projet.githubLink}
                className="border rounded-md px-2 py-1 text-blue-600 flex items-center"
                target="_blank"
                rel="noopener noreferrer"
            >
                <Github className="w-4 h-4 mr-2" />
                GitHub
            </a>
            </div>
        ))}
        />
      </div>
      <div className="w-full md:w-1/3 text-center md:text-left">
        <p className="bg-light-blue p-4 rounded border border-purple">
          Présentation de certains projets que j&aposai pu réaliser durant mes 2 années de formation.
        </p>
      </div>
    </div>
  </WindowsContainer>
    );
};

export default Projects;