import { deleteTask } from './tasksGateway';
import { renderTasks } from './renderer';

export const onDeleteBtnClick = (event) => {
  const taskId = event.target.dataset.id;

  deleteTask(taskId)
    .then(() => renderTasks());
};
