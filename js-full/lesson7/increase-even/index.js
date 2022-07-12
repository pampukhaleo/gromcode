const increaseEvenEl = (arr, delta) => {
  if (Array.isArray(arr)) {
    return arr.map(el => el % 2 === 0 ? el + delta : el)
  }
  return null
}

console.log(increaseEvenEl([1, 4, 6, 8, 11, 9, 4], 20));