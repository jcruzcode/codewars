/*
======= Powers of i (7 kyu) =======
i is the imaginary unit, it is defined by i²= sqrt(-1), therefore it is a 
solution to x²+1=0.

Your Task

Complete the function pofi that returns i to the power of a given non-negative 
integer in its simplest form, as a string (answer may contain i).

1) Parameter - A non-negative integer.
2) Return - The power of i represented as a string. May contain i.
3) Examples - see tests
4) Pseudocode - see comments

*/
function pofi(n) {
  return n % 2 === 0 
    ? n % 4 === 0 
      ? "1" // n is even and divisible by 4
      : "-1" // n is even and NOT divisible by 4
    : (n - 1) % 4 === 0 
    ? "i" // n is odd and one less than n is divisible by 4
    : "-i"; // n is odd and one less than n is NOT divisible by 4
}

// Tests
console.log(pofi(0) === '1');
console.log(pofi(1) === 'i');
console.log(pofi(2) === '-1');
console.log(pofi(3) === '-i');
console.log(pofi(4) === '1');
console.log(pofi(5) === 'i');
console.log(pofi(6) === '-1');
console.log(pofi(7) === '-i');
console.log(pofi(8) === '1');
console.log(pofi(9) === 'i');