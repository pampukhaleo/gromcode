// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// create createMessenger func that output object with methods

// 1 method setMessage input string, changes message text with input, output string

// 2 method setSender input string, changes sender text with input, output string

// 3 method sendMessage input string, console logs text with input name, output string

// default export createMessenger

'use strict';

/**
 * @return {object}
 */
const createMessenger = () => {
  let message = 'Just learn it';
  let sender = 'Gromcode';

  function setMessage(text) {
    message = text
  }

  function setSender(text) {
    sender = text
  }

  function sendMessage(name) {
    console.log(`Hello, ${name}! ${message}! This message was sent by ${sender}`)
  }

  return {
    setMessage,
    setSender,
    sendMessage
  }
};

export default createMessenger;

// examples
const messanger1 = createMessenger();
messanger1.sendMessage('Anna'); // ===> Hello, Anna! Just learn it! This message was sent by Gromcode

const messanger2 = createMessenger();
messanger2.setMessage('You are learning JS and you do it well');
messanger2.sendMessage('Michael'); // ===> Hello, Michael! You are learning JS and you do it well! This message was sent by Gromcode

const messanger3 = createMessenger();
messanger3.setMessage('The weather is amazing today');
messanger3.setSender('Anna');
messanger3.sendMessage('Alex'); // ===> Hello, Alex! The weather is amazing today! This message was sent by Anna
