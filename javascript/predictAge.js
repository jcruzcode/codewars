/*
======= Predict your age! (7 kyu) =======
My grandfather always predicted how old people would get, and right before he 
passed away he revealed his secret!

In honor of my grandfather's memory we will write a function using his formula!

    Take a list of ages when each of your great-grandparent died.
    Multiply each number by itself.
    Add them all together.
    Take the square root of the result.
    Divide by two.

Example

predictAge(65, 60, 75, 55, 60, 63, 64, 45) === 86

Note: the result should be rounded down to the nearest integer.

Some random tests might fail due to a bug in the JavaScript implementation.
Simply resubmit if that happens to you.

1) Parameters - A list of ages given as comma separated integers.
2) Return - A non-zero integer prediction of how old one will get based on 
            grandpa's algorithm
3) Examples - see tests
4) Pseudocode - see comments

*/
function predictAge(...ages) {
  // Take a list of ages when each of your great-grandparent died.
  // Multiply each number by itself.
  // Add them all together.
  const sum = ages.map((age) => age * age).reduce((acc, val) => acc + val, 0);

  // Take the square root of the result.
  // Divide by two.
  // Round down to nearest integer.
  return Math.floor(Math.sqrt(sum) / 2);
}

// Tests
console.log(predictAge(65, 60, 75, 55, 60, 63, 64, 45), 86);
console.log(predictAge(32,54,76,65,34,63,64,45), 79);
