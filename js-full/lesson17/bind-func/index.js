const bind = (func, context, ...rest) => {
  return function (...args) {
    // return func.call(context, ...rest.concat(args))
    return func.apply(context, rest.concat(args));
  };
};

// https://www.youtube.com/watch?v=fJqYa3BuwaU

const user = {
  name: 'Tom',
};

function showName(arg, arg2) {
  console.log(`${arg} ${this.name} ${arg2}`);
}

bind(showName, user, 'Hi', 'man')();
