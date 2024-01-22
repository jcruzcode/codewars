/*
====== Sum consecutives (6 kyu) ======
You are given a list/array which contains only integers 
(positive and negative). 

Your job is to sum only the numbers that are the same and consecutive. 

The result should be one list.

1) Parameters - An array of positive/negative integers
2) Returns - An array of integers
3) Examples - see tests
4) Pseudocode - see comments

*/

function sumConsecutives(nums) {
    const sums = [];
    let previous, count = 0;

    // Loop over the nums array and check for consecutive numbers
    for (let i = 0; i < nums.length; i++) {
        // Count the occurence of the first element
        // since it's the first consecutive number
        if (previous === undefined) {
            count++;
        } else {
            // Current and previous numbers aren't equal
            if (previous !== nums[i]) {
                // Add the sum of the previous consecutive numbers 
                // to sums array
                sums.push(previous * count);
                
                // Restart count at 1 for the current number
                count = 1;
            } else {
                // Increment count since previous and current 
                // are equal and thus are consecutive numbers
                count++;
            }
        }
        // Set previous to the current number for the next iteration
        previous = nums[i];

        // Add the last number in the nums array to sums
        // because it is a solo consecutive number
        if (i === nums.length - 1) sums.push(nums[i]);
    }

    // Return the array of sums of consecutive numbers
    return sums;
}

// Test cases
console.log(sumConsecutives([1,4,4,4,0,4,3,3,1]),[1,12,0,4,6,1])
console.log(sumConsecutives([1,1,7,7,3]),[2,14,3])
console.log(sumConsecutives([-5,-5,7,7,12,0]),[-10,14,12,0])
console.log(sumConsecutives([3,3,3,3,1]),[12, 1])