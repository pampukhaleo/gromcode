// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// export makeCounter func
// output function counter that returns +1 for let count starting from 0

export const makeCounter = () => {
  let count = 0;
  return function () {
    return count++;
  };
};

const counter1 = makeCounter();
const counter2 = makeCounter();

console.log(counter1())
console.log(counter1())
console.log(counter2())
console.log(counter1())
console.log(counter2())
