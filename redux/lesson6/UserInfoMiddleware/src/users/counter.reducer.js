import { DECREMENT, INCREMENT, RESET } from './counter.actions';

const initialState = {
  userData: null,
  isFetching: false,
};

const usersReducer = (state = initialState, action) => {
  switch (action.type) {
    default:
      return state;
  }
};

export default usersReducer;
