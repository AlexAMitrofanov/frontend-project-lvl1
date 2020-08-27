import { number } from '../cli.js';
import gameLogic from '../index.js';

const sign = () => {
  const determ = Math.floor(Math.random() * 3);
  const addition = 0;
  const substaction = 1;
  if (determ === addition) {
    return '+';
  }
  if (determ === substaction) {
    return '-';
  }
  return '*';
};
const question = () => `${number()} ${sign()} ${number()}`;

const brCalc = (mass) => {
  let quest;

  const num1 = +mass[1];
  const num2 = +mass[3];

  if (mass[2] === '+') {
    quest = num1 + num2;
  }
  if (mass[2] === '-') {
    quest = num1 - num2;
  }
  if (mass[2] === '*') {
    quest = num1 * num2;
  }
  return `${quest}`;
};

const whatTodo = 'What is the result of the expression?';

const gameCalc = () => gameLogic(brCalc, whatTodo, question);

export default gameCalc;
