import readlineSinc from 'readline-sync';

const brEv = () => {
  const number = Math.floor(Math.random() * 100);
  console.log(`Question: ${number}`);
  const answ = readlineSinc.question('Your answer: ');
  const vopr = (number % 2 === 0) ? 'yes' : 'no';

  if ((answ === 'yes' && number % 2 === 0) || (answ === 'no' && number % 2 !== 0)) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${vopr}".`);
};

export default brEv;
