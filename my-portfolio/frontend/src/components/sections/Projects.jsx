import { Github } from 'lucide-react';
import WindowsContainer from '../layout/WindowsContainer';
import { useState, useEffect } from 'react';

const CommentModal = ({ isOpen, onClose, onSubmit }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-light-blue border-2 border-purple p-4 w-full max-w-md font-consolas">
        <div className="bg-purple text-white p-2 flex justify-between items-center mb-4">
          <span>Nouveau commentaire</span>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-200"
          >
            X
          </button>
        </div>

        <form onSubmit={onSubmit} className="space-y-4">
          <div>
            <label htmlFor="pseudo" className="block mb-2">Pseudo :</label>
            <input
              type="text"
              id="pseudo"
              name="pseudo"
              className="w-full p-2 bg-white border-2 border-purple font-consolas"
              required
            />
          </div>
          
          <div>
            <label htmlFor="comment" className="block mb-2">Commentaire :</label>
            <textarea
              id="comment"
              name="comment"
              className="w-full h-32 p-2 bg-white border-2 border-purple font-consolas resize-none"
              required
            />
          </div>

          <div className="flex gap-2 justify-end">
            <button
              type="button"
              onClick={onClose}
              className="bg-light-blue border-t-2 border-l-2 border-b-2 border-r-2 border-purple px-4 py-1 hover:scale-110 cursor-hand"
            >
              Annuler
            </button>
            <button
              type="submit"
              className="bg-light-blue border-t-2 border-l-2 border-b-2 border-r-2 border-purple px-4 py-1 hover:scale-110 cursor-hand"
            >
              Envoyer
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export const Projects = () => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [projects, setProjects] = useState([]);
  const [comments, setComments] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('http://localhost:3000/api/projects');
        if (!response.ok) throw new Error('Erreur lors du chargement des projets');
        const data = await response.json();
        setProjects(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  useEffect(() => {
    const fetchComments = async () => {
      if (projects.length > 0) {
        try {
          const currentProject = projects[currentSlideIndex];
          const response = await fetch(`http://localhost:3000/api/projects/${currentProject._id}/comments`);
          if (!response.ok) throw new Error('Erreur lors du chargement des commentaires');
          const data = await response.json();
          setComments(data);
        } catch (err) {
          console.error('Erreur lors du chargement des commentaires:', err);
        }
      }
    };

    fetchComments();
  }, [currentSlideIndex, projects]);

  const handlePrevious = () => {
    setCurrentSlideIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const handleNext = () => {
    setCurrentSlideIndex((prev) => (prev + 1) % projects.length);
  };

  const handleSubmitComment = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    
    try {
      const currentProject = projects[currentSlideIndex];
      const response = await fetch(`http://localhost:3000/api/projects/${currentProject._id}/comments`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          author: formData.get('pseudo'),
          content: formData.get('comment')
        }),
      });

      if (!response.ok) throw new Error('Erreur lors de l\'ajout du commentaire');

      const commentsResponse = await fetch(`http://localhost:3000/api/projects/${currentProject._id}/comments`);
      const updatedComments = await commentsResponse.json();
      setComments(updatedComments);
      
      setIsModalOpen(false);
    } catch (err) {
      console.error('Erreur lors de l\'ajout du commentaire:', err);
    }
  };

  if (loading) return <div className="text-center p-4">Chargement...</div>;
  if (error) return <div className="text-center p-4 text-red-500">Erreur: {error}</div>;
  if (projects.length === 0) return <div className="text-center p-4">Aucun projet trouvé</div>;

  const currentProject = projects[currentSlideIndex];

  return (
    <WindowsContainer id="projets" title="Projets">
      <div className="relative bg-light-blue border-2 border-purple p-4">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-2/3">
            <img
              src={`http://localhost:3000${currentProject.image}`}
              alt={currentProject.title}
              className="w-full h-80 object-fill border-2 border-purple"
            />
            <p className="mt-4 font-consolas text-center">
              C:\Projets\{currentProject.title}
            </p>
            <p className="mt-2 font-consolas">
              {currentProject.description}
            </p>
            <div className="flex justify-center mt-4">
              <a
                href={currentProject.githubLink}
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
            
            <div className="bg-light-blue border border-purple p-4 font-consolas mt-4">
              <p>Commentaires :</p>
              
              <button
                onClick={() => setIsModalOpen(true)}
                className="w-full bg-light-blue border-t-2 border-l-2 border-b-2 border-r-2 border-purple px-4 py-1 mt-4 hover:scale-110 cursor-hand"
              >
                Laisser un commentaire
              </button>

              <div className="mt-4 max-h-60 overflow-y-auto pr-2">
                {comments.length > 0 ? (
                  comments.map((comment) => (
                    <div key={comment._id} className="bg-white border-2 border-purple p-2 mb-2">
                      <div className="flex justify-between items-center">
                        <span className="font-bold">{comment.author}</span>
                        <span className="text-sm">
                          {new Date(comment.createdAt).toLocaleDateString()}
                        </span>
                      </div>
                      <p className="mt-1">{comment.content}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-center p-4">Aucun commentaire pour ce projet</p>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <CommentModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        onSubmit={handleSubmitComment}
      />
    </WindowsContainer>
  );
};

export default Projects;