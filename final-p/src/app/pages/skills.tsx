const skills = [
    { name: "JavaScript", level: "Avancé" },
    { name: "React", level: "Intermédiaire" },
    // Ajoute d'autres compétences ici
  ];
  
  const Skills = () => (
    <section className="bg-gray-100 py-8">
      <div className="container mx-auto">
        <h2 className="text-2xl text-purple-400 font-semibold text-center">Compétences</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white shadow-md rounded-lg p-4">
              <h3 className="text-xl font-semibold">{skill.name}</h3>
              <p className="mt-2 text-gray-700">{skill.level}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
  
export default Skills