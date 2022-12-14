import { DELETEUSER, SETUSER } from './user.actions';

const initialState = {
  user: null,
};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case SETUSER:
      return {
        user: action.payload.userData,
      };
    case DELETEUSER:
      return {
        user: null,
      };
    default:
      return state;
  }
};

export default userReducer;
