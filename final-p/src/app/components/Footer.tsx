const Footer = () => (
    <footer className="bg-gray-800 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; {new Date().getFullYear()} Ton Nom. Tous droits réservés.</p>
        <div className="mt-2">
          <a href="https://github.com/your-github" className="text-gray-400 hover:text-white mx-2">GitHub</a>
          <a href="https://linkedin.com/in/your-linkedin" className="text-gray-400 hover:text-white mx-2">LinkedIn</a>
          {/* Ajoute d'autres liens ici */}
        </div>
      </div>
    </footer>
  );


export default Footer