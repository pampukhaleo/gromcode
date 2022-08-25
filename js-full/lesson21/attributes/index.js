'use strict'

export const finishForm = () => {
  const form = document.querySelector('.login-form')

  const textInput = document.createElement('input')
  textInput.setAttribute('type', 'text')
  textInput.setAttribute('name', 'login')

  const passInput = document.querySelector('input[type=text]')
  passInput.setAttribute('type', 'password')

  form.prepend(textInput)
}