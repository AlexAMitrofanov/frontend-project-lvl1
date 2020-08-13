import readlineSinc from 'readline-sync';

const brCalc = () => {
  let quest;
  const number = Math.floor(Math.random() * 100);
  const number1 = Math.floor(Math.random() * 10);
  const determ = Math.floor(Math.random() * 3);
  const str = '+-*';
  const addition = 0;
  const substaction = 1;
  const multiplication = 2;
  if (determ === addition) {
    quest = number + number1;
  }
  if (determ === substaction) {
    quest = number - number1;
  }
  if (determ === multiplication) {
    quest = number * number1;
  }
  const sign = str[determ];
  console.log(`Question: ${number} ${sign} ${number1}`);
  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brCalc;
