import { NEXT, PREV } from './users.actions';

const initialState = {
  usersList: [
    {
      id: 'id-0',
      age: 21,
      name: 'Bob',
    },
  ],
  currentPage: 0,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    case NEXT:
      return {
        ...state,
        currentPage: state.currentPage + 1,
      };
    case PREV:
      return {
        ...state,
        currentPage: state.currentPage - 1,
      };
    default:
      return state;
  }
};

export default usersReducer;
