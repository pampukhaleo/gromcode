function reverseArray(arr) {
  let newArr = [];
  if (Array.isArray(arr)) {
    for (let i=arr.length-1; i >= 0; i--) {
      newArr.push(arr[i])
    }
    return newArr
  }
  return null
}

console.log(reverseArray([1, 2, 3]));