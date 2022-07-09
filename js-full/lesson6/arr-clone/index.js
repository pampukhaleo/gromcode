function cloneArr(arr) {
  let newArr = [];
  if (Array.isArray(arr)) {
    for (let i=0; i < arr.length; i++) {
      newArr.push(arr[i])
    }
    return newArr
  }
  return null
}