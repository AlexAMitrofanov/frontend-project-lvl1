import { number } from '../cli.js';
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
  const num = () => number() + 1;
  const firstNum = num();
  const secondNum = num();
  const question = `${firstNum} ${secondNum}`;
  const answer = getDivisor(firstNum, secondNum);
  const result = [answer, question];
  return result;
};

const description = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => playGame(getAnswAndQuest, description);

export default gameGcd;
