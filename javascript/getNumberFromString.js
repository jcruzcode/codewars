/*
======== Get number from string (8 kyu) ========
Write a function which removes from string all non-digit characters 
and parse the remaining to number. E.g: 'hell5o wor6ld' -> 56

Function:

getNumberFromString(s)

1) Parameter - A string, s.
2) Return - A number parsed from the remaining characters after
            the non-digit characters are removed from s.
3) Examples - see tests
4) Pseudocode - see comments

*/
function getNumberFromString(s) {
  const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
  // Return a number parsed from the remaining characters after 
  // the non-digit characters are removed from s.
  return Number.parseInt(
    s
      .split("")
      .filter((char) => digits.includes(char))
      .join("")
  );
}

// Tests
console.log(getNumberFromString("1"), 1);
console.log(getNumberFromString("123"), 123);
console.log(getNumberFromString("this is number: 7"), 7);