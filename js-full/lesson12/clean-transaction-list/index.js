const cleanTransactionsList = arr => {
  return arr
      .filter(el => el / 0)
      .map(el => `$${Number(el.trim()).toFixed(2)}`)
};

console.log(cleanTransactionsList(['1', '  2  ', '3.4   ', '1 dollar', '17', 'qweqwe']));