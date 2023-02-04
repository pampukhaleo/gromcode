import { getAdults } from '../../lesson8/obj-filter/index';

it('should get weather with age more then 17 years old', () => {
  const result = getAdults({ 'John Doe': 19, Tom: 17, Bob: 18 });

  expect(result).toEqual({ 'John Doe': 19, Bob: 18 });
});

it('should return empty object if input is empty object', () => {
  const result = getAdults({});

  expect(result).toEqual({});
});

const sameObj = { Ann: 56, Andrey: 7 };

it('should not return same object', () => {
  const result = getAdults(sameObj);

  expect(result).not.toEqual(sameObj);
});
