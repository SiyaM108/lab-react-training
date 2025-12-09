import './ClickablePicture.css';
import { useState } from 'react';

function ClickablePicture({ img, imgClicked }) {
  const [clicked, setClicked] = useState(false);

  return (
    <img
      src={clicked ? imgClicked : img}
      onClick={() => setClicked(!clicked)}
      className="ClickablePicture"
      alt="toggle"
    />
  );
}

export default ClickablePicture;
