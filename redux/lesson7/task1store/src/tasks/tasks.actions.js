import { createTask, deleteTask, fetchTasks, updateStatusTask } from './taskGateway';
import { tasksSelector } from './tasksSelector';

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

export const updateTaskAC = taskId => {
  return function (dispatch, getState) {
    const state = getState();
    const tasksList = tasksSelector(state);
    const task = tasksList.find(task => task.id === taskId);
    const updatedTask = {
      ...task,
      done: !task.done,
    };
    updateStatusTask(taskId, updatedTask).then(() => {
      dispatch(fetchTasksListAC());
    });
  };
};

export const deleteTaskAC = taskId => {
  return function (dispatch) {
    deleteTask(taskId).then(() => {
      dispatch(fetchTasksListAC());
    });
  };
};

export const createTaskAC = text => {
  return function (dispatch) {
    const newTask = {
      text,
      done: false,
    };
    createTask(newTask).then(() => {
      dispatch(fetchTasksListAC());
    });
  };
};
