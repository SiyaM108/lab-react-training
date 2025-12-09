import './NumbersTable.css';

function NumbersTable({ limit }) {
  const numbers = Array.from({ length: limit }, (_, i) => i + 1);

  return (
    <div className="NumbersTable">
      {numbers.map((n) => (
        <div
          key={n}
          className="cell"
          style={{ backgroundColor: n % 2 === 0 ? 'red' : 'white' }}
        >
          {n}
        </div>
      ))}
    </div>
  );
}

export default NumbersTable;
