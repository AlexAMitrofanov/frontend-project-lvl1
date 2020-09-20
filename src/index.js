import readlineSinc from 'readline-sync';

const runGameEngine = (getAnswerAndQuestion, description) => {
  console.log('Welcome to the Brain Games');
  const name = readlineSinc.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
  console.log(description);
  const roundsQuantity = 3;
  const playRound = (round) => {
    if (round === roundsQuantity) {
      console.log(`Congratulations, ${name}!`);
      return;
    }
    const [rightAnswer, question] = getAnswerAndQuestion();
    console.log(`Question: ${question}`);
    const playersAnswer = readlineSinc.question('Your answer: ');
    if (rightAnswer !== playersAnswer) {
      console.log(`"${playersAnswer}" is the wrong answer ;(. Correct answer was "${rightAnswer}".`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
    playRound(round + 1);
  };

  return playRound(0);
};

export default runGameEngine;
