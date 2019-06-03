// The parseInt() function parses a string and returns an integer. It takes a second argument for the radix, which specifies the base of the number in the string.
function convertToInteger(str) {
 var radix = 2;
 return parseInt(str, radix);
}

convertToInteger("10011");
convertToInteger("111001");
convertToInteger("JamesBond");
