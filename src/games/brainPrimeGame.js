import readlineSinc from 'readline-sync';

const brPrime = () => {
  let quest;
  const number = Math.ceil(Math.random() * 100);
  const half = Math.floor(number / 2);
  let counter = 0;
  if (number === 1) {
    quest = 'no';
  }
  for (let i = half; i >= 0; i -= 1) {
    counter = (number % i === 0) ? counter + 1 : counter;
  }
  quest = (counter === 1) ? 'yes' : 'no';

  console.log(`Question: ${number}`);

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brPrime;
