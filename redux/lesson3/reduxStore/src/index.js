import './index.scss';
import store from './store';
import { setLanguage } from './language.actions';
import { addProduct, removeProduct } from './cart.actions';
import { removeUser, setUser } from './user.actions';

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(setLanguage('jp'));
store.dispatch(
  addProduct({
    id: 1,
    name: 'Milk',
  }),
);
store.dispatch(
  addProduct({
    id: 2,
    name: 'Choco pie',
  }),
);
store.dispatch(removeProduct(2));
store.dispatch(setUser({ name: 'Bob' }));
store.dispatch(removeUser());
