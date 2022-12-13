import './index.scss';
import store from './store';
import { decrement, increment, reset } from './counter.actions';
import { addUser, deleteUser, updateUser } from './users.actions';

store.subscribe(() => {
  const state = store.getState();
  console.log(state);
});

store.dispatch(increment());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(reset());
store.dispatch(decrement());
store.dispatch(addUser({ id: 1, name: 'Tom' }));
store.dispatch(addUser({ id: 2, name: 'Denial' }));
store.dispatch(deleteUser(2));
store.dispatch(updateUser(1, { name: 'Sarah', age: 15 }));
