import { number } from '../cli.js';
import playGame from '../index.js';

const getProgressionAndNumber = () => {
  const roundNumber = number();
  const stringLength = 10;
  const step = Math.ceil(Math.random() * 100);
  const elementsPosition = Math.floor(Math.random() * stringLength);
  let searchedNumber;
  let string = '';
  for (let i = 0; i < stringLength; i += 1) {
    const nextElement = (i === elementsPosition) ? '..' : roundNumber + (i * step);
    if (nextElement === '..') {
      searchedNumber = roundNumber + (i * step);
    }
    string = `${string}${nextElement} `;
  }
  const progression = [string.substring(0, (string.length - 1))];
  const result = [searchedNumber, progression];
  return result;
};

const description = 'What number is missing in the progression?';

const gameProg = () => playGame(getProgressionAndNumber, description);

export default gameProg;
