import { DELETEUSER, SETUSER } from './user.actions';

const userReducer = (state = null, action) => {
  switch (action.type) {
    case SETUSER:
      return action.payload.userData;
    case DELETEUSER:
      return null;
    default:
      return state;
  }
};

export default userReducer;
