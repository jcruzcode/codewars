// Where is my parent!?(cry) (6 kyu)
function findChildren(dancingBrigade) {
    let letters = dancingBrigade.toLowerCase().split('').sort();
    const set = new Set(letters);
    let str = letters.join('');

    for (let item of set) {
        str = str.replace(item, item.toUpperCase());
    }

    return str;
}