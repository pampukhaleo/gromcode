import { ADD, DELETE } from './users.actions';

const initialState = {
  usersList: [],
};

export const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD:
      return {
        ...state,
        usersList: state.usersList.concat({
          id: action.id,
          name: action.name,
        }),
      };
    case DELETE:
      const newState = state.usersList.filter(user => user.id !== action.id);
      return {
        ...state,
        usersList: newState,
      };
    default:
      return state;
  }
};
