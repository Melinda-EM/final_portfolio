import Navbar from './components/Navbar';
import './globals.css'; // Assurez-vous que les styles sont bien importés

const Home = () => {
  return (
    <>
      <Navbar />
      <main>
        <section id="accueil" className="section accueil">
          {/* Contenu de la section Accueil */}
          <h1>Bienvenue sur mon Portfolio</h1>
          <p>Introduction avec une photo et une biographie.</p>
        </section>

        <section id="a-propos" className="section a-propos">
          {/* Contenu de la section A propos */}
          <h2>À Propos</h2>
          <p>Présentation détaillée de mon parcours et de mes motivations.</p>
        </section>

        <section id="competences" className="section competences">
          {/* Contenu de la section Compétences */}
          <h2>Compétences</h2>
          <div className="competences-container">
            <div className="competence">
              <h3>Langages</h3>
              {/* Liste des langages */}
            </div>
            <div className="competence">
              <h3>Frameworks</h3>
              {/* Liste des frameworks */}
            </div>
            <div className="competence">
              <h3>Soft-skills</h3>
              {/* Liste des soft-skills */}
            </div>
          </div>
        </section>

        <section id="parcours" className="section parcours">
          {/* Contenu de la section Parcours */}
          <h2>Parcours</h2>
          <p>Résumé de mon parcours académique et professionnel.</p>
        </section>

        <section id="projets" className="section projets">
          {/* Contenu de la section Projets */}
          <h2>Projets</h2>
          <div className="projets-container">
            {/* Présentation des projets */}
          </div>
        </section>

        <section id="contact" className="section contact">
          {/* Contenu de la section Contact */}
          <h2>Contact</h2>
          <form>
            <label htmlFor="name">Nom :</label>
            <input type="text" id="name" name="name" />

            <label htmlFor="email">Email :</label>
            <input type="email" id="email" name="email" />

            <label htmlFor="message">Message :</label>
            <textarea id="message" name="message"></textarea>

            <button type="submit">Envoyer</button>
          </form>
        </section>
      </main>
    </>
  );
};

export default Home;
