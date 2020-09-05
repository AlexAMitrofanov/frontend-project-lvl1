import { getNumberFromGap } from '../cli.js';
import playGame from '../index.js';

const getDivisor = (a, b) => {
  if (a === 0) {
    return b;
  }
  let result;
  for (let i = a; i > 0; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const getAnswAndQuest = () => {
  const gapForNumbers = 100;
  const possibleFirstNum = 0;
  const firstNum = getNumberFromGap(gapForNumbers, possibleFirstNum);
  const secondNum = getNumberFromGap(gapForNumbers, possibleFirstNum);
  const question = `${firstNum} ${secondNum}`;
  const answer = getDivisor(firstNum, secondNum);
  const result = [answer, question];
  return result;
};

const description = 'Find the greatest common divisor of given numbers.';

const playGcd = () => playGame(getAnswAndQuest, description);

export default playGcd;
