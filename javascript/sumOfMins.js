/*

======= Sum of Minimums! (7 kyu) =======
Given a 2D ( nested ) list ( array, vector, .. ) of size m * n, 
your task is to find the sum of the minimum values in each row.

For Example:

[ [ 1, 2, 3, 4, 5 ]        #  minimum value of row is 1
, [ 5, 6, 7, 8, 9 ]        #  minimum value of row is 5
, [ 20, 21, 34, 56, 100 ]  #  minimum value of row is 20
]

So the function should return 26 because the sum of the minimums
is 1 + 5 + 20 = 26.

1) Parameters - A 2D ( nested ) array of integers, size m * n. 
2) Return - An integer that represents the sum of the minimum 
            values in each row. 
3) Examples - see tests
4) Pseudocode - see comments

*/
function sumOfMinimums(arr) {
  return arr
    .map((nums) => Math.min(...nums)) // map each integer array to its min value
    .reduce((sum, num) => sum + num, 0); // sum the min values of each sub array
}

// Tests
console.log(
  sumOfMinimums([
    [7, 9, 8, 6, 2],
    [6, 3, 5, 4, 3],
    [5, 8, 7, 4, 5],
  ]),
  9
);
console.log(
  sumOfMinimums([
    [11, 12, 14, 54],
    [67, 89, 90, 56],
    [7, 9, 4, 3],
    [9, 8, 6, 7],
  ]),
  76
);
