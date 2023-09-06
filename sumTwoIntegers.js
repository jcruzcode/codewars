/* 7 kyu - Sum of two lowest positive integers in array */
function sumTwoSmallestNumbers(numbers) {  
    // compareNumbers compares two numbers to see 
    // if one is greater than the other or equal
    function compareNumbers(a,b) {
      return a - b;
    }
    
    // sort array 'numbers' in ascending order
    numbers.sort(compareNumbers);
    
    // add and return first two elements 
    // the first two elements are the two 
    // lowest positive integers
    return numbers[0] + numbers[1];
  }