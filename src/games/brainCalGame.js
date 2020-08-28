import { number } from '../cli.js';
import gameLogic from '../index.js';

const sign = () => {
  const operators = '+-*';
  const determ = Math.floor(Math.random() * operators.length);
  const addition = 0;
  const substaction = 1;
  if (determ === addition) {
    return operators[0];
  }
  if (determ === substaction) {
    return operators[1];
  }
  return operators[2];
};
const question = () => `${number()} ${sign()} ${number()}`;

const brCalc = (mass) => {
  let quest;

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
  return quest;
};

const whatTodo = 'What is the result of the expression?';

const gameCalc = () => gameLogic(brCalc, whatTodo, question);

export default gameCalc;
