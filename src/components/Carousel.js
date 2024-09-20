import React, { useState } from 'react';
import AmazonSale from './image/amazonSale.jpg'
import AmazonBack from './image/amazonback.jpg'
import Flag from './image/flag.png'

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel data (can be images, text, etc.)
  const slides = [
    AmazonSale,
    AmazonBack,
    Flag
  ];

  // Function to go to the next slide
  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  // Function to go to the previous slide
  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="carousel">
      <button className="carousel-button prev" onClick={prevSlide}>
        &#10094; {/* Left arrow */}
      </button>
      
      <div className="carousel-slide">
        <img src={slides[currentIndex]} alt={`Slide ${currentIndex + 1}`} />
      </div>
      
      <button className="carousel-button next" onClick={nextSlide}>
        &#10095; {/* Right arrow */}
      </button>
    </div>
  );
};

export default Carousel;
