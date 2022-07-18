const splitString = (str, length = 10) => {
  const arr = [];
  let startPosition = 0;
  if (typeof str !== 'string') {
    return null;
  }
  while (true) {
    let chunk = str.substr(startPosition, length);
    if (chunk.length === 0) {
      break;
    }
    if (chunk.length < length) {
      for (let i = chunk.length; i < length; i++) {
        chunk += '.';
      }
    }
    arr.push(chunk);
    startPosition += length;
  }
  return arr
};

const string = 'qwasdghnwrghw'
console.log(splitString(string, 4))