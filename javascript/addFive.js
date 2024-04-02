/*
======== Grasshopper - Basic Function Fixer (8 kyu) ========\

Fix the function

I created this function to add five to any number that was passed in to it and 
return the new value. 

It doesn't throw any errors but it returns the wrong number.

Can you help me fix the function?

function addFive(num) {
  var total = num + 5
  return num
}

1) Parameter - A number, num. 
2) Return - num + 5
3) Examples - see tests
4) Pseudocode - see comments

*/

// The function should return num + 5, not num.
function addFive(num) {
    return num + 5;
}

// Tests
console.log(addFive(1) === 6);
console.log(addFive(2) === 7);
console.log(addFive(3) === 8);
console.log(addFive(4) === 9);
console.log(addFive(5) === 10);
