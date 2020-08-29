import { number } from '../cli.js';
import playGame from '../index.js';

const getProgression = () => {
  const roundNumber = number();
  const stringLength = 10;
  const step = Math.ceil(Math.random() * 100);
  const elementsPosition = Math.floor(Math.random() * stringLength);
  let nextNumber = roundNumber;
  let string = '';
  for (let i = 0; i < stringLength; i += 1) {
    let nexElement;
    if (i === elementsPosition) {
      nexElement = '..';
    }
    if (i !== elementsPosition) {
      nexElement = nextNumber;
    }
    nextNumber += step;
    string = `${string}${nexElement} `;
  }
  const result = string.substring(0, (string.length - 1));
  return result;
};

const getRequiredElement = (mass) => {
  let position;
  for (let i = 0; i < mass.length; i += 1) {
    if (mass[i] === '..') {
      position = i;
    }
  }
  const element = (position >= (mass.length - 2))
    ? +mass[position - 1] + (+mass[position - 1] - (+mass[position - 2]))
    : +mass[position + 1] - (+mass[position + 2] - (+mass[position + 1]));
  return element;
};

const getAnswAndQuest = () => {
  const question = () => `${getProgression()}`;
  const questionForPlayer = question();
  const questionForTransmission = questionForPlayer.split(' ');
  const answer = getRequiredElement(questionForTransmission);
  const result = [answer, questionForPlayer];
  return result;
};

const description = 'What number is missing in the progression?';

const gameProg = () => playGame(getAnswAndQuest, description);

export default gameProg;
