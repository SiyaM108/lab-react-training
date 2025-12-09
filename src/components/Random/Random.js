function Random({ min, max }) {
  const rand = Math.floor(Math.random() * (max - min + 1)) + min;

  return (
    <p>
      Random value between {min} and {max} =&gt; {rand}
    </p>
  );
}

export default Random;
