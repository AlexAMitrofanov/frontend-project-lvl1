import readlineSinc from 'readline-sync';
import { number } from '../cli.js';

const brCalc = () => {
  let quest;
  const roundNumber = number();
  const number1 = Math.floor(Math.random() * 10);
  const determ = Math.floor(Math.random() * 3);
  const str = '+-*';
  const addition = 0;
  const substaction = 1;
  const multiplication = 2;
  if (determ === addition) {
    quest = roundNumber + number1;
  }
  if (determ === substaction) {
    quest = roundNumber - number1;
  }
  if (determ === multiplication) {
    quest = roundNumber * number1;
  }
  const sign = str[determ];
  console.log(`Question: ${roundNumber} ${sign} ${number1}`);
  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brCalc;
