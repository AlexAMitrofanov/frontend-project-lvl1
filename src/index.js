import readlineSinc from 'readline-sync';
import brCalc from './games/brainCalGame.js';

console.log('Welcome to the Brain Games');

const name = readlineSinc.question('May I have your name? ');

console.log(`Hello, ${name}!`);

const igraCalc = (b) => {
  if (b === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const ig = brCalc();
  if (ig === 'Correct!') {
    console.log('Correct!');
    return igraCalc(b + 1);
  }
  return console.log(`Let's try again, ${name}!`);
};

export default igraCalc;
