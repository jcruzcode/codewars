// Title Case (6 kyu)
function titleCase(title, minorWords) {
    if (title === '') return '';

    let words = [], minWords = [];

    words = title.toLowerCase().split(' ');

    if (title !== '' && minorWords === undefined) {

        for (let i = 0; i < words.length; i++) {
            words[i] = capitalize(words[i]);
        }

        return words.join(' ');
    }

    minWords = minorWords.toLowerCase().split(' ');

    for (let i = 0; i < words.length; i++) {
        words[i] = capitalize(words[i]);
    }

    let included, indices;

    for (let word of minWords) {
        indices = []
        included = words.includes(capitalize(word));

        for (let i = 0; i < words.length; i++) {
            if (capitalize(word) === words[i] && i !== 0) {
                indices.push(i);
            }
        }

        if (included && indices.length > 0) {
            for (let index of indices) {
                words[index] = word;
            }
        }
    }

    return words.join(' ');



}

function capitalize(word) {
    const letters = word.toLowerCase().split('')
    letters[0] = letters[0].toUpperCase();
    return letters.join('');
}

console.log(titleCase(''), '');
console.log(titleCase('a clash of KINGS', 'a an the of'), 'A Clash of Kings');
console.log(titleCase('THE WIND IN THE WILLOWS', 'The In'), 'The Wind in the Willows');
console.log(titleCase('the quick brown fox'), 'The Quick Brown Fox');