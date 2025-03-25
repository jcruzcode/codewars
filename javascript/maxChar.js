/*

Given a string of characters, return the character that appears the most often.

describe('Max Character', () => {
 it('Should return max character', () => {
  assert.equal(max('Hello World!'), 'l');
 });
});

No String or Array Methods (well brute force it first, but then no methods)! 

1) Parameter - A string, message.
2) Return - The character in message that appears the most often, as a string.
3) Examples - see tests
4) Pseudocode - see comments

*/

function maxChar(message) {
    // Count the occurence of each character in message
    const charCounts = {};
    for (let char of message) {
        charCounts[char] ? charCounts[char] += 1 : charCounts[char] = 1;
    }

    // Find the character that appears most often
    const maxCount = Math.max(...Object.values(charCounts));

    for (const [key, value] of Object.entries(charCounts)) {
        if (value === maxCount) return key;
    }
}

// Tests
console.log(maxChar('Hello World!') === 'l');
console.log(maxChar('223+++aa1') === '+');
console.log(maxChar("Hi my name is") === " ");
console.log(maxChar("3493944") === "4");
console.log(maxChar("") === undefined);