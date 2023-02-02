import { combineReducers, createStore } from 'redux';

import usersReducer from './users/users.reducer';

const reducer = combineReducers({
  users: usersReducer,
});

// const logger = store => next => action => {
//   console.group(action.type);
//   console.info('dispatching', action);
//   let result = next(action);
//   console.log('next state', store.getState());
//   console.groupEnd();
//   return result;
// };
//
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
//
// export const store = createStore(reducer, composeEnhancers(applyMiddleware(logger)));
//
// export default store;

export const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
