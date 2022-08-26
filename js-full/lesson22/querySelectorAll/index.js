'use strict';

const btn = document.querySelectorAll('.pagination__page');
const handleClick = event => console.log(event.target.dataset.pageNumber);
Array.from(btn).map(element => element.addEventListener('click', handleClick));
