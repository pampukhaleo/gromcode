// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// input array
// output new array

// getSquaredArray
// input array
// output array
// element * element
// make it export from file

// getOddNumbers
// input array
// output array
// filter for Odd - 1,3,5
// make it export from file

// default export
// input (num, num)
// output sum of input numbers

export const getSquaredArray = arr =>
  arr.map(element => element * element);

export const getOddNumbers = arr =>
  arr.filter(number => number % 2 !== 0);

export default (a, b) => a + b

const array = [1, 2];
console.log(getSquaredArray(array));

// module.exports = { getSquaredArray, getOddNumbers }
