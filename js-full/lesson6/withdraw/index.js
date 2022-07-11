function withdraw(clients, balances, client, amount) {
  for (let i=0; i<clients.length; i++) {
    if (clients[i] === client) {
      if (clients.indexOf(clients[i]) === balances.indexOf(balances[i])) {
        if(balances[i] < amount) {
          return -1
        }
        balances[i] -= amount;
        return console.log(balances[i])
      }
    }
  }
}

withdraw(['Ann', 'John', 'User'], [1400, 87, -6], 'John', 60);