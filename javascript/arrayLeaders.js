/*
=======  Array Leaders (Array Series #3) (7 kyu) =======
Definition

An element is leader if it is greater than The Sum all the elements to its right side.
Task

Given an array/list [] of integers , Find all the LEADERS in the array.
Notes

    Array/list size is at least 3 .

    Array/list's numbers Will be mixture of positives , negatives and zeros

    Repetition of numbers in the array/list could occur.

    Returned Array/list should store the leading numbers in the same order in the original array/list 

1) Parameters - An array of integers, numbers.
2) Return - An array of integers from the original, including only those with a value greater than the
            sum of integers to its right side.
3) Examples - see tests
4) Pseudocode - see comments

*/
function arrayLeaders(numbers) {
  const leaders = [];
  let sum = 0;

  for (let i = 0; i < numbers.length; i++) {
    // Calculate sum of integers to the right of given value
    sum = numbers.slice(i + 1).reduce((acc, val) => acc + val, 0);
    // Keep number if it is larger than its right hand sum
    if (numbers[i] > sum) leaders.push(numbers[i]);
  }

  return leaders;
}

// Tests
console.log(arrayLeaders([1,2,3,4,0]), [4]);
console.log(arrayLeaders([16,17,4,3,5,2]), [17,5,2]);
console.log(arrayLeaders([-1,-29,-26,-2]), [-1]);
console.log(arrayLeaders([-36,-12,-27]),  [-36,-12]);
console.log(arrayLeaders([5,-2,2]), [5,2]);
console.log(arrayLeaders([0,-1,-29,3,2]),  [0,-1,3,2]);