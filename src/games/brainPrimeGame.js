import readlineSinc from 'readline-sync';
import { number } from '../cli.js';
import gameLogic from '../index.js';

const brPrime = () => {
  // const number = Math.floor(Math.random() * 100);
  let counter = 0;
  const roundNumber = number();
  for (let i = roundNumber; i >= 2; i -= 1) {
    counter = (roundNumber % i === 0) ? counter + 1 : counter;
  }
  const prime = 1;
  const quest = (counter === prime) ? 'yes' : 'no';

  console.log(`Question: ${roundNumber}`);

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

const gamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  return gameLogic(0, brPrime);
};

export default gamePrime;
