'use strict';

/**
 * @param {number[]} arr
 * @param {number} delta
 * @return {number[]}
 */
const increaseEvenEl = (arr, delta) => {
  let newArr = [];
  if (Array.isArray(arr)) {
    for (let i=0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        newArr.push(arr[i] + delta)
      } else {
        newArr.push(arr[i])
      }
    }
    return newArr
  }
  return null
};

// examples
console.log(increaseEvenEl([2, 5, 6, 8, 11, 9, 4, 5, 12, 65], 20)); // ===> [22, 5, 26, 28, 11, 9, 24]
console.log(increaseEvenEl([7, 11, 1], 10)); // ===> [7, 11, 1]
console.log(increaseEvenEl([], 120)); // ===> []
