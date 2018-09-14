import {SETUP_GAME} from '../actions/actionTypes';
import initialState from './initialState';

const setup = (state = initialState.setup, action) => {
  switch (action.type) {
    case SETUP_GAME:
      return Object.assign({}, state, {
        attempts: action.attempts
      });
    default:
      return state;
  }
}

export default setup;