'use strict';

export const squaredNumbers = () => {
  const numbers = document.querySelectorAll('.number');
  Array.from(numbers).map(element => {
    const { number } = element.dataset;
    element.dataset.squaredNumber = number * number;
  });
};
