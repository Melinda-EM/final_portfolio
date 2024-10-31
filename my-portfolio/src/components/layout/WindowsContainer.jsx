import { useState } from 'react';
import PropTypes from 'prop-types';

const WindowsContainer = ({ id, title, children }) => {
  const [isMinimized, setIsMinimized] = useState(false);
  const [isMaximized, setIsMaximized] = useState(false);

  const handleMinimize = () => {
    setIsMinimized(true);
    setIsMaximized(false);
  };

  const handleMaximize = () => {
    if (isMaximized) {
      setIsMaximized(false);
    } else {
      setIsMaximized(true);
      setIsMinimized(false);
    }
  };

  return (
    <section
      id={id}
      className={`
        relative
        transition-all duration-200 ease-in-out
        min-h-[5rem] w-full
        ${isMaximized ? 'fixed top-0 left-0 right-0 bottom-0 z-50' : 'transform hover:scale-[1.02] mb-8 last:mb-0'}
      `}
    >
      <div className={`
        bg-light-blue 
        border-t-2 border-l-2 border-white 
        border-b-2 border-r-2
        ${isMaximized ? 'h-full' : 'min-h-[5rem]'}
        transition-all duration-300
      `}>
        <div className="bg-purple text-white p-1 flex justify-between items-center select-none">
          <div className="flex items-center">
            <span className="mr-2 ml-2 text-2xl">🗔</span>
            <span className="font-fsGravity text-3xl font-bold">{title}.exe</span>
          </div>
          <div className="flex gap-1">
            <button
              onClick={handleMinimize}
              className="
                cursor-hand
                bg-light-blue 
                border-t-2 border-l-2 border-white 
                border-b-2 border-r-2
                px-3 py-0.5
                mx-0.5 my-2
                text-dark-blue 
                hover:bg-light-purple 
                active:border-t-2 
                active:border-l-2 
                active:border-b-2 
                active:border-r-2 
                active:border-white
                focus:outline-none
                transition-colors
              "
            >
              _
            </button>
            <button
              onClick={handleMaximize}
              className="
                cursor-hand
                bg-light-blue 
                border-t-2 border-l-2 border-white 
                border-b-2 border-r-2
                px-3 py-0.5 
                mx-1 my-2
                text-dark-blue 
                hover:bg-light-purple
                active:border-t-2 
                active:border-l-2 
                active:border-b-2 
                active:border-r-2 
                active:border-white
                focus:outline-none
                transition-colors
              "
            >
              □
            </button>
          </div>
        </div>

        <div className={`
          transition-all duration-300 ease-in-out
          ${isMaximized ? 'h-[calc(100%-2.5rem)] overflow-auto' : ''}
          ${isMinimized ? 'h-0 overflow-hidden' : 'p-4'}
        `}>
          {children}
        </div>
      </div>
    </section>
  );
};

WindowsContainer.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WindowsContainer;