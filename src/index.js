import readlineSinc from 'readline-sync';

const runGameEngine = (getAnswerAndQuestion, description) => {
  console.log('Welcome to the Brain Games');
  const name = readlineSinc.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const playRounds = (round, getAnswAndQuest) => {
    const roundsQuantity = 3;
    const suxessfullEnd = `Congratulations, ${name}!`;
    if (round === roundsQuantity) {
      console.log(suxessfullEnd);
      return;
    }
    const [rightAnswer, question] = getAnswAndQuest();
    console.log(`Question: ${question}`);
    const playersAnswer = readlineSinc.question('Your answer: ');
    const wrongAnswer = `"${playersAnswer}" is the wrong answer ;(. Correct answer was "${rightAnswer}".`;
    const suggestionToPlayAgain = `Let's try again, ${name}!`;
    if (rightAnswer !== playersAnswer) {
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
