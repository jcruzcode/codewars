function positiveSum(arr) {
    // Filter arr for positive numbers
    const positiveNums = arr.filter(num => num > 0);
    // Reduce will sum the numbers in the array positiveNums
    const sum = positiveNums.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
    return sum;
  }