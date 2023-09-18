//7 kyu Count the divisors of a number

function getDivisorsCnt(n){
    // To count number of divisors of a positive integer n
    let count = 0;
    // Loop checks if n is divisible by positive integer i
    for ( let i = 1; i <= n**(1/2); i++) {
      if ( n % i === 0) {
        count += 2; // increment count if divisible
        
        if (i**2 === n) {
          // To account for a divisor counted twice when n is a perfect square
          count -= 1;
        }
      }
    }
    
    return count;
  }