import getNumberFromGap from '../cli.js';
import playGame from '../index.js';

const isEven = (a) => (a % 2 === 0);

export const getAnswerAndQuestion = () => {
  const gapForNumber = 100;
  const possibleFirstNum = 0;
  const question = getNumberFromGap(gapForNumber, possibleFirstNum);
  const answer = isEven(question) ? 'yes' : 'no';
  const result = [answer, question];
  return result;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const playEven = () => playGame(getAnswerAndQuestion, description);

export default playEven;
