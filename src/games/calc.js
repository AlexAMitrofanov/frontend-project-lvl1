import getNumberFromGap from '../utils.js';
import runGameEngine from '../index.js';

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
    case '*':
      result = a * b;
      break;
    default:
      return null;
  }
  return result;
};

const getAnswerAndQuestion = () => {
  const possibleMaxNum = 100;
  const possibleMinNum = 0;
  const firstNumber = getNumberFromGap(possibleMinNum, possibleMaxNum);
  const secondNumber = getNumberFromGap(possibleMinNum, possibleMaxNum);
  const sign = getSign('+-*');
  const question = `${firstNumber} ${sign} ${secondNumber}`;
  const answer = calculate(firstNumber, secondNumber, sign).toString();
  const answerAndQuestion = [answer, question];
  return answerAndQuestion;
};

const description = 'What is the result of the expression?';

const playCalc = () => runGameEngine(getAnswerAndQuestion, description);

export default playCalc;
