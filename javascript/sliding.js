/*
======= Squeaky Window (7 kyu) =======
Your function takes in parameter an array of integers nums and a 
strictly-positive integer k.

Imagine a sliding window of size k which is moving from left to right 
in the array. 

You can only see the k elements that are in the window. 

The sliding window moves right by one position until it is no longer possible 
to have k elements in the window. 

You have to return an array of the maximums for each successive window, 
from left to right.

Detailed Example:

Given nums = [1,3,-1,-3,5,3,6,7], and k = 3:

Window position                Max
---------------               -----
[1  3  -1] -3  5  3  6  7      3
1 [3  -1  -3] 5  3  6  7       3
1  3 [-1  -3  5] 3  6  7       5
1  3  -1 [-3  5  3] 6  7       5
1  3  -1  -3 [5  3  6] 7       6
1  3  -1  -3  5 [3  6  7]      7

(nums = [1,3,-1,-3,5,3,6,7], k = 3) ---> [3, 3, 5, 5, 6, 7]

More examples:

(nums = [1, 2, 3, 4], k = 1) ---> [1, 2, 3, 4]
(nums = [1, 2, 3, 4], k = 2) ---> [2, 3, 4]
(nums = [1, 2, 3, 4], k = 3) ---> [3, 4]
(nums = [1, 2, 3, 4], k = 4) ---> [4]
(nums = [1, 2, 3, 4], k = 5) ---> [] because k is larger than the length of nums

1) Parameters - An array of integers, nums, and a strictly positive integer k
2) Returns - Return an array of the maximums for each successive window from
             left to right

             If k > length of array of integers, return []
3) Examples - see test cases
4) Pseudocode - see comments

*/
function sliding(nums, k) {
  // Check if k is larger than the length of nums
  if (k > nums.length) return [];

  // The window will be implemented by the array method slice.
  // The first slice will have start = 0 and end = k, a window of width k.
  let start = 0, end = k;
  const maxNums = [];

  while (end <= nums.length) {
    // For each slice, find the maximum value using Math.max(...slice)
    // and add to maxNums.
    maxNums.push(Math.max(...nums.slice(start, end)));

    // The start and end indices will be incremented by 1 until the
    // end index reaches the last index.
    start++;
    end++;
  }

  // return an array of the maximums for each successive window, 
  // from left to right.
  return maxNums;
}

// Test Cases
console.log(sliding([1, 2, 3, 4], 1), [1, 2, 3, 4]);
console.log(sliding([1, 2, 3, 4], 2), [2, 3, 4]);
console.log(sliding([1, 2, 3, 4], 3), [3, 4]);
console.log(sliding([1, 2, 3, 4], 4), [4]);
console.log(sliding([1, 2, 3, 4], 5), []);
console.log(sliding([1, 3, -1, -3, 5, 3, 6, 7], 3), [3, 3, 5, 5, 6, 7]);
