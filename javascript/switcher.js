/*
======= Numbers to Letters (7 kyu) =======
Given an array of numbers (in string format), you must return a string.

The numbers correspond to the letters of the alphabet in reverse order: a=26, z=1 etc.

You should also account for '!', '?' and ' ' that are represented by '27', '28' and '29' respectively.

All inputs will be valid.

1) Parameters - An array of integers given as strings.
2) Return - A string with each number mapped to a character.
3) Examples - see tests
4) Pseudocode - see comments

*/

function switcher(x) {
  const chars = "zyxwvutsrqponmlkjihgfedcba!? ";
  // Map each number to the corresponding char in chars then join to form a string
  return x.map((num) => chars[+num - 1]).join("");
}

// Tests
console.log(switcher(['24', '12', '23', '22', '4', '26', '9', '8']), 'codewars');
console.log(switcher(['25','7','8','4','14','23','8','25','23','29','16','16','4']), 'btswmdsbd kkw'); 
console.log(switcher(['4', '24']), 'wc'); 
