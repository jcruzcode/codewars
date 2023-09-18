function arrayDiff(a, b) {
    let newArray = []; // Empty array to build upon
    
    // Nested conditionals check each element in b against all elements in a
    for (let i = 0; i < b.length; i++) {
      for (let j = 0; j < a.length; j++) {
        if(b[i] === a[j]) {
          // if an element found in b is also found in a, replace the element in a with an empty string ''
          a[j] = '';
        }
      }
    }
    
    // Conditional builds an array with all the elements in a that are not in b
    for (let k = 0; k < a.length; k++) {
      if (a[k] !== '') {
        // If element is not empty, add it to newArray
        // This creates an array with elements found in array a but not in array b
        newArray.push(a[k]);
      }
    }
    
    return newArray; // returns the difference a-b
    
  }