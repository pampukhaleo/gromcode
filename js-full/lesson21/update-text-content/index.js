'use strict'

export const setTitle = text => {
  const title = document.querySelector('.title')
  title.textContent = text
}

setTitle('hi')