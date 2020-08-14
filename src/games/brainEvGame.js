import readlineSinc from 'readline-sync';
import { number } from '../cli.js';
import gameLogic from '../index.js';

const brEv = () => {
  const roundNumber = number();
  console.log(`Question: ${roundNumber}`);
  const answ = readlineSinc.question('Your answer: ');
  const vopr = (roundNumber % 2 === 0) ? 'yes' : 'no';

  if ((answ === 'yes' && roundNumber % 2 === 0) || (answ === 'no' && roundNumber % 2 !== 0)) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${vopr}".`);
};

const gameEv = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return gameLogic(0, brEv);
};

export default gameEv;
