/*
======= Credit Card Mask (7 kyu) =======
Usually when you buy something, you're asked whether your credit card number, 
phone number or answer to your most secret question is still correct. 

However, since someone could look over your shoulder, you don't want that shown 
on your screen. Instead, we mask it.

Your task is to write a function maskify, which changes all but the last four 
characters into '#'.

Examples (input --> output):

"4556364607935616" --> "############5616"
     "64607935616" -->      "#######5616"
               "1" -->                "1"
                "" -->                 ""

// "What was the name of your first pet?"
"Skippy" --> "##ippy"
"Nananananananananananananananana Batman!" --> "####################################man!"

1) Parameters - A string of characters
2) Return - The original string with all characters except the last four
            replaced with #.
3) Examples - See tests
4) Pseudocode - See comments

*/

function maskify(cc) {
    // If the length of cc is less than or equal to 4, return cc
    if (cc.length <= 4) return cc;

    // Split cc into an array of characters
    const chars = cc.split('');
    
    // Replace all the characters in masked with #
    chars.fill('#', 0, chars.length - 4);

    // Join characters in chars and return the masked credit card number
    return chars.join('');
    
}

console.log(maskify('4556364607935616') === '############5616');
console.log(maskify('1') === '1'); 
console.log(maskify('11111') ===  '#1111');
console.log(maskify("4556364607935616") === "############5616");
console.log(maskify("64607935616") === "#######5616");
console.log(maskify("") === "");
console.log(maskify("Skippy") === "##ippy");
console.log(maskify("Nananananananananananananananana Batman!") === "####################################man!");

