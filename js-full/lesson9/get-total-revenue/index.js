const getTotalRevenue = transactions => {
  let count = 0;
  transactions
    .map(transaction => Object.values(transaction))
    .forEach(value => count += value[1])
  return count
};

// examples
const dayTransactions = [
  { userId: 22, amount: 60, operation: 'sell' },
  { userId: 22, amount: 160, operation: 'buy' },
  { userId: 44, amount: 90, operation: 'sell' },
];

const result = getTotalRevenue(dayTransactions); // ==> 310
console.log(result)