function Greetings({ lang, children }) {
  const messages = {
    de: "Hallo",
    en: "Hello",
    es: "Hola",
    fr: "Bonjour",
  };

  return (
    <div className="greetings">
      {messages[lang]} {children}
    </div>
  );
}

export default Greetings;
