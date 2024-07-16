/*
======= Simple remove duplicates (7 kyu) =======
Remove the duplicates from a list of integers, keeping the last 
(rightmost) occurrence of each element.
Example:

For input: [3, 4, 4, 3, 6, 3]

    remove the 3 at index 0
    remove the 4 at index 1
    remove the 3 at index 3

Expected output: [4, 6, 3]

More examples can be found in the test cases.

1) Parameters - An array of integers.
2) Return - An array which takes the input array and removes the duplicates,
            keeping the last occurrence of each element.
3) Examples - see tests
4) Pseudocode - see comments

*/
function solve(arr) {
  const kept = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    // Keep the last occurence of each element in arr
    if (!kept.includes(arr[i])) kept.unshift(arr[i]);
  }
  return kept;
}

// Tests
console.log(solve([3,4,4,3,6,3]),[4,6,3]);
console.log(solve([1,2,1,2,1,2,3]),[1,2,3]);
console.log(solve([1,2,3,4]),[1,2,3,4]);
console.log(solve([1,1,4,5,1,2,1]),[4,5,2,1]);
console.log(solve([1,2,1,2,1,1,3]),[2,1,3]);
