// Jaden Casing Strings (7 kyu)
String.prototype.toJadenCase = function () {
    const words = this.split(' ');
    let word;

    for (let i = 0; i < words.length; i++) {
        word = words[i].split('');
        word[0] = word[0].toUpperCase();
        words[i] = word.join('');
    }

    return words.join(' ');
};