import { withdraw } from '../../lesson7/withdraw/index';

it('should -1 if amount less then balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

  expect(result).toEqual(-1)
});

it('should subtract amount from balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, 16], 'User', 10)

  expect(result).toEqual(6)
});

it('should subtract amount from right index array balance', () => {
  const result = withdraw(['Ann', 'John', 'User'], [1400, 87, 16], 'Ann', 10)

  expect(result).toEqual(1390)
});
