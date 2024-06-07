/*
======== No zeros for heros (8 kyu) ========
Numbers ending with zeros are boring.

They might be fun in your world, but not here.

Get rid of them. Only the ending ones.

1450 -> 145
960000 -> 96
1050 -> 105
-1050 -> -105

Zero alone is fine, don't worry about it. Poor guy anyway

1) Parameters - An integer
2) Return - The integer with all trailing zeros removed. If negative, return the
            given integer. If zero, return zero.
3) Examples - see tests
4) Pseudocode - see comments

*/

function noBoringZeros(n) {
  // n is zero, return n
  if (n === 0) return n;

  const str = n.toString();
  let count = 0,
    index = str.length - 1;
  // Starting from the end of str,
  // count the number of zeros until
  // a non-zero digit is reached
  while (str[index] === "0") {
    count++;
    index--;
  }

  // Divide n by 10 to the power of count
  return n / 10 ** count;
}

// Tests
console.log(noBoringZeros(1450), 145)
console.log(noBoringZeros(960000), 96)
console.log(noBoringZeros(1050), 105)
console.log(noBoringZeros(-1050), -105)
console.log(noBoringZeros(-105), -105)
console.log(noBoringZeros(0), 0)