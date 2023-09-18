function findNeedle(haystack) {
    // loop checks each element to see if it  is "needle" and records the index
    let position; // delcare index variable
    for (let i = 0; i < haystack.length; i++) {
      if (haystack[i] === "needle") {
        position = i; // record index
      }
    }
    
    // return a message giving the position of "needle"
    return `found the needle at position ${position}`;
  }