import readlineSinc from 'readline-sync';

const playGame = (gameFunction, action) => {
  console.log('Welcome to the Brain Games');

  const name = readlineSinc.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(action);
  const iter = (iteration, func) => {
    if (iteration > 2) {
      return console.log(`Congratulations, ${name}!`);
    }
    const answerAndQuestion = func();
    const subQuestion = answerAndQuestion[1];
    const question = `Question: ${subQuestion}`;
    console.log(question);
    const playersAnsw = readlineSinc.question('Your answer: ');
    const programsAnswer = `${answerAndQuestion[0]}`;
    if (programsAnswer === playersAnsw) {
      console.log('Correct!');
      return iter(iteration + 1, func);
    }
    const wrongAnswer = console.log(`"${playersAnsw}" is the wrong answer ;(. Correct answer was "${programsAnswer}".
Let's try again, ${name}!`);
    return wrongAnswer;
  };

  return iter(0, gameFunction);
};

export default playGame;
