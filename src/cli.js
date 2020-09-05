import readlineSinc from 'readline-sync';

export const getName = () => readlineSinc.question('May I have your name? ');

export const getNumberFromGap = (gap, firstNumber) => Math.floor(Math.random() * gap) + firstNumber;
