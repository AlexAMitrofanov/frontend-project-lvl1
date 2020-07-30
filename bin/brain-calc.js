#!/usr/bin/env node

import readlineSinc from 'readline-sync';

console.log('Welcome to the Brain Games');

const name = readlineSinc.question('May I have your name? ');

console.log(`Hello, ${name}!`);

console.log('What is the result of the expression?');

const igra = (a) => {
  if (a === 3) {
    return console.log(`Congratulations, ${name}!`);
  }
  let quest;
  const number1 = Math.floor(Math.random() * 100);
  const number2 = Math.floor(Math.random() * 10);
  const det = Math.random();

  if (det <= 0.3333) {
    quest = number1 + number2;
    console.log(`Question: ${number1} + ${number2}`);
  }
  if (det > 0.3333 && det <= 0.6666) {
    quest = number1 - number2;
    console.log(`Question: ${number1} - ${number2}`);
  }
  if (det > 0.6666) {
    quest = number1 * number2;
    console.log(`Question: ${number1} * ${number2}`);
  }

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    console.log('Correct!');
    return igra(a + 1);
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${number1 * number2}".\nLet's try again, ${name}!`);
};

igra(0);
