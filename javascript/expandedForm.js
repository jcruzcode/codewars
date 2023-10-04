// 6 kyu -  Write Number in Expanded Form 
function expandedForm(num) {
    let newNum = num;
    let digits = [];
    let digit;

    while (newNum > 0) {
        digit = newNum % 10;
        digits.unshift(digit);
        newNum = Math.floor(newNum / 10);
    }

    let powers = [];
    let exponent = digits.length - 1;


    for (let i = 0; i < digits.length; i++) {

        if (digits[i] !== 0) {
            powers.push(digits[i] * (10 ** exponent));
        }

        exponent--;
    }

    return powers.join(" + ");
}




