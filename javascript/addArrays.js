/*
====== Sum two arrays (6 kyu) ======
Your task is to create a function called addArrays, which takes two arrays 
consisting of integers, and returns the sum of those two arrays.

The twist is that (for example) [3,2,9] does not equal 3 + 2 + 9, it would equal 
'3' + '2' + '9' converted to an integer for this kata, meaning it would equal 
329. 

The output should be an array of the sum in a similar fashion to the input (for 
example, if the sum is 341, you would return [3,4,1]). 

Examples are given below of what two arrays should return.

[3,2,9],[1,2] --> [3,4,1]
[4,7,3],[1,2,3] --> [5,9,6]
[1],[5,7,6] --> [5,7,7]

If both arrays are empty, return an empty array.

In some cases, there will be an array containing a negative number as the first 
index in the array. In this case treat the whole number as a negative number. 

See below:

[3,2,6,6],[-7,2,2,8] --> [-3,9,6,2] # 3266 + (-7228) = -3962

1) Parameters - Two arrays of integers.
2) Return - The sum of the two arrays. In this, case the sum means combining the
            the digits of each array to form a number then taking the sum.
            Return the sum as an array of integers, with a possible negative
            lead digit.
3) Examples - see tests
4) Pseudocode - see comments

*/
function addArrays(array1, array2) {
    // Check if both arrays are empty
    if (array1.length === 0 && array2.length === 0) return [];

    const nestedArray = [array1, array2];
    let sum = 0;
    // Join the digits from each array to form a number
    // Then add each number to find the sum
    for (let array of nestedArray) {
        sum += +array.join('');
    }

    // Convert sum from number to string an split into characters
    const sumDigits = sum.toString().split('');

    // Remove leading dash if sum is negative and make leading digit negative
    // Convert each digit from string to number type
    if (sum < 0) sumDigits.shift();

    for (let i = 0; i < sumDigits.length; i++) {
        if (sum < 0 && i === 0) sumDigits[i] = `-${sumDigits[i]}`;
        sumDigits[i] = +sumDigits[i];
    }

    return sumDigits;
}

// Tests
console.log("If both arrays are empty return an empty array")
console.log(addArrays([],[]), []);
console.log("Positive number tests...")
console.log(addArrays([3,2,9],[1,2]), [3,4,1]);
console.log(addArrays([4,7,3],[1,2,3]), [5,9,6]);
console.log(addArrays([1],[5,7,6]), [5,7,7]);
console.log("Negative number tests...")
console.log(addArrays([3,2,6,6],[-7,2,2,8]), [-3,9,6,2]);