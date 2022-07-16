'use strict';

/**
 * @param {number[]} arr
 * @return {number}
 */
const getMaxAbsoluteNumber = arr => {
  if (Array.isArray(arr) && arr.length > 0) {
    const absolute = arr.map(num => Math.abs(num))
    return Math.max(...absolute)
  }
  return null
};

// examples
console.log(getMaxAbsoluteNumber([-10, 10, -10, 11]));; // ===> 10
getMaxAbsoluteNumber([2.1, 0, 1.6]); // ===> 2.1
getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
