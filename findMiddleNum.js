/* 7 kyu - Find the middle element */
function gimme (triplet) {
    // make copy of 'triplet'
    const numbers = triplet.slice()
    
    // sort array of 'numbers' in ascending order
    numbers.sort((a,b) =>  a - b);
    
    // Return the index of the middle number in array 'triplet'
    return triplet.indexOf(numbers[1]);
}