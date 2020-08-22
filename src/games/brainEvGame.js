import { number } from '../cli.js';
import gameLogic from '../index.js';

const question = () => `Question: ${number()}`;

const brEv = (mass) => {
  const num = +mass[1];
  if (num === 0) {
    return 'no';
  }
  if (num % 2 === 0) {
    return 'yes';
  }
  return 'no';
};

const whatTodo = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEv = () => gameLogic(brEv, whatTodo, question);

export default gameEv;
