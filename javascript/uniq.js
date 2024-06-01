/*
====== uniq (UNIX style) (6 kyu) ======
Implement a function which behaves like the uniq command in UNIX.

It takes as input a sequence and returns a sequence in which all duplicate 
elements following each other have been reduced to one instance.

Example:

['a','a','b','b','c','a','b','c','c']) => ['a','b','c','a','b','c']

1) Parameters - An array
2) Return - An array in which all duplicate elements following each other have 
            been reduced to one instance.
3) Examples - see tests
4) Pseudocode - see comments

*/
function uniq(a) {
    let previous, current;
    const arr = [];

    // Examine each element of a and add current element to arr if it is 
    // different than previous
    for (const item of a) {
        current = item;
        if (previous !== current) arr.push(current);
        previous = current;
    }

    return arr;
}

// Tests
console.log(uniq(['a','a','b','b','c','a','b','c','c']), ['a','b','c','a','b','c']);
console.log(uniq(['a','a','b','b','c','a','b','c','c'].sort()), ['a', 'b', 'c']);