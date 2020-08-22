import readlineSinc from 'readline-sync';

const gameLogic = (f, toDo, question) => {
  console.log('Welcome to the Brain Games');

  const name = readlineSinc.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(toDo);
  const iter = (b, func) => {
    if (b > 2) {
      return console.log(`Congratulations, ${name}!`);
    }
    const question1 = question();
    console.log(question1);
    const roundQuestion = question1.split(' ');
    const returnFunc = f(roundQuestion);
    const playersAnsw = readlineSinc.question('Your answer: ');
    if (returnFunc === playersAnsw) {
      console.log('Correct!');
      return iter(b + 1, func);
    }
    return console.log(`"${playersAnsw}" is the wrong answer ;(. Correct answer was "${returnFunc}".
Let's try again, ${name}!`);
  };

  return iter(0, f);
};

export default gameLogic;
