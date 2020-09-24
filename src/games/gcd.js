import getNumberFromGap from '../utils.js';
import runGameEngine from '../index.js';

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
  const possibleMaxNum = 100;
  const possibleMinNum = 0;
  const firstNum = getNumberFromGap(possibleMinNum, possibleMaxNum);
  const secondNum = getNumberFromGap(possibleMinNum, possibleMaxNum);
  const question = `${firstNum} ${secondNum}`;
  const answer = getGreatestCommonDivisor(firstNum, secondNum).toString();
  const answerAndQuestion = [answer, question];
  return answerAndQuestion;
};

const description = 'Find the greatest common divisor of given numbers.';

const playGcd = () => runGameEngine(getAnswerAndQuestion, description);

export default playGcd;
