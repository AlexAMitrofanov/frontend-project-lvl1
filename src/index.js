import readlineSinc from 'readline-sync';

const runGameEngine = (getAnswerAndQuestion, description) => {
  console.log('Welcome to the Brain Games');
  const name = readlineSinc.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const playRounds = (round, getAnswAndQuest) => {
    const RoundsQuantity = 3;
    const suxessfullEnd = `Congratulations, ${name}!`;
    if (round === RoundsQuantity) {
      console.log(suxessfullEnd);
      return;
    }
    const answerAndQuestion = getAnswAndQuest();
    const subQuestion = answerAndQuestion[1];
    const question = `Question: ${subQuestion}`;
    console.log(question);
    const playersAnsw = readlineSinc.question('Your answer: ');
    const programsAnswer = `${answerAndQuestion[0]}`;
    const wrongAnswer = `"${playersAnsw}" is the wrong answer ;(. Correct answer was "${programsAnswer}".`;
    const suggestionToPlayAgain = `Let's try again, ${name}!`;
    if (programsAnswer !== playersAnsw) {
      console.log(wrongAnswer);
      console.log(suggestionToPlayAgain);
      return;
    }
    console.log('Correct!');
    playRounds(round + 1, getAnswAndQuest);
  };

  return playRounds(0, getAnswerAndQuestion);
};

export default runGameEngine;
