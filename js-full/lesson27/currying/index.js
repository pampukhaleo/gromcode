export const mult = a => b => a * b;

console.log(mult(3)(3));

export const twice = number => mult(number)(2);

console.log(twice(7));

export const triple = number => mult(number)(3);

console.log(triple(9));
