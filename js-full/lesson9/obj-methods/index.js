const getAdults = (obj) =>
  Object.entries(obj)
    .filter((user) => user[1] > 17)
    .map((user) => user[0]);

console.log(getAdults({'john Doe': 19, 'Tom': 17, 'Bob': 18}));