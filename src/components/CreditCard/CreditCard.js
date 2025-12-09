function CreditCard({
  type,
  number,
  expirationMonth,
  expirationYear,
  bank,
  owner,
  bgColor,
  color,
}) {
  const last4 = number.slice(-4);

  return (
    <div className="credit-card" style={{ backgroundColor: bgColor, color }}>
      <div className="type">{type}</div>
      <div className="number">•••• •••• •••• {last4}</div>
      <div className="details">
        <span>Expires {String(expirationMonth).padStart(2, "0")}/{String(expirationYear).slice(-2)}</span>
        <span className="bank">{bank}</span>
      </div>
      <div className="owner">{owner}</div>
    </div>
  );
}

export default CreditCard;
