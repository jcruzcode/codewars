// 8 kyu - Convert to Binary
function toBinary(n) {
    let newNum = n;
    const digits = [];
    let digit;

    while (newNum > 0) {
        digit = newNum % 2;
        digits.unshift(digit);
        newNum = Math.floor(newNum / 2);
    }

    return Number(digits.join(''));
}