import { combineReducers, createStore } from 'redux';
import userReducer from './users.reducer';

const reducers = combineReducers({
  users: userReducer,
});

const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
