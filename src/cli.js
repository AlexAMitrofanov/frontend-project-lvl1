import readlineSinc from 'readline-sync';

export const name = () => readlineSinc.question('May I have your name? ');

export const getNumber = () => Math.floor(Math.random() * 100);

export const getAnswAndQuest = (func) => {
  const question = getNumber();
  const answer = func(question) ? 'yes' : 'no';
  const result = [answer, question];
  return result;
};

export const getNumberFromGap = (a) => Math.floor(Math.random() * a);
