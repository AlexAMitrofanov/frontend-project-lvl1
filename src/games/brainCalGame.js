import { getNumberFromGap } from '../cli.js';
import playGame from '../index.js';

const getSign = () => {
  const operators = '+-*';
  const signDeterminator = getNumberFromGap(operators.length);
  const result = operators[signDeterminator];
  return result;
};

const calculateNumbers = (a, b, sign) => {
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
  const gapForNumbers = 100;
  const firstNumber = getNumberFromGap(gapForNumbers);
  const secondNumber = getNumberFromGap(gapForNumbers);
  const sign = getSign();
  const questionForPlayer = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = calculateNumbers(firstNumber, secondNumber, sign);
  const result = [answer, questionForPlayer];
  return result;
};

const description = 'What is the result of the expression?';

const playCalc = () => playGame(getAnswAndQuest, description);

export default playCalc;
