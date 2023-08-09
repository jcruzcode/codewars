// evenOrOdd takes an integer as input and returns Even if an even number and Odd if an odd number
function evenOrOdd(number) {
    if(number % 2 === 0) {
      // number is even
      return 'Even';
    } else {
      // Otherwise number is odd
      return 'Odd';
    }
  }