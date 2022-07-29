import { createCalculator } from './index';

it('should add number to defaultNum', () => {
  const calculator = createCalculator();
  calculator.add(3);
  const result = calculator.getMemo();

  expect(result).toEqual(3);
});

it('should subtract number from defaultNum', () => {
  const calculator = createCalculator();
  calculator.decrease(2);
  const result = calculator.getMemo();

  expect(result).toEqual(-2);
});

it('should reset defaultNumber', () => {
  const calculator = createCalculator();
  calculator.reset();
  const result = calculator.getMemo();

  expect(result).toEqual(0);
});
