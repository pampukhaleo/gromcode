const promiseNumber1 = Promise.resolve(67);
const promiseNumber2 = Promise.resolve(23);
const promiseNumber3 = Promise.resolve(8);

/*
 * создай промис и присвой переменной resultPromise
 * чтобы в консоль вывелась сумма всех чисел из трех промисов
 */

// update code below
const resultPromise = (...numbers) => {
  const result = numbers.map(num => num);
  console.log(result);
  return Promise.resolve(result);
};

console.log(resultPromise(promiseNumber1, promiseNumber2, promiseNumber3));

// resultPromise
//   .then(numbersList => {
//     console.log('list', numbersList);
//     const sum = numbersList.reduce((acc, num) => acc + num, 0);
//     return sum;
//   })
//   .then(result => {
//     console.log(result); // 98
//   });

// resultPromise(promiseNumber1, promiseNumber2, promiseNumber3);
