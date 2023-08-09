function findShort(string){
    // Take string and turn into an array of words.
    const words = string.split(' '); // Split array up into words based on space separation ' 
    
    // Find the length of each word
    const wordLengths = words.map( word => word.length); // Array with word lengths
    
   // Return the length of the shortest word
    return Math.min(...wordLengths); // expression gives smallest number in array
    
  }