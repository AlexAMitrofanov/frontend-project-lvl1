import getNumberFromGap from '../cli.js';
import playGame from '../index.js';

const isPrime = (a) => {
  if (a < 2) {
    return false;
  }
  for (let i = Math.floor(a / 2); i >= 2; i -= 1) {
    if (a % i === 0) {
      return false;
    }
  }
  return true;
};

const getAnswerAndQuestion = () => {
  const gapForNumber = 100;
  const possibleFirstNum = 0;
  const question = getNumberFromGap(gapForNumber, possibleFirstNum);
  const answer = isPrime(question) ? 'yes' : 'no';
  const result = [answer, question];
  return result;
};

const description = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const playPrime = () => playGame(getAnswerAndQuestion, description);

export default playPrime;
