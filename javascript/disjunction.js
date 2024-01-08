/*
Logical Disjunctions (6 kyu)

Description:

A disjunction (logical OR) is true if and only if 1 or more of its operands is 
true.

This type of disjunction is called an inclusive disjunction (meaning it 
includes cases where both operands are true). 

Disjunctions can also be exclusive. An exclusive disjunction is true if and only
if both operands have opposite values.

This can become confusing when dealing with more than 2 operands.
We handle these situations by evaluating the expression from left to right.

Instructions:

For this kata, your task is to implement a function that performs a disjunction 
operation on 2 or more propositions.

Should take a boolean array as its first parameter and a single boolean as its 
second parameter, which, if true, should indicate that the disjunction should be 
exclusive as opposed to inclusive. Should return true or false.

1) Parameters
  first parameter - an array of boolean values
  second parameter - single boolean value
    true indicates exclusive OR
2) Returns
  evalute the compound disjunction (inclusive or exclusive) and return a 
  boolean value
3) Examples
  see tests
4) Pseudocode
  see function
*/

function disjunction(operands, isExclusive) {
  // Check for Inclusive OR
  if (!isExclusive) {
    // Check if the boolean value true is included in operands array
    // return true if included false otherwise
    return operands.includes(true) ? true : false;
  }

  // Perform Exclusive OR (XOR) on operands
  return operands.reduce((acc, val) => {
    // XOR is true if and only if the truth values
    // the two operands are not equal
    return acc !== val ? true : false;
  });
}

// Inclusive
console.log(`Inclusive OR tests...`);
console.log(disjunction([true, false, false], false), true);
console.log(disjunction([false, false, false], false), false);
// Exclusive
console.log(`Exclusive OR tests...`);
console.log(disjunction([true, false, false], true), true);
console.log(disjunction([true, false, true], true), false);
