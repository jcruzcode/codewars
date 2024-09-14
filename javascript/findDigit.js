/*
======= Find the nth Digit of a Number (7 kyu) =======
Complete the function that takes two numbers as input, num and nth and return the nth digit of num (counting from right to left).
Note

    If num is negative, ignore its sign and treat it as a positive value
    If nth is not positive, return -1
    Keep in mind that 42 = 00042. This means that findDigit(42, 5) would return 0

Examples(num, nth --> output)

5673, 4 --> 5
129, 2 --> 2
-2825, 3 --> 8
-456, 4 --> 0
0, 20 --> 0
65, 0 --> -1
24, -8 --> -1

1) Parameters - Integers, num and nth.
2) Return - An integer representing the nth digit counting from the right
            or return -1 if nth <= 0.
3) Examples - see tests
4) Pseudocode - see comments

*/
function findDigit(num, nth) {
  let newNum = num;
  // nth is not positive returns -1
  if (nth <= 0) return -1;
  // Ignore negative numbers
  if (num < 0) newNum = -num;
  // Create string from num
  let numString = newNum.toString();
  // Pad with zeros at the start to match length to nth
  if (numString.length < nth) numString = numString.padStart(nth, "0");

  return numString
    .split("") // split into an array of digits
    .reverse() // count from right to left
    .map((digit) => +digit)[nth - 1]; // convert strings to numbers and return the nth digit
}

// Tests
console.log(findDigit(5673, 4) === 5);
console.log(findDigit(129, 2) === 2);
console.log(findDigit(-2825, 3) === 8);
console.log(findDigit(-456, 4) === 0);
console.log(findDigit(0, 20) === 0);
console.log(findDigit(65, 0) === -1);
console.log(findDigit(24, -8) === -1);
