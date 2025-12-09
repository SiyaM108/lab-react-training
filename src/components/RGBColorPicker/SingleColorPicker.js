import './RGBColorPicker.css';

function SingleColorPicker({ color, value, onChange }) {
  const label = { r: "Red", g: "Green", b: "Blue" }[color];

  const previewColor = {
    backgroundColor: `rgb(${color === 'r' ? value : 0},
                          ${color === 'g' ? value : 0},
                          ${color === 'b' ? value : 0})`
  };

  return (
    <div className="SingleColorPicker">
      <div className="preview" style={previewColor}></div>

      <label>{label}</label>
      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />
    </div>
  );
}

export default SingleColorPicker;
