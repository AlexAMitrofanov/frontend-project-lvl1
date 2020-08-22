import { number } from '../cli.js';
import gameLogic from '../index.js';

const strProg = () => {
  const roundNumber = number();
  const step = Math.ceil(Math.random() * 100);
  const posElem = Math.floor(Math.random() * 10);
  let nextNumber = roundNumber;
  let string = '';
  for (let i = 0; i < 10; i += 1) {
    let nexElement;
    if (i === posElem) {
      nexElement = '..';
    }
    if (i !== posElem) {
      nexElement = nextNumber;
    }
    nextNumber += step;
    string = `${string}${nexElement} `;
  }
  return string;
};

const question = () => `Question:  ${strProg()}`;
const brProg = (str) => {
  const mass = str.split(' ');
  let element;
  let posElement;
  for (let i = 0; i < mass.length; i += 1) {
    if (mass[i] === '..') {
      posElement = i;
    }
  }
  if (posElement >= 9) {
    element = (mass[posElement - 1] - mass[posElement - 2]) + mass[posElement - 1];
  }
  element = mass[posElement + 1] - (mass[posElement + 2] - mass[posElement + 1]);
  return `${element}`;
};

const whatTodo = 'What number is missing in the progression?';

const gameProg = () => gameLogic(brProg, whatTodo, question);

export default gameProg;
