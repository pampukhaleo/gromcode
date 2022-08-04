// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// export func defer
// input function, ms
// return function with ms delay
// defer sends function arguments to the return function
// defer works with functions that has this

export const defer = (func, ms) => {
  return function () {
    setTimeout(() => func.apply(this, arguments), ms);
  };
};

const user = {
  name: 'Leo',
  showName() {
    console.log(this.name);
  },
};

const sayName = () => {
  console.log('Name');
};

const sum = (a, b) => {
  console.log(a + b);
};

const deferredFunc = defer(user.showName, 1000);

deferredFunc.call(user);
