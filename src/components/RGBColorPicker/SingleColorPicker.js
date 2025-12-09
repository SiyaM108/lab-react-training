function SingleColorPicker({ color, value, onChange }) {
  const label = { r: 'Red', g: 'Green', b: 'Blue' }[color];

  return (
    <div>
      <div
        style={{
          backgroundColor: `rgb(${color === 'r' ? value : 0},
                                ${color === 'g' ? value : 0},
                                ${color === 'b' ? value : 0})`,
          width: 50,
          height: 50,
        }}
      ></div>

      <input
        type="number"
        min="0"
        max="255"
        value={value}
        onChange={(e) => onChange(Number(e.target.value))}
      />

      <span>{label}</span>
    </div>
  );
}

export default SingleColorPicker;
