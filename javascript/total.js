/*
====== Sum of prime-indexed elements (6 kyu) ======
In this Kata, you will be given an integer array and your task is to return 
the sum of elements occupying prime-numbered indices.

The first element of the array is at index 0.

1) Parameters - an integer array
2) Return - the sum of elements occupying prime-numbered indices
3) Examples - see tests
4) Pseudocode - see comments

*/

function total(arr) {
  // isPrime takes an integer and returns true if prime, otherwise false
  const isPrime = (num) => {
    // Not prime if num is less than 2
    if (num < 2) return false;
    // Num is not prime if divisible by any number from 2 through the
    // square root of num
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    // Otherwise, num is prime
    return true;
  };

  let sum = 0;
  // Find the sum of elements occupying prime-numbered indices
  for (let i = 0; i < arr.length; i++) {
    if (isPrime(i)) sum += arr[i];
  }

  return sum;
}

// Tests
console.log(total([]), 0);
console.log(total([1, 2, 3, 4]), 7);
console.log(total([1, 2, 3, 4, 5, 6]), 13);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8]), 21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]), 21);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]), 33);
console.log(total([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]), 47);
