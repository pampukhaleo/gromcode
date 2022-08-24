'use strict';

const tasks = [
  { text: 'Buy milk', done: false },
  { text: 'Pick up Tom from airport', done: false },
  { text: 'Visit party', done: false },
  { text: 'Visit doctor', done: true },
  { text: 'Buy meat', done: true },
];

/**
 * @param {object[]} tasksList
 * @return {undefined}
 */
const renderTasks = tasksList => {
  const list = document.querySelector('.list');

  const listElements = tasksList.map(({ text, done }) => {
    const listItem = document.createElement('li');
    listItem.classList.add('list__item');

    const checkbox = document.createElement('input');
    checkbox.setAttribute('type', 'checkbox');
    checkbox.checked = done;
    if (done) {
      listItem.classList.add('list__item_done');
    }

    listItem.append(checkbox);
    listItem.append(text);

    return listItem;
  });

  list.append(...listElements);
};

renderTasks(tasks);
