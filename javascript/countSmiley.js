/* 6 kyu - Count the smiley faces! */
function countSmileys(arr) {
    let count = 0;

    if (arr.length === 0) {
        return 0;
    }

    for ( let i = 0; i < arr.length; i++ ) {
      if (arr[i] === ':)' || arr[i] === ':D'|| arr[i] === ';-D' || arr[i] === ':~)' || arr[i] === ';)' || arr[i] === ';D' || arr[i] === ':-)' || arr[i] === ':-D' || arr[i] === ':~D' || arr[i] === ';-)' || arr[i] === ';~)' || arr[i] === ';~D') {
        
        count++;
      }
    }
    
    return count;
}

//console.log(countSmileys([]                             ));
//console.log(countSmileys([':D',':~)',';~D',':)']));
//console.log(countSmileys([':)',':(',':D',':O',':;']     ));
console.log(countSmileys([';]', ':[', ';*', ':$', ';-D']));