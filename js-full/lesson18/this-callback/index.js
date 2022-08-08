// create object wallet

// export wallet
// has array of transactions
// has method getMax that returns max transaction amount
// has method getMin that returns min transaction amount

const wallet = {
  transactions: [1, 2, -5, 10],
  getMin() {
    return Math.min(...this.transactions)
  },
  getMax() {
    return Math.max(...this.transactions)
  }
}

console.log(wallet.getMax());
console.log(wallet.getMin());