import { getNumberFromGap } from '../cli.js';
import playGame from '../index.js';

const getGreatestCommonDivisor = (a, b) => {
  if (a === 0) {
    return b;
  }
  let gcd;
  for (let i = a; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      gcd = i;
      break;
    }
  }
  return gcd;
};

const getAnswerAndQuestion = () => {
  const gapForNumbers = 100;
  const possibleFirstNum = 0;
  const firstNum = getNumberFromGap(gapForNumbers, possibleFirstNum);
  const secondNum = getNumberFromGap(gapForNumbers, possibleFirstNum);
  const question = `${firstNum} ${secondNum}`;
  const answer = getGreatestCommonDivisor(firstNum, secondNum);
  const result = [answer, question];
  return result;
};

const description = 'Find the greatest common divisor of given numbers.';

const playGcd = () => playGame(getAnswerAndQuestion, description);

export default playGcd;
