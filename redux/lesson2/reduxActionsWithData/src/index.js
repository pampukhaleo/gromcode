import './index.scss';
import store from './store';
import { addUser, deleteUser } from './users.actions';

const onAddUser = ({ id, name }) => {
  store.dispatch(
    addUser({
      id,
      name,
    }),
  );
};

const onDeleteUser = id => {
  store.dispatch(deleteUser(id));
};

onAddUser({
  id: 1,
  name: 'Tom',
});
onAddUser({
  id: 2,
  name: 'Van',
});
onAddUser({
  id: 3,
  name: 'LEo',
});
onDeleteUser(2);

console.log(store.getState().usersList);

store.subscribe(() => {
  const state = store.getState().usersList;
  console.log(state);
});
