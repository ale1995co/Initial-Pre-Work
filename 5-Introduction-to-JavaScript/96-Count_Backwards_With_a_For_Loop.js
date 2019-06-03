// A for loop can also count backwards, so long as we can define the right conditions.

//In order to count backwards by twos, we'll need to change our initialization, condition, and final-expression.
// Example
var ourArray = [];

for (var i = 10; i > 0; i -= 2) {
  ourArray.push(i);
}

// Setup
var myArray = [];

// Only change code below this line.
for (var i = 9; i > 0; i -=2) {
  myArray.push(i);
}
