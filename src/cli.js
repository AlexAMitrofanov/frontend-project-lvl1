import readlineSinc from 'readline-sync';

export const name = () => readlineSinc.question('May I have your name? ');

export const number = () => Math.floor(Math.random() * 100);

export const getAnswAndQuest = (func) => {
  const question = number();
  const answer = func(question) ? 'yes' : 'no';
  const result = [answer, question];
  return result;
};
