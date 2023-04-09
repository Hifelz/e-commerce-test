import React from "react";
import "./gallery.css"

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length  : prevIndex 
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length -1  ? 0 : prevIndex + 1
      
    );
  };

  return (
    <div className="gallery">
      <div className="gallery-images">
          <div className="gallery-image">
            <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
            <div className="gallery-description">{images[currentIndex].description}</div>
          </div>

      </div>
      <button onClick={handlePrev}>Prev</button>
      <button onClick={handleNext}>Next</button>
    </div>
   
  );
};
export default Gallery;