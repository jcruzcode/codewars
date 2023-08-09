var countBits = function(n) {
    // Find the highest power of 2 that doesn't exceed n
    const exponent = Math.floor(Math.log(n)/Math.log(2));
    
    // Empty array to store powers of 2
    const powersTwo = [];
    
    // Create array of powers of 2, from 2**exponent to 1
    for(let i = exponent; i >= 0; i--){
      powersTwo.push(2**i); // Add power of 2 to powersTwo
    }
    
    let countOnes = 0; // Initialize the number of ones to 0
    
    for(let j = 0; j < powersTwo.length; j++){ // For each element in powersTwo
      if(n >= powersTwo[j]) { // If n is greater than or equal to the current element of powersTwo
        n -= powersTwo[j]; // Subtract value from n and reassign
        countOnes++; // Increment countOnes by 1
      }
    }
    
    return countOnes; // return number of 1s in the binary representation
  };