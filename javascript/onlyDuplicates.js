function onlyDuplicates(str) {
    const chars = str.split('');
    const charCounts = {};
    const repeats = [];

    for (let char of chars) {
        charCounts[char] ? charCounts[char] += 1 : charCounts[char] = 1;
    }
  
    for (let i = 0; i < chars.length; i++) {
        if (charCounts[chars[i]] > 1) {
            repeats.push(chars[i]);
        }
    }

    return repeats.join('')
}

console.log(onlyDuplicates('abccdefee'));