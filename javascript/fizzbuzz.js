/*
======= Fizz Buzz (7 kyu) =======
Return an array containing the numbers from 1 to N, 
where N is the parametered value.

Replace certain values however if any of the following conditions are met:

    If the value is a multiple of 3: use the value "Fizz" instead
    If the value is a multiple of 5: use the value "Buzz" instead
    If the value is a multiple of 3 & 5: use the value "FizzBuzz" instead

N will never be less than 1.

Method calling example:

fizzbuzz(3) -->  [1, 2, "Fizz"]

1) Parameters - A positive integer n representing the maximum number used in the
                Fizz Buzz game.
2) Return - An array containing all the integers from 1 to n but with the 
            correct substitutions made for fizz, buzz, and fizzbuzz.
3) Examples - see test cases
4) Pseudocode - see comments

*/
function fizzbuzz(n) {
    const output = [];

    // Count from 1 to n and add each number to output, but...
    for(let i = 1; i <= n; i++) {
        // Substitute FizzBuzz for i when it's divisble by both 3 and 5
        if (i % 3 === 0 && i % 5 === 0) {
            output.push('FizzBuzz');
        } else if (i % 3 === 0) {
        // Substitute Fizz for i when it's divisible by 3
            output.push('Fizz');
        } else if (i % 5 === 0) {
        // Substitute Buzz for i when it's divisible by 5
            output.push('Buzz');
        } else {
        // Otherwise, add i to output
            output.push(i);
        }
    }

    return output;
}

// Test cases
console.log(fizzbuzz(1), [1]);
console.log(fizzbuzz(3), [1, 2, "Fizz"]);
console.log(fizzbuzz(16), [1, 2, "Fizz", 4, "Buzz", "Fizz", 7, 8, "Fizz", "Buzz", 11, "Fizz", 13, 14, "FizzBuzz", 16]);