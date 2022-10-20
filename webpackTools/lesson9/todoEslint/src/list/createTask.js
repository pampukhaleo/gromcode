import { renderTasks } from './renderer';
import { createTask } from './tasksGateway';

export const onBtnClick = () => {
  const taskInputELem = document.querySelector('.task-input');

  if (!taskInputELem.value) {
    return;
  }

  const taskData = {
    text: taskInputELem.value,
    done: false,
  };

  createTask(taskData)
    .then(() => renderTasks());

  taskInputELem.value = '';
};
