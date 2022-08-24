'use strict';

export const getTitleElement = () => {
  const title = document.querySelector('.title');
  console.dir(title);

  return title;
};

getTitleElement();

export const getInputElement = () => {
  const input = document.querySelector('input[type=text]');
  console.dir(input);

  return input;
};

getInputElement()
