// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// input array
// output number

// find module of array number
// find minimum number in array
// make that number squared and return it
// if empty array or not array - return null

export const getMinSquaredNumber = array => {
  if (!Array.isArray(array) || array.length === 0) {
    return null;
  }
  const result = array.map(number => Math.abs(number))
  const minNumber = Math.min(...result);
  return minNumber * minNumber;
};

const array = [2, -777, 1.26, -5.65, 65, 32, 7];
const emptyArray = [];
const notArray = 'string';
console.log(getMinSquaredNumber(notArray));
