import getNumberFromGap from '../utils.js';
import playGame from '../index.js';

const isEven = (a) => (a % 2 === 0);

const getAnswerAndQuestion = () => {
  const possibleMaxNum = 100;
  const possibleMinNum = 0;
  const question = getNumberFromGap(possibleMinNum, possibleMaxNum);
  const answer = isEven(question) ? 'yes' : 'no';
  const answerAndQuestion = [answer, question];
  return answerAndQuestion;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => playGame(getAnswerAndQuestion, description);

export default playEven;
