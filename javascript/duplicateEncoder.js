// 6 kyu - Duplicate Encoder
function duplicateEncode(word) {
    // Ignore capitalization
    const lowercase = word.toLowerCase();

    // Count occurences of each character and store in an object
    const charCounts = {};

    for (let i = 0; i < lowercase.length; i++) {
        charCounts[lowercase[i]] ? charCounts[lowercase[i]] += 1 : charCounts[lowercase[i]] = 1;
    }

    let str = '';
    for (let i = 0; i < lowercase.length; i++) {
        charCounts[lowercase[i]] > 1 ? str += ')' : str += '(';
    }

    return str;
}

/* First Solution

function duplicateEncode(string) {
    // Convert string to lowercase characters and reassign
    string = string.toLowerCase();

    // Define countItems which returns an object that keeps track 
    // of the number of occurrences of each character in 'string'.
    function countItems(str) {
        const counts = {};
    
        for (let element of str) {
            if (counts[element]) {
                counts[element] += 1;
            } else {
                counts[element] = 1;
            }
        }

        return counts;
    }

    const counter = countItems(string); // count occurrences of each character

    // Map through each character of the string and replace it based on its occurrence
    return string.split('').map(char => counter[char] === 1 ? '(' : ')').join('');
} 
*/
