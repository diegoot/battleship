import {createStore, applyMiddleware, compose} from 'redux';
import reduxThunk from 'redux-thunk';
import rootReducer from './reducers';

let store;

if (process.env.NODE_ENV === 'development') {
  store = createStore(
    rootReducer,
    compose(applyMiddleware(reduxThunk), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()),
  );
}
else {
  store = createStore(
    rootReducer,
    applyMiddleware(reduxThunk),
  );
}

export default store;