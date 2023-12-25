function scramble(str1, str2) {
  const obj1 = {};
  const obj2 = {};

  // Count occurences of characters in str1
  for (let char of str1) {
    obj1[char] ? (obj1[char] += 1) : (obj1[char] = 1);
  }
  // Count occurences of characters in str2
  for (let ch of str2) {
    obj2[ch] ? (obj2[ch] += 1) : (obj2[ch] = 1);
  }

  // Get an array of property keys from each object
  const keys1 = Object.keys(obj1);
  const keys2 = Object.keys(obj2);

  // Check if the keys in obj2 are not included in obj1
  for (let i = 0; i < keys2.length; i++) {
    if (!keys1.includes(keys2[i])) return false;
  }

  // Check if the count of a character in obj1
  // is less than the count in obj2
  for (let i = 0; i < keys2.length; i++) {
    if (obj1[keys2[i]] < obj2[keys2[i]]) return false;
  }

  return true;
}

console.log(scramble('rkqodlw',           'world'      ), true );
console.log(scramble('cedewaraaossoqqyt', 'codewars'   ), true );
console.log(scramble('katas',             'steak'      ), false);
console.log(scramble('scriptjavx',        'javascript' ), false);
console.log(scramble('scriptingjava',     'javascript' ), true );
console.log(scramble('scriptsjava',       'javascripts'), true );
console.log(scramble('javscripts',        'javascript' ), false);
console.log(scramble('jscripts',          'javascript' ), false);
console.log(scramble('aabbcamaomsccdd',   'commas'     ), true );
console.log(scramble('commas',            'commas'     ), true );
console.log(scramble('sammoc',            'commas'     ), true );