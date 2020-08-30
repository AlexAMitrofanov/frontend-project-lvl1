import { getAnswAndQuest } from '../cli.js';
import playGame from '../index.js';

const isEven = (a) => (a % 2 === 0);

const playEven = () => getAnswAndQuest(isEven);

const description = 'Answer "yes" if the number is even, otherwise answer "no".';

const gameEven = () => playGame(playEven, description);

export default gameEven;
