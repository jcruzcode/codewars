/*
======= Binary Addition (7 kyu) =======
Implement a function that adds two numbers together and returns their sum in 
binary. 

The conversion can be done before, or after the addition.

The binary number returned should be a string.

1) Parameters - Two numbers
2) Returns - A binary number representing the sum of the two numbers.
3) Examples - see tests
4) Pseudocode - see comments

*/

function addBinary(a,b) {
    const sum  = a + b;

    return sum.toString(2);
    // Get the binary digits of the sum
    /*function getBinaryDigits(sum) {
        const digits = [];
        let digit;

        while (sum > 0) {
            digit = sum % 2;
            digits.unshift(digit);
            sum = Math.floor(sum / 2);
        }

        return digits.join('');
    }

    return getBinaryDigits(sum);*/
}

// Tests
console.log(addBinary(1,2), '11');
console.log(addBinary(4,4), '1000');
console.log(addBinary(4,3), "111");