function findNextSquare(sq) {
    let squareRoot = Math.sqrt(sq); // Take square root of input
    
    // Return the next square if sq is a perfect square, -1 otherwise
    return Number.isInteger(squareRoot) ? (++squareRoot)**2 : -1; 
  }