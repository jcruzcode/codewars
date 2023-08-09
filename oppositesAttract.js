function lovefunc(flower1, flower2){
    if((flower1 % 2 === 0 && flower2 % 2 !== 0) || (flower1 % 2 !== 0 && flower2 % 2 === 0) ) {
      return true; // true if one flower has an even number and the other an odd number of petals
    } else {
      return false; // false otherwise
    }
  }