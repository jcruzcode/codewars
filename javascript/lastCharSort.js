// 7 kyu - Sort by Last Char
const last = x => x.split(' ').sort(compareChars);

function compareChars(a,b) {
  if ( a[a.length - 1] < b[b.length - 1] ) {
    return -1;
  } else if ( a[a.length - 1] > b[b.length - 1]) {
    return 1;
  } else {
    return 0;
  }
}

/*
First version

function last(x) {
  let words = x.split(' ');
  words.sort((a, b) => {
    if ( a[a.length - 1] < b[b.length - 1] ) {
      return -1;
    } else if ( a[a.length - 1] > b[b.length - 1]) {
      return 1;
    } else {
      return 0;
    }
  });

  return words;
}
*/