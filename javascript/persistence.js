// 6 kyu - Persistent Bugger
function persistence(num) {
    // returns an array of digits from a given number
    function getDigits(num) {
        let newNum = num;
        let digits = [];
        let digit;
    
        while ( newNum > 0 ) {
            digit = newNum % 10;
            digits.unshift(digit);
            newNum = Math.floor(newNum / 10);
        }
    
        return digits;
    }
    
    let digits = getDigits(num);
    let product, count = 0;
    
    if ( digits.length === 1 ) {
        return 0;
    }

    while ( digits.length > 1 ) {
        product = digits.reduce( ( accumulator, currentValue ) => accumulator*currentValue, 1);
        digits = getDigits(product);
        console.log(digits);
        count++;
    }

    return count;
}


