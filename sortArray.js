// 6 kyu kata - Sort the odd

/*
  The sortArray function takes an array of numbers as an argument
  and returns the array with only the odd numbers sorted in
  ascending order. The even numbers (and zero) are left in place.
  
*/

function sortArray(numbers) {
    let oddNumbers = [];
    let tempNumber = 0;
    
    for ( let i = 0; i < numbers.length; i++ ) {
      if ( numbers[i] % 2 !== 0 ) {
          tempNumber = numbers[i];
          oddNumbers.push(tempNumber);
          numbers[i] = '';
      }
    }
    
    oddNumbers.sort( ( a, b ) => a - b);
    
    for ( let j = 0; j < numbers.length; j++ ) {
      if ( !numbers[j] && numbers[j] !== 0 ) {
          numbers[j] = oddNumbers.shift();
      }
    } 
    
    return numbers;
  }

console.log("Array of numbers with odds sorted: ");
console.log(sortArray([5, 3, 2, 8, 1, 4]));
