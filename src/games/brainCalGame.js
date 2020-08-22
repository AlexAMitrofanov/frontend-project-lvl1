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
const question = () => `Question:  ${number()} ${sign()} ${number()}`;

const brCalc = (str) => {
  let quest;
  const mass = str.split(' ');

  const num1 = +mass[0];
  const num2 = +mass[2];

  if (mass[1] === '+') {
    quest = num1 + num2;
  }
  if (mass[1] === '-') {
    quest = num1 - num2;
  }
  if (mass[1] === '*') {
    quest = num1 * num2;
  }
  return `${quest}`;
};

const whatTodo = 'What is the result of the expression?';

const gameCalc = () => gameLogic(brCalc, whatTodo, question);

export default gameCalc;
