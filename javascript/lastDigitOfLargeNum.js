function lastDigit(a, b) {
    // Case when b is '0', anything power 0 is 1
    if (b === '0') {
        return 1;
    }

    // Get the last digit of a
    const lastDigitOfA = a[a.length - 1];
    
    // Case when b is '1', the last digit is a itself
    if (b === '1') {
        return Number(lastDigitOfA);
    }

    // Define the repeating cycle of last digit for each possible value from 0 to 9
    // The cycle for each number repeats every certain number of times. 
    // For example, the cycle for '2' is ['2', '4', '8', '6'].
    // When '2' is raised to the power of 1, 2, 3, 4, ..., the last digit is 2, 4, 8, 6, 2, 4, 8, 6, ...
    const cycles = {
        '0': ['0'],
        '1': ['1'],
        '2': ['2', '4', '8', '6'],
        '3': ['3', '9', '7', '1'],
        '4': ['4', '6'],
        '5': ['5'],
        '6': ['6'],
        '7': ['7', '9', '3', '1'],
        '8': ['8', '4', '2', '6'],
        '9': ['9', '1'],
    };

    // Extract the cycle for the last digit of 'a'
    const cycle = cycles[lastDigitOfA];
    
    // Get the last two digits of 'b'. 
    // This is because the cycle repeats every 4 times at most,
    // and the remainder when dividing by 4 can be determined by just the last two digits of a number.
    const lastTwoDigitsOfB = Number(b.slice(-2));
    
    // Find the position in the cycle. 
    // For instance, if 'b' is '25', then lastTwoDigitsOfB is 25 and the cycleIndex is 1 (25 mod 4 = 1),
    // which means the first element in the cycle is the last digit of a^b.
    const cycleIndex = lastTwoDigitsOfB % cycle.length;
    
    // Use the cycleIndex to get the last digit from the cycle. 
    // If cycleIndex is 0 (which means 'b' is a multiple of the cycle length), 
    // use the last element in the cycle. 
    const lastDigit = cycle[cycleIndex - 1 < 0 ? cycle.length - 1 : cycleIndex - 1];

    return Number(lastDigit);
}