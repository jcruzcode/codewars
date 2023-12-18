// Is a number prime? (6 kyu)
function isPrime(num) {
    //  Trivial non-primes
    if ( num < 2 ) return false;
    
    /* 
       To prove num > 1 is a prime, we only need to test 
       divisibility of num by potential factors i with 
       1 < i <= (num)**(1/2) 
       
       If num is divisible by none of those i, then num 
       is prime.
    */
    
    for ( let i = 2; i <= Math.sqrt(num); i++ ) {
      if ( num % i === 0 ) return false; 
    }
    
     return true;
  }