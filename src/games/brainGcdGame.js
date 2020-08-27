import { number } from '../cli.js';
import gameLogic from '../index.js';

const firstNum = () => number() + 1;
const secondNum = () => number() + 1;

const question = () => `${firstNum()} ${secondNum()}`;

const brGcd = (mass) => {
  const num = mass[1];
  const num1 = mass[2];
  let quest;

  let devider1;
  let devider2;
  for (let i = num; i > 0; i -= 1) {
    devider1 = num % i;
    devider2 = num1 % i;
    if (devider1 === 0 && devider2 === 0) {
      quest = i;
      break;
    }
  }
  return quest;
};

const whatTodo = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => gameLogic(brGcd, whatTodo, question);

export default gameGcd;
