import { getAnswAndQuest } from '../cli.js';
import playGame from '../index.js';

const isPrime = (a) => {
  if (a === 0) {
    return false;
  }
  let counter = 0;
  for (let i = Math.floor(a / 2); i >= 2; i -= 1) {
    counter = (a % i === 0) ? counter + 1 : counter;
    if (counter > 0) {
      return false;
    }
  }
  return true;
};

const pleyPrime = () => getAnswAndQuest(isPrime);

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const gamePrime = () => playGame(pleyPrime, description);

export default gamePrime;
