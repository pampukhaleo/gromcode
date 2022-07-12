'use strict';

const withdraw = (clients, balances, client, amount) =>
  balances[clients.indexOf(client)] < amount
    ? -1
    : balances[clients.indexOf(client)] - amount;

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 50)

// output
// 37
// и массив balances должен быть [1400, 37, -6]

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'User', 10)

// output
// -1
// и массив balances должен быть [1400, 87, -6]