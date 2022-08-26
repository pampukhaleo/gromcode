'use strict'

const div = document.querySelector('.rect_div')
const p = document.querySelector('.rect_p')
const span = document.querySelector('.rect_span')
const list = document.querySelector('.events-list')

const addSpan = function(element, color) {
  list.innerHTML += `<span style="color: ${color}; margin-left: 8px">${element}</span>`
}

const logGreenDiv = addSpan.bind(null, 'div', 'green')
const logGreyDiv = addSpan.bind(null, 'div', 'grey')
// const logGreyDiv = () => addSpan('div', 'grey')

const logGreenP = addSpan.bind(null, 'p', 'green')
const logGreyP = addSpan.bind(null, 'p', 'grey')

const logGreenSpan = addSpan.bind(null, 'span', 'green')
const logGreySpan = addSpan.bind(null, 'span', 'grey')

// // погружение
// div.addEventListener('click', logGreyDiv, true)
// p.addEventListener('click', logGreyP, true)
// span.addEventListener('click', logGreySpan, true)
// // всплытие
// div.addEventListener('click', logGreenDiv)
// p.addEventListener('click', logGreenP)
// span.addEventListener('click', logGreenSpan)

const clearBtn = document.querySelector('.clear-btn')
clearBtn.addEventListener('click', () => list.innerHTML = '')

const removeHandlersBtn = document.querySelector('.remove-handlers-btn')
const removingHandlers = function() {
  div.removeEventListener('click', logGreenDiv)
  div.removeEventListener('click', logGreyDiv, true)

  p.removeEventListener('click', logGreenP)
  p.removeEventListener('click', logGreyP, true)

  span.removeEventListener('click', logGreenSpan)
  span.removeEventListener('click', logGreySpan, true)
}
removeHandlersBtn.addEventListener('click', removingHandlers)

const attachHandlersBtn = document.querySelector('.attach-handlers-btn')
const attachingHandlers = function() {
  // погружение
  div.addEventListener('click', logGreyDiv, true)
  p.addEventListener('click', logGreyP, true)
  span.addEventListener('click', logGreySpan, true)
// всплытие
  div.addEventListener('click', logGreenDiv)
  p.addEventListener('click', logGreenP)
  span.addEventListener('click', logGreenSpan)
}
attachingHandlers()
attachHandlersBtn.addEventListener('click', attachingHandlers)