const calc = str => {
  let [a, operator, b] = str.split(' ');
  let result;
  switch (operator) {
    case '+': result = +a + +b;
      break;
    case '-': result = a - b;
      break;
    case '*': result = a * b;
      break;
    case '/': result = a / b;
  }
  return `${str} = ${result}`
};

console.log(calc('1 / 2'));