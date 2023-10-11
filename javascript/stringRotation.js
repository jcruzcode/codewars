// 6 kyu - Calculate String Rotation
function shiftedDiff(first,second){
    let shifted = first;
    let rotations = 0;
    let chars = []

    if ( shifted === second ) {
        return 0;
    }

    while ( shifted !== second ) {
        if ( rotations === second.length ) {
            break;
        }

        rotations++
        chars = shifted.split('');
        chars.unshift(chars.pop());
        shifted = chars.join('');
    }

    return shifted !== second ? -1 : rotations;

}