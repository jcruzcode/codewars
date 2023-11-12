// Playing with digits (6 kyu)
function digPow(n, p) {
    const digits = getDigits(n);
    let power = p;
    let sum = 0;
    let k = 0;

    for (let i = 0; i < digits.length; i++) {
        sum += digits[i] ** power;
        power++;
    }

    k = sum / n;

    return k === Math.floor(k) ? k : -1;
}

function getDigits(num) {
    let newNum = num;
    let digits = [];
    let digit;

    while (newNum > 0) {
        digit = newNum % 10;
        digits.unshift(digit);
        newNum = Math.floor(newNum / 10);
    }

    return digits;
}