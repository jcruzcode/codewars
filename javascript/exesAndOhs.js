function XO(str) {
    // Make sure input is a string
    str = String(str);
    
    // Variable declarations
    const length = str.length; // length of string
    let countX = 0, countO = 0; // start counts at zero
    
    // Loop through str and count the number of x and o characters
    for (let index = 0; index < length; index++) {
      if(str[index] === 'x' || str[index] === 'X') {
        countX++; // increment countX by 1
      } else if (str[index] === 'o' || str[index] === 'O') {
        countO++; // increment countO by 1
      }
    }
    
    // ternary operator returns true if the number of x and o 
    // characters are equal otherwise return false
    return countX === countO ? true : false;
  }