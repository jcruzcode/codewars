/*
====== Are all elements equal? (Infinity version) (6 kyu) ======
Create a function eqAll that determines if all elements of a list 
are equal.

list can be any iterable, and may be infinite. 

Return value is a Boolean.

1) Parameters - any iterable: array, string, map, set, etc...
2) Returns - a boolean: true or false
            For the function result to be true, the iterable must be finite
            
            false, however, can result from an element finitely far from the
            left end. 
            
            There will be no tests with infinite series of equal elements.
            
            Elements will be primitive values; equality should be strict (===).
3) Examples - see test
4) Pseudocode - see comments

*/

function eqAll(iterable) {
    // For an empty string, array, or set all elements are equal
    if ( ( iterable.length === 0 && ( (typeof iterable === 'string') || Array.isArray(iterable) ) ) 
        || iterable.size === 0) return true;

    // Loop over iterable and check for unequal items
    let previous, index = 0;
    for ( let item of iterable ) {
      // Set previous element to current item
      // if item is the first element in iterable
      if (index === 0) previous = item;
      
      // All items are not equal if previous
      // and current item are unequal
      if ( item !== previous ) return false;
      
      // Set current item to be the previous item
      // for the next iteration
      previous = item;
      
      // Increment index
      index++;
    }
    
    // All elements are equal
    return true;
}

// Tests
console.log(eqAll("aaa"), true);
console.log(eqAll("abc"), false);
console.log(eqAll(""), true);
console.log(eqAll([0, 0, 0]), true);
console.log(eqAll([0, 1, 2]), false);
console.log(eqAll([]), true);
