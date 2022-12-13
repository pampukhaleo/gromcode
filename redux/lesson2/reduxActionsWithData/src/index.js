import './index.scss';
import store from './store';
import { addUser, deleteUser } from './users.actions';

const onAddUser = (id, name) => {
  store.dispatch(addUser(id, name));
};

const onDeleteUser = id => {
  store.dispatch(deleteUser(id));
};

onAddUser(1, 'Tom');
onAddUser(2, 'Dad');
onDeleteUser(2);
onAddUser(3, 'Vam');
onDeleteUser(1);

console.log(store.getState().usersList);

store.subscribe(() => {
  const state = store.getState().usersList;
  console.log(state);
});
