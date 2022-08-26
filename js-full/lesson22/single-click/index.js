'use strict'

const btnElem = document.querySelector('.single-use-btn')
btnElem.addEventListener('click', () => {
  console.log('clicked');
}, { once: true })