/*
======== Grasshopper - Function syntax debugging (8 kyu) ========
Grasshopper - Function syntax debugging

A student was working on a function and made some syntax mistakes while coding. 
Help them find their mistakes and fix them.

1) Parameters - Two string a verb and noun.
2) Return - The verb and noun concatentated.
3) Examples - see test
4) Pseudocode - see comments

*/

// Fixes - Use parentheses instead of brackets and include opening curly brace
function main(verb, noun) {
  return verb + noun;
}

// Tests
console.log(main("Run", " Forrest"), "Run Forrest");
console.log(main("Eat ","food."), "Eat food.");
console.log(main("Climb ", "wall"), "Climb wall");
