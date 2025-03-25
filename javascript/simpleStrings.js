/*
======= Simple string characters (7 kyu) =======
In this Kata, you will be given a string and your task will be to return a list 
of ints detailing the count of uppercase letters, lowercase, numbers and special 
characters, as follows.

Solve("*'&ABCDabcde12345") = [4,5,5,3]. 
--the order is: uppercase letters, lowercase, numbers and special characters.

More examples in the test cases. 

1) Parameter - A string, s.
2) Return - An array of counts in the following order: uppercase letters, lowercase letters,
            numbers, and special characters.
3) Examples - see test
4) Pseudocode - see comments

*/

function solve(s) {
  const counts = {
    upper: 0,
    lower: 0,
    number: 0,
    special: 0,
  };

  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  
  // Count the number of uppercase letters, lowercase letters,
  // digits, and special characters.
  for (let char of s) {
    char.charCodeAt() >= 65 && char.charCodeAt() <= 90
      ? (counts["upper"] += 1)
      : char.charCodeAt() >= 97 && char.charCodeAt() <= 122
      ? (counts["lower"] += 1)
      : digits.includes(char)
      ? (counts["number"] += 1)
      : (counts["special"] += 1);
  }

  // Return the counts
  return Object.values(counts);
}

// Tests
console.log(solve(""), [0, 0, 0, 0]);
console.log(solve("aAbBcC"), [3, 3, 0, 0]);
console.log(solve("Codewars@codewars123.com"), [1, 18, 3, 2]);
console.log(solve("bgA5<1d-tOwUZTS8yQ"), [7, 6, 3, 2]);
console.log(solve("P*K4%>mQUDaG$h=cx2?.Czt7!Zn16p@5H"), [9, 9, 6, 9]);
console.log(solve("RYT'>s&gO-.CM9AKeH?,5317tWGpS<*x2ukXZD"), [15, 8, 6, 9]);
console.log(solve("$Cnl)Sr<7bBW-&qLHI!mY41ODe"), [10, 7, 3, 6]);
console.log(solve("@mw>0=QD-iAx!rp9TaG?o&M%l$34L.nbft"), [7, 13, 4, 10]);
