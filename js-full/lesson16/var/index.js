let foo = 1;

function bar() {
  if (!foo) {
    const foo = 10;
  }

  return foo;
}

foo = bar();

export default foo