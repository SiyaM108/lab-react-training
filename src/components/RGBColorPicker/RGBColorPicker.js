import './RGBColorPicker.css';
import { useState } from 'react';
import SingleColorPicker from './SingleColorPicker';

function RGBColorPicker() {
  const [rValue, setRValue] = useState(0);
  const [gValue, setGValue] = useState(0);
  const [bValue, setBValue] = useState(0);

  const rgb = `rgb(${rValue}, ${gValue}, ${bValue})`;

  return (
    <div className="RGBColorPicker">
      <SingleColorPicker color="r" value={rValue} onChange={setRValue} />
      <SingleColorPicker color="g" value={gValue} onChange={setGValue} />
      <SingleColorPicker color="b" value={bValue} onChange={setBValue} />

      <div className="color-preview" style={{ backgroundColor: rgb }}></div>
    </div>
  );
}

export default RGBColorPicker;
