// Find the missing letter (6 kyu)
function findMissingLetter(array) {
  const codes = array.map( x => x.charCodeAt(0) );
  let tmp = codes[0];
  for ( let code of codes ) {
    if ( tmp != code ) return String.fromCharCode(tmp);
    tmp++;
  }
}
