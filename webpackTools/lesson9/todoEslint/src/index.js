import { renderTasks } from './list/renderer';
import { initHandlers } from './list/todoList';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initHandlers();
});

const onStorageChange = (event) => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
