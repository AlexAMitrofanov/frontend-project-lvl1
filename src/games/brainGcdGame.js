import { number } from '../cli.js';
import playGame from '../index.js';

const getDivisor = (mass) => {
  const num = +mass[0];
  const num1 = +mass[1];
  let result;
  let devider1;
  let devider2;
  for (let i = num; i > 0; i -= 1) {
    devider1 = num % i;
    devider2 = num1 % i;
    if (devider1 === 0 && devider2 === 0) {
      result = i;
      break;
    }
  }
  return result;
};

const getAnswAndQuest = () => {
  const firstNum = () => number() + 1;
  const secondNum = () => number() + 1;
  const question = () => `${firstNum()} ${secondNum()}`;
  const questionForPlayer = question();
  const questionForTransmission = questionForPlayer.split(' ');
  const answer = getDivisor(questionForTransmission);
  const result = [answer, questionForPlayer];
  return result;
};

const description = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => playGame(getAnswAndQuest, description);

export default gameGcd;
