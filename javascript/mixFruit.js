/*
====== Mix Fruit Juice (6 kyu) ======
Jumbo Juice charges 
- $5 for regular fruits
    - Banana, Orange, Apple, Lemon and Grapes. 
- $7 for special ones
    - Avocado, Strawberry and Mango. 
- Those extra special fruits not listed cost $9 per each. 

The price of a cup of juice is the mean of price of chosen fruits. 

In case of decimal number (ex. $5.99), output should be the nearest 
integer (use the standard rounding function of your language of choice). 

1) Parameters
    An array of strings, each with the name of a fruit
    The recognition of names should be case insensitive. 
    There is no case of an empty array input. 
2) Return
    The average price of all fruits in juice rounded down to 
    nearest integer
3) Examples - see tests
4) Pseudocode - see comments

*/

function mixFruit (arr) {
    // Make sure each fruit string is lowercase
    const fruits = arr.map( x => x.toLowerCase() );
    const numOfFruits = arr.length;
    let sum = 0;

    // Regular and special fruits
    const regulars = ['banana', 'orange', 'apple', 'lemon', 'grapes'];
    const specials = ['avocado', 'strawberry','mango'];

    // Loop over fruits and sum the individual prices
    for ( let fruit of fruits ) {
        if ( regulars.includes(fruit) ) {
            sum += 5;
        } else if ( specials.includes(fruit) ) {
            sum += 7;
        } else {
            sum += 9;
        }
    }

    // Return the mean price rounded
    return Math.round(sum / numOfFruits);
}
console.log(mixFruit(['banana','mango','avocado']), 6);
console.log(mixFruit(['melon','Mango','kiwi']), 8);
console.log(mixFruit(['watermelon','cherry','avocado']), 8);
console.log(mixFruit(['apple','Banana']), 5);
console.log(mixFruit(['watermelon','lime','tomato']), 9);
console.log(mixFruit(['blackBerry','coconut','avocado']), 8);
console.log(mixFruit(['waterMelon','mango']), 8);
console.log(mixFruit(['watermelon','pEach']), 9);
console.log(mixFruit(['watermelon','Orange','grapes']), 6);
console.log(mixFruit(['watermelon']), 9);
console.log(mixFruit(['BlACKbeRrY','cOcONuT','avoCaDo']), 8);