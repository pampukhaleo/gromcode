'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  const newArr = keysList.map((element, index) => [element, valuesList[index]])
  return Object.fromEntries(newArr)
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
console.log(result)
// ==> { name: 'Bob', address: 'Ukraine', age: 34 }
