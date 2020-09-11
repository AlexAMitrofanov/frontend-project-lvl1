import getNumberFromGap from '../cli.js';
import playGame from '../index.js';

const getAnswerAndQuestion = () => {
  const possibleMaxNum = 100;
  const possibleMinStep = 1;
  const firstNumProgressionAndPosition = 0;
  const fisrtNumber = getNumberFromGap(firstNumProgressionAndPosition, possibleMaxNum);
  const progressionLength = 10;
  const step = getNumberFromGap(possibleMinStep, possibleMaxNum);
  const answerPosition = getNumberFromGap(firstNumProgressionAndPosition, progressionLength);
  let searchedNumber;
  const progression = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = (i === answerPosition) ? '..' : `${fisrtNumber + (i * step)}`;
    if (nextElement === '..') {
      searchedNumber = fisrtNumber + (i * step);
    }
    progression.push(nextElement);
  }
  const progressionForPlayer = progression.join(' ');

  const answerAndQuestion = [searchedNumber, progressionForPlayer];
  return answerAndQuestion;
};

const description = 'What number is missing in the progression?';

const playProg = () => playGame(getAnswerAndQuestion, description);

export default playProg;
