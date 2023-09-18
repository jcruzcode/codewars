/* descendingOrder function takes any non-negative integer as an argument 
   and return it with its digits in descending order.                    */

   function descendingOrder(n){
  
    // Create an array of digits from n
    const digitArray = Array.from(String(n), Number);
    
    // Returns digits in ascending order and store in sortedArray
    let sortedArray = digitArray.sort(function(firstNum,secNum) {
        return firstNum - secNum;
    });
    
    let numString = ''; // empty string to concatenate with
    
    /*  Starting from the end of the array, each digit is concatenated with 
        numString to build the largest number possible                     */
  
    for(i = sortedArray.length - 1; i >= 0; i--) {
      numString += sortedArray[i];
    }
  
    return Number(numString); // Convert string to a number and return the value
  }