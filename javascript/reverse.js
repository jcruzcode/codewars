// Reverse every other word in the string (6 kyu)
function reverse(str) {
    const words = str.trim().split(' ');

    for (let i = 0; i < words.length; i++) {
        if (i % 2 !== 0) {
            words[i] = words[i].split('').reverse().join('');
        }
    }

    return words.join(' ');
}
console.log(reverse("Reverse this string, please!") === "Reverse siht string, !esaelp")
console.log(reverse("I really don't like reversing strings!") === "I yllaer don't ekil reversing !sgnirts")