/*
======== Exclusive "or" (xor) Logical Operator ========
In some scripting languages like PHP, there exists a logical operator 
(e.g. &&, ||, and, or, etc.) called the "Exclusive Or" (hence the name of this 
Kata). 

The exclusive or evaluates two booleans. 

It then returns true if exactly one of the two expressions are true, false otherwise. 

1) Parameters - Two booleans or values
2) Returns - A boolean value, true or false. True is exactly one proposition is
             true, false otherwise.
3) Examples - see tests
4) Pseudocode - see comments
*/
function xor(a, b) {
    // XOR is true only when exactly one 
    // of the propositions is true
    return (a && !b) || (!a && b)
}

// Tests 
console.log(xor(false, true), true);
console.log(xor(true, true), false);
console.log(xor(false, false), false);
console.log(xor(0, true), true);
console.log(xor ("A", 0), true);