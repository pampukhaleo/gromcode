import { combineReducers, createStore } from 'redux';
import languageReducer from './language.reducer';
import cartReducer from './cart.reducer';
import userReducer from './user.reducer';

const appReducer = combineReducers({
  languageName: languageReducer,
  cart: cartReducer,
  user: userReducer,
});

export const store = createStore(
  appReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

export default store;
