/*
======== Count Odd Numbers below n (8 kyu) ========
Given a number n, return the number of positive odd numbers below n, EASY!
Examples (Input -> Output)

7  -> 3 (because odd numbers below 7 are [1, 3, 5])
15 -> 7 (because odd numbers below 15 are [1, 3, 5, 7, 9, 11, 13])

Expect large Inputs!

1) Parameters - A positive integer, n
2) Return - The number of positive odd integers below n.
3) Examples - see tests
4) Pseudocode - see comments
*/

function oddCount(n){
    // The number of positive odd numbers below n can be found 
    // by calculating n / 2 and truncating the fractional part
    return Math.trunc(n / 2);
}

// Tests
console.log(oddCount(5), 2);
console.log(oddCount(357), 178);
console.log(oddCount(101), 50);
console.log(oddCount(221), 110);
console.log(oddCount(1231), 615);
