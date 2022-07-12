const arrAverage = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, num) => acc + num) / arr.length
  }
  return null
}

console.log(arrAverage([2,5,6,3]));