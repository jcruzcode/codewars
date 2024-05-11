/*
======= Most digits (7 kyu) =======
Find the number with the most digits.

If two numbers in the argument array have the same number of digits, return the 
first one in the array.

1) Parameters - An array of numbers
2) Return - The number with the most digits. If two or more numbers has the same
            number of digits, choose the first one.
3) Examples - see tests
4) Pseudocode - see comments

*/
function findLongest(array) {
  // Find the largest number of digits for a number in array
  const maxLength = Math.max(...array).toString().length;

  // Filter array only include those numbers with length equal to maxLength
  const maxDigits = array.filter(item => String(item).length === maxLength);
  
  // Return the first number with the most digits
  return maxDigits[0];
}

// Tests
console.log(findLongest([1, 10, 100]), 100);
console.log(findLongest([9000, 8, 800]), 9000);
console.log(findLongest([8, 900, 500]), 900);
