import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowMinimize, faWindowRestore } from '@fortawesome/free-solid-svg-icons';
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
      className={`relative mb-8 shadow-lg ${isMinimized ? 'h-20 overflow-hidden border-b-2 border-purple' : 'h-auto'} hover:scale-105`}
    >
      <div className="flex items-center bg-gradient-rainbow px-3 py-1 ">
        <div className="flex space-x-1">
          <div className="w-3 h-3 rounded-full bg-light-blue"></div>
        </div>
        <h2 className="ml-2 font-bold flex-grow text-3xl font-windows text-white">{title}</h2>
        <div className="flex space-x-2">
          <FontAwesomeIcon icon={faWindowMinimize} onClick={handleMinimize} className="cursor-hand w-6" />
          <FontAwesomeIcon icon={faWindowRestore} onClick={handleMaximize} className="cursor-hand w-6" />
        </div>
      </div>
      <div className="p-4 border-2 border-purple">
        {children}
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
