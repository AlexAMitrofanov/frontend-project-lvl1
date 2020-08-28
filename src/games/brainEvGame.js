import { number } from '../cli.js';
import gameLogic from '../index.js';

const question = () => `${number()}`;

const isEven = (a) => (a % 2 === 0);

const brEv = (mass) => {
  const num = +mass[0];
  const result = (isEven(num)) ? 'yes' : 'no';
  return result;
};

const whatTodo = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEv = () => gameLogic(brEv, whatTodo, question);

export default gameEv;
