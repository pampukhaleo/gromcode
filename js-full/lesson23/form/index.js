'use strict';

const emailInputElem = document.querySelector('#email');
const emailSpanElem = document.querySelector('.error-text_email');

const isRequired = value => (value ? undefined : 'Required');

const isEmail = value => (value.includes('@') ? undefined : 'Should be an email');

const onEmailChange = event => {
  emailSpanElem.textContent = [isRequired, isEmail]
    .map(validator => validator(event.target.value))
    .filter(text => text)
    .join(', ');
};

emailInputElem.addEventListener('input', onEmailChange);

const passwordInputElem = document.querySelector('#password');
const passwordSpanElem = document.querySelector('.error-text_password');

const onPasswordChange = event => {
  passwordSpanElem.textContent = [isRequired]
    .map(validator => validator(event.target.value))
    .filter(text => text)
    .join(', ');
};

passwordInputElem.addEventListener('input', onPasswordChange);

const loginForm = document.querySelector('.login-form');

const onSubmit = event => {
  event.preventDefault();

  // так можно получить данные формы - ВАРИАНТ 1:
  // const formFields = [...new FormData(loginForm)];
  // // formFields => [["email", "значение поля email"], ["password", "значение поля password"]]
  //
  // const formData = formFields.reduce(function (acc, formField) {
  //   const prop = formField[0]; // здесь "name" инпута
  //   const value = formField[1]; // здесь "value" инпута
  //   // если использовать деструктуризацию, то можно предыдущие 2 строки записать короче
  //   // const [prop, value] = formField;
  //   return {
  //     // используем оператор расширения, чтобы в acc добвить свойства все предыдущих итераций
  //     ...acc,
  //     // используем вычислимое свойство объекта, чтобы добавить в аккумулятор новое свойство
  //     [prop]: value,
  //   };
  // }, {});

  // более простой формат считывания формы - ВАРИАНТ 2:
  const formData = Object.fromEntries(new FormData(loginForm));

  alert(JSON.stringify(formData));
};

loginForm.addEventListener('submit', onSubmit);
