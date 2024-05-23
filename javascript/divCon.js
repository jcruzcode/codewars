/*
======= Divide and Conquer (7 kyu) =======
Given a mixed array of number and string representations of integers, add up 
the non-string integers and subtract the total of the string integers.

Return as a number.

1) Parameters - An array of number and string representations of integers
2) Return -  Add up the non-string integers and subtract the total of the string
            integers, return as a number.
3) Examples - see tests
4) Pseudocode - see comments

*/
function divCon(x) {
  let numberTotal = 0,
    stringTotal = 0;
  for (let item of x) {
    // Add up elements of type number
    if (typeof item === "number") numberTotal += item;
    // For elements of type string, convert to number
    // Then add up to find total value
    if (typeof item === "string") stringTotal += +item;
  }
  // Subtract total of the string integers from
  // the total of the numbers
  return numberTotal - stringTotal;
}

// Tests
console.log(divCon([9, 3, '7', '3']), 2);
console.log(divCon(['5', '0', 9, 3, 2, 1, '9', 6, 7]), 14); 
console.log(divCon(['3', 6, 6, 0, '5', 8, 5, '6', 2,'0']), 13); 