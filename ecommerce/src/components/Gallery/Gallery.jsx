import React from "react";
import "./gallery.css"

const Gallery = ({ images }) => {
  const [currentIndex, setCurrentIndex] = React.useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1

    );
  };

  return (
    <div className="gallery">
      <div className="gallery-images">
        <div className="gallery-image">
          <img src={images[currentIndex].src} alt={images[currentIndex].alt} />
        </div>

      </div>
      <button className="prev" onClick={handlePrev}> 
        <img width={36} src="setaesquerda.png"></img>
       </button>
      <button className="next" onClick={handleNext}>
        <img width={20} src="setadireita.png"></img>
      </button>
    </div>

  );
};
export default Gallery;