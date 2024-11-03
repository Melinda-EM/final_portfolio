import PropTypes from 'prop-types';
import { useState } from 'react';

export const Carousel = ({ items, totalSlides, type }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  return (
    <div className="flex flex-col">
      <div className="relative w-full h-80 bg-light-blue rounded border-2 border-purple overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-8 bg-purple flex items-center px-2">
          <div className="w-3 h-3 rounded-full bg-[#ff3333] mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-[#ffff33] mr-2"></div>
          <div className="w-3 h-3 rounded-full bg-[#33ff33]"></div>
        </div>

        {items.map((item, index) => (
          <div
            key={index}
            className={`absolute top-8 left-0 w-full h-[calc(100%-2rem)] transition-opacity duration-500 ease-in-out p-4 
              ${index === currentSlide ? 'opacity-100 z-10' : 'opacity-0 z-0'}`}
            style={{
              transform: `translateY(${(index - currentSlide) * 10}px) scale(${1 - Math.abs(index - currentSlide) * 0.05})`,
              zIndex: totalSlides - Math.abs(index - currentSlide),
              opacity: 1 - Math.abs(index - currentSlide) * 0.2,
            }}
          >
            <div className="w-full h-full border-purple flex flex-col items-center justify-center">
              <img src={item.image} alt={`${type} ${currentSlide + 1}`} className="mb-4 w-full h-[70%] object-cover" />
              <p className="text-center text-sm text-purple mb-2">C:\\{type}\\{item.title}.exe</p>
              <p className="text-center text-sm text-purple mb-4">{item.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="flex justify-center items-center mt-6 gap-4">
        <button
          onClick={prevSlide}
          className="px-4 py-2 bg-gray-300 border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand font-mono transform hover:scale-105"
        >
          ← Précédent
        </button>
        <span className="font-bold text-xl text-purple">{currentSlide + 1}/{totalSlides}</span>
        <button
          onClick={nextSlide}
          className="px-4 py-2 bg-gray-300 border-2 border-gray-500 text-black rounded-sm hover:bg-gray-400 transition-colors duration-200 cursor-hand font-mono transform hover:scale-105"
        >
          Suivant →
        </button>
      </div>
    </div>
  );
};

Carousel.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
    })
  ).isRequired,
  totalSlides: PropTypes.number.isRequired,
  type: PropTypes.string.isRequired,
};
