#!/usr/bin/env node

import readlineSinc from 'readline-sync';

console.log('Welcome to the Brain Games');

const name = readlineSinc.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log('Answer "yes" if the number is even, otherwise answer "no".');

const igra = (a) => {
  if (a === 3) {
    return console.log(`Congratulations, ${name}!`);
  }

  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answ = readlineSinc.question('Your answer: ');

  if ((answ === 'yes' && number % 2 === 0) || (answ === 'no' && number % 2 !== 0)) {
    console.log('correct');
    return igra(a + 1);
  }
  if (answ === 'yes' && number % 2 !== 0) {
    return console.log(`"yes" is the wrong answer ;(. Correct answer was "no".\nLet's try again, ${name}!`);
  }
  if (answ === 'no' && number % 2 === 0) {
    return console.log(`"no" is the wrong answer ;(. Correct answer was "yes".\nLet's try again, ${name}!`);
  }

  return console.log(`This is the wrong answer.\nLet's try again, ${name}!`);
};

igra(0);
