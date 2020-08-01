#!/usr/bin/env node

import readlineSinc from 'readline-sync';

console.log('Welcome to the Brain Games');

const name = readlineSinc.question('May I have your name? ');

console.log(`Hello, ${name}!`);

const igra = (a) => {
  if (a === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  if (a === 0) {
    console.log('Answer "yes" if the number is even, otherwise answer "no".');
  }
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answ = readlineSinc.question('Your answer: ');
  const vopr = (number % 2 === 0) ? 'yes' : 'no';

  if ((answ === 'yes' && number % 2 === 0) || (answ === 'no' && number % 2 !== 0)) {
    console.log('Correct!');
    return igra(a + 1);
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${vopr}".\nLet's try again, ${name}!`);
};

igra(0);
