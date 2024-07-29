"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mean = mean;
/*
======= Calculate mean and concatenate string (7 kyu) =======
You will be given an array which will include both integers and characters.

Return an array of length 2 with a[0] representing the mean of the ten integers as a floating point number.

There will always be 10 integers and 10 characters.

Create a single string with the characters and return it as a[1] while maintaining the original order.

lst = ['u', '6', 'd', '1', 'i', 'w', '6', 's', 't', '4', 'a', '6', 'g', '1', '2', 'w', '8', 'o', '2', '0']

Here is an example of your return

[3.6, 'udiwstagwo']

1) Parameters - An array of integers and characters.
2) Return - An array with two elements, the first being the mean of the integers and the second
            being the concatenation of the non-integer elements.
3) Examples - see tests
4) Pseudocode - see comments

*/
function mean(lst) {
    const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
    const numbers = lst
        .filter((char) => digits.includes(char))
        .map((num) => Number.parseInt(num));
    // Compute arithmetic average of integer elements
    const average = numbers.reduce((acc, val) => acc + val, 0) / numbers.length;
    // Concatenate non-integer elements
    const str = lst.filter((item) => !digits.includes(item)).join("");
    return [average, str];
}
// Tests
let lst = [
    "u",
    "6",
    "d",
    "1",
    "i",
    "w",
    "6",
    "s",
    "t",
    "4",
    "a",
    "6",
    "g",
    "1",
    "2",
    "w",
    "8",
    "o",
    "2",
    "0",
];
console.log(`Testing  ${lst}`);
console.log(JSON.stringify(mean(lst)), JSON.stringify([3.6, "udiwstagwo"]));
lst = [
    "0",
    "c",
    "7",
    "x",
    "6",
    "2",
    "3",
    "5",
    "w",
    "7",
    "0",
    "y",
    "v",
    "u",
    "h",
    "i",
    "n",
    "u",
    "0",
    "0",
];
console.log(`Testing  ${lst}`);
console.log(JSON.stringify(mean(lst)), JSON.stringify([3.0, "cxwyvuhinu"]));
lst = [
    "0",
    "u",
    "a",
    "y",
    "0",
    "a",
    "9",
    "q",
    "3",
    "v",
    "g",
    "7",
    "6",
    "4",
    "y",
    "d",
    "8",
    "6",
    "0",
    "d",
];
console.log(`Testing  ${lst}`);
console.log(JSON.stringify(mean(lst)), JSON.stringify([4.3, "uayaqvgydd"]));
lst = [
    "s",
    "n",
    "9",
    "l",
    "0",
    "m",
    "i",
    "z",
    "9",
    "7",
    "y",
    "4",
    "z",
    "3",
    "3",
    "k",
    "4",
    "1",
    "0",
    "k",
];
console.log(`Testing  ${lst}`);
console.log(JSON.stringify(mean(lst)), JSON.stringify([4.0, "snlmizyzkk"]));
lst = [
    "5",
    "v",
    "u",
    "k",
    "8",
    "4",
    "9",
    "b",
    "9",
    "g",
    "5",
    "z",
    "3",
    "f",
    "6",
    "u",
    "i",
    "6",
    "6",
    "t",
];
console.log(`Testing  ${lst}`);
console.log(JSON.stringify(mean(lst)), JSON.stringify([6.1, "vukbgzfuit"]));
lst = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "0",
    "a",
    "a",
    "d",
    "d",
    "g",
    "q",
    "u",
    "v",
    "y",
    "y",
];
console.log(`Testing  ${lst}`);
console.log(JSON.stringify(mean(lst)), JSON.stringify([0.9, "aaddgquvyy"]));
lst = [
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "1",
    "a",
    "a",
    "d",
    "d",
    "g",
    "q",
    "u",
    "v",
    "y",
    "y",
];
console.log(`Testing  ${lst}`);
console.log(JSON.stringify(mean(lst)), JSON.stringify([1.0, "aaddgquvyy"]));
