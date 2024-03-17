/*
======= Form the Minimum (7 kyu) =======
Given a list of digits, return the smallest number that could be formed from 
these digits, using the digits only once (ignore duplicates).

Notes:

Only positive integers will be passed to the function (> 0 ), 
no negatives or zeros.

1) Parameters - An array of digits which will only be positive integers.
2) Return - The smallest number that can be made from these digits, 
            ignore duplicates.
3) Examples - see tests 
4) Pseudocode - see comments
*/

function minValue(values){
    // Ensure no duplicates in values and sort in ascending order
    // const digits = Array.from(new Set(values)).sort((num1, num2) => num1 - num2);
    // Return the smallest number that could be formed from these digits
    return +Array.from(new Set(values)).sort((num1, num2) => num1 - num2).join('');
}

// Tests
console.log(minValue([1, 3, 1]), 13);
console.log(minValue([4, 7, 5, 7]), 457);
console.log(minValue([4, 8, 1, 4]), 148);
console.log(minValue([5, 7, 9, 5, 7]), 579);
console.log(minValue([6, 7, 8, 7, 6, 6]), 678);
console.log(minValue([5, 6, 9, 9, 7, 6, 4]), 45679);
console.log(minValue([1, 9, 1, 3, 7, 4, 6, 6, 7]), 134679);
console.log(minValue([3, 6, 5, 5, 9, 8, 7, 6, 3, 5, 9]), 356789);
console.log(minValue([1, 1, 1, 1, 1, 1, 1, 1, 1, 1]), 1);