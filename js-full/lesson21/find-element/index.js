'use strict';

export const getTitleElement = () => {
  const title = document.querySelector('.title');
  console.log(title);

  return title;
};

getTitleElement();

export const getInputElement = () => {
  const input = document.querySelector('input[type=text]');
  console.log(input);

  return input;
};

getInputElement()
