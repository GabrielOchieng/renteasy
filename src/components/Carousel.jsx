import React, { useState } from "react";
import PropTypes from "prop-types";

const Carousel = ({ images, openModal }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    const newIndex = (currentIndex - 1 + images.length) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const newIndex = (currentIndex + 1) % images.length;
    setCurrentIndex(newIndex);
  };

  const goToImage = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative w-full h-72">
      <img
        src={images[currentIndex]}
        alt={`House image ${currentIndex + 1}`}
        className="w-full h-full object-cover rounded-lg cursor-pointer"
        onClick={() => openModal(images[currentIndex])}
      />

      {/* Previous Button */}
      <button
        onClick={goToPrevious}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-green-400 text-white p-2 rounded-full hover:bg-green-700"
      >
        &#10094;
      </button>

      {/* Next Button */}
      <button
        onClick={goToNext}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-green-400 text-white p-2 rounded-full hover:bg-green-700"
      >
        &#10095;
      </button>

      {/* Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            onClick={() => goToImage(index)}
            className={`w-3 h-3 rounded-full ${
              index === currentIndex ? "bg-green-800" : "bg-green-400"
            } transition-colors`}
          ></button>
        ))}
      </div>
    </div>
  );
};

Carousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string).isRequired,
  openModal: PropTypes.func.isRequired,
};

export default Carousel;
