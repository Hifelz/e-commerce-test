
import React, { useState } from 'react';

import './style.css'

function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const  slides  = [{
    imageUrl: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-powercolor-radeon-rx-6600-8gb-gddr6-fsr-ray-tracing-axrx-6600-8gbd6-3dhl_131715.jpg',
    caption: 'placa de video', 
  },{
    imageUrl: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-powercolor-radeon-rx-6600-8gb-gddr6-fsr-ray-tracing-axrx-6600-8gbd6-3dhl_131715.jpg',
    caption: 'placa de video', 
  }, {
    imageUrl: 'https://img.terabyteshop.com.br/produto/g/placa-de-video-powercolor-radeon-rx-6600-8gb-gddr6-fsr-ray-tracing-axrx-6600-8gbd6-3dhl_131715.jpg',
    caption: 'placa de video', 
  }] ;

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const nextSlide = () => {
    const newIndex = currentSlide + 1 >= slides.length ? 0 : currentSlide + 1;
    setCurrentSlide(newIndex);
  };

  const prevSlide = () => {
    const newIndex = currentSlide - 1 < 0 ? slides.length - 1 : currentSlide - 1;
    setCurrentSlide(newIndex);
  };

  return (
    <div className="carousel">
      <div className="carousel-slides">
        {slides.map((slide, index) => (
          <div className={`carousel-slide ${index === currentSlide ? 'active' : ''}`} key={index}>
            <img width={200} src={slide.imageUrl} alt={slide.caption} />
            <div className="carousel-caption">{slide.caption}</div>
          </div>
        ))}
      </div>
      <div className="carousel-nav">
        <button className="carousel-prev" onClick={prevSlide}>
          Prev
        </button>
        <ul className="carousel-dots">
          {slides.map((slide, index) => (
            <li
              key={index}
              className={`carousel-dot ${index === currentSlide ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </ul>
        <button className="carousel-next" onClick={nextSlide}>
          Next
        </button>
      </div>
    </div>
  );
}

export default Carousel;