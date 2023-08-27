function duplicateCount(text){
    // Make text lowercase
    text =  text.toLowerCase(); 
    
    // empty object keep track of character counts
    const counts = {};
    
    // loop through text and count occurences of each character
    for (let char of text) {
      counts[char] ? counts[char] += 1 : counts[char] = 1;
    }
    
    // counter will count distinct case-insensitive alphabetic 
    // characters and numeric digits that occur more than once in text
    let counter = 0; 
    
    // loop through object and count characters with 
    // more than one occurence in text
    for (const key in counts) {
      if (counts[key] > 1) {
        counter += 1;
      }
    }
    
    return counter;
  }