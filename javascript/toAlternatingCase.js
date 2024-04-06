/*
======== altERnaTIng cAsE <=> ALTerNAtiNG CaSe (8 kyu) ========
altERnaTIng cAsE <=> ALTerNAtiNG CaSe

Define String.prototype.toAlternatingCase (or a similar function/method such as to_alternating_case/toAlternatingCase/ToAlternatingCase in your selected language; see the initial solution for details) such that each lowercase letter becomes uppercase and each uppercase letter becomes lowercase. For example:

"hello world".toAlternatingCase() === "HELLO WORLD"
"HELLO WORLD".toAlternatingCase() === "hello world"
"hello WORLD".toAlternatingCase() === "HELLO world"
"HeLLo WoRLD".toAlternatingCase() === "hEllO wOrld"
"12345".toAlternatingCase()       === "12345"                   // Non-alphabetical characters are unaffected
"1a2b3c4d5e".toAlternatingCase()  === "1A2B3C4D5E"
"String.prototype.toAlternatingCase".toAlternatingCase() === "sTRING.PROTOTYPE.TOaLTERNATINGcASE"

As usual, your function/method should be pure, i.e. it should not mutate the original string.

1) Parameters - A string.
2) Return - A string but with each letter in the opposite case compared to the original string.
3) Examples - see tests
4) Pseudocode - see comments

*/

String.prototype.toAlternatingCase = function () {
  // Create an array of characters from the given string
  const chars = Array.from(this);

  for (let i = 0; i < chars.length; i++) {
    // Ignore non-letter characters
    if (
      chars[i].charCodeAt() >= 65 && chars[i].charCodeAt() <= 90 ||
      chars[i].charCodeAt() >= 97 && chars[i].charCodeAt() <= 122
    ) {
      // change the case of each letter to the opposite case  
      chars[i] === chars[i].toUpperCase()
        ? chars[i] = chars[i].toLowerCase()
        : chars[i] = chars[i].toUpperCase();
    }
  }

  // Join characters to form alternating string
  return chars.join('');
};

// Tests
console.log("hello world".toAlternatingCase(), "HELLO WORLD");
console.log("HELLO WORLD".toAlternatingCase(), "hello world");
console.log("hello WORLD".toAlternatingCase(), "HELLO world");
console.log("HeLLo WoRLD".toAlternatingCase(), "hEllO wOrld");
console.log("12345".toAlternatingCase(), "12345");
console.log("1a2b3c4d5e".toAlternatingCase(), "1A2B3C4D5E");
console.log(
  "String.prototype.toAlternatingCase".toAlternatingCase(),
  "sTRING.PROTOTYPE.TOaLTERNATINGcASE"
);
console.log(
  "Hello World".toAlternatingCase().toAlternatingCase(),
  "Hello World"
);
