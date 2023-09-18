function solution(number){
    // empty array to store numbers
    let numbers = [];
    
    // for loop goes through natural numbers 
    // less than number (1 <= i< number)
    for ( let i = 1; i < number ; i++ ) {
      if (i % 3 === 0 || i % 5 === 0) {
        numbers.push(i);
      }
    }
    
    // take the sum of all numbers in 'numbers'
    const sum = numbers.reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    
    return sum;
  }