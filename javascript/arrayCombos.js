// 6 kyu - Array combinations
function solve(arr) {
    let temp;
    let count = 1;

    for (let i = 0; i < arr.length; i++) {
        temp = new Set(arr[i]);
        count *= temp.size;
    }

    return count;
}