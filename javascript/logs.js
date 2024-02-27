/*
======== easy logs (8 kyu) ========

Given a logarithm base X and two values A and B, return a sum of logratihms 
with the base X

1) Parameters - Three positive integers x, a, and b. x represents the log base
                and a and b are the numbers which the log is taken. 
2) Returns - The sum of log base x of a and log base x of b.
3) Examples - see tests
4) Pseudocode - see comments

*/

function logs(x , a, b){
    // return a sum of logarithms with the base x
    return (Math.log(a) + Math.log(b)) / Math.log(x);
}

// Tests
console.log(logs(10, 2, 3) === 0.7781512503836435);
console.log(logs(5, 2, 3) === 1.1132827525593785);
console.log(logs(1000, 2, 3) === 0.25938375012788123);
