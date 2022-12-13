import { ADD, DELETE, UPDATE } from './users.actions';

const initialState = {
  usersList: [],
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat(action.payload.userData),
      };
    case DELETE:
      const filteredList = state.usersList.filter(user => user.id !== action.payload.userId);
      return {
        ...state,
        usersList: filteredList,
      };
    case UPDATE:
      const updatedList = state.usersList.map(user => {
        if (user.id === action.payload.userId) {
          return {
            ...user,
            ...action.payload.userData,
          };
        }
        return user;
      });
      return {
        ...state,
        usersList: updatedList,
      };
    default:
      return state;
  }
};

export default usersReducer;
