import * as setupActions from './setup';
import {SETUP_GAME} from './actionTypes';

describe('setup actions', () => {
  describe('setup', () => {
    it('should return a SETUP_GAME action with the game options', () => {
      const attempts = 10;
      const action = setupActions.setup(attempts);
      expect(action).toEqual({
        type: SETUP_GAME,
        attempts,
      });
    });
  });
});