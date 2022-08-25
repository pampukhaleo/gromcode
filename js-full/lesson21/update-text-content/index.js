'use strict'

export const setButton = buttonText => {
  const body = document.querySelector('body')
  const btn = document.createElement('button')
  btn.append(buttonText)
  body.innerHTML = `<button>${buttonText}</button>`
  body.textContent = `<button>${buttonText}</button>`
}

setButton('hi')