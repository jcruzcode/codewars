/*
====== The Hashtag Generator (6 kyu) ======
The marketing team is spending way too much time typing in hashtags.
Let's help them with our own Hashtag Generator!

Here's the deal:

    It must start with a hashtag (#).
    All words must have their first letter capitalized.
    If the final result is longer than 140 chars it must return false.
    If the input or the result is an empty string it must return false.

Examples

" Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
"    Hello     World   "                  =>  "#HelloWorld"
""                                        =>  false

1) Parameters - A string of characters
2) Return
    - False
        - final result > 140 chars
        - input or result is empty string
    - A hashtag string
        - Starts with #
        - First letter capitalized
3) Examples - see tests
4) Pseudocode - see comments

*/

function generateHashtag (str) {
    // Trim ends of str
    const trimmed = str.trim();
    
    // Check if trimmed is empty
    if (trimmed === "") return false;

    // Split trimmed by space character
    const words = trimmed.split(' ');
    
    // Capitalize first letter of each word
    let word;
    for ( let i = 0; i < words.length; i++ ) {
        word = words[i].split('');
        // Only make first letter uppercase if it exists
        if(word[0]) word[0] = word[0].toUpperCase();
        words[i] = word.join('');
    }
    
    // Remove any empty strings
    let hashtag;
    if(words.includes('')) {
        const newWords = [];
        for ( let word of words ) {
            if (word !== '') newWords.push(word);
        }
        // Create hashtag 
        newWords.unshift('#');
        hashtag = newWords.join('');
    } else {
        words.unshift('#');
        hashtag = words.join('');
    }
    
    // Check if hashtag is greater than 140 characters
    if (hashtag.length > 140) return false;

    return hashtag;
}

// Test cases

//"Expected an empty string to return false" 
console.log(generateHashtag("") === false)

// "Still an empty string"
console.log(generateHashtag(" ".repeat(200)) === false)

//"Expected a Hashtag (#) at the beginning."
console.log(generateHashtag("Do We have A Hashtag") ==="#DoWeHaveAHashtag")

//"Should handle a single word."
console.log(generateHashtag("Codewars") === "#Codewars")

// "Should remove spaces."
console.log(generateHashtag("Codewars Is Nice") === "#CodewarsIsNice")

// "Should capitalize first letters of words."
console.log(generateHashtag("Codewars is nice") ===  "#CodewarsIsNice")
console.log(generateHashtag("code" + " ".repeat(140) + "wars") === "#CodeWars")

//"Should return false if the final word is longer than 140 chars."
console.log(generateHashtag("Looooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooooong Cat") === false)

//"Should work"
console.log(generateHashtag("a".repeat(139)) === "#A" + "a".repeat(138))
console.log(generateHashtag("a".repeat(140)) === false)