import { getNumber, getNumberFromGap } from '../cli.js';
import playGame from '../index.js';

const getSign = () => {
  const operators = '+-*';
  const determinator = getNumberFromGap(operators.length);
  const result = operators[determinator];
  return result;
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
  const question = () => `${getNumber()} ${getSign()} ${getNumber()}`;
  const questionForPlayer = question();
  const questionForTransmission = questionForPlayer.split(' ');
  const answer = calculate(questionForTransmission);
  const result = [answer, questionForPlayer];
  return result;
};

const description = 'What is the result of the expression?';

const gameCalc = () => playGame(getAnswAndQuest, description);

export default gameCalc;
