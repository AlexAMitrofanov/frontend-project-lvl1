import readlineSinc from 'readline-sync';

const brGcd = () => {
  let quest;
  const number = Math.ceil(Math.random() * 100);
  const number1 = Math.ceil(Math.random() * 100);
  console.log(`Question: ${number} ${number1}`);
  let a;
  let b;
  for (let i = number1; i > 0; i -= 1) {
    a = number % i;
    b = number1 % i;
    if (a === 0 && b === 0) {
      quest = i;
      break;
    }
  }

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brGcd;
