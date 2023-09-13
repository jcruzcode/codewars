/* 8 kyu - Sum Mixed Array */
function sumMix(x){
    // 1) map takes the array 'x' and returns a new array with all elements of number type
    // 2) reduce takes the new array and sums all the elements then returns the sum
    return x.map( (element) => Number(element) ).reduce( (accumulator, currentValue) => accumulator + currentValue, 0 );
}