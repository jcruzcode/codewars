/*
========== IPv4 to int32 (6 kyu) =========

Write a function that takes an IPv4 address and returns a 32 bit number.

1) Parameters - A string that represents an IPv4 address. This means that the 
                input string is made up of 4 octets separated by decimal points.
                Each ocetet is a decimal number from 0 to 255 inclusive.

                For example: 127.0.0.0 (loopback IP)

                Each octet can also be represented by an 8 bit binary number.
2) Return - A decimal number represented by the binary number formed by
            joining each of the 4 octets into one binary string
3) Examples - see test cases
4) Pseudocode - see comments

*/

function ipToInt32(ip) {
    // getDigits takes a positive integer and returns 
    // its binary representation as a string
    function getDigits(num) {
        let newNum = num;
        const digits = [];
        let digit;
   
        while ( newNum > 0 ) {
            digit = newNum % 2;
            digits.unshift(digit);
            newNum = Math.floor(newNum / 2);
        }
   
        return digits.join('');
    }

    // Split ip string into octets and store in array
    const octets = ip.split('.');
    const binary = [];
    let bits;
    // Loop over octets and convert each decimal number 
    // into a binary string and concatenate
    for (let octet of octets) {
        bits = getDigits(+octet);
        // Check if bits is 8 bits long
        // If not, pad the beginning of number with 
        // zeros to make it 8 bits
        if (bits.length < 8) bits = bits.padStart(8,'0');
        binary.push(bits);
    }

    // Return a decimal number represented by the binary number formed by
    // joining each of the 4 octets into one binary string
    return Number.parseInt(binary.join(''), 2);
   
}

// Test Cases
console.log(ipToInt32("128.32.10.1") === 2149583361);
console.log(ipToInt32("128.114.17.104") === 2154959208);
console.log(ipToInt32("0.0.0.0") === 0);
console.log(ipToInt32("255.255.255.255") === 2 ** 32 - 1);