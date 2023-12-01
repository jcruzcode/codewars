// Odd or Even? (7 kyu)
function oddOrEven(array) {
    if (array.length === 0 ||
        (array.length === 1 && array[0] === 0))
        return 'even';

    const sum = array.reduce((acc, val) => acc + val, 0);

    if (sum % 2 === 0) {
        return 'even';
    } else {
        return 'odd';
    }

}