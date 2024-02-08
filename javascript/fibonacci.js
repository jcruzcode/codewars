/*

====== Even Fibonacci Sum (6 kyu) ======
Give the summation of all even numbers in a Fibonacci sequence up to, 
but not including, the number passed to your function. 

Or, in other words, sum all the even Fibonacci numbers that are lower than the 
given number n (n is not the nth element of Fibonacci sequence) without 
including n.

The Fibonacci sequence is a series of numbers where the next value is the 
addition of the previous two values. The series starts with 0 and 1:

0 1 1 2 3 5 8 13 21...

For example:

fibonacci(0)==0
fibonacci(33)==10
fibonacci(25997544)==19544084

1) Parameters - A positive integer representing the maximum fibonacci number.
                This number will not be included in the sum.
2) Return - The sum of all the even fibonacci numbers below the given number
3) Examples - see test cases
4) Pseudocode - see comments

*/

function fibonacci(max) {
    // Starting numbers for fibonacci sequence
    let zeroth = 0, first = 1, sum = 0, nextNum;
    
    // Sum is zero when max is less than 2
    if (max < 2) return sum;

    // Sum all the even fibonacci numbers while nextNum is less than max
    do {
        nextNum = zeroth + first;
        
        if (nextNum % 2 === 0 && nextNum < max) sum += nextNum;

        zeroth = first;
        first = nextNum;
    } while (nextNum < max) 

    return sum;
}

// Test Cases
console.log(fibonacci(2147483647) === 1485607536);
console.log(fibonacci(1000000000) === 350704366); 
console.log(fibonacci(100000000) === 82790070);
console.log(fibonacci(1000000) === 1089154);
console.log(fibonacci(1000) === 798);
console.log(fibonacci(100) ===  44); 
console.log(fibonacci(5) === 2);
console.log(fibonacci(8) === 2);
console.log(fibonacci(10) === 10);
console.log(fibonacci(1) === 0);