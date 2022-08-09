// create function input numbers. output sum of squared numbers
export function sumOfSquares() {
  return [...arguments].reduce((acc, elem) => {
    return (elem * elem) + acc
  }, 0)
}
