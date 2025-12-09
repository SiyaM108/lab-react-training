function BoxColor({ r, g, b }) {
  const rgb = `rgb(${r},${g},${b})`;
  const hex =
    "#" +
    [r, g, b]
      .map((x) => x.toString(16).padStart(2, "0"))
      .join("");

  return (
    <div style={{ backgroundColor: rgb, padding: "20px", border: "1px solid black" }}>
      <p>{rgb}</p>
      <p>{hex}</p>
    </div>
  );
}

export default BoxColor;
