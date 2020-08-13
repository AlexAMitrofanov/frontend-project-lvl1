import readlineSinc from 'readline-sync';

export const name = () => readlineSinc.question('May I have your name? ');

export const number = () => Math.floor(Math.random() * 100);
