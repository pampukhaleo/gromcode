const tasks = [
  { text: 'Buy milk', done: false, id: Math.random().toString(36).slice(2) },
  { text: 'Pick up Tom from airport', done: false, id: Math.random().toString(36).slice(2) },
  { text: 'Visit party', done: false, id: Math.random().toString(36).slice(2) },
  { text: 'Visit doctor', done: true, id: Math.random().toString(36).slice(2) },
  { text: 'Buy meat', done: true, id: Math.random().toString(36).slice(2) },
];

const listElem = document.querySelector('.list');

const renderTasks = tasksList => {
  const tasksElems = tasksList
    .sort((a, b) => a.done - b.done)
    .map(({ text, done, id }) => {
      const listItemElem = document.createElement('li');
      listItemElem.classList.add('list__item');
      const checkbox = document.createElement('input');
      checkbox.setAttribute('type', 'checkbox');
      checkbox.checked = done;
      checkbox.classList.add('list__item-checkbox');
      checkbox.dataset.id = id;
      if (done) {
        listItemElem.classList.add('list__item_done');
      } else {
        listItemElem.classList.remove('list__item_done');
      }
      listItemElem.append(checkbox, text);

      return listItemElem;
    });

  listElem.append(...tasksElems);
};

renderTasks(tasks);

// put your code here
const taskInput = document.querySelector('.task-input');
const createBtn = document.querySelector('.create-task-btn');

const onBtnClick = () => {
  if (!taskInput.value) {
    return;
  }
  tasks.push({ text: taskInput.value, done: false, id: Math.random().toString(36).slice(2) });
  listElem.textContent = '';
  renderTasks(tasks);
  taskInput.value = '';
};

createBtn.addEventListener('click', onBtnClick);

const onCheckboxSelect = event => {
  tasks.map(element => {
    if (element.id === event.target.dataset.id) {
      element.done
        ? element.done = false
        : element.done = true
    }
  });
  listElem.textContent = '';
  renderTasks(tasks);
};

listElem.addEventListener('click', onCheckboxSelect)