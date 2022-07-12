const cloneArr = arr => {
  if (Array.isArray(arr)) {
    return arr.slice()
  }
  return null
}

console.log(cloneArr([1, 4, 6, 8, 11, 9, 4]));