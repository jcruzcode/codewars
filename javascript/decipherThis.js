/*
====== Decipher this! (6 kyu) ======
Write a function that deciphers a secret message.

1) Parameters -  A string of words separated by spaces.
                 You can expect only letters, spaces,
                 and digits. No trailing or leading whitespace.
2) Return - Deciphered string
3) Examples - see tests
4) Pseudocode - see comments

*/

function decipherThis(str) {
    // Split str into array of words
    const words = str.split(' ');

    let chars;
    const digits = ['0','1','2','3','4','5','6','7','8','9'];
    const deciphered = [];

    // Loop over words and decipher each
    for ( const word of words ) {
        let nums = [];

        // Split each word in to an array of characters
        chars = word.split('');

        // Loop over chars of each word
        for ( const char of chars ) {
            // If char is a digit add it to nums
            if (digits.includes(char))
                nums.push(char);        
        }

        // Get only letters from current word
        chars = chars.slice(nums.length,);

        // Get the letter from the character code
        let letter = String.fromCodePoint(+nums.join(''));
        
        // Swap second and last character and add letter to front
        let second = chars.shift();
        let last = chars.pop();
        chars.push(second);
        chars.unshift(letter, last);

        // Add word to deciphered
        deciphered.push(chars.join(''));
    } 

    // Return deciphered string
    return deciphered.join(' ');
}

// Tests
console.log(decipherThis('72olle 103doo 100ya') ==='Hello good day');
console.log(decipherThis('82yade 115te 103o') === 'Ready set go');
console.log(decipherThis('72eva 97 103o 97t 116sih 97dn 115ee 104wo 121uo 100o') === 'Have a go at this and see how you do');
console.log(decipherThis('65 119esi 111dl 111lw 108dvei 105n 97n 111ka') === 'A wise old owl lived in an oak');
console.log(decipherThis('84eh 109ero 104e 115wa 116eh 108sse 104e 115eokp') === 'The more he saw the less he spoke');
console.log(decipherThis('84eh 108sse 104e 115eokp 116eh 109ero 104e 104dare') === 'The less he spoke the more he heard');
console.log(decipherThis('87yh 99na 119e 110to 97ll 98e 108eki 116tah 119esi 111dl 98dri') === 'Why can we not all be like that wise old bird');
console.log(decipherThis('84kanh 121uo 80roti 102ro 97ll 121ruo 104ple') === 'Thank you Piotr for all your help');