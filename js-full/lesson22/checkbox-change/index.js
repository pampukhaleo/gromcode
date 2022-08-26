'use strict'

const checkboxElem = document.querySelector('.task-status')
checkboxElem.addEventListener('click', event => {
  console.log(event.target.checked);
})