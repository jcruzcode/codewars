/*

======Lowest product of 4 consecutive numbers (6 kyu)======
Create a function that returns the lowest product of 4 consecutive digits in a 
number given as a string.

This should only work if the number has 4 digits or more. If not, return 
"Number is too small".

1) Parameters - A number given as a string - a string of digits (0-9)
2) Return - lowest product of 4 consecutive digits, if less than 4 digits
            return "Number is too small"
3) Examples - see tests
4) Pseudocode - see comments

*/

function lowestProduct(input) {
    // Check if input is less than 4 digits long
    if (input.length < 4) return "Number is too small"; 

    let minProduct, product;
    // Loop over input
    for (let i = 0; i < input.length - 3; i++) {
        // Take the product of each consecutive string of 4 digits
        product = input
                    .slice(i,  i + 4) // 4 consecutive digits
                    .split('') // split by digit into an array
                    .map( x => +x) // convert strings to numbers
                    .reduce((acc,val) => acc * val); // product of 4 digits
        // Assign product to minProduct if minProduct is undefined or greater 
        // than product
        if (minProduct === undefined || product < minProduct) minProduct = product;
    }

    return minProduct;
}
console.log(lowestProduct("8320716332"), 0);
console.log(lowestProduct("123456789"),24); 
console.log(lowestProduct("234567899"),120); 
console.log(lowestProduct("2345611117899"),1);
console.log(lowestProduct("333"),"Number is too small");
console.log(lowestProduct("1234111"),4);    