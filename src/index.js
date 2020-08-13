import readlineSinc from 'readline-sync';
import brCalc from './games/brainCalGame.js';
import brEv from './games/brainEvGame.js';
import brGcd from './games/brainGcdGame.js';
import brProg from './games/brainProgGame.js';
import brPrime from './games/brainPrimeGame.js';

console.log('Welcome to the Brain Games');

const name = readlineSinc.question('May I have your name? ');

console.log(`Hello, ${name}!`);

const igraLogic = (b, f) => {
  const returnFunc = f();
  if (b === 2) {
    return console.log(`Congratulations, ${name}!`);
  }
  if (returnFunc === 'Correct!') {
    console.log('Correct!');
    return igraLogic(b + 1, f);
  }
  return console.log(`Let's try again, ${name}!`);
};

export const gameCalc = () => {
  console.log('What is the result of the expression?');
  return igraLogic(0, brCalc);
};

export const gameEv = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return igraLogic(0, brEv);
};

export const gameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  return igraLogic(0, brGcd);
};

export const gameProg = () => {
  console.log('What number is missing in the progression?');
  return igraLogic(0, brProg);
};

export const gamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  return igraLogic(0, brPrime);
};
