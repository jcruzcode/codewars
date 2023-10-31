// Cylce a list of values (6kyu)
function cycle(dir, arr, cur) {
    // Check if cur is in arr
    if ( !arr.includes(cur) ) {
      return null;
    }
    
    // Find index of first occurence of cur
    const index = arr.indexOf(cur);
  
    if ( index === 0  && dir === - 1 ) {
      return arr[ arr.length - 1 ];
    } else if ( index === arr.length - 1 && dir === 1 ) {
      return arr[0];
    } else if ( dir === 1) {
      return arr[ index + 1 ];
    } else if ( dir === - 1) {
      return arr[ index - 1];
    }
}