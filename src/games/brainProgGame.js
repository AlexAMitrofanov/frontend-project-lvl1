import getNumberFromGap from '../cli.js';
import playGame from '../index.js';

const getProgressionAndNumber = () => {
  const possibleMaxNum = 100;
  const possibleMinStep = 1;
  const FirstNumProgressionAndPosition = 0;
  const fisrtNumber = getNumberFromGap(FirstNumProgressionAndPosition, possibleMaxNum);
  const progressionLength = 10;
  const step = getNumberFromGap(possibleMinStep, possibleMaxNum);
  const elementsPosition = getNumberFromGap(FirstNumProgressionAndPosition, progressionLength);
  let searchedNumber;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = (i === elementsPosition) ? '..' : `${fisrtNumber + (i * step)}`;
    if (nextElement === '..') {
      searchedNumber = fisrtNumber + (i * step);
    }
    progression.push(nextElement);
  }
  const progressionForPlayer = progression.join(' ');

  const result = [searchedNumber, progressionForPlayer];
  return result;
};

const description = 'What number is missing in the progression?';

const playProg = () => playGame(getProgressionAndNumber, description);

export default playProg;
