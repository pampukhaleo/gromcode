// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

//input array
//output new array

// find elements without letters
// if element has spaces - cut it of
// final element has to be string with $ and 2 digits after dot

const cleanTransactionsList = arr => arr
    .filter(el => el / 0)
    .map(el => `$${Number(el).toFixed(2)}`);

const array = ['1', '  2  ', '3.4   ', '1 dollar', '17', 'qweqwe', 2, 7, undefined, null];
console.log('array', array)
console.log('function', cleanTransactionsList(array));
