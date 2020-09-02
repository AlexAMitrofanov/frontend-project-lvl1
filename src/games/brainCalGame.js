import { getNumber, getNumberFromGap } from '../cli.js';
import playGame from '../index.js';

const getSign = () => {
  const operators = '+-*';
  const determinator = getNumberFromGap(operators.length);
  const result = operators[determinator];
  return result;
};

const calculate = (a, b, sign) => {
  let result;

  if (sign === '+') {
    result = a + b;
  }
  if (sign === '-') {
    result = a - b;
  }
  if (sign === '*') {
    result = a * b;
  }
  return result;
};

const getAnswAndQuest = () => {
  const firstNumber = getNumber();
  const secondNumber = getNumber();
  const sign = getSign();
  const questionForPlayer = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, sign);
  const result = [answer, questionForPlayer];
  return result;
};

const description = 'What is the result of the expression?';

const playCalc = () => playGame(getAnswAndQuest, description);

export default playCalc;
