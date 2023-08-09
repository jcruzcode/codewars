function count(string) {
    // Put each character of string in to an array
    
    const characters = []; // Empty array to hold characters
    const charCount = {}; // Object to hold number of occurences of characters
    
    // Loop puts each character in string in an array
    for (let i = 0; i < string.length; i++){
      characters.push(string[i]);
    }
    
    for (let char of characters) { // For each character in characters...
      if(charCount[char]) { // If the the char exists as a key, then increment by 1
        charCount[char]++;
      } else {
        charCount[char] = 1; // Otherwise, it is the first occurence
      }
    }
    
    return charCount; // return the object with numbers of occurences of each character in string
  }