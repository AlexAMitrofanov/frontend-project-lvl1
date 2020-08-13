import readlineSinc from 'readline-sync';
import { number } from '../cli.js';

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

export default brPrime;
