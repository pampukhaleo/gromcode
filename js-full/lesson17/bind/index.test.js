import {
  getUkrainePopulation,
  printSpecialTransaction,
  sayBruceName,
  sayStudentName,
  specialGreeting,
} from './index';

it('should print student name', () => {
  const result = sayStudentName();
  expect(result).toEqual(console.log('Tom'));
});

it('should print student name', () => {
  const result = sayBruceName();
  expect(result).toEqual(console.log('Bruce'));
});

it('should print special transaction', () => {
  const result = printSpecialTransaction();
  expect(result).toEqual(console.log('400 USD - buy on NASDAQ'));
});

it('should print population', () => {
  const result = getUkrainePopulation();
  expect(result).toEqual('Population in Ukraine is 43000');
});

it('should print greeting', () => {
  const result = specialGreeting();
  expect(result).toEqual(console.log('Hello, Bob Marley. Welcome to the Microsoft'));
});
