import { getItem } from "./storage.js";
import { renderTasks } from "./renderer.js";

export const onCheckboxSelect = event => {
  // const listElem = document.querySelector('.list');
  const tasksList = getItem('tasksList')

  tasksList.map(element => {
    if (element.id === event.target.dataset.id) {
      element.done
        ? element.done = false
        : element.done = true
    }
  });
  // listElem.textContent = '';

  renderTasks()
};