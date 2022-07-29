// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// create default number = 0

// add function input number, add input number to default number

// decrease function input number, subtract input number from default number

// reset function make default number = 0

// getMemo function returns default number

// export functions

let defaultNumber = 0;

const add = number => {
  defaultNumber += number;
};

const decrease = number => {
  defaultNumber -= number;
};

const reset = () => {
  defaultNumber = 0;
};

const getMemo = () => defaultNumber;

add(3);

console.log(getMemo());

decrease(2);

console.log(getMemo());
