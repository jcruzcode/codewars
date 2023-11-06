// Give me a diamond (6 kyu)
function diamond(n) {
    if (n % 2 === 0 || n < 0) {
        return null;
    } else if (n === 1) {
        return "*\n";
    }

    const middle = '*'.repeat(n) + '\n';

    return topHalf(n) + middle + bottomHalf(n);
}

function topHalf(n) {
    const midPoint = Math.ceil(n / 2);
    let startSpace = Math.floor(n / 2);
    let topStr = '';

    for (let i = 1; i < n; i += 2) {
        topStr += ' '.repeat(startSpace) + '*'.repeat(i) + '\n';
        startSpace--;
    }

    return topStr;
}

function bottomHalf(n) {
    const midPoint = Math.ceil(n / 2);
    let whiteSpace = 1;
    let botStr = '';

    for (let i = n - 2; i >= 1; i -= 2) {
        botStr += ' '.repeat(whiteSpace) + '*'.repeat(i) + '\n';
        whiteSpace++;
    }

    return botStr;
}

console.log(diamond(11));
console.log("  *\n ***\n*****\n ***\n  *\n")
/* console.log(diamond(1), "*\n")
console.log(diamond(3), " *\n***\n *\n")
console.log(diamond(5), "  *\n ***\n*****\n ***\n  *\n")

console.log(diamond(2), null)
console.log(diamond(-3), null)
console.log(diamond(0), null) */