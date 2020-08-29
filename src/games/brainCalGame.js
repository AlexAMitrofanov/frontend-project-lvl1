import { number } from '../cli.js';
import playGame from '../index.js';

const getSign = () => {
  const operators = '+-*';
  const determinator = Math.floor(Math.random() * operators.length);
  const addition = 0;
  const substaction = 1;
  if (determinator === addition) {
    return operators[0];
  }
  if (determinator === substaction) {
    return operators[1];
  }
  return operators[2];
};

const calculate = (mass) => {
  let result;
  const num1 = +mass[0];
  const num2 = +mass[2];

  if (mass[1] === '+') {
    result = num1 + num2;
  }
  if (mass[1] === '-') {
    result = num1 - num2;
  }
  if (mass[1] === '*') {
    result = num1 * num2;
  }
  return result;
};

const getAnswAndQuest = () => {
  const question = () => `${number()} ${getSign()} ${number()}`;
  const questionForPlayer = question();
  const questionForTransmission = questionForPlayer.split(' ');
  const answer = calculate(questionForTransmission);
  const result = [answer, questionForPlayer];
  return result;
};

const description = 'What is the result of the expression?';

const gameCalc = () => playGame(getAnswAndQuest, description);

export default gameCalc;
