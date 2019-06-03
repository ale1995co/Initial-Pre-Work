// If the break statement is omitted from a switch statement's case, the following case statement(s) are executed until a break is encountered.
// If you have multiple inputs with the same output, you can represent them in a switch statement like this:
function sequentialSizes(val) {
  var answer = "";
  // Only change code below this line
  switch(val) {
    case 1:
    case 2:
    case 3:
      answer = "Low";
      break;
    case 4:
    case 5:
    case 6:
      answer = "Mid"
      break;
    case 7:
    case 8:
    case 9:
      answer = "High";
  }


  // Only change code above this line
  return answer;
}

// Change this value to test
sequentialSizes(1);
sequentialSizes(2);
sequentialSizes(3);
sequentialSizes(4);
sequentialSizes(5);
sequentialSizes(6);
sequentialSizes(7);
sequentialSizes(8);
sequentialSizes(9);
