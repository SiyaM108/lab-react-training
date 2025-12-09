import { useState } from "react";

const diceImages = [
  "/assets/images/dice1.png",
  "/assets/images/dice2.png",
  "/assets/images/dice3.png",
  "/assets/images/dice4.png",
  "/assets/images/dice5.png",
  "/assets/images/dice6.png",
];

function Dice() {
  const [dice, setDice] = useState("/assets/images/dice-empty.png");

  const rollDice = () => {
    setDice("/assets/images/dice-empty.png");
    setTimeout(() => {
      const random = Math.floor(Math.random() * 6);
      setDice(diceImages[random]);
    }, 1000);
  };

  return <img src={dice} alt="dice" onClick={rollDice} />;
}

export default Dice;
