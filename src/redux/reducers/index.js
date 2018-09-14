import {combineReducers} from 'redux';
import setup from './setup';
import game from './game';

const rootReducer = combineReducers({
  setup,
  game
});

export default rootReducer;