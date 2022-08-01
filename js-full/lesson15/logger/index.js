// Learn requirement
// Create step by step algorithm. Input Output
// Write draft solution & do testing
// Refactoring & final testing

// func createLogger output Object with methods

// create memory array

// message that goes to memory array is Object { message: input string, dateTime: new Date(), type: type of the method }

// 1 method warn input string message with type warn and pushes it to memory array

// 2 method error input string message with type error and pushes it to memory array

// 3 method log input string message with type log and pushes it to memory array

// 4 method getRecords input string with Object type
//    filter memory array Object type with input and returns new array
//    sort array on Date these objects were added, new messages goes first
//    return [] if memory array is empty
//    return sorted memoryArray if input is empty

export const createLogger = () => {
  const memoryArray = [];

  function warn(text) {
    memoryArray.push({
      message: text,
      dateTime: new Date(),
      type: 'warn',
    });
  }

  function error(text) {
    memoryArray.push({
      message: text,
      dateTime: new Date(),
      type: 'error',
    });
  }

  function log(text) {
    memoryArray.push({
      message: text,
      dateTime: new Date(),
      type: 'log',
    });
  }

  function getRecords(type) {
    if (type === undefined || memoryArray.length === 0) {
      return memoryArray.sort((a, b) => b.dateTime - a.dateTime);
    }
    const filteredArray = memoryArray.filter(message => {
      return message.type === type;
    });
    return filteredArray.sort((a, b) => b.dateTime - a.dateTime);
  }

  return {
    warn,
    error,
    log,
    getRecords,
  };
};

const logger1 = createLogger();

setTimeout(() => {
  logger1.log('aa');
}, 1000)
setTimeout(() => {
  logger1.log('ab');
}, 2000)
setTimeout(() => {
  logger1.log('ac');
}, 3000)
logger1.log('a');
logger1.warn('User is string to entered restricted page');
logger1.log('b');
logger1.error('Unexpected error on the site');
logger1.log('c');

setTimeout(() => {
  console.log(logger1.getRecords());
  console.log(logger1.getRecords('log'));
}, 3500)

// console.log(logger1.getRecords()); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }, { message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger1.getRecords('log')); // ===> [{ message: 'User logged out', type: 'log', dateTime: Date }, { message: 'User logged in', type: 'log', dateTime: Date }]
// console.log(logger1.getRecords('error')); // ===> [{ message: 'Unexpected error on the site', type: 'error', dateTime: Date }]
// console.log(logger1.getRecords('warn')); // ===> [{ message: 'User is tring to ented restricted page', type: 'warn', dateTime: Date }]

// const logger2 = createLogger();
// logger2.warn('Opps, something is happenning');
// console.log(logger2.getRecords('error')); // ===> []
// console.log(logger2.getRecords('warn')); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]
// console.log(logger2.getRecords()); // ===> [{ message: 'Opps, something is happenning', type: 'warn', dateTime: Date }]

const logger3 = createLogger();
console.log(logger3.getRecords('error')); // ===> []
console.log(logger3.getRecords()); // ===> []
