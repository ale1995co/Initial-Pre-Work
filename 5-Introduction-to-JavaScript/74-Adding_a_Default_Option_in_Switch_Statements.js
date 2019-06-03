// In a switch statement you may not be able to specify all possible values as case statements.
// Instead, you can add the default statement which will be executed if no matching case statements are found.
// A default statement should be the last case
function switchOfStuff(val) {
  var answer = "";
  // Only change code below this line
  switch (val) {
    case'a':
      answer ='apple';
      break;
    case 'b':
      answer= 'bird';
      break;
    case'c':
      answer ='cat';
      break;
    default:
      answer= 'stuff';
      break;
  }




  // Only change code above this line
  return answer;
}

// Change this value to test
switchOfStuff("a");
switchOfStuff("b");
switchOfStuff("c");
switchOfStuff("d");
switchOfStuff(4);
