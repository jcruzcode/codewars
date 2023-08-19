function countBy(x, n) {
    let z = []; // empty array to add elements to
    
    // Calculate the multiple of x, given i, on each loop
    // Then push to array 'z'
    for (let i = 1; i <= n; i++) {
      z.push(x*i);
    }
    return z; // return array of the first n multiples of x
  }