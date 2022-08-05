const bind = (func, context, arg1, arg2) => {
  return func.call(context, arg1, arg2);
};

const user = {
  name: 'Tom',
};

function showName(arg) {
  console.log(`${arg} ${this.name}`);
}

bind(showName, user, 'Hi');
