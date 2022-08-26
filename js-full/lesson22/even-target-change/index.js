'use strict';

const inputELem = document.querySelector('.text-input')
inputELem.addEventListener('change', event => {
  console.log(event.target.value);
})
