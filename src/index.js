import readlineSinc from 'readline-sync';

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

export default gameLogic;
