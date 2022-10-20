import { renderTasks } from './renderer';
import { updateTask } from './tasksGateway';

export const onCheckboxSelect = (event) => {
  const taskId = event.target.dataset.id;
  const text = event.target.nextSibling.data;
  const done = event.target.checked;

  const updatedTaskData = {
    text,
    done,
  };

  updateTask(taskId, updatedTaskData)
    .then(() => renderTasks());
};
