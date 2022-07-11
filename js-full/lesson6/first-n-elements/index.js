const getSubArray = (arr, numberOfElements) => {
  let newArr = arr.slice(0, numberOfElements)
  return newArr
};

console.log(getSubArray(['qwe', 'qwer', 'fsd'], 2));