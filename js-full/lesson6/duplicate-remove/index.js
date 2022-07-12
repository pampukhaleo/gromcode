function removeDuplicates(array) {
  const newArr = [];
  if (Array.isArray(array)) {
    for (let i = 0; i<array.length; i++) {
      if (!newArr.includes(array[i])) {
        newArr.push(array[i])
      }
    }
    return newArr
  }
  return null
}

console.log(removeDuplicates([1, 1, 2, 3, 3]));