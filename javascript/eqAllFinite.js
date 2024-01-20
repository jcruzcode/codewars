/*
====== Are all elements equal? (6 kyu) ======
Create (a) method(s) eqAll that determines if all elements of a list 
are equal.

list can be a String or an Array; return value is a Boolean.

Your method(s) should not be enumerable. 

Equality should be strict (===).

Bonus points for supporting any (finite) iterable!

This will be tested with Sets and custom Objects.

Note that these may lack a length property, and may not be indexable into.

1) Parameters - any String or Array
2) Returns - a boolean: true or false
3) Examples - see test
4) Pseudocode - see comments

*/

Object.defineProperty( Object.prototype, "eqAll", { value: function eqAll() {

    // For an empty string, array, or set all elements are equal
    if (this.length === 0 || this.size === 0) return true;
    
    // Create a Set from this
    const set = new Set(this);
    // Empty sets and sets with one element that's not NaN 
    // have all equal elements
    if (set.size === 0 || (set.size === 1 && !set.has(NaN))) {
      return true;
    } else {
      // All elements are not equal
        return false;
    } 

} } );

// Tests
console.log( "aaaaa".eqAll(), true );
console.log( "abcde".eqAll(), false );
console.log( "".eqAll(), true );
console.log( [0,0,0].eqAll(), true );
console.log( [0,1,2].eqAll(), false );
console.log( [].eqAll(), true );