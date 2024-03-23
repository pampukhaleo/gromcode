import { applyMiddleware, combineReducers, compose, createStore } from 'redux';
import { tasksListReducer } from './tasks/tasks.reducer';
import thunk from 'redux-thunk';

const reducer = combineReducers({
  tasks: tasksListReducer,
});

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
export const store = createStore(reducer, composeEnhancers(applyMiddleware(thunk)));
