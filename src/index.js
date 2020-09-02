import readlineSinc from 'readline-sync';

const playGame = (gameFunction, description) => {
  console.log('Welcome to the Brain Games');

  const name = readlineSinc.question('May I have your name? ');

  console.log(`Hello, ${name}!`);

  console.log(description);
  const playRounds = (round, function1) => {
    if (round > 2) {
      const suxessfullEnd = console.log(`Congratulations, ${name}!`);
      return suxessfullEnd;
    }
    const answerAndQuestion = function1();
    const subQuestion = answerAndQuestion[1];
    const question = `Question: ${subQuestion}`;
    console.log(question);
    const playersAnsw = readlineSinc.question('Your answer: ');
    const programsAnswer = `${answerAndQuestion[0]}`;
    if (programsAnswer === playersAnsw) {
      console.log('Correct!');
      return playRounds(round + 1, function1);
    }
    const wrongAnswer = console.log(`"${playersAnsw}" is the wrong answer ;(. Correct answer was "${programsAnswer}".
Let's try again, ${name}!`);
    return wrongAnswer;
  };

  return playRounds(0, gameFunction);
};

export default playGame;
