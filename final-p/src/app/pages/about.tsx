const About = () => (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto flex flex-col items-center md:flex-row md:items-start md:space-x-8">
        {/* <img src="/path/to/your/photo.jpg" alt="Your Name" className="rounded-full w-32 h-32 md:w-48 md:h-48" /> */}
        <div className="mt-4 md:mt-0 md:ml-8 text-center md:text-left">
          <h2 className="text-2xl text-purple-400 font-semibold">À propos de moi</h2>
          <p className="mt-2 text-gray-700">
          Pour vous parler un peu de moi :
          <br/>
          <br/>
            Passionnée de jeux vidéos comme Call Of Duty, Final Fantasy, Dead Or Alive ou encore Les Sims pour n'en citer que quelques uns. J'aime aussi Stitch, c'est un peu mon animal spirituel et il m'accompagne dans chaque projet.

            Après 3 ans dans milieu hôtellier, j'ai décidé de me reconvertir et de faire le grand plongeon dans l'univers du Développement Web et j'ai entamée ma quête avec la formation de la Web@cadémie by Epitech pour étancher ma soif d'apprentissage et m'améliorer, si ce n'est de me perfectionner dans ce domaine si vaste.
          <br/>
          <br/>
            Comme j'aime à dire, Je ne suis pas là pour chasser des papillons.
          </p>
        </div>
      </div>
    </section>
  );

export default About