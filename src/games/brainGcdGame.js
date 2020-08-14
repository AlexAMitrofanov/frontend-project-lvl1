import readlineSinc from 'readline-sync';
import { number } from '../cli.js';
import gameLogic from '../index.js';

const brGcd = () => {
  let quest;
  const roundNumber = number();
  const roundNumber1 = number();
  console.log(`Question: ${roundNumber} ${roundNumber1}`);
  let a;
  let b;
  for (let i = roundNumber1; i > 0; i -= 1) {
    a = roundNumber % i;
    b = roundNumber1 % i;
    if (a === 0 && b === 0) {
      quest = i;
      break;
    }
  }

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

const gameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  return gameLogic(0, brGcd);
};

export default gameGcd;
