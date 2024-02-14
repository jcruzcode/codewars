/*
====== Zero-plentiful Array (6 kyu) ======
An array is called zero-plentiful if it contains multiple zeros, and every sequence of zeros is at least 4 items long.

Your task is to return the number of zero sequences if the given array is zero-plentiful, oherwise 0.
Examples

[0, 0, 0, 0, 0, 1]  -->  1
# 1 group of 5 zeros (>= 4), thus the result is 1

[0, 0, 0, 0, 1, 0, 0, 0, 0]  -->  2
# 2 group of 4 zeros (>= 4), thus the result is 2

[0, 0, 0, 0, 1, 0]  -->  0 
# 1 group of 4 zeros and 1 group of 1 zero (< 4)
# _every_ sequence of zeros must be at least 4 long, thus the result is 0

[0, 0, 0, 1, 0, 0]  -->  0
# 1 group of 3 zeros (< 4) and 1 group of 2 zeros (< 4)

[1, 2, 3, 4, 5]  -->  0
# no zeros

[]  -->  0
# no zeros

1) Parameters - An array of non-negative integers 
2) Returns - the number of zero sequences if the given array is zero-plentiful, oherwise 0.
3) Examples - see test cases
4) Pseudocode - see comments
*/

function zeroPlentiful(arr) {
  // Check if arr doesn't include 0
  if (!arr.includes(0)) return 0;

  const zeros = [];
  let lastNum;
  // Loop over arr and check each element
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0)  { 
        // add to arr if current element is zero
        zeros.push(arr[i]);
    } else {
        if (lastNum === 0) {
            // otherwise, add a whitespace to zeros if the last number was 0
            zeros.push(" ");
        }
    }
    // Set lastNum to current element for next iteration
    lastNum = arr[i];
  }
  // Group consecutive zeros and store them as separate elements 
  const zeroGroups =  zeros.join('').trim().split(' ');
  let count = 0;

  for (let zero of zeroGroups) {
    // if any group has less than 4 zeros, it is not zero-plentiful
    if (zero.length < 4) return 0;
    // otherwise, increment count
    count++
  }

  // Return number of zero sequences 
  return count;
}

// Test cases
console.log(zeroPlentiful([0, 2, 0, 0, 0, 0, 3, 4, 5, 0, 0, 0, 0, 0]), 0);
console.log(zeroPlentiful([3]) === 0);
console.log(zeroPlentiful([0, 0, 0, 0, 0, 0]), 1);
console.log(zeroPlentiful([0, 2, 19, 4, 4]), 0);
console.log(zeroPlentiful([1, 0, 0, 0, 0, 5, 4, 0, 0, 0, 0, 0]), 2);
console.log(zeroPlentiful([-3, 2, 1, 3, -1, -2]) === 0);
console.log(zeroPlentiful([1000, 0, 1, 0, 0, 0, 0]), 0);
console.log(zeroPlentiful([10, 0, 0, 0]), 0);
console.log(zeroPlentiful([]) === 0);
