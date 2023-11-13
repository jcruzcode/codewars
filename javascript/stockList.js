// Help the bookseller! (6 kyu)
function stockList(listOfArt, listOfCat) {
    let data, letter;
    let zeroCount = 0;
    let inventory = [];
    const counter = {};

    for (let cat of listOfCat) {
        for (let art of listOfArt) {
            if (art[0] === cat) {

                data = art.split(' ');
                letter = data[0][0];
                counter[letter] ? counter[letter] += Number(data[1]) : counter[letter] = Number(data[1]);

            }
        }

        if (!(cat in counter)) {
            counter[cat] = 0;
        }
    }

    for (let item in counter) {
        inventory.push(`(${item} : ${counter[item]})`);

        if (counter[item] == 0) zeroCount++;
    }

    if (Object.keys(counter).length === zeroCount) return '';

    return inventory.join(' - ');

}