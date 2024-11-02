import logo from '../../assets/img/MEM.png';

export const Header = () => {
  return (
    <header className="bg-light-blue border-t-2 border-l-2 border-white border-b-2 border-r-2 p-2">
        <nav className="flex justify-between items-center max-w-6xl mx-auto">
          <button className="bg-light-blue px-4 py-1 flex items-center">
            <img src={logo} alt="logo" className="cursor-hand w-20 h-20 mr-2" />
          </button>
          <div className="flex space-x-2">
            {['À propos', 'Compétences', 'Parcours', 'Projets', 'Contact'].map((item) => (
               <a
                key={item}
                href={`#${item.toLowerCase().replace(' ', '-')}`}
                className="bg-light-blue border-t border-l text-dark-blue border-white border-b border-r px-4 py-1 hover:bg-light-purple font-fsGravity text-2xl cursor-hand"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
      </header>
  );
};