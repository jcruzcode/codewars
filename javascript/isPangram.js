function isPangram(string) {
    const lowercase = string.toLowerCase();
    const letters = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k',
                           'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v',
                           'w', 'x', 'y', 'z'];

    for (let letter of letters ) {
        if ( !lowercase.includes(letter) ) {
            return false;
        }
    }

    return true;

}

console.log(isPangram("The quick brown fox jumps over the lazy dog."))
