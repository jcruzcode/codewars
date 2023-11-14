// Validate Credit Card Number (6 kyu)
function validate(n) {
    let digits = getDigits(n);
    digits = replace(digits);

    const sum = digits.reduce((acc, num) => acc + num, 0);
    return sum % 10 === 0 ? true : false;
}

function getDigits(num) {
    let newNum = num;
    const digits = [];
    let digit;

    while (newNum > 0) {
        digit = newNum % 10;
        digits.unshift(digit);
        newNum = Math.floor(newNum / 10);
    }

    return digits;
}

function replace(arr) {
    const digits = arr;
    let temp;

    for (let i = 0; i < digits.length; i++) {
        if (digits.length % 2 === 0) {
            if (i === 0 || i % 2 === 0) {
                temp = digits[i] * 2;
                temp > 9 ? digits[i] = temp - 9 : digits[i] = temp;
            }
        } else {
            if (i % 2 !== 0) {
                temp = digits[i] * 2;
                temp > 9 ? digits[i] = temp - 9 : digits[i] = temp;
            }
        }
    }

    return digits;
}

console.log(validate(123));
console.log(validate(1));
console.log(validate(891));

console.log(validate(2121));
console.log(validate(1230));