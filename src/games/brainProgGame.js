import readlineSinc from 'readline-sync';

const brProg = () => {
  let quest;
  const number = Math.ceil(Math.random() * 100);
  const step = Math.ceil(Math.random() * 100);
  const posElem = Math.floor(Math.random() * 10);

  let a = number;
  let str = '';
  for (let i = 0; i < 10; i += 1) {
    if (i === posElem) {
      a += step;
      str += '.. ';
      quest = a;
    }
    if (i !== posElem) {
      a += step;
      str = `${str}${a} `;
    }
  }
  console.log(`Question: ${str}`);

  const answ = readlineSinc.question('Your answer: ');

  if (`${quest}` === answ) {
    return 'Correct!';
  }
  return console.log(`"${answ}" is the wrong answer ;(. Correct answer was "${quest}".`);
};

export default brProg;
