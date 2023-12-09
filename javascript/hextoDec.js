// Hex to Decimal (8 kyu)
function hexToDec(hexString) {
    const lower = hexString.toLowerCase();
    const chars = lower.split('').reverse();
    const hexValues = {
        '0': 0,
        '1': 1,
        '2': 2,
        '3': 3,
        '4': 4,
        '5': 5,
        '6': 6,
        '7': 7,
        '8': 8,
        '9': 9,
        'a': 10,
        'b': 11,
        'c': 12,
        'd': 13,
        'e': 14,
        'f': 15,
    }

    let sum = 0;

    for (let i = 0; i < chars.length; i++) {
        if (chars[i] === '-') {
            sum *= -1;
        } else {
            sum += (16 ** i) * hexValues[chars[i]];
        }
    }

    return sum;
}

console.log(hexToDec('1'));
console.log(hexToDec('a'));
console.log(hexToDec('10'));
console.log(hexToDec('FF'));
console.log(hexToDec('-C'));