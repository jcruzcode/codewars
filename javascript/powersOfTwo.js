/*
======== Powers of 2 (8 kyu) ========
Complete the function that takes a non-negative integer n as input, and returns 
a list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive ).

Examples

n = 0  ==> [1]        # [2^0]
n = 1  ==> [1, 2]     # [2^0, 2^1]
n = 2  ==> [1, 2, 4]  # [2^0, 2^1, 2^2]

1) Parameters - A non-negative integer, n
2) Returns - A list of all the powers of 2 with the exponent ranging from 0 to n ( inclusive )
3) Examples - see tests
4) Pseudocode - see comments

*/

function powersOfTwo(n){
    let powersOfTwo = [];
    
    // Build an array of powers of 2, from 2^0 to 2^n
    for (let i = 0; i <= n; i++) {
        powersOfTwo.push(2 ** i);
    }

    return powersOfTwo;
}

// Tests
console.log(powersOfTwo(0), [1])
console.log(powersOfTwo(1), [1, 2])
console.log(powersOfTwo(4), [1, 2, 4, 8, 16])
