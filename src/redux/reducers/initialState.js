import {LEVELS} from 'utils/constants';

export default {
  setup: {
    attempts: LEVELS[0].attempts,
  },
  game: {
    isInitializing: false,
    board: [],
    attemptsLeft: Number.MAX_SAFE_INTEGER,
    isOver: false,
    isComplete: false
  }
};