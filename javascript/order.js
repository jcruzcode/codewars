// Your order, please (6 kyu)
function order(words) {
    if (words.length === 0) return '';

    const wrds = words.split(' ');
    const pairs = [];

    const getDigit = str => {
        const digits = [1, 2, 3, 4, 5, 6, 7, 8, 9];

        for (let i = 0; i < str.length; i++) {
            if (digits.includes(+str[i])) {
                return +str[i];
            }
        }
    }

    for (let wrd of wrds) {
        pairs.push([wrd, getDigit(wrd)]);
    }

    pairs.sort((a, b) => a[1] - b[1]);

    const ordered = [];
    for (let pair of pairs) {
        ordered.push(pair[0]);
    }

    return ordered.join(' ');

}

console.log(order("is2 Thi1s T4est 3a") === "Thi1s is2 3a T4est")
console.log(order("4of Fo1r pe6ople g3ood th5e the2") === "Fo1r the2 g3ood 4of th5e pe6ople")
console.log(order("") === "", "empty input should return empty string")