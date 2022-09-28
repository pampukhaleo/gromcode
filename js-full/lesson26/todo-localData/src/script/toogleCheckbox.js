import { getItem } from './storage.js';
import { renderTasks } from './renderer.js';

export const onCheckboxSelect = event => {
  const tasksList = getItem('tasksList');

  tasksList.map(element => {
    if (element.id === event.target.dataset.id) {
      element.done === true ? (element.done = false) : (element.done = true);
    }
  });

  renderTasks();
};
