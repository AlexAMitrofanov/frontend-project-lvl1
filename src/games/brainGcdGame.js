import { number } from '../cli.js';
import gameLogic from '../index.js';

const question = () => `Question:  ${number()} ${number()}`;

const brGcd = (str) => {
  const mass = str.split(' ');
  const num = mass[0];
  const num1 = mass[1];
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
  return `${quest}`;
};

const whatTodo = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => gameLogic(brGcd, whatTodo, question);

export default gameGcd;
