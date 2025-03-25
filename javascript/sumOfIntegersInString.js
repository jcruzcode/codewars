/*
======= Sum of integers in string (7 kyu) =======
Your task in this kata is to implement a function that calculates the sum of the integers inside a string. 

For example, in the string "The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog", the sum of the integers is 3635.

Note: only positive integers will be tested.

1) Parameter - A string, s, consisting of numbers and other characters.
2) Return - The sum of all the integers contained in s, as a number.
3) Examples - see tests
4) Pseudocode - see comments

*/
function sumOfIntegersInString(s) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  const chars = s.split(""); // string to array of characters

  for (let i = 0; i < chars.length; i++) {
    // replace non-digits with a single whitespace
    if (!digits.includes(chars[i])) chars[i] = " ";
  }

  return chars
    .join("") // join characters of new string
    .split(" ") // split them along whitespace
    .map((num) => +num) // ensure each number if of type number
    .reduce((sum, val) => sum + val, 0); // calculate sum
}

// Tests
console.log(sumOfIntegersInString("12.4"                                                                   ) ===   16);
console.log(sumOfIntegersInString("h3ll0w0rld"                                                             ) ===    3);
console.log(sumOfIntegersInString("2 + 3 = "                                                               ) ===    5);
console.log(sumOfIntegersInString("Our company made approximately 1 million in gross revenue last quarter.") ===    1);
console.log(sumOfIntegersInString("The Great Depression lasted from 1929 to 1939."                         ) === 3868);
console.log(sumOfIntegersInString("Dogs are our best friends."                                             ) ===    0);
console.log(sumOfIntegersInString("C4t5 are 4m4z1ng."                                                      ) ===   18);
console.log(sumOfIntegersInString("The30quick20brown10f0x1203jumps914ov3r1349the102l4zy dog"               ) === 3635);