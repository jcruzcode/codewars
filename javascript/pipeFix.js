/*
======== Lario and Muigi Pipe Problem (8 kyu) ========
Issue

Looks like some hoodlum plumber and his brother has been running around and 
damaging your stages again.

The pipes connecting your level's stages together need to be fixed before you 
receive any more complaints.

The pipes are correct when each pipe after the first is 1 more than the previous
one.

Task

Given a list of unique numbers sorted in ascending order, return a new list so 
that the values increment by 1 for each index from the minimum value up to the 
maximum value (both included).

Example

Input:  1,3,5,6,7,8 Output: 1,2,3,4,5,6,7,8

1) Parameters - An array of integers sorted in ascending order.
2) Return - An array of sequential integers from the first element up to the 
            last element of the given array.
3) Examples - see tests
4) Pseudocode - see comments

*/
function pipeFix(numbers) {
  let sequentialNums = [];
  // Generate an array of sequential integers from the first number in numbers
  // to the last number.
  for (let i = numbers[0]; i <= numbers[numbers.length - 1]; i++) {
    sequentialNums.push(i);
  }
  return sequentialNums;
}

// Tests
console.log(pipeFix([-4,-1,1,2,7,9]), [-4,-3,-2,-1,0,1,2,3,4,5,6,7,8,9]);
console.log(pipeFix([1,3,5,7]),[1,2,3,4,5,6,7]);
console.log(pipeFix([2,4,6,8]), [2,3,4,5,6,7,8]);

