'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function getArrayBounds(arr) {
  const newArr = [];
  if (Array.isArray(arr)) {
    newArr.push(arr.length);
    newArr.push(arr[0])
    newArr.push(arr[arr.length - 1])
    return newArr
  } else {
    return null
  }
}

// examples
console.log(getArrayBounds([1, 10, 9, 11])); // ==> [4, 1, 11]
console.log(getArrayBounds(10, 12, 14)); // ==> null
console.log(getArrayBounds([1])); // ==> [1, 1, 1]
