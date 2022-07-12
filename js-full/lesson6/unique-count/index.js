function uniqueCount(array) {
  let arr =[]
  if (Array.isArray(array)) {
    for (let i = 0; i < array.length; i++) {
      if (!arr.includes(array[i])) {
        arr.push(array[i])
      }
    }
    return arr.length;
  }
  return null
}

console.log(uniqueCount([10, 1, 1, 5, 1, 2, 3, 4, 3, 4, 4, 5]));