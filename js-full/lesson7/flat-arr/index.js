const flatArray = arr => arr
  .flat()
  .sort((a, b) => a - b)

console.log(flatArray([1,2, [5, 1], 3]))