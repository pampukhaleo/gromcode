import { combineReducers, createStore } from 'redux';
import usersReducer from './users/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
});

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
