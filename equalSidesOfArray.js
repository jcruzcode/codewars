function findEvenIndex(arr) {
    // sum elements of an array
    function sum(array) {
      let total = 0;
      array.forEach(element => total += element); // sum all elements in array
      return total; // return sum
    }
    
    // Variable Declarations
    let sumLeft = 0, sumRight = 0;
    
    // loop through arr
    for (let i = 0; i < arr.length; i++) {
      // Conditionals to decide how to calculate sumLeft and sumRight
      if (i === 0) {
        sumLeft = 0; // sumLeft is zero because there are no elements left of the first element
        // Sum all elements in the right slice
        // Right slice is an array of elements from index i + 1 to arr.length - 1
        sumRight = sum(arr.slice(i + 1, arr.length));
      } else if (i === arr.length - 1) {
        sumRight = 0; // sumRight is zero because there are no elements left of the first element
        // Sum all elements in the left slice
        // Left slice is an array of elements from index 0 to i - 1
        sumLeft = sum(arr.slice(0, i));
      } else {
        sumLeft = sum(arr.slice(0, i));
        sumRight = sum(arr.slice(i + 1, arr.length));
      }
      
      if (sumLeft === sumRight) {
        // Return index if sumLeft is equal to sumRight
        return i;
      }
    
    }
    
    // If an index where sumLeft equals sumRight is not found, return -1
    return -1;
  }