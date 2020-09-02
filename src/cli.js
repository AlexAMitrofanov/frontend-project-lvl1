import readlineSinc from 'readline-sync';

export const getName = () => readlineSinc.question('May I have your name? ');

export const getNumberFromGap = (a) => Math.floor(Math.random() * a);
