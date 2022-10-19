import { renderTasks } from './list/renderer.js';
import { initHandlers } from './list/todoList.js';
import './index.scss';

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initHandlers();
});

const onStorageChange = event => {
  if (event.key === 'tasksList') {
    renderTasks();
  }
};

window.addEventListener('storage', onStorageChange);
