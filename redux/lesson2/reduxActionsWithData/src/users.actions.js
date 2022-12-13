export const ADD = 'USER/ADD';
export const DELETE = 'USER/DELETE';

export const addUser = (id, name) => ({
  type: ADD,
  id,
  name,
});

export const deleteUser = id => ({
  type: DELETE,
  id,
});
