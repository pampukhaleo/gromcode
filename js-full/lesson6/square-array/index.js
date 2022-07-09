'use strict';

/**
 * @param {number[]} arr
 * @return {number[]}
 */
function squareArray(arr) {
  let newArr = [];
  if (Array.isArray(arr)) {
    for (let i=0; i < arr.length; i++) {
      newArr.push(arr[i] * arr[i])
    }
    return newArr
  }
  return null
}

// examples
console.log(squareArray([1, 10, 9, 11])); // ==> [1, 100, 81, 121]
squareArray([10, 0, -4]); // ==> [100, 0, 16]
squareArray([1]); // ==> [1]
