// 6 kyu - Duplicate Arguments
function solution(...input) {
    let items = input;
    let itemCounts = {};

    for (let item of items) {
        if (typeof item === 'string') {
            item = item + '*';
        }
        itemCounts[item] ? itemCounts[item] += 1 : itemCounts[item] = 1;
    }

    for (let key in itemCounts) {
        if (itemCounts[key] > 1) {
            return true;
        }
    }

    return false;
}