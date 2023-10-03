function sumDigPow(a, b) {
    // Generate array of numbers in range a to b, inclusive
    function makeNums (a, b) {
        let numbers = [];
    
        for (let i = a; i <= b; i++) {
            numbers.push(i);
        }

        return numbers;
    }
    // Loop through array and for each number:
    // 1) isolate each digit of the number
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
    // 2) using the digits, calculate the sum with increasing powers starting from 1
    function powerSum( digits ) {
        let exponent = 1;
        let sum = 0;

        for ( let i = 0; i < digits.length; i++ ) {
            sum += digits[i]**exponent;
            exponent++;
        }

        return sum;
    }
    // 3) check if sum is equal to the original number
    //   a) if so, add to a new array
    //   b) otherwise continue loop
    let numbers = makeNums( a, b);
    let solution = [];
    let digits, sum;

    for (let j = 0; j < numbers.length; j++) {
        digits = getDigits( numbers[j] );
        sum = powerSum( digits );

        if ( numbers[j] === sum ) {
            solution.push(numbers[j]);
        }
    }
    // 4) Return new array
    return solution;
}



