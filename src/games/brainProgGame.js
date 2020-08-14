import readlineSinc from 'readline-sync';
import { number } from '../cli.js';
import gameLogic from '../index.js';

const brProg = () => {
  let quest;
  const roundNumber = number();
  const step = Math.ceil(Math.random() * 100);
  const posElem = Math.floor(Math.random() * 10);

  let nextNumber = roundNumber;
  let str = '';
  for (let i = 0; i < 10; i += 1) {
    let nexElement;
    if (i === posElem) {
      nexElement = '..';
      quest = nextNumber;
    }
    if (i !== posElem) {
      nexElement = nextNumber;
    }
    nextNumber += step;
    str = `${str}${nexElement} `;
  }
  console.log(`Question: ${str}`);

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

const gameProg = () => {
  console.log('What number is missing in the progression?');
  return gameLogic(0, brProg);
};

export default gameProg;
