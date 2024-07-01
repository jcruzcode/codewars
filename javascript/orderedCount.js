/*
======= Ordered Count of Characters (7 kyu) =======
Count the number of occurrences of each character and return 
it as a (list of tuples) in order of appearance. 

For empty output return (an empty list).

Consult the solution set-up for the exact data structure implementation 
depending on your language.

Example:

orderedCount("abracadabra") == [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]

1) Parameters - A string
2) Return - A nested array with each element of the format [char, charCount] where
            char is a string and charCount is a number.
3) Examples - see tests
4) Pseudocode - see comments

*/
const orderedCount = function (text) {
  const charCounts = new Map();
  // Store the first occurence of each char of text in order
  const chars = new Set(text.split(""));
  let currentCount;

  for (const char of chars) {
    // Find the number of occurences of char in text
    currentCount = text.split("").filter((item) => item === char).length;
    // Set the count of char in charCounts
    charCounts.set(char, currentCount);
  }

  // Iterator to get [key, value] pairs of charCounts
  const iterator = charCounts.entries();
  const counts = [];

  for (let i = 0; i < chars.size; i++) {
    // Get [key, value] pair of charCounts and add to counts
    counts.push(iterator.next().value);
  }

  return counts;
};

// Tests
console.log(orderedCount("abracadabra"),                                          [['a', 5], ['b', 2], ['r', 2], ['c', 1], ['d', 1]]);
console.log(orderedCount("Code Wars"  ),  [['C', 1], ['o', 1], ['d', 1], ['e', 1], [' ', 1], ['W', 1], ['a', 1], ['r', 1], ['s', 1]]);
console.log(orderedCount("233312"     ),                                                             [['2', 2], ['3', 3], ['1', 1 ]]);