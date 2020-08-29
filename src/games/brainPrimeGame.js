import { number } from '../cli.js';
import playGame from '../index.js';

const isPrime = (a) => {
  let counter = 0;
  for (let i = a; i >= 2; i -= 1) {
    counter = (a % i === 0) ? counter + 1 : counter;
  }
  if (counter === 1) {
    return true;
  }
  return false;
};

const getAnswAndQuest = () => {
  const question = number();
  const answer = isPrime(question) ? 'yes' : 'no';
  const result = [answer, question];
  return result;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const gamePrime = () => playGame(getAnswAndQuest, description);

export default gamePrime;
