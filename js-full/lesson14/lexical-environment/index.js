// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// create message text for functions

// create sendMessage func
// input string
// output string
// console log input with message and function text

// create setMessage func
// input string
// output string
// change message text

// export functions

let message = 'Just learn it';

export const sendMessage = name => {
  console.log(`${name}, ${message}! Your Gromcode`)
};

export const setMessage = text => {
  message = text
};

sendMessage('Ann');

setMessage('Good job');

sendMessage('Ann');