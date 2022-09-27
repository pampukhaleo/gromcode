import { renderTasks } from "./renderer.js";
import { initHandlers } from "./todoList.js";

document.addEventListener('DOMContentLoaded', () => {
  renderTasks();
  initHandlers();
})