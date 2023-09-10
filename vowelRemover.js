// 8 kyu
// Vowel remover
function shortcut (string) {
    // remove the lowercase vowels (a, e, i, o, u ) in a given string
    return string.replaceAll(/[aeiou]/g,'');
}