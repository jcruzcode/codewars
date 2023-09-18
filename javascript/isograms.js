function isIsogram(str){
    // Convert str to lowercase
    // Then split str into an array of letters
    const letters = str.toLowerCase().split('');
    // object to hold character count
    const charCount = {}; 
    
    // Loop through letters and count occurences of each letter
    for (const letter of letters) {
      charCount[letter] ? charCount[letter] += 1 : charCount[letter] = 1;
    }
    
    // Loop through charCount and check 
    // if any letters occur more than once
    for (const char in charCount) {
      if (charCount[char] > 1) {
        return false;
      } 
    }
    
    // Otherwise each character only occurs once
    // and is therefore an isogram
    return true;
    
    
  }