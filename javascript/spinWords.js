function spinWords(string) {
    const SIZE = 5;
    const words = string.split(' ');

    for ( let i = 0; i < words.length; i++ ) {
        if ( words[i].length >= SIZE ) {
            words[i] = words[i].split('').reverse().join('');
        }
    }

    return words.length === 1 ? words[0] : words.join(' ');
}

console.log(spinWords("Welcome"));