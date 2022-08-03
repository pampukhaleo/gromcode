// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// export createArrayOfFunctions
// input number
// output array

// input is array length
// create new func and push it to array
// function returns own index that has inside an array

// if input is not a number return null
// if input is undefined return empty array

const createArrayOfFunctions = number => {
  const newArray = [];
  for (let index = 0; index < number; index++) {
    newArray.push(function () {
      return index;
    });
  }
  if (number === undefined) {
    return newArray;
  }
  if (isNaN(number)) {
    return null;
  }
  return newArray;
};

console.log('func', createArrayOfFunctions());
