'use strict'

export const finishList = () => {
  const list = document.querySelector('.list')
  const listItem5 = document.querySelector('.special')

  const listItem1 = document.createElement('li')
  listItem1.textContent = '1'
  const listItem4 = document.createElement('li')
  listItem4.textContent = '4'
  const listItem6 = document.createElement('li')
  listItem6.textContent = '6'
  const listItem8 = document.createElement('li')
  listItem8.textContent = '8'

  list.prepend(listItem1)
  listItem5.before(listItem4)
  listItem5.after(listItem6)
  list.append(listItem8)
}