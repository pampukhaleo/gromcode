import { combineReducers, createStore } from 'redux';
import optionReducer from './options/options.reducer';

const reducer = combineReducers({
  options: optionReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
