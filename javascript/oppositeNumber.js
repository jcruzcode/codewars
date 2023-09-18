// opposite takes a number and returns the same number with the opposite sign
function opposite(number) {
  
    if (number <  0) { // number is negative
      return -1*number; // return a positive number if number is negative
    } else { // number is positive or 0
      return -1*number; // return a negative number if number is positive, includes case where number = 0
    }
    
  }