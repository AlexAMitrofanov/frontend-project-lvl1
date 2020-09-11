import getNumberFromGap from '../cli.js';
import playGame from '../index.js';

const getSign = (operators) => {
  const possibleMinOperatorsPossition = 0;
  const signDeterminator = getNumberFromGap(possibleMinOperatorsPossition, operators.length);
  const result = operators[signDeterminator];
  return result;
};

const calculate = (a, b, sign) => {
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
  const possibleMaxNum = 100;
  const possibleMinNum = 0;
  const firstNumber = getNumberFromGap(possibleMinNum, possibleMaxNum);
  const secondNumber = getNumberFromGap(possibleMinNum, possibleMaxNum);
  const sign = getSign('+-*');
  const questionForPlayer = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, sign);
  const answerAndQuestion = [answer, questionForPlayer];
  return answerAndQuestion;
};

const description = 'What is the result of the expression?';

const playCalc = () => playGame(getAnswerAndQuestion, description);

export default playCalc;
