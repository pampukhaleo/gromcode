'use strict';

const btnElem = document.querySelector('.single-use-btn');
const logClick = () => {
  console.log('clicked');
  btnElem.removeEventListener('click', logClick)
}
btnElem.addEventListener('click', logClick)

