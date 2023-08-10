function paperwork(n, m) {
    // Return zero if n or m is negative, otherwise find the product of n and m which gives the total pages needed
    return (n < 0 || m < 0) ? 0 : n*m; 
  }