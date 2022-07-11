function sortAsc(array) {
  let newArr = array.slice();
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] > newArr[j+1]) {
        [newArr[j], newArr[j+1]] = [newArr[j+1], newArr[j]]
      }
    }
  }
  return newArr
}

function sortDesc(array) {
  let newArr = array.slice();
  for (let i = 0; i < newArr.length; i++) {
    for (let j = 0; j < newArr.length; j++) {
      if (newArr[j] < newArr[j+1]) {
        [newArr[j], newArr[j+1]] = [newArr[j+1], newArr[j]]
      }
    }
  }
  return newArr
}

console.log(sortAsc([100, 3, 2, 1, 10]));
console.log(sortDesc([100, 3, 2, 1, 10]));