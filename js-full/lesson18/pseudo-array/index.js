// create function input numbers. output sum of squared numbers
const sumOfSquares = (...arguments) => {
  return [].reduce.apply(arguments,[(acc, elem) => {
    return (elem * elem) + acc
  }, 0])
}

console.log(sumOfSquares(1, 3, 2));
