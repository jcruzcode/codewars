"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.feast = feast;
/*
======== The Feast of Many Beasts (8 kyu) ========
All of the animals are having a feast! Each animal is bringing one dish.

There is just one rule: the dish must start and end with the same letters as the animal's name.

For example, the great blue heron is bringing garlic naan and the chickadee is bringing chocolate cake.

Write a function feast that takes the animal's name and dish as arguments and returns true or false to
indicate whether the beast is allowed to bring the dish to the feast.

Assume that beast and dish are always lowercase strings, and that each has at least two letters.

beast and dish may contain hyphens and spaces, but these will not appear at the beginning or end of the string.

They will not contain numerals.

1) Parameters - Two string, beast and dish.
2) Return - True if the the first and last letter of beast and dish match, else false.
3) Examples - see tests
4) Pseudocode - see comments

*/
function feast(beast, dish) {
    // Check that the first letter and last letter of beast and dish match
    return beast[0] === dish[0] && beast[beast.length - 1] === dish[dish.length - 1];
}
// Tests
console.log(feast("great blue heron", "garlic naan"), true);
console.log(feast("chickadee", "chocolate cake"), true);
console.log(feast("brown bear", "bear claw"), false);