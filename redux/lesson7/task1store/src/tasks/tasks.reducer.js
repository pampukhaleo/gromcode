import { RECEIVED_TASKSLIST } from './tasks.actions';

const initialState = {
  tasksList: [],
};

export const tasksListReducer = (state = initialState, action) => {
  switch (action.type) {
    case RECEIVED_TASKSLIST:
      return {
        ...state,
        tasksList: action.payload.tasks,
      };
    default:
      return state;
  }
};
