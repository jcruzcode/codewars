/*
====== If you can read this... (6 kyu) ======
Task

You'll have to translate a string to Pilot's alphabet (NATO phonetic alphabet).

Input:

If, you can read?

Output:

India Foxtrot , Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta ?

Note:

    - There is a preloaded dictionary that you can use, named NATO. It uses uppercase keys, e.g. NATO['A'] is "Alfa". See comments in the initial code to see how to access it in your language.
    - The set of used punctuation is ,.!?.
    - Punctuation should be kept in your return string, but spaces should not.
    - Xray should not have a dash within.
    - Every word and punctuation mark should be seperated by a space ' '.
    - There should be no trailing whitespace

1) Parameters - A string with letters and punctuation including , . ! ?
2) Returns - Return a string with each letter replaced by the NATO phonetic     alphabet
3) Examples - see tests
4) Pseudocode - see comments

*/

// This object was given in the problem statement
const NATO = {
    A: 'Alfa',
    N: 'November',
    B: 'Bravo',
    O: 'Oscar',
    C: 'Charlie',
    P: 'Papa',
    D: 'Delta',
    Q: 'Quebec',
    E: 'Echo',
    R: 'Romeo',
    F: 'Foxtrot',
    S: 'Sierra',
    G: 'Golf',
    T: 'Tango',
    H: 'Hotel',
    U: 'Uniform',
    I: 'India',
    V: 'Victor',
    J: 'Juliett',
    W: 'Whiskey',
    K: 'Kilo',
    X: 'Xray',
    L: 'Lima',
    Y: 'Yankee',
    M: 'Mike',
    Z: 'Zulu'
};

function toNato(str) {
    // Split str into individual characters
    const chars = str.split(' ').join('').split('');

    // Loop over chars and replace each letter with the NATO letter
    for ( let i = 0; i < chars.length; i++ ) {
        if(NATO[chars[i].toUpperCase()]) {
            chars[i] = NATO[chars[i].toUpperCase()];
        }
    }

    // Join the elements of chars with a white-space as glue
    return chars.join(' ');
}

// Tests
console.log(toNato('If you can read') ===
'India Foxtrot Yankee Oscar Uniform Charlie Alfa November Romeo Echo Alfa Delta'
);
console.log(toNato('Did not see that coming') ===
'Delta India Delta November Oscar Tango Sierra Echo Echo Tango Hotel Alfa Tango Charlie Oscar Mike India November Golf'
);
console.log(toNato('go for it!') === 'Golf Oscar Foxtrot Oscar Romeo India Tango !');