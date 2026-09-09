import { useState } from "react";
import "../Styles/ImageGallery.css";

const ImageGallery = ({ images }) => {
  const [current, setCurrent] = useState(0);

  const nextImage = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className="gallery-container">
      <button className="gallery-btn left" onClick={prevImage}>
        ❮
      </button>

      <img
        src={images[current]}
        alt={`Imagen ${current + 1}`}
        className="gallery-image"
      />

      <button className="gallery-btn right" onClick={nextImage}>
        ❯
      </button>

      <div className="gallery-counter">
        {current + 1} / {images.length}
      </div>
    </div>
  );
};

export default ImageGallery;
