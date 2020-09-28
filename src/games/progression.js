import getNumberFromGap from '../utils.js';
import runGameEngine from '../index.js';

const getAnswerAndQuestion = () => {
  const possibleMaxNum = 100;
  const possibleMinStep = 1;
  const firstNumProgressionAndPosition = 0;
  const fisrtNumber = getNumberFromGap(firstNumProgressionAndPosition, possibleMaxNum);
  const progressionLength = 10;
  const step = getNumberFromGap(possibleMinStep, possibleMaxNum);
  const answerPosition = getNumberFromGap(firstNumProgressionAndPosition, progressionLength);
  const answer = (fisrtNumber + (answerPosition * step)).toString();
  const question = [];
  for (let i = 0; i < progressionLength; i += 1) {
    const nextElement = (i === answerPosition) ? '..' : fisrtNumber + (i * step);
    question.push(nextElement);
  }
  const answerAndQuestion = [answer, question.join(' ')];
  return answerAndQuestion;
};

const description = 'What number is missing in the progression?';

const playProgression = () => runGameEngine(getAnswerAndQuestion, description);

export default playProgression;
