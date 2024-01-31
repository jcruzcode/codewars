/*
====== Organise duplicate numbers in list (6 kyu) ======
Sam is an avid collector of numbers. Every time he finds a new number he throws it on the top of his number-pile. Help Sam organise his collection so he can take it to the International Number Collectors Conference in Cologne.

Given an array of numbers, your function should return an array of arrays, where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain:

group([3, 2, 6, 2, 1, 3])
>>> [[3, 3], [2, 2], [6], [1]]

Assume the input is always going to be an array of numbers. If the input is an empty array, an empty array should be returned.

1) Parameters - An array of integers. Assume the input is always going to be an array of numbers.

2) Return - An array of arrays where each subarray contains all the duplicates of a particular number. Subarrays should be in the same order as the first occurence of the number they contain

If the input is an empty array, an empty array should be returned.

3) Examples - See tests

4) Pseudocode - See comments

*/

function group(arr) {
  const duplicates = new Map();

  for (let num of arr) {
    // Use 'duplicates' map to keep track of each unique number in arr by
    // using the number as the property name
    // For each property, keep track of duplicates by storing each in an array
    !duplicates.get(num)
      ? duplicates.set(num, [num])
      : duplicates.get(num).push(num);
  }
  // Return an array of arrays, where each subarray contains all the
  // duplicates of a particular number in arr
  return Array.from(duplicates.values());
}

// Test cases
console.log(group([3, 2, 6, 2, 1, 3]), [[3, 3], [2, 2], [6], [1]]);
console.log(group([3, 2, 6, 2]), [[3], [2, 2], [6]]);
