function int32ToIp(int32){
  // Convert decimal number to binary string representation
  
  let backwardString = ''; // string to build backward binary representation
  let number = Number(int32); // ensure input is a number
  let quotient, remainder; // declare variable for division algorithm
  const base = 2; // base 2 for binary
  
  /* The while loop executes the division algorithm 
  
    number = quotient * base + remainder
    
  */
  
  while (number > 0){
    
    quotient = Math.floor(number/base);
    remainder = number - quotient*base;
    
    // Concatenate remainder with backwardString
    // This creates the binary string representation, backwards.
    backwardString += remainder;
    
    // Update number with current quotient
    number = quotient;
  }

  // number of zeros to pad with to make 32 bits
  let leadZeros = 32 - backwardString.length;

  // Add the zeros to end of string
  for(let i = 0; i < leadZeros; i++){
    backwardString += 0;
  }

  // To create dotted format
  let dotNotation = ''; 
  for (let k = 0; k < backwardString.length; k++) {
      if (k === 7 || k === 15 || k === 23) {
          let str = backwardString[k] + '.'; 
          dotNotation += str;
      } else {
          dotNotation += backwardString[k];
      }
  }

  // split into separate octets and put in an array 
  const octets = dotNotation.split('.');
  const decimals = []; // empty array to add decimal numbers

  // Nested for loop converts each octet of binary digits to a decimal number
  // and then pushes it to the array decimals

  for (let y = 0; y < octets.length; y++) {
    let sum = 0; // start sum at 0
    
    for(let x = 0; x < octets[y].length; x++){
      if(octets[y][x] == 1) {
        // Calculates and adds to sum only if the binary coefficient is 1, taking 2 to the power of x. 
        // Otherwise you would just be adding 0 to the sum.
        sum += base**x; 
        
    }
      
  }
    // Push value of sum for each octet to the array decimals
    decimals.push(sum);
  }

  let finalStr = ''; // Initialize empty string for final dotted decimal notation

  // Since the binary string was backwards the for loop starts with the last 
  // element of decimals. This element will be the first number in the dotted 
  // decimal notation.
  for (let z = decimals.length - 1; z >= 0; z--) {

    // If the index is not 0, the loop takes the current number, concatenates 
    // a period after it and then concatenates with finalStr.
    if (z !== 0) {
      let dotAdded = decimals[z] + '.';
      finalStr += dotAdded;
    } else {
      // The final number is concatenated without a period
      finalStr += decimals[z];
    }
  }

  // returns a string representation of its IPv4 address
  return finalStr;

}