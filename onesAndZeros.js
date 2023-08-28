const binaryArrayToNumber = arr => {
    // find length of arr
    const len = arr.length;
    
    // reverse array so that the binary digit 
    // in the lowest position (2^0) is at index 0
    arr.reverse();
    
    // initialize sum of array elements to zero
    let sum = 0
    
    // The loop will sum all elements in arr with a coefficient of 1
    // by multiplying 1 with 2^i, resulting in the decimal representation.
    for (let i = 0; i < len; i++) {
      // check if current element is 0 or 1
      if (arr[i] === 1) {
        sum += 2**i;
      }
    }
    // return decimal representation 
    return sum;
  };