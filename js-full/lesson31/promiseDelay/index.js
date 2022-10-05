export const delay = num => new Promise(resolve => {
  setTimeout(() => {
    resolve()
  }, num)
})

// delay(5000).then(() => console.log('Donoe'))