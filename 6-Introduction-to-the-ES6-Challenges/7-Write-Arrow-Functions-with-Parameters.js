//  Just like a normal function, you can pass arguments into arrow functions.

// doubles input value and returns it
// const doubler = (item) => item * 2;
const myConcat = (arr1, arr2) => {
  "use strict";
  return arr1.concat(arr2);
};
// test your code
console.log(myConcat([1, 2], [3, 4, 5]));
