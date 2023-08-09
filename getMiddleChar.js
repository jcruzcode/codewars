function getMiddle(word) {
    // getMiddle returns the middle character of the word
    const length = word.length; // length of word
    
    if(length % 2 === 0){
    // if the word length is even, return the 2 middle characters
    
      let firstIndex = Math.floor((length-1)/2); // index of left side middle character
      let secIndex = Math.ceil((length-1)/2); // index of right side middle character 
    
      return `${word[firstIndex]}${word[secIndex]}`; // return middle 2 characters
      
    } else {
    // if word length is odd, return middle character  
      let midIndex = Math.floor(length/2); // Index of middle character
      
      return word[midIndex]; // return middle character
      
    }
  }