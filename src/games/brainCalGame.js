import { getNumberFromGap } from '../cli.js';
import playGame from '../index.js';

const getSign = () => {
  const operators = '+-*';
  const possibleMinOperatorsPossition = 0;
  const signDeterminator = getNumberFromGap(operators.length, possibleMinOperatorsPossition);
  const result = operators[signDeterminator];
  return result;
};

const calculateNumbers = (a, b, sign) => {
  let result;
  switch (sign) {
    case '+':
      result = a + b;
      break;
    case '-':
      result = a - b;
      break;
    default:
      result = a * b;
  }

  return result;
};

const getAnswerAndQuestion = () => {
  const gapForNumbers = 100;
  const possibleMinNum = 0;
  const firstNumber = getNumberFromGap(gapForNumbers, possibleMinNum);
  const secondNumber = getNumberFromGap(gapForNumbers, possibleMinNum);
  const sign = getSign();
  const questionForPlayer = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = calculateNumbers(firstNumber, secondNumber, sign);
  const result = [answer, questionForPlayer];
  return result;
};

const description = 'What is the result of the expression?';

const playCalc = () => playGame(getAnswerAndQuestion, description);

export default playCalc;
