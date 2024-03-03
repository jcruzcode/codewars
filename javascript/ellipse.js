/*
====== Area and perimeter of the ellipse (6 kyu) ======
Based on the received dimensions, a and b, of an ellipse, calculare its area and 
perimeter.

Example:

Input: elipse(5,2)

Output: "Area: 31.4, perimeter: 23.1"

Note: 
The perimeter approximation formula you should use: π * (3/2(a+b) - sqrt(ab))

1) Parameters: Two positive numbers, a & b, representing the dimensions of an 
               ellipse.
2) Returns: Return the area and perimeter of the ellipse as a string with one
            decimal point.
3) Examples: see tests
4) Pseudocode: see comments

*/

function elipse(a,b){
    // Calculate the area of the ellipse
    const area = Math.PI * a * b;
    // Calculate the perimeter of the ellipse
    const perimeter = Math.PI * ( (3 / 2) * (a + b) - Math.sqrt(a * b) );
    // Return a string displaying the area and perimeter to the tenths place
    return `Area: ${area.toFixed(1)}, perimeter: ${perimeter.toFixed(1)}`;
}

// Tests
console.log(elipse(5,2) ==="Area: 31.4, perimeter: 23.1");
console.log(elipse(4,4) === "Area: 50.3, perimeter: 25.1");
console.log(elipse(10, 7) === "Area: 219.9, perimeter: 53.8" );
console.log(elipse(8,1) === "Area: 25.1, perimeter: 33.5");
console.log(elipse(20, 32) === "Area: 2010.6, perimeter: 165.6" );