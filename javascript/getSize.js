/*
======== Surface Area and Volume of a Box (8 kyu) ========
Write a function that returns the total surface area and 
volume of a box as an array: [area, volume]

1) Parameters - Positive integers width, height, and depth
2) Return - The total surface area and volume of a box as an array
3) Examples - see tests
4) Pseudocode - see comments

*/
function getSize(width, height, depth) {
    // total surface area and volume of a box as an array
    return [2 * (width *(height + depth) + height * depth), width * height * depth];
}

// Tests
console.log(getSize(4, 2, 6), [88, 48]);   
console.log(getSize(10, 10, 10), [600, 1000]);
console.log(getSize(4, 2, 6)[0], 88);
console.log(getSize(4, 2, 6)[1], 48);