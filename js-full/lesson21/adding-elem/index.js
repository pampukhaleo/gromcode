'use strict'

export const createButton = buttonText => {
  const body = document.querySelector("body")
  const btn = document.createElement('button')
  btn.textContent = `${buttonText}`
  body.append(btn)
}
