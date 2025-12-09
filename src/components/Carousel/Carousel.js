import './Carousel.css';
import { useState } from 'react';

function Carousel({ images }) {
  const [index, setIndex] = useState(0);

  return (
    <div className="Carousel">
      <button onClick={() => setIndex((index - 1 + images.length) % images.length)}>
        Left
      </button>

      <img src={images[index]} alt="carousel" />

      <button onClick={() => setIndex((index + 1) % images.length)}>
        Right
      </button>
    </div>
  );
}

export default Carousel;
