// 6 kyu - Sum of Digits / Digital Root
function digitalRoot(n) {
    if (n === 0) {
        return n;
    } else if (n % 9 === 0) {
        return 9;
    } else {
        return n % 9;
    }
}