import game from './';
import {INIT_GAME_START, INIT_GAME_END, CELL_CLICKED, FLAG_GAME_OVER, FLAG_GAME_COMPLETE} from '../actions/actionTypes';

describe('game reducer', () => {
  it('should return the proper state when it handles INIT_GAME_START action', () => {
    const board = [[], []];
    const currentState = {
      game: {
        isInitializing: false,
        board,
        attemptsLeft: 0,
        isOver: true,
        isComplete: false,
      }
    };
    const action = {
      type: INIT_GAME_START,
      attempts: 10,
    };
    const newState = game(currentState, action);

    expect(newState.game).toEqual(
      Object.assign({}, currentState.game, {
        isInitializing: true,
        attemptsLeft: action.attempts,
        isOver: false,
      })
    );
  });

  it('should return the proper state when it handles INIT_GAME_END action', () => {
    const board = [[], []];
    const currentState = {
      game: {
        isInitializing: true,
        board: [],
        attemptsLeft: 10,
        isOver: false,
        isComplete: false,
      }
    };
    const action = {
      type: INIT_GAME_END,
      board,
    };
    const newState = game(currentState, action);

    expect(newState.game).toEqual(
      Object.assign({}, currentState.game, {
        isInitializing: false,
        board: action.board,
      })
    );
  });

  it('should return the proper state when it handles CELL_CLICKED action', () => {
    const currentState = {
      game: {
        isInitializing: false,
        board: [[{isHidden: true}]],
        attemptsLeft: 10,
        isOver: false,
        isComplete: false,
      }
    };
    const action = {
      type: CELL_CLICKED,
      x: 0,
      y: 0,
    };
    const newState = game(currentState, action);

    expect(newState.game).toEqual(
      Object.assign({}, currentState.game, {
        board: [[{isHidden: false}]],
        attemptsLeft: currentState.game.attemptsLeft - 1,
      })
    );
  });

  it('should return the proper state when it handles FLAG_GAME_OVER action', () => {
    const board = [[], []];
    const currentState = {
      game: {
        isInitializing: false,
        board,
        attemptsLeft: 0,
        isOver: false,
        isComplete: false,
      }
    };
    const action = {
      type: FLAG_GAME_OVER,
    };
    const newState = game(currentState, action);

    expect(newState.game).toEqual(
      Object.assign({}, currentState.game, {
        isOver: true
      })
    );
  });

  it('should return the proper state when it handles FLAG_GAME_COMPLETE action', () => {
    const board = [[], []];
    const currentState = {
      game: {
        isInitializing: false,
        board,
        attemptsLeft: 12,
        isOver: false,
        isComplete: false,
      }
    };
    const action = {
      type: FLAG_GAME_COMPLETE,
    };
    const newState = game(currentState, action);

    expect(newState.game).toEqual(
      Object.assign({}, currentState.game, {
        isComplete: true
      })
    );
  });
});