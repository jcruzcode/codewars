/* 
====== Number, number...wait LETTER! (6 kyu) 
Your task is to write a function that receives as its single argument a string that contains numbers delimited by single spaces. Each number has a single alphabet letter somewhere within it.

Example : "24z6 1x23 y369 89a 900b"

As shown above, this alphabet letter can appear anywhere within the number. You have to extract the letters and sort the numbers according to their corresponding letters.

Example : "24z6 1x23 y369 89a 900b" will become 89 900 123 369 246 (ordered according to the alphabet letter)

Here comes the difficult part, now you have to do a series of computations on the numbers you have extracted.

    The sequence of computations are + - * /. Basic math rules do NOT apply, you have to do each computation in exactly this order.
    This has to work for any size of numbers sent in (after division, go back to addition, etc).
    In the case of duplicate alphabet letters, you have to arrange them according to the number that appeared first in the input string.
    Remember to also round the final answer to the nearest integer.

Examples :
"24z6 1x23 y369 89a 900b" = 89 + 900 - 123 * 369 / 246 = 1299
"24z6 1z23 y369 89z 900b" = 900 + 369 - 246 * 123 / 89 = 1414
"10a 90x 14b 78u 45a 7b 34y" = 10 + 45 - 14 * 7 / 78 + 90 - 34 = 60

Good luck and may the CODE be with you!

1) Parameters - A string with spaces in between each word. Each word consists of digits and one letter (lowercase).
2) Return - The an integer which is the result of performing a series of computations on the sorted numbers in the following order: + - * /, going back to the beginning (+) if need be.  
3) Examples - see test
4) Pseudocode - see comments

*/

function doMath(string) {
    // Letters of alphabet, lowercase
    const alpha = 'abcdefghikjlmnopqrstuvwxyz';
    // Split string into 'words'
    const words = string.split(' ');
    
    // Separate numbers and letters from each word
    // and place each letter and number pair in 
    // numsAndLetters
    const numsAndLetters = [];
    let num, items;

    for (let i = 0; i < words.length; i++) {
        num = "";
        items = [];
        for (let char of words[i]) {
            alpha.includes(char) ?
                items.push(char):
                num += char;
        }
        items.push(+num);
        numsAndLetters.push(items);
    }

    // Sort numbers by their corresponding letters
    numsAndLetters.sort((a,b) => {
        if(a[0] < b[0]) return -1;
        if(a[0 > b[0]]) return 1;
        return 0;
    });

    let lastOperator, result = 0;
    // Perform calculations using each number with 
    // the following order: + - * /
    // After divison, go back to addition and continue 
    // until all numbers used
    for (let i = 0; i < numsAndLetters.length; i++) {
        if (result === 0) {
            result = numsAndLetters[i][1];
        } else if ((result !== 0 && lastOperator === undefined) 
                    || lastOperator === '/') {
            result += numsAndLetters[i][1];
            lastOperator = '+';
        } else if (lastOperator === '+') {
            result -= numsAndLetters[i][1];
            lastOperator = '-';
        } else if (lastOperator === '-') {
            result *= numsAndLetters[i][1];
            lastOperator = '*';
        } else if (lastOperator === '*') {
            result /= numsAndLetters[i][1];
            lastOperator = '/';
        }
    }
    // Return the result of the calculations performed, rounded.
    return Math.round(result);
}

console.log(doMath("24z6 1z23 y369 89z 900b"), 1414);
console.log(doMath("24z6 1x23 y369 89a 900b"), 1299);
console.log(doMath("10a 90x 14b 78u 45a 7b 34y"), 60);
console.log(doMath("111a 222c 444y 777u 999a 888p"), 1459);
console.log(doMath("1z 2t 3q 5x 6u 8a 7b"), 8);
