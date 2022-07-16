const getParsedIntegers = arr => arr.map(num => Number.parseInt(num, 10))

const getParsedIntegersV2 = arr => arr.map(num => parseInt(num, 10))

const getParsedFloats = arr => arr.map(num => Number.parseFloat(num))

const getParsedFloatsV2 = arr => arr.map(num => parseFloat(num))

const array = [NaN, 1, 1.2, Infinity, -Infinity]

console.log(getParsedFloats(array));