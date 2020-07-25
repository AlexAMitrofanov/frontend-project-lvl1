import readlineSinc from 'readline-sync';

const name = () => readlineSinc.question('May I have your name? ');

export default name;
