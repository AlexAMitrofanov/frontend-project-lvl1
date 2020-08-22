import { number } from '../cli.js';
import gameLogic from '../index.js';

const question = () => `Question:  ${number()}`;

const brPrime = (a) => {
  let counter = 0;
  for (let i = a; i >= 2; i -= 1) {
    counter = (a % i === 0) ? counter + 1 : counter;
  }
  if (counter === 1) {
    return 'yes';
  }
  return 'no';
};

const whatTodo = 'Answer "yes" if given number is prime. Otherwise answer "no"';

const gamePrime = () => gameLogic(brPrime, whatTodo, question);

export default gamePrime;
