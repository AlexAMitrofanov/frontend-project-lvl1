import { getNumberFromGap } from '../cli.js';
import playGame from '../index.js';

const getDivisor = (a, b) => {
  let result;
  let devider1;
  let devider2;
  for (let i = a; i > 0; i -= 1) {
    devider1 = a % i;
    devider2 = b % i;
    if (devider1 === 0 && devider2 === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const getAnswAndQuest = () => {
  const numberNotZero = 1;
  const gapForNumbers = 100;
  const firstNum = getNumberFromGap(gapForNumbers) + numberNotZero;
  const secondNum = getNumberFromGap(gapForNumbers) + numberNotZero;
  const question = `${firstNum} ${secondNum}`;
  const answer = getDivisor(firstNum, secondNum);
  const result = [answer, question];
  return result;
};

const description = 'Find the greatest common divisor of given numbers.';

const playGcd = () => playGame(getAnswAndQuest, description);

export default playGcd;
