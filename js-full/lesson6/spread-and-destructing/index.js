/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swap(numbers) {
  const newArr = [];
  const [firstNum, ...rest] = numbers;
  newArr.push(...rest, firstNum);
  return newArr;
}

/**
 * @param {number[]} numbers
 * @return {number[]}
 */
function swapManual(numbers) {
  let newArr = [];
  for (let i=1; i < numbers.length; i++) {
    newArr.push(numbers[i])
  }
  newArr.push(numbers[0])
  return newArr;
}

// examples
console.log(swap([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
console.log(swapManual([1, 10, 9, 11])); // ==> [10, 9, 11, 1]
