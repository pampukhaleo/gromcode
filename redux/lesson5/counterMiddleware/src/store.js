import { applyMiddleware, combineReducers, compose, createStore } from 'redux';

import counterReducer from './counter.reducer';

const reducer = combineReducers({
  counter: counterReducer,
});

const logger = store => next => action => {
  console.group(action.type);
  console.info('dispatching', action);
  let result = next(action);
  console.log('next state', store.getState());
  console.groupEnd();
  return result;
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));

export default store;
