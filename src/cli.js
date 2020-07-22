
import readlineSinc from 'readline-sync';

export const name = () => {
  return  readlineSinc.question('May I have your name? ');
}
