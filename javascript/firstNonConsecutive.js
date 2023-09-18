/* 8 kyu - Find the first non-consecutive number */
function firstNonConsecutive (arr) {
    // starting number will be first element of 'arr'
    let number = arr[0];
    
    // Loop through 'arr' and compare the element at index i
    // with number, which will be incremented by 1 each loop.
    // Return arr[i] if the current element is not equal to number
    for ( let i = 0 ; i < arr.length ; i++) {
      if ( arr[i] !== number ) {
        return arr[i];
      }
      number += 1;
    }
    // Otherwise the array is sequential 
    return null;
}