/*
======= max diff - easy (7 kyu) =======
You must implement a function that returns the difference between the largest and 
the smallest value in a given list / array (lst) received as the parameter.

    lst contains integers, that means it may contain some negative numbers
    if lst is empty or contains a single element, return 0
    lst is not sorted

[1, 2, 3, 4]   //  returns 3 because 4 -   1  == 3
[1, 2, 3, -4]  //  returns 7 because 3 - (-4) == 7

Have fun!

1) Parameter - An array of numbers, list.
2) Return - The difference between the maximum value of the array
            and the minimum value of the array, otherwise return 0
            if the array is empty.
3) Examples - see tests
4) Pseudocode - see comments

*/
function maxDiff(list) {
  // Find The difference between the maximum value of the array
  // and the minimum value of the array, otherwise return 0
  // if the array is empty.
  return list.length === 0 ? 0 : Math.max(...list) - Math.min(...list);
}

// Tests
console.log(maxDiff([0, 1, 2, 3, 4, 5, 6]), 6);
console.log(maxDiff([-0, 1, 2, -3, 4, 5, -6]), 11);
console.log(maxDiff([0, 1, 2, 3, 4, 5, 16]), 16);
console.log(maxDiff([16]), 0);
console.log(maxDiff([]), 0);
