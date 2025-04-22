import logo from '../../assets/img/MEM.png';

export const Header = () => {
  return (
    <header className="w-full bg-light-blue p-2 mb-3 shadow-lg shadow-slate-700">
      <nav className="flex flex-col md:flex-row justify-between items-center max-w-6xl mx-auto space-y-2 md:space-y-0">
        <button className="bg-light-blue px-4 py-1 flex items-center ">
          <img src={logo} alt="logo" className="cursor-hand w-16 h-16 md:w-20 md:h-20 mr-2 shadow-lg shadow-slate-700" />
        </button>
        <div className="flex flex-wrap justify-center space-x-6">
          {['À propos', 'Compétences', 'Parcours', 'Projets', 'Contact'].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(' ', '-')}`}
              className="cursor-hand
              px-2 py-1.5 text-lg
              bg-gray-200 
              border-t-2 border-l-2 border-r-2 border-b-2 
              border-t-white border-l-white border-r-slate shadow-lg shadow-slate-800
              border-r-gray-800 border-b-gray-800 
              active:border-t-gray-800 active:border-l-gray-800 
              active:border-r-white active:border-b-white 
              hover:bg-gray-300  
              font-consolas 
              flex items-center gap-2">
              {item}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
};
