/* 7 kyu - Reverse Words */
function reverseWords(str) {
    // split string based on space delimiter
    const words = str.split(" ");
    // Empty string to concatenate with
    let newStr = "";
    // loops through 'words', split each word, then reverse it
    // then concatenate with a new string
    for ( let i = 0; i < words.length; i++ ) {
        let characters = words[i].split('');
        characters.reverse();
        let reversed = characters.join('');
        newStr += " " + reversed;
    }
    
    // Trim possible leading or trailing 
    // whitespace then return newStr
    return(newStr.trim());
}

let str = 'hello my good friend, how are you?';
console.log(reverseWords(str));