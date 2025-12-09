import { useState } from "react";
import SingleColorPicker from "./SingleColorPicker";

function RGBColorPicker() {
  const [rValue, setR] = useState(0);
  const [gValue, setG] = useState(0);
  const [bValue, setB] = useState(0);

  const rgb = `rgb(${rValue},${gValue},${bValue})`;

  return (
    <div>
      <SingleColorPicker color="r" value={rValue} onChange={setR} />
      <SingleColorPicker color="g" value={gValue} onChange={setG} />
      <SingleColorPicker color="b" value={bValue} onChange={setB} />

      <div
        style={{ backgroundColor: rgb, width: 100, height: 100, marginTop: 20 }}
      ></div>
    </div>
  );
}

export default RGBColorPicker;
