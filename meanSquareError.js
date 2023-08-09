var solution = function(firstArray, secondArray) {
    //*** Helper functions ***
    
    // Returns the absolute value difference between two numbers
    let absDiff = (num1,num2) => Math.abs(num1 - num2); 
    
    // Returns the average value of an array 
    let avgVal = (arr) => {
      let sum = 0;
      for(let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      
      return sum/arr.length;
    };
    
    // length of all arrays since firstArray and secondArray are equal length, 
    // then their difference will be the same length
    const length = firstArray.length; 
    
    let newArr = []; // empty array to build upon
    
    // for loop squares the absolute value difference between the current value in each array
    // then adds the new value to the array newArr
    for (let j = 0; j < length; j++) {
      newArr.push(absDiff(firstArray[j],secondArray[j])**2);
    }
    
    // Return the average of the squared absolute value difference between each member pair.
    return avgVal(newArr);
    
  }