// Length of missing array (6 kyu)
function getLengthOfMissingArray(arrayOfArrays) {
    if (arrayOfArrays === null || arrayOfArrays.length === 0) return 0;

    for (let arr of arrayOfArrays) {
        if (arr === null || arr.length === 0) return 0;

    }

    const lengths = arrayOfArrays.map(x => x.length).sort((a, b) => a - b);
    let tmp = lengths[0] + 1;

    for (let i = 1; i < lengths.length; i++) {
        if (tmp !== lengths[i]) return tmp;
        tmp++;
    }

}

console.log(getLengthOfMissingArray([[1, 2], [4, 5, 1, 1], [1], [5, 6, 7, 8, 9]]));