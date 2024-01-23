/*
====== Range function (6 kyu) ======
Create range generator function that will take up to 3 parameters 
- start value
- step 
- and stop value. 

This function should return an iterable object with numbers. 

For simplicity, assume all parameters to be positive numbers.

Examples:

    range(5) --> 1,2,3,4,5
    range(3, 7) --> 3,4,5,6,7
    range(2, 3, 15) --> 2,5,8,11,14

1) Parameters - start, step, and stop which are each positive integers
2) Returns - An iterable object with the generated integers
3) Examples - see tests
4) Pseudocode - see comments

*/

/*
function range(start, step, stop) {
    const iterable = []
    
    // Case - step and stop are undefined
    if (!step && !stop) {
        // Count down from start by 1 and
        // add each number to the front of
        // iterable until zero is reached
        for (let i = start; i > 0; i--) {
            iterable.unshift(i);
        }    
    } else if (!stop) {
        // Case - stop is undefined
        const end = step;
        // Count up from start by 1 until you 
        // reach at most end and add each number
        // to the end of iterable
        for (let i = start; i <= end; i++) {
            iterable.push(i);
        }
    } else {
        // All three parameters defined
        for ( let i = start; i <= stop; i += step) {
            iterable.push(i);
        }
    }
    // Return an iterable of a generated 
    // range of  positive integers
    return iterable
} */

function range(start, step, stop) {
    // Case - Only one argument
    // This means the argument given is the stop value
    // Assume start and step are 1 and return call to range
    if(arguments.length === 1) return range(1, 1, arguments[0]);
    
    // Case - Two arguments
    // This means the arguments given are the start and stop value
    // Assume step is 1 and return call to range
    if(arguments.length === 2) return range(arguments[0], 1, arguments[1]);

    // Case - Three arguments
    // The function will eventually reach this point as
    // the previous conditions ensure range is called with 
    // 3 parameters
    const iterable = [];

    // From start, increment i each iteration by step and
    // add it to iterable as long i is not more than stop.
    for ( let i = start; i <= stop; i+= step) iterable.push(i);
    
    // Return the range of integers 
    return iterable;

}

// Test cases
console.log(Array.from(range(5)), [1,2,3,4,5]);
console.log(Array.from(range(3, 7)), [3,4,5,6,7]);
console.log(Array.from(range(2, 3, 15)), [2,5,8,11,14]);