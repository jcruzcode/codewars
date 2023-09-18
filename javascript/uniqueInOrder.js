var uniqueInOrder=function(iterable){
    //iterable can be a string or an array
    const results = []; // empty array to add elements
    let char = ''; // empty string to represent current character
    
    // Loop through iterable and looks for repeat characters
    for (let i = 0; i < iterable.length; i++){
      if (iterable[i] !== char) {
        // push iterable[i] to array 'results' if not equal to previous character
        results.push(iterable[i]);
      }
      char = iterable[i]; // update char to iterable[i]
    }
    // return array of characters from iterable with no repeats
    return results;
  }