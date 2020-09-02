import readlineSinc from 'readline-sync';

export const name = () => readlineSinc.question('May I have your name? ');

export const getNumber = () => Math.floor(Math.random() * 100);

export const getNumberFromGap = (a) => Math.floor(Math.random() * a);
