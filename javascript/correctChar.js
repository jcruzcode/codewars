// 8 kyu - Correct the mistakes of the character recognition software

function correct(string) {
	let str = ''; // empty string to build upon
  
  // loop through string character by character
  for (let i = 0; i < string.length; i++){
    if( string[i] === '5') {
      str += 'S'; // handles error '5'
    } else if ( string[i] === '0') {
      str += 'O'; // handles error '0'
    } else if ( string[i] === '1' ) {
      str += 'I'; // handle error '1'
    } else {
      str += string[i]; // otherwise, add current character
    }
  }
  
  // return corrected string
  return str;
}