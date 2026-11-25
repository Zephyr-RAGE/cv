import { useState, useEffect } from "react";
import "../Styles/ImageGallery.css";

const ImageGallery = ({ images = [] }) => {
  const [current, setCurrent] = useState(0);

  const totalImages = images.length;

  useEffect(() => {
    setCurrent(0);
  }, [images]);

  const nextImage = () => {
    if (totalImages === 0) return;
    setCurrent((prev) => (prev + 1) % totalImages);
  };

  const prevImage = () => {
    if (totalImages === 0) return;
    setCurrent((prev) => (prev - 1 + totalImages) % totalImages);
  };

  const goToImage = (index) => {
    setCurrent(index);
  };

  const handleKeyDown = (event) => {
    if (event.key === "ArrowRight") nextImage();
    if (event.key === "ArrowLeft") prevImage();
  };

  let touchStartX = 0;
  let touchEndX = 0;

  const handleTouchStart = (event) => {
    touchStartX = event.changedTouches[0].screenX;
  };

  const handleTouchEnd = (event) => {
    touchEndX = event.changedTouches[0].screenX;

    const difference = touchStartX - touchEndX;

    if (Math.abs(difference) < 50) return;

    if (difference > 0) {
      nextImage();
    } else {
      prevImage();
    }
  };

  if (totalImages === 0) {
    return (
      <div className="gallery-empty">
        No hay imágenes disponibles para este proyecto.
      </div>
    );
  }

  return (
    <section
      className="gallery"
      aria-label="Galería del proyecto"
      onKeyDown={handleKeyDown}
      tabIndex={0}
    >
      <div
        className="gallery-container"
        onTouchStart={handleTouchStart}
        onTouchEnd={handleTouchEnd}
      >
        <button
          className="gallery-btn left"
          onClick={prevImage}
          aria-label="Imagen anterior"
          disabled={totalImages <= 1}
        >
          ❮
        </button>

        <img
          src={images[current]}
          alt={`Captura del proyecto ${current + 1}`}
          className="gallery-image"
          draggable="false"
          key={images[current]}
        />

        <button
          className="gallery-btn right"
          onClick={nextImage}
          aria-label="Imagen siguiente"
          disabled={totalImages <= 1}
        >
          ❯
        </button>

        <div className="gallery-counter">
          <span>{String(current + 1).padStart(2, "0")}</span>
          <span className="gallery-counter-divider">/</span>
          <span>{String(totalImages).padStart(2, "0")}</span>
        </div>
      </div>

      <div className="gallery-thumbnails" aria-label="Seleccionar imagen">
        {images.map((image, index) => (
          <button
            key={`${image}-${index}`}
            className={`gallery-thumbnail ${current === index ? "active" : ""}`}
            onClick={() => goToImage(index)}
            aria-label={`Ver imagen ${index + 1}`}
            aria-current={current === index ? "true" : undefined}
          >
            <img src={image} alt="" loading="lazy" />
          </button>
        ))}
      </div>
    </section>
  );
};

export default ImageGallery;
