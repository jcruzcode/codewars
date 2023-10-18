// 6 kyu - Simple Fun #141 - Hamming Distance
function hammingDistance (a, b) {
    let count = 0;
    const binA = binaryDigits(a), binB = binaryDigits(b);
    let binStrA = binA.join(''), binStrB = binB.join('');

    if ( binA.length > binB.length ) {
        binStrB = binStrB.padStart(binA.length, '0');
    } else if ( binA.length < binB.length ) {
        binStrA = binStrA.padStart(binB.length, '0');
    }

    for ( let i = 0; i < binStrA.length; i++ ) {
        if ( binStrA[i] !== binStrB[i] ) {
            count++;
        }
    }
    
    return count;
}

// Helper Function
function binaryDigits(num) {
    let newNum = num;
    let digits = [];
    let digit;

    while ( newNum > 0 ) {
        digit = newNum % 2;
        digits.unshift(digit);
        newNum = Math.floor(newNum / 2);
    }

    return digits;
}

