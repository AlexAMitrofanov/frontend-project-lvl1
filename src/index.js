import readlineSinc from 'readline-sync';

const gameLogic = (f, toDo) => {
  console.log('Welcome to the Brain Games');

  const name = readlineSinc.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(toDo);
  const iter = (b, func) => {
    const returnFunc = f();
    if (b === 2) {
      return console.log(`Congratulations, ${name}!`);
    }
    if (returnFunc === 'Correct!') {
      console.log('Correct!');
      return iter(b + 1, func);
    }
    return console.log(`Let's try again, ${name}!`);
  };
  return iter(0, f);
};

export default gameLogic;
