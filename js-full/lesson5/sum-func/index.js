let sum = 0;
const getSum = (start, end) => {
  for (let i = start; i <= end; i++) {
    if (i % 2 === 0) {
      sum += i;
    }
  }
  return sum;
};

console.log(getSum(0, 6));