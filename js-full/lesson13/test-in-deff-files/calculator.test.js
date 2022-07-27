import getSum, { getSquaredArray, getOddNumbers } from './calculator.js';
// const { getSquaredArray, getOddNumbers } = require('./getMinSquaredNumber.js')

it('should get squared numbers', () => {
  const result = getSquaredArray([1, 2, 3, 4]);

  expect(result).toEqual([1, 4, 9, 16]);
});

it('should get Odd numbers', () => {
  const result = getOddNumbers([1, 2, 3, 4]);

  expect(result).toEqual([1, 3]);
});

it('should get sum of numbers', () => {
  const result = getSum(1, 2);

  expect(result).toEqual(3);
});
