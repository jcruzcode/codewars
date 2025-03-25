/*
======== Take an Arrow to the knee, Functionally (8 kyu) ========
Arrow style Functions

Come here to practice the Arrow style functions Not much else to say good luck!
Details

You will be given an array of numbers which can be used using the String.fromCharCode() (JS) method to convert the number to a character. 

It is recommended to map over the array of numbers and convert each number to the corresponding ascii character.

Examples

These are example of how to convert a number to an ascii Character:
Javascript => String.fromCharCode(97) // a

Reference: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions

*/

let arrowFunc = function(arr) {
    // Map array of integers representing character codes to corresponding character
    return arr.map(num => String.fromCharCode(num)).join('');
}

// Tests
console.log(arrowFunc([84,101,115,116]) === 'Test')
console.log(arrowFunc([70,85,83,32,82,79,72,32,68,65,72]) === 'FUS ROH DAH')