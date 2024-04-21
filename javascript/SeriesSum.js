/*
======= Sum of the first nth term of Series (7 kyu) =======

Your task is to write a function which returns the n-th term of the following 
series, which is the sum of the first n terms of the sequence (n is the input 
parameter).

Series: 1 + 1/4 + 1/7 + 1/10 + 1/13 + 1/16 + ...

You will need to figure out the rule of the series to complete this.
Rules

    You need to round the answer to 2 decimal places and return it as String.

    If the given value is 0 then it should return "0.00".

    You will only be given Natural Numbers as arguments.

Examples (Input --> Output)

n
1 --> 1 --> "1.00"
2 --> 1 + 1/4 --> "1.25"
5 --> 1 + 1/4 + 1/7 + 1/10 + 1/13 --> "1.57"

1) Parameters - A positive integer representing the nth term of the above series
2) Return - The sum of the first n terms of the above series, as a string, 
    rounded to two decimal places.
3) Examples - see tests
4) Pseudocode - see comments

*/

function SeriesSum(n) {
    let sum = 0, denominator = 1;

    // Compute the sum of the first n-terms of the given sequence
    for (let i = 1; i <= n; i++) {
        sum += 1 / denominator;
        denominator += 3;
    }

    // Return sum to two decimal places as a string
    return sum.toFixed(2);
}

// Tests
console.log(SeriesSum(1), "1.00");
console.log(SeriesSum(2), "1.25");
console.log(SeriesSum(5), "1.57");
console.log(SeriesSum(3), "1.39");
console.log(SeriesSum(4), "1.49");