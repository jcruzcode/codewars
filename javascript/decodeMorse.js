// 6 kyu - Decode the Morse code
function decodeMorse(morseCode) {
    const morse = morseCode.trim();
    const words = morse.split('   ');
    const chars = [];

    for (let word of words) {
        chars.push(word.split(' '));
    }

    for (let i = 0; i < chars.length; i++) {
        for (let j = 0; j < chars[i].length; j++) {
            chars[i][j] = MORSE_CODE[chars[i][j]];
            /* The Morse code table is preloaded for you as a dictionary in the kata 
            JavaScript example: MORSE_CODE['.--']
            https://www.codewars.com/kata/54b724efac3d5402db00065e/train/javascript */
        }
        chars[i] = chars[i].join('');
    }

    return chars.join(' ');
}

console.log(decodeMorse('.... . -.--   .--- ..- -.. .'))