import * as actionTypes from './actionTypes';
import {initBoard} from 'services/setup';

export const initGame = attempts =>
  dispatch => {
    dispatch({
      type: actionTypes.INIT_GAME_START,
      attempts
    });

    return initBoard().then(board =>
      dispatch({
        type: actionTypes.INIT_GAME_END,
        board,
      })
    );
  }

export const cellClicked = (x, y) => {
  return {
    type: actionTypes.CELL_CLICKED,
    x,
    y
  };
};

export const flagGameOver = () => {
  return {
    type: actionTypes.FLAG_GAME_OVER
  };
}

export const flagGameComplete = () => {
  return {
    type: actionTypes.FLAG_GAME_COMPLETE
  };
}