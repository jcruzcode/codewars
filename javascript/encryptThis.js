// Encrypt this! (6 kyu)
var encryptThis = function (text) {
    const message = text.split(' ');
    const words = [];
    let chars, secondLetter, lastLetter, code;

    for (let word of message) {
        if (word.length > 1) {
            chars = word.split('');
            chars[0] = word.charCodeAt(0);

            secondLetter = chars[1];
            lastLetter = chars[chars.length - 1];

            chars[1] = lastLetter;
            chars[chars.length - 1] = secondLetter;

            words.push(chars.join(''));
        } else if (word.length === 1) {
            code = word.charCodeAt(0);
            words.push(code);
        }
    }

    return words.join(' ');

}