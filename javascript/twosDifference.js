/*
====== Difference of 2 (6 kyu) ======
The objective is to return all pairs of integers from a given array of integers that have a difference of 2.

The result array should be sorted in ascending order of values.

Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
Examples

[1, 2, 3, 4]  should return [[1, 3], [2, 4]]

[4, 1, 2, 3]  should also return [[1, 3], [2, 4]]

[1, 23, 3, 4, 7] should return [[1, 3]]

[4, 3, 1, 5, 6] should return [[1, 3], [3, 5], [4, 6]]

1) Parameters - An array of integers. Assume there are no duplicate integers in the array. The order of the integers in the input array should not matter.
2) Returns - all pairs of integers from a given array of integers that have a difference of 2.
3) Examples - see tests
4) Pseudocode - see comments
*/

function twosDifference(input) {
  const pairs = [];
  const seen = [];
  let max, min;

  // Examine each number pair in input and check difference
  for (let i = 0; i < input.length; i++) {
    for (let j = 0; j < input.length; j++) {

      if (i !== j && Math.abs(input[i] - input[j]) === 2) {

        if (!seen.includes(input[i]) || !seen.includes(input[j])) {
          // Find the min and max of the pair
          max = Math.max(input[i], input[j]);
          min = Math.min(input[i], input[j]);
          // Add pair to the array in ascending order
          pairs.push([min, max]);
          // If current pair hasn't been seen before, add to pair to seen
          seen.push(input[i], input[j]);
        }
        
      }
    }
  }
  // Sort in ascending order by first element
  return pairs.sort((a,b) => a[0] - b[0]);
}

// Test Cases
console.log(twosDifference([1, 2, 3, 4]), [
  [1, 3],
  [2, 4],
]);
console.log(twosDifference([4, 1, 2, 3]), [
  [1, 3],
  [2, 4],
]);
console.log(twosDifference([1, 23, 3, 4, 7]), [[1, 3]]);
console.log(twosDifference([4, 3, 1, 5, 6]), [
  [1, 3],
  [3, 5],
  [4, 6],
]);
