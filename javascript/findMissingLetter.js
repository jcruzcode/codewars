// Find the missing letter (6 kyu)
function findMissingLetter(array) {
  const codes = array.map((x) => x.charCodeAt(0));
  let tmp = codes[0];
  for (let i = 0; i < codes.length; i++) {
    if (tmp != codes[i]) {
      return String.fromCharCode(tmp);
    }
    tmp++;
  }
}
