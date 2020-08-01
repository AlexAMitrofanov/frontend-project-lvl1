import readlineSinc from 'readline-sync';
import brCalc from './games/brainCalGame.js';
import brEv from './games/brainEvGame.js';

console.log('Welcome to the Brain Games');

const name = readlineSinc.question('May I have your name? ');

console.log(`Hello, ${name}!`);

export const igraCalc = (b) => {
  if (b === 0) {
    console.log('What is the result of the expression?');
  }
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

export const igraEv = (b) => {
  if (b === 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  if (b === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  const ig = brEv();
  if (ig === 'Correct!') {
    console.log('Correct!');
    return igraEv(b + 1);
  }
  return console.log(`Let's try again, ${name}!`);
};
