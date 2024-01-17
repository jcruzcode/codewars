/*
====== Find The Parity Outlier (6 kyu) ======
You are given an array (which will have a length of at least 3, 
but could be very large) containing integers. 

The array is either entirely comprised of odd integers or 
entirely comprised of even integers except for a single integer N. 

Write a method that takes the array as an argument and 
returns this "outlier" N.

1) Parameter - An array of integers with a length of at least 3 but
               could be very large.
2) Return - Return the outlier N
            if rest evens, then N is odd.
            if rest odds, then N is even.
3) Examples - see tests
4) Pseudocode - see comments

*/

function findOutlier(integers){
    // Filter even and odd integers from 'integers'
    const evenNums = integers.filter( x => x % 2 === 0);
    const oddNums = integers.filter( x => x % 2 !== 0);
    // If the evenNums has only one element, return that element
    // Otherwise, return the only element in oddNums
    return evenNums.length === 1 ? evenNums[0] : oddNums[0];
}

// Tests
console.log(findOutlier([2, 4, 0, 100, 4, 11, 2602, 36]), 11);
console.log(findOutlier([160, 3, 1719, 19, 11, 13, -21]), 160);
console.log(findOutlier([0, 1, 2]), 1)
console.log(findOutlier([1, 2, 3]), 2)
console.log(findOutlier([2,6,8,10,3]), 3)
console.log(findOutlier([0,0,3,0,0]), 3)
console.log(findOutlier([1,1,0,1,1]), 0)