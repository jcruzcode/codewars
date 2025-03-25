/*
From: https://leetcode.com/problems/contains-duplicate/

Given an integer array nums, return true if any value appears at least twice in the array, and return false if every element is distinct.

Example 1:

Input: nums = [1,2,3,1]
Output: true
Example 2:

Input: nums = [1,2,3,4]
Output: false
Example 3:

Input: nums = [1,1,1,3,3,4,3,2,4,2]
Output: true
*/

const containsDuplicates = (numbers) => {
  // Count the occurences of each number in numbers
  const numCounts = {};
  for (const number of numbers) {
    numCounts[number] ? (numCounts[number] += 1) : (numCounts[number] = 1);
  }

  // If any number occurs more than once return true, otherwise false
  for (num in numCounts) {
    if (numCounts[num] > 1) return true;
  }

  return false;
};

// Tests
console.log(containsDuplicates([1, 2, 3, 1]), true);
console.log(containsDuplicates([1, 2, 3, 4]), false);
console.log(containsDuplicates([1, 1, 1, 3, 3, 4, 3, 2, 4, 2]), true);
