/*
======== Bin to Decimal (8 kyu) ========
Complete the function which converts a binary number (given as a string) to a decimal number.

1) Parameter - a binary number (given as a string)
2) Return - the equivalent decimal number
3) Examples - see tests
4) Pseudocode - see comments

*/

function binToDec(bin) {
  return bin
    .split("") // split binary string into array of bits
    .reverse() // ensure the index of each bit is with the correct power of 2
    .map((bit, index) => +bit * 2 ** index) // map each bit to corresponding decimal number
    .reduce((acc, val) => acc + val, 0); // sum the decimal numbers
}

// Tests
console.log(binToDec("0") === 0);
console.log(binToDec("1") === 1);
console.log(binToDec("10") === 2);
console.log(binToDec("1001001") === 73);
