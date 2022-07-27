import { reverseArray } from '../../lesson7/reverse-array/index';

it('should return null if input is not an array', () => {
  const result = reverseArray('string');

  expect(result).toEqual(null);
});

it('should return reverse array', () => {
  const result = reverseArray([1, 2, 3]);

  expect(result).toEqual([3, 2, 1]);
});

const sameArray = [1, 2, 3];

it('should not return same array', () => {
  const result = reverseArray(sameArray);

  expect(result).not.toEqual(sameArray);
});
