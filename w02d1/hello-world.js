// implement a function called sayHello that takes the name of the saluted and returns what would be said.
const sayHello = (name) => {
  return `Hello, ${name}`;
};

const sayGoodbye = (name) => {
  return `Goodbye, ${name}`;
};

// make the functions exportable

module.exports = {
  sayHello: sayHello,
  sayGoodbye: sayGoodbye
};
