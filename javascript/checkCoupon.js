/*
======= The Coupon Code (7 kyu) =======
Write a function called checkCoupon which verifies that a coupon code is valid 
and not expired.

A coupon is no more valid on the day AFTER the expiration date. 
All dates will be passed as strings in this format: "MONTH DATE, YEAR".

Examples:

checkCoupon("123", "123", "July 9, 2015", "July 9, 2015")  ===  true
checkCoupon("123", "123", "July 9, 2015", "July 2, 2015")  ===  false

1) Parameters - Four strings: enteredCode & correctCode which represent coupon 
                codes and currentDate & expirationDate which are dates in
                month day, year format.
2) Return - True if coupon is valid, otherwise false.
3) Examples - see tests
4) Pseudocode - see comments

*/

function checkCoupon(enteredCode, correctCode, currentDate, expirationDate){
    // Coupon is valid if codes are equal and the date not after expiry
    return enteredCode === correctCode && new Date(currentDate) <= new Date(expirationDate);
}

// Tests
console.log(checkCoupon('123','123','September 5, 2014','October 1, 2014'), true);
console.log(checkCoupon('123a','123','September 5, 2014','October 1, 2014'), false);