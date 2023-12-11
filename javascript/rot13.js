// Rot13 (5 kyu)
function rot13(message) {
  const alpha = 'abcdefghijklmnopqrstuvwxyz';
  const upper = alpha.toUpperCase();
  const chars = message.split('');
  let index, next;

  for (let i = 0; i < chars.length; i++) {
    if (alpha.includes(chars[i])) {
      index = alpha.indexOf(chars[i]);
      next = nextIndex(index);
      chars[i] = alpha[next];
    } else if (upper.includes(chars[i])) {
      index = upper.indexOf(chars[i]);
      next = nextIndex(index);
      chars[i] = upper[next];
    }
  }

  return chars.join('')
}

function nextIndex(num) {
  const LETTERS = 26;
  let index = num + 13;

  if (index > 25) {
    index = index - LETTERS;
  }

  return index;
}
console.log(rot13("Te@st"));