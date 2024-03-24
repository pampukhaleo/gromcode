import { createSelector } from 'reselect';

export const tasksSelector = state => state.tasks.tasksList;

export const sortedTasksListSelector = createSelector([tasksSelector], tasks => {
  return tasks.slice().sort((a, b) => a.done - b.done);
});
