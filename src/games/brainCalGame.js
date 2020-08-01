import readlineSinc from 'readline-sync';

const brCalc = (a) => {
  if (a === 0) {
    console.log('What is the result of the expression?');
  }
  let quest;
  const number = Math.floor(Math.random() * 100);
  const number1 = Math.floor(Math.random() * 10);
  const det = Math.random();

  if (det <= 1 / 3) {
    quest = number + number1;
    console.log(`Question: ${number} + ${number1}`);
  }
  if (det > 1 / 3 && det <= 2 / 3) {
    quest = number - number1;
    console.log(`Question: ${number} - ${number1}`);
  }
  if (det > 2 / 3) {
    quest = number * number1;
    console.log(`Question: ${number} * ${number1}`);
  }

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brCalc;
