import readlineSinc from 'readline-sync';
import brCalc from './games/brainCalGame.js';
import brEv from './games/brainEvGame.js';
import brGcd from './games/brainGcdGame.js';
import brProg from './games/brainProgGame.js';
import brPrime from './games/brainPrimeGame.js';

console.log('Welcome to the Brain Games');

const name = readlineSinc.question('May I have your name? ');

console.log(`Hello, ${name}!`);

const gameLogic = (b, f) => {
  const returnFunc = f();
  if (b === 2) {
    return console.log(`Congratulations, ${name}!`);
  }
  if (returnFunc === 'Correct!') {
    console.log('Correct!');
    return gameLogic(b + 1, f);
  }
  return console.log(`Let's try again, ${name}!`);
};

export const gameCalc = () => {
  console.log('What is the result of the expression?');
  return gameLogic(0, brCalc);
};

export const gameEv = () => {
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  return gameLogic(0, brEv);
};

export const gameGcd = () => {
  console.log('Find the greatest common divisor of given numbers.');
  return gameLogic(0, brGcd);
};

export const gameProg = () => {
  console.log('What number is missing in the progression?');
  return gameLogic(0, brProg);
};

export const gamePrime = () => {
  console.log('Answer "yes" if given number is prime. Otherwise answer "no"');
  return gameLogic(0, brPrime);
};
