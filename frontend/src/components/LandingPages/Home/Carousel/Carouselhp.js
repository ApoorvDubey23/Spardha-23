import React, { useState, useEffect } from 'react';
import Img1 from '../Images/bg.webp';
import Img2 from '../Images/bg2.png';
import './Carouselhp.css';

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const images = [Img1, Img2];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % images.length);
    }, 3000); // Change slide every 3 seconds

    return () => {
      clearInterval(interval);
    };
  }, [currentSlide,images.length]);

  return (
    <div className="carousel-home">
   
      <img
        className="carousel-image-home"
        src={images[currentSlide]}
        alt={`Slide ${currentSlide + 1}`}
      />
   
    </div>
  );
}

export default Carousel;
