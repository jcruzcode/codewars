/* 7 kyu - Sort array by string length */
function sortByLength (array) {
    // Return an array containing the same strings, ordered from shortest to longest
    return array.sort((str1, str2) => str1.length - str2.length);
};