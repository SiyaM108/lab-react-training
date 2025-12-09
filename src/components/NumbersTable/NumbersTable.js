function NumbersTable({ limit }) {
  const array = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="numbers-table">
      {array.map((n) => (
        <div
          key={n}
          style={{
            backgroundColor: n % 2 === 0 ? "red" : "white",
            border: "1px solid black",
            padding: "20px",
          }}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
