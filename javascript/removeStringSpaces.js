function noSpace(string){
    // Remove whitespace on both ends from string
    const newString = string.trim();
    
    let finalString = ''; // Empty string to concatenate with
    
    // Add character of newString to finalString if it's not a space
    for (let i = 0; i < newString.length; i++) {
      if (newString[i] !== ' ') {
        finalString += newString[i]
      }
    }
    
    // Return the string with all spaces removed
    return finalString;
      
    }