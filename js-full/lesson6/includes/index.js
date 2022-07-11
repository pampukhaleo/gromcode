'use strict';

/**
 * @param {number[]} arr
 * @param {number} num
 * @return {boolean}
 */
const includes = (arr, num) => {
  let boolean = false;
  for (let i=0; i < arr.length; i++) {
    console.log(arr[i])
    if (arr[i] === num) {
      boolean = true
    }
  }
  return boolean
};

// examples
console.log(includes([1, 4, 8, 3], 3));; // ==> true
console.log(includes([1, 4, 8, 3], 5));; // ==> false
