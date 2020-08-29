import { number } from '../cli.js';
import playGame from '../index.js';

const isEven = (a) => (a % 2 === 0);

const getAnswAndQuest = () => {
  const question = number();
  const answer = (isEven(question)) ? 'yes' : 'no';
  const result = [answer, question];
  return result;
};

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => playGame(getAnswAndQuest, description);

export default gameEven;
