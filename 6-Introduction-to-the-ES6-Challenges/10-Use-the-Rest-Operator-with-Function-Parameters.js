// the rest operator, you can create functions that take a variable number of arguments. These arguments are stored in an array that can be accessed later from inside the function.
const sum = (function() {
  "use strict";
  return function sum(...args) {
    return args.reduce((a, b) => a + b, 0);
  };
})();
console.log(sum(1, 2, 3)); // 6
console.log(sum(1, 2, 3, 4));
console.log(sum(0, 1, 2));
console.log(sum(5));
console.log(sum();
