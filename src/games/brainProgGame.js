import getNumberFromGap from '../cli.js';
import playGame from '../index.js';

const getProgressionAndNumber = () => {
  const gapForNumAndStep = 100;
  const possibleMinStep = 1;
  const FirstNumProgressionAndPosition = 0;
  const roundNumber = getNumberFromGap(gapForNumAndStep, FirstNumProgressionAndPosition);
  const progressionLength = 10;
  const step = getNumberFromGap(gapForNumAndStep, possibleMinStep);
  const elementsPosition = getNumberFromGap(progressionLength, FirstNumProgressionAndPosition);
  let searchedNumber;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = (i === elementsPosition) ? '..' : `${roundNumber + (i * step)}`;
    if (nextElement === '..') {
      searchedNumber = roundNumber + (i * step);
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
