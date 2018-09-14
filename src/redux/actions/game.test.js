import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import * as gameActions from './game';
import * as actionTypes from './actionTypes';
import initialState from '../reducers/initialState';

jest.mock('services/setup', () => ({
  initBoard: jest.fn().mockImplementation(
    () => new Promise(resolve => resolve([[], []]))
  )
}));

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

describe('game actions', () => {
  describe('initGame', () => {
    const attempts = 10;
    const board = [[], []];
    const expectedActions = [
      { type: actionTypes.INIT_GAME_START, attempts },
      { type: actionTypes.INIT_GAME_END, board },
    ];

    const store = mockStore(initialState);

    return store.dispatch(gameActions.initGame(attempts)).then(() => {
      expect(store.getActions()).toEqual(expectedActions);
      expect(1).toBe(1);
    });
  });

  describe('cellClicked', () => {
    it('should return a CELL_CLICKED action with x and y coordinates', () => {
      const x = 3;
      const y = 4;
      const action = gameActions.cellClicked(x, y);
      expect(action).toEqual({
        type: actionTypes.CELL_CLICKED,
        x,
        y,
      });
    });
  });

  describe('flagGameOver', () => {
    it('should return a FLAG_GAME_OVER action', () => {
      const action = gameActions.flagGameOver();
      expect(action).toEqual({
        type: actionTypes.FLAG_GAME_OVER,
      });
    });
  });

  describe('flagGameComplete', () => {
    it('should return a FLAG_GAME_COMPLETE action', () => {
      const action = gameActions.flagGameComplete();
      expect(action).toEqual({
        type: actionTypes.FLAG_GAME_COMPLETE,
      });
    });
  });
});