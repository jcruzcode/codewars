// Convert number to reversed array of digits (8 kyu)
function digitize(n) {
    if (n === 0) return [n];

    let newNum = n, digit;
    const digits = [];

    while (newNum > 0) {
        digit = newNum % 10;
        digits.push(digit);
        newNum = Math.floor(newNum / 10)
    }

    return digits;
}