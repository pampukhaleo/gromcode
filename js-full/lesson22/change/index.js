'use strict'

const inputElem = document.querySelector('input[type=text]')
inputElem.addEventListener('change', () => console.log(inputElem.value))