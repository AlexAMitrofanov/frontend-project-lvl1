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
    const subQuestion = question();
    const question1 = `Question: ${subQuestion}`;
    console.log(question1);
    const roundQuestion = subQuestion.split(' ');
    const returnFunc = f(roundQuestion);
    const playersAnsw = readlineSinc.question('Your answer: ');
    if (`${returnFunc}` === playersAnsw) {
      console.log('Correct!');
      return iter(b + 1, func);
    }
    const wrongAnswer = console.log(`"${playersAnsw}" is the wrong answer ;(. Correct answer was "${returnFunc}".
Let's try again, ${name}!`);
    return wrongAnswer;
  };

  return iter(0, f);
};

export default gameLogic;
