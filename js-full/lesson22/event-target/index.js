'use strict';

const btn = document.querySelectorAll('.btn')
const handleClick = (event) => {
  console.log(event.target.textContent);
}
Array.from(btn).map(element => element.addEventListener('click', handleClick))
