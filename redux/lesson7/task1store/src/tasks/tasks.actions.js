import { fetchTasks } from './taskGateway';
export const RECEIVED_TASKSLIST = 'RECEIVED_TASKS-LIST';
const receivedTasksAC = tasks => {
  return {
    type: RECEIVED_TASKSLIST,
    payload: {
      tasks,
    },
  };
};
export const fetchTasksListAC = () => {
  return function (dispatch) {
    fetchTasks().then(tasks => {
      dispatch(receivedTasksAC(tasks));
    });
  };
};
