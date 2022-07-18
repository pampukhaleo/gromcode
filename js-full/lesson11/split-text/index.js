const splitText = (str, length = 10) => {
  const arr = [];
  let startPosition = 0;
  if (typeof str !== 'string') {
    return null
  }
  while (true) {
    const chunk = str.substr(startPosition, length)
    if (chunk.length === 0) {
      break;
    }
    arr.push(chunk[0].toUpperCase() + chunk.slice(1))
    startPosition += length
  }
  return arr.join('\n')
}

const string = 1
console.log('q', splitText(string, 4))