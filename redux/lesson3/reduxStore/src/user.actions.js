export const SETUSER = 'USER_SET';
export const DELETEUSER = 'USER_DELETE';

export const setUser = userData => ({
  type: SETUSER,
  payload: {
    userData,
  },
});

export const removeUser = () => ({
  type: DELETEUSER,
});
