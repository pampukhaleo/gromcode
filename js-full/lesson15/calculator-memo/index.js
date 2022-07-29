// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// func createCalculator output Object with methods

// 1 method add adds input number for defaultNumber

// 2 method decrease subtract input number from defaultNumber

// 3 method reset sets defaultNumber to 0

// 4 method getMemo returns defaultNumber

// let defaultNumber = 0

// export createCalculator

// make tests for those methods

export const createCalculator = () => {
  let defaultNumber = 0;

  function add(number) {
    defaultNumber += number;
  }

  function decrease(number) {
    defaultNumber -= number;
  }

  function reset() {
    defaultNumber = 0;
  }

  function getMemo() {
    return defaultNumber;
  }

  return {
    add,
    decrease,
    reset,
    getMemo,
  };
};

const calculator = createCalculator();
const calculatorNext = createCalculator();

console.log(calculator.getMemo()); // 0

calculator.add(3);

console.log(calculator.getMemo()); // 3

calculator.decrease(5);

calculatorNext.add(5);

console.log(calculatorNext.getMemo()); // 5

console.log(calculator.getMemo()); // -2

calculator.reset();

console.log(calculator.getMemo()); // 0
