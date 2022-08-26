'use strict';

const btn = document.querySelectorAll('.pagination__page');
Array.from(btn).map(element =>
  element.addEventListener('click', event => console.log(event.target.dataset.pageNumber)),
);
