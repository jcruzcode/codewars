/* 7 ky - Sort Numbers */
function solution(nums){
    // Return empty array if 'nums' is empty or null
    // Otherwise return 'nums' in ascending order
    return nums === null || nums.length === 0 ? [] : nums.sort((a,b) => a - b);
  }
