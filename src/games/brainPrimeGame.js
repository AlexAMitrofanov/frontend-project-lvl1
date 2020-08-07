import readlineSinc from 'readline-sync';

const brPrime = () => {
  const number = Math.floor(Math.random() * 100);
  let counter = 0;
  for (let i = number; i >= 2; i -= 1) {
    counter = (number % i === 0) ? counter + 1 : counter;
  }
  const quest = (counter === 1) ? 'yes' : 'no';

  console.log(`Question: ${number}`);

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brPrime;
