import readlineSinc from 'readline-sync';

const brProg = () => {
  let quest;
  const number = Math.ceil(Math.random() * 100);
  const step = Math.ceil(Math.random() * 100);
  const posElem = Math.floor(Math.random() * 10);

  let nextNumber = number;
  let str = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === posElem) {
      nextNumber += step;
      str += '.. ';
      quest = nextNumber;
      i += 1;
      if (i >= 9) {
        break;
      }
    }
    nextNumber += step;
    str = `${str}${nextNumber} `;
  }
  console.log(`Question: ${str}`);

  const answ = readlineSinc.question('Your answer: ');

  return (`${quest}` === answ) ? 'Correct!' : console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brProg;
