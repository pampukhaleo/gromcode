'use strict';

/**
 * @param {number[]} arr
 * @return {boolean}
 */
const checkSum = arr => {
  let sum = 0;
  if (Array.isArray(arr)) {
    for (let i=0; i < arr.length; i++) {
      sum += arr[i];
    }
    if (sum > 100) {
      return true
    }
    return false
  }
  return null
};

// examples
console.log(checkSum([10, 10, 10])); // ===> false
console.log(checkSum([10, 99, 1])); // ===> true
checkSum([-6, -3, 200]); // ===> true
