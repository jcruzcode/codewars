function findNb(m) {
    let base = 1; // number to be cubed
    
    // while loop continues until  m = 0
    // when m = 0, we've found 'n'
    // when m < 0, 'n' doesn't exist
    
    while (m > 0) {
      if (m === base**3) {
        // base is 'n' 
        // n**3 is the last term to subtract before m = 0
        return base;
      }
      m = m - base**3; // subtract base cubed from m
      base++; // increment base by 1
    }
    
    // if n doesn't exist, m will be negative
    // after exiting the while loop
    if (m < 0) {
      return -1;
    }
}