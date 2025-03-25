/*
======== Fundamentals: Return (8 kyu) ========
Make multiple functions that will return the sum, difference, modulus, product, quotient, and the exponent respectively.

Please use the following function names:

addition = add

multiply = multiply

division = divide (both integer and float divisions are accepted)

modulus = mod

exponential = exponent

subtraction = subt

Note: All math operations will be: a (operation) b

1) Parameters - Two numbers, a and b.
2) Return - The result of a particular arithmetic operation (a + b, a - b, a * b , a / b, a % b, a ** b) as a number.
3) Examples - see tests
4) Pseudocode - see comments

*/
// Addition
function add(a,b){
    return a + b;
}
// Division
function divide(a,b){
    return a / b;
}
// Multiplication
function multiply(a,b){
    return a * b;
}
// Modulus
function mod(a,b){
    return a % b;
}
// Exponentiation   
function exponent(a,b){
    return a ** b;
}
// Subtraction    
function subt(a,b){
    return a - b;
}

// Tests
console.log(add(1,2),3)
console.log(multiply(1,2),2)
console.log(divide(2,1),2)
console.log(mod(1,2),1)
console.log(exponent(1,2),1)
console.log(subt(1,2),-1)