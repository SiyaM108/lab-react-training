function Rating({ children }) {
  const rounded = Math.round(children);
  const stars = "★".repeat(rounded) + "☆".repeat(5 - rounded);

  return <div>{stars}</div>;
}

export default Rating;
