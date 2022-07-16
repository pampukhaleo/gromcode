'use strict';

/**
 * @param {string[]} keysList
 * @param {array} valuesList
 * @return {object}
 */
function buildObject(keysList, valuesList) {
  const obj = {};
  const keys = keysList.values()
  for (const key of keys) {
    valuesList.reduce((acc, currentKey) => {
      obj[key] = currentKey
    }, {})
  }
  return console.log(obj)
}

// examples
const keys = ['name', 'address', 'age'];
const values = ['Bob', 'Ukraine', 34];
const result = buildObject(keys, values);
// ==> { name: 'Bob', address: 'Ukraine', age: 34 }
