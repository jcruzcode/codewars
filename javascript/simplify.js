/*
====== Simplify the number! (6 kyu) ======
Task

Given a positive integer as input, return the output as a string in the following 
format:

Each element, corresponding to a digit of the number, multiplied by a power of 
10 in such a way that with the sum of these elements you can obtain the original
number.

Examples
Input 	Output
0 	""
56 	"5*10+6"
60 	"6*10"
999 	"9*100+9*10+9"
10004 	"1*10000+4"

Note: input >= 0

1) Parameter - A positive integer, number >= 0.
2) Return - Each element, corresponding to a digit of the number, multiplied by 
            a power of 10 in such a way that with the sum of these elements you 
            can obtain the original number.
3) Examples - see tests
4) Pseudocode - see comments

*/

function simplify(number) {
  // If number is zero, return an empty string
  if (number === 0) return "";

  // Convert number to a string, split string into an array of digits,
  // convert each digit from a string to a number, and reverse the ar ray
  const digits = number
    .toString()
    .split("")
    .map((digit) => +digit)
    .reverse();

  // Multiply the current digit by 10 to the power of the index of the current
  // digit
  const products = [];
  for (let i = 0; i < digits.length; i++) {
    if (digits[i] !== 0) {
      i === 0
        ? products.unshift(`${digits[i]}`)
        : products.unshift(`${digits[i]}*${10 ** i}`);
    }
  }

  // Join the products with '+' signs and return the result
  return products.join('+');
}

// Tests
console.log(
  simplify(8964631) === "8*1000000+9*100000+6*10000+4*1000+6*100+3*10+1"
);
console.log(  simplify(660) ===    "6*100+6*10");
console.log(   simplify(56) ===        "5*10+6");
console.log(  simplify(600) ===         "6*100");
console.log(    simplify(0) ===              "");
console.log(   simplify(56) ===        "5*10+6");
console.log(   simplify(60) ===          "6*10");
console.log(  simplify(999) ===  "9*100+9*10+9");
console.log(simplify(10004) ===     "1*10000+4");
