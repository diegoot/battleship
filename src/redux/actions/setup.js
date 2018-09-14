import {SETUP_GAME} from './actionTypes';

export const setup = attempts => ({
  type: SETUP_GAME,
  attempts,
});