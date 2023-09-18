function longestConsec(strarr, k) {
    // length of strarr
    const length = strarr.length;
    // Return "" if  length === 0 or k > length or k <= 0 
    if (length === 0 || k > length || k <= 0) {
      return "";
    }
    
    // Finds longest string in a given array of strings
    // Returns the first occurrence 
    function maxStr(strArr) {
      const strLens = []; // will hold length of each string 
      strArr.forEach(item => strLens.push(item.length)); // add length of each string
      
      let max = 0;
      for (let item of strLens) {
        if (item > max) {
          max = item;
        }
      }
      
      return strArr.find(item => item.length === max)
    
    }
    
    // Case: k === 1
    // This is just each string from the array strarr
    if (k === 1) {
      return maxStr(strarr);
    }
    
    const concatArr = []; // to add concatenated strings
    
    // Nested loops makes an array of strings,
    // each of which is a string consisting of k
    // consecutive strings taken from strarr.
    for (let i = 0; i <= length - k; i++) { // only up to index length - k
      let str = ""; // to combine strings
      str += strarr[i]; // add concat current element with str
      
      // concat next k - 1 strings with str
      for (let j = i + 1; j < i + k; j++) {
        str += strarr[j];
      }
      // add each concatenated string to concatArr
      concatArr.push(str);
    }
    // return the first longest string consisting of k consecutive strings taken in the array.
    return maxStr(concatArr);
  }