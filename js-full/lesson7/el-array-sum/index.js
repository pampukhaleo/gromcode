const sum = arr => {
  if (Array.isArray(arr)) {
    return arr.reduce((acc, num) => {
      return acc + num
    }, 0)
  }
  return null
}