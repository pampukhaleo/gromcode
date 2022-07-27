import { getMinSquaredNumber } from './getMinSquaredNumber'

it('should get minimum module squared number', () => {
  const result = getMinSquaredNumber([2, -777, -5.65, 65, 32, 7]);

  expect(result).toEqual(4);
});

it('should get null when input gets not an array', () => {
  const result = getMinSquaredNumber('string');

  expect(result).toEqual(null);
});

it('should get null when input gets empty array', () => {
  const result = getMinSquaredNumber([]);

  expect(result).toEqual(null);
});
