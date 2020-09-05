import { getNumberFromGap } from '../cli.js';
import playGame from '../index.js';

const getProgressionAndNumber = () => {
  const gapForNumAndStep = 100;
  const possibleMinStep = 1;
  const FirstNumProgressionAndPosition = 0;
  const roundNumber = getNumberFromGap(gapForNumAndStep, FirstNumProgressionAndPosition);
  const stringLength = 10;
  const step = getNumberFromGap(gapForNumAndStep, possibleMinStep);
  const elementsPosition = getNumberFromGap(stringLength, FirstNumProgressionAndPosition);
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

const playProg = () => playGame(getProgressionAndNumber, description);

export default playProg;
