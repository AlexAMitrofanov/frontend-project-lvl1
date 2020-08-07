import readlineSinc from 'readline-sync';

const brCalc = () => {
  let quest;
  const number = Math.floor(Math.random() * 100);
  const number1 = Math.floor(Math.random() * 10);
  const det = Math.floor(Math.random() * 3);
  const str = '+-*';

  if (det === 0) {
    quest = number + number1;
  }
  if (det === 1) {
    quest = number - number1;
  }
  if (det === 2) {
    quest = number * number1;
  }
  const sign = str[det];
  console.log(`Question: ${number} ${sign} ${number1}`);
  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brCalc;
