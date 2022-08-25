'use strict';

export const getItemsList = () => {
  const techList = document.querySelectorAll('.technology');
  console.dir(techList);

  return techList;
};

getItemsList();

export const getItemsArray = () => {
  const toolList = document.querySelectorAll('.tool')

  console.dir(Array.from(toolList));

  return Array.from(toolList)
}

getItemsArray()