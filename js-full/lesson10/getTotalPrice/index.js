const getTotalPrice = arr => {
  const sum = arr.reduce((accumulator, currentValue) =>
      Math.floor((accumulator + currentValue) * 100) / 100
  );
  return `$${sum}`;
};

// examples
console.log(getTotalPrice([-10, 10, -10, 11]));; // ===> 10
console.log(getTotalPrice([2.1, 0, 1.6666]));; // ===> 2.1
// getMaxAbsoluteNumber([-6, 3, 5, -1]); // ===> 6
// getMaxAbsoluteNumber([-777, 3, -1, 45, -20]); // ===> 777
