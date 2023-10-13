// 6 kyu - Rotate Array (JS)
function rotate(array, n) {
    let copy = array.slice();

    if ( n === 0 ) {
        return copy;
    } else if ( n > 0 ) {
        
        for ( let i = 1; i <= n; i++ ) {
            copy.unshift(copy.pop());
        }

        return copy;

    } else {

        for ( let i = n; i < 0; i++ ) {
            copy.push(copy.shift());
        }

        return copy;
    }
}