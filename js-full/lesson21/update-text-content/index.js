'use strict'

export const setTitle = text => {
  const title = document.querySelector('.title')
  console.log(title);
  title.textContent = text
}

setTitle('hi')