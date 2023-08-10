function squareDigits(num){
    // Make sure num is a string
    num = String(num);
    
    // Empty string to concatenate squared digits
    let squareString = '';
    
    for (let i = 0; i < num.length; i++) {
      squareString += num[i]**2; // for each digit, square it and concatenate 
    }
    
    // return squareString as a number
    return Number(squareString);
  }