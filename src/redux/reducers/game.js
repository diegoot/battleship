import {INIT_GAME_START, INIT_GAME_END, CELL_CLICKED, FLAG_GAME_OVER, FLAG_GAME_COMPLETE, RETRY_CLICKED_START, RETRY_CLICKED_END} from '../actions/actionTypes';
import initialState from './initialState';

const setup = (state = initialState.game, action) => {
  switch (action.type) {
    case INIT_GAME_START:
      return Object.assign({}, state, {
        isInitializing: true,
        attemptsLeft: action.attempts
      });
    case RETRY_CLICKED_START:
      return Object.assign({}, state, {
        isInitializing: true,
        isOver: false,
        isComplete: false,
        attemptsLeft: action.attempts,
      });
    case INIT_GAME_END:
      return Object.assign({}, state, {
        isInitializing: false,
        board: action.board,
      });
    case RETRY_CLICKED_END:
      return Object.assign({}, state, {
        isInitializing: false,
        board: action.board,
      });
    case CELL_CLICKED:
      const board = state.board.map(row => row.slice());
      board[action.y][action.x] = Object.assign(
        {},
        board[action.y][action.x],
        {isHidden: false}
      );
      return Object.assign({}, state, {
        attemptsLeft: state.attemptsLeft - 1,
        board
      });
    case FLAG_GAME_OVER:
      return Object.assign({}, state, {
        isOver: true
      });
    case FLAG_GAME_COMPLETE:
      return Object.assign({}, state, {
        isComplete: true
      });
    default:
      return state;
  }
}

export default setup;