import { calc } from './calculator';

it('should add numbers', () => {
  const result = calc('1 + 2');

  expect(result).toEqual('1 + 2 = 3');
});

it('should subtract numbers', () => {
  const result = calc('1 - 2');

  expect(result).toEqual('1 - 2 = -1');
});

it('should multiply numbers', () => {
  const result = calc('1 * 2');

  expect(result).toEqual('1 * 2 = 2');
});

it('should divide numbers', () => {
  const result = calc('1 / 2');

  expect(result).toEqual('1 / 2 = 0.5');
});

it('should return null if input is not a string', () => {
  const result = calc([]);

  expect(result).toEqual(null);
});