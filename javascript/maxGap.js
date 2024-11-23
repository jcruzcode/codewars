/*
======= Maximum Gap (Array Series #4) (7 kyu) =======
Task

Given an array/list [] of integers , Find The maximum difference between the successive elements in its sorted form.
Notes

    Array/list size is at least 3 .

    Array/list's numbers Will be mixture of positives and negatives also zeros_

    Repetition of numbers in the array/list could occur.

    The Maximum Gap is computed Regardless the sign.

1) Parameters - An array of numbers.
2) Return - The maximum difference between successive elements in sorted form.
3) Examples - see tests
4) Pseudocode - see comments

*/
function maxGap(numbers) {
  // Find the maximum difference between successive elements in sorted form
  return Math.max(
    ...numbers
      .sort((a, b) => a - b) // sort numbers in ascending order
      .map((num, index, nums) => Math.abs(nums[index] - nums[index + 1])) // find absolute difference between successive elements
      .filter((item) => !Number.isNaN(item)) // Only keep numbers
  );
}

// Tests
console.log(maxGap([13,3,5])                 === 8);
console.log(maxGap([24,299,131,14,26,25])    === 168);
console.log(maxGap([-3,-27,-4,-2])           === 23);
console.log(maxGap([-7,-42,-809,-14,-12])    === 767);
console.log(maxGap([12,-5,-7,0,290])         === 278);
console.log(maxGap([-54,37,0,64,-15,640,0])  === 576);
console.log(maxGap([130,30,50])              === 80);
console.log(maxGap([1,1,1])                  === 0);
console.log(maxGap([-1,-1,-1])               === 0);