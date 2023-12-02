// Counting Sheep... (8 kyu)
function countSheeps(sheep) {
    let count = 0;

    for (let item of sheep) {
        if (item === true) count++;
    }

    return count;
}