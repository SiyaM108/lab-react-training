import './Dice.css';
import { useState } from 'react';

function Dice() {
  const diceImgs = [
    '/assets/images/dice1.png',
    '/assets/images/dice2.png',
    '/assets/images/dice3.png',
    '/assets/images/dice4.png',
    '/assets/images/dice5.png',
    '/assets/images/dice6.png',
  ];

  const [dice, setDice] = useState('/assets/images/dice-empty.png');

  const roll = () => {
    setDice('/assets/images/dice-empty.png');
    setTimeout(() => {
      const random = Math.floor(Math.random() * 6);
      setDice(diceImgs[random]);
    }, 1000);
  };

  return <img src={dice} onClick={roll} className="Dice" alt="dice" />;
}

export default Dice;
