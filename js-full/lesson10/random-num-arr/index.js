'use strict';

/**
 * @param {number} length
 * @param {number} from
 * @param {number} to
 * @return {number[]}
 */

const getRandomNumbers = (length, from, to) => {
  let arr = [];
  from = Math.ceil(from)
  to = Math.ceil(to)
  if (to - from < 1 || from > to) {
    return null
  }
  for (let i = 0; i < length; i++) {
    arr.push(Math.floor(Math.random() * (to - from) + from))
  }
  return arr;
};
console.log(2.9-2.11)
// examples
console.log(getRandomNumbers(5, 1.4, 3.22));; // ==> [2, 2, 2, 3, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));; // ==> [3, 2, 2, 2, 2]
console.log(getRandomNumbers(5, 1.4, 3.22));; // ==> [3, 3, 2, 3, 2]
console.log(getRandomNumbers(3, 2.4, 4.5));; // ==> [4, 3, 4]
console.log(getRandomNumbers(3, 1.9, 2.5));; // ==> [2, 2, 2]

console.log(getRandomNumbers(7, 1.4, 1.9));;// ==> null
console.log(getRandomNumbers(7, 2.11, 2.9));; // ==> null
console.log(getRandomNumbers(1, 2.5, 0.9));; // ==> null

console.log(getRandomNumbers(7, 1.5, 1.9))
console.log(getRandomNumbers(10, 8, 17.5))
